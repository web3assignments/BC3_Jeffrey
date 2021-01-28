import React, { Component } from 'react'
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
      var Web3 = require('web3');
      var web3 = new Web3();

      var i = 0;
      var find = "f4eb7";
      var findlength_plus2=find.length+2;
      var prefix;

      do {
        var newAddress=web3.eth.accounts.create();
        prefix=newAddress.address.slice(2, findlength_plus2).toLowerCase();
        if(++i % 1000 === 0) console.log(i);
      } while (prefix !== find);
      console.log(`found an address with prefix ${prefix}`);
      console.log(`address=${newAddress.address}`);
      console.log(`privateKey=${newAddress.privateKey}`);

      this.setState({vanityAddress: newAddress.address})
  }

  render() {
    return (
      <div className="container-fluid">
        <header className="masthead">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Welcome to the Match of the chainuries</h1>
                  <span className="subheading">Start your fight by naming your GLADIATOR</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Match></Match>
      </div>
    );
  }
}

export default App;