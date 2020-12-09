import React, { Component } from 'react';
import Web3 from 'web3';

var HDWallet = require('@truffle/hdwallet-provider');

const ethEnabled = () => {
    if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        return true;
    }
    return false;
}

export default class Match extends Component {
    constructor(props) {
        super(props)
        console.log(ethEnabled());
    }

    async getContract() {
        var web3 = new Web3(new HDWallet('a334aabbb78c2d2e0730f033bab0d336eae8ee70c183872c3407f3483a997491', "https://rinkeby.infura.io/v3/84e023c064b1458eaedc358be5c8677a"))
        //var web3 = window.web3;
        var contractInfo = require('../contract-info/HeroesMatch.json');
        try {
            const networkId = await web3.eth.net.getId();
            var MyIdoContract = new web3.eth.Contract(
                contractInfo.abi,
                contractInfo.networks[networkId].address
            );
            return MyIdoContract;
        }
        catch (error) {
            console.log("error " + error);
        }
    }

    async testContract() {
        let contract = await this.getContract();
              
        let contractstuff = await contract.methods.test().send({ from:"0xB74a342b3b96909247e0E138C2886a347E241255"})
        .then(result => {return result});
        console.log(contractstuff);    

    }

    async beginFight(){
        let contract = await this.getContract();
        var web3 = window.web3;
        var accounts = await web3.eth.getAccounts();

        let hero = {
            name:"name1",
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
            name:"name2",
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

        let estimateGas = await contract.methods.initFight(hero, challenger).estimateGas({ from:accounts[0]});
        let contractstuff = await contract.methods.initFight(hero, challenger).send({ from:accounts[0], gas:estimateGas});
        console.log(contractstuff);
        let winnerLog = await contract.methods.beginFight().send({from:accounts[0]});
        console.log(winnerLog);
        

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        <div className="form-group row">
                            <label htmlFor="hero" className="col-sm-2 col-form-label">Hero</label>
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
                            <label htmlFor="challenge"className="col-sm-2 col-form-label">Challenger</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="input" id="challenge" placeholder="fill name"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" className="btn btn-primary" onClick={() => this.beginFight()}>CHALLENGE</button>
                    <button type="button" className="btn btn-primary" onClick={() => this.testContract()}>TEST</button>
                </div>
                <div>
                    <div id="winner"></div>
                </div>
            </div>
        )
    };

}