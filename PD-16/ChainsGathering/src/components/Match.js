import React, { Component } from 'react';
import Web3 from 'web3';

var weather = 20;
var weatherBonus = 0;
var accounts;

async function initAccounts() {
    accounts = await window.web3.eth.getAccounts();
}

const ethEnabled = () => {
    if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        initAccounts();
        return true;
    }
    return false;
}

export default class Match extends Component {
    constructor(props) {
        super(props)
        console.log("Metamask is " + ethEnabled());
        this.setWeather();
    }

    async setWeather() {
        let contract = await this.getContract();        
        
        weather = await contract.methods.temp().call()
        .then(result => {return result})
        .catch(err => console.log(err));

        document.getElementById('temperature').innerHTML = weather;

        this.weatherStatus();
    }

    weatherStatus() {
        if(weather < 10) {
            weatherBonus = -5;
            document.getElementById('fight-weather').innerHTML = "It's a cold day, your gladiator suffers from the cold";
        }
        else if(weather > 20) {
            weatherBonus = 5;
            document.getElementById('fight-weather').innerHTML = "It's a warm day, your gladiator feels amazing";
        }
        else {
            weatherBonus = 0;
            document.getElementById('fight-weather').innerHTML = "It's just a normal day, your gladiator feels normal";
        }
    }

    async getContract() {
        var web3 = window.web3;
        var contractInfo = require('../contract-info/HeroesMatch.json');
        var address;
        await web3.eth.ens.getAddress("jugemmujugem.eth").then(result => {
            address = result;
        });
        try {
            var MyIdoContract = new web3.eth.Contract(
                contractInfo.abi,
                address
            );            
            return MyIdoContract;
        }
        catch (error) {
            console.log("error " + error);
        }
    }

    async eliminateHero() {
        let contract = await this.getContract();
        await contract.methods.destroyHero().send({ from:accounts[0] }).catch(err => console.log(err));
    }

    async reviveHero() {
        let contract = await this.getContract();
        await contract.methods.deployHero().send({ from:accounts[0] }).catch(err => console.log(err));
    }    

    async getMapTemp() {

        let contract = await this.getContract();

        let getTemp = await contract.methods.getTemp().send({ from:accounts[0] })
        .then(result => {return result})
        .catch(err => console.log(err));
        console.log(getTemp);

        let getResult = await contract.methods.temp().call()
        .then(result => {return result})
        .catch(err => console.log(err));
        
        document.getElementById('temperature').innerHTML = getResult;
        
    }

    async beginFight(){
        let contract = await this.getContract();
        var web3 = window.web3;
        var accounts = await web3.eth.getAccounts();

        var heroName = document.getElementById('hero').value;
        var challengerName = document.getElementById('challenge').value;

        let hero = {
            name: heroName,
            rarity: 1,
            skill_1: {
                skill_name:"basic_skill1",
                description:"first basic skill",
                min_skill_damage: 10,
                max_skill_damage: 20
            },
            skill_2: {
                skill_name:"basic_skill2",
                description:"second basic skill",
                min_skill_damage: 10,
                max_skill_damage: 20
            }            
        }

        let challenger = {
            name: challengerName,
            rarity: 2,
            skill_1: {
                skill_name:"basic_skill1",
                description:"first basic skill",
                min_skill_damage:5,
                max_skill_damage:10
            },
            skill_2: {
                skill_name:"basic_skill2",
                description:"second basic skill",
                min_skill_damage:5,
                max_skill_damage:10
            }            
        }

        let heroScore = Math.floor(Math.random() * 20) + weatherBonus;
        let challengerScore = Math.floor(Math.random() * 20);

        let estimateGas = await contract.methods.initFight(hero, challenger).estimateGas({ from:accounts[0]});
        let contractstuff = await contract.methods.initFight(hero, challenger).send({ from:accounts[0], gas:estimateGas});
        document.getElementById('winner').innerText = "THE FIGHT HAS BEGAN PAY YOUR FEE";
        let winnerLog = await contract.methods.beginFight(heroScore,challengerScore).send({from:accounts[0]});

        var returnValue = winnerLog.events.RoundWinner.returnValues;
        let resultFight = 'LOST';

        if(winnerLog.events.RoundWinner.returnValues.result){
            resultFight = 'WON';
        }
        document.getElementById('winner').innerText = `YOUR CHALLENGER (${returnValue.challenger.name}) ${resultFight} VS ${returnValue.opponent.name}`;
        
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        <div className="form-group row">
                            <label htmlFor="hero" className="col-sm-2 col-form-label">Gladiator</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="input" id="hero" placeholder="fill name"></input>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h2>VS</h2>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group row">
                            <label htmlFor="challenge"className="col-sm-2 col-form-label">Challengers</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="input" id="challenge" placeholder="fill name"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <button type="button" className="btn btn-primary" onClick={() => this.beginFight()}>CHALLENGES</button>
                    </div>
                    <div className="col-md-8">
                        <p id="fight-weather"></p>
                    </div>                    
                </div>
                <div>
                    <div id="winner"></div>
                </div>
            </div>
        )
    };

}