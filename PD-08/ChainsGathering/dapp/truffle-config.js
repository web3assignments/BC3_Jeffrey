const { pathExists } = require('fs-extra');
const PrivateKeyProvider = require('truffle-privatekey-provider');
var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = "three certain prepare isolate matter jungle climb spell thank crisp diesel job";

const path = require('path');
const ip = "localhost"

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "../src/contract-info"),
  networks: {
    // ganache-cli
    development: {
      host: ip ,
      port: 8545,
      network_id: '*',
    },
    // truffle develop
    develop: {
      host: ip ,
      port: 8545,
      network_id: '*',
    },
    // Ganache UI
    ganacheUI: {
      host: ip ,
      port: 8545,
      network_id: '*',
    },
    // rinkeby
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/84e023c064b1458eaedc358be5c8677a"),
      network_id: 4,
    }
  },
  compilers: { 
    solc: {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: false, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
