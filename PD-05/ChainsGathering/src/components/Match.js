import React, { Component } from 'react';
import Web3 from 'web3';

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
        const url = new Web3.providers.HttpProvider(
            'https://rinkeby.infura.io/v3/84e023c064b1458eaedc358be5c8677a'
        );
        var web3 = new Web3(url);
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

    async beginFight(){
        let contract = await this.getContract();
        var web3 = new Web3("https://rinkeby.infura.io/v3/84e023c064b1458eaedc358be5c8677a");
        var accounts = await web3.eth.getAccounts().then(result => {return result});
        console.log(accounts);

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
            name:"name1",
            rarity: 1,
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

        let contractstuff = contract.methods.initFight(hero, challenger).send({from:"0xB74a342b3b96909247e0E138C2886a347E241255"})
        .then(result => {return result});
        console.log(contractstuff);
        console.log("test");
        let winner = await contract.methods.beginFight(2,5).send({from:"0xB74a342b3b96909247e0E138C2886a347E241255"})
        .then(result => {return result});
        console.log(winner);

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
                </div>
                <div>
                    <div id="winner"></div>
                </div>
            </div>
        )
    };

}