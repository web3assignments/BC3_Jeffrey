WIP:

This project is migrated with node and the truffle functions can be used with npm.
The commands are located in the package.json file under the scripts variable.

To migrate the contract to rinkeby
``
npm run migrate_rinkeby / cd dapp && truffle migrate --network rinkeby
``

To migrate to localhost
``
npm run migrate / cd dapp && truffle migrate
``

Run the ganache-cli
``
npm run ganache-m / ganache-cli -m 'alpha unfold penalty man day repeat park top film weekend combine lion'
``
The above mnemonic is a self thought sentence and is to always get the same addresses or ganache-cli


run the website
``
npm start / react-scripts start
``

Run the website and set the network variable to rinkeby
``
npm run start_rinkeby / REACT_APP_ETH_NETWORK=rinkeby react-scripts start
``
