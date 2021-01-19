import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import Match from './Match.js'

class App extends Component {
  _isMounted = false;

  componentWillMount() { //deprecated
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  constructor(props) {
    super(props)
    this.state = {vanityAddress: ''};
  }

  generateVanityAddress(){
      var vanity = "";

      var Web3 = require('web3');
      var web3 = new Web3;

      var i = 0;
      var find = "f4eb7";
      var findlength_plus2=find.length+2;
      var prefix;

      do {
        var newAddress=web3.eth.accounts.create();
        prefix=newAddress.address.slice(2, findlength_plus2).toLowerCase();
        if(++i % 1000 == 0) console.log(i);
      } while (prefix != find);
      console.log(`found an address with prefix ${prefix}`);
      console.log(`address=${newAddress.address}`);
      console.log(`privateKey=${newAddress.privateKey}`);

      this.setState({vanityAddress: newAddress.address})
  }

  render() {
    return (
      <div className="container-fluid">
        <div>
          <h1>Welcome to the Match of the chainuries</h1>
        </div>
        <div>
          <h3>Generate vanity address</h3>
          <button type="button" className="btn btn-primary" onClick={() => this.generateVanityAddress()}>VANITY</button>
          <text id="generatedVanity">{this.state.vanityAddress}</text>
        </div>
        <Match></Match>
      </div>
    );
  }
}

export default App;