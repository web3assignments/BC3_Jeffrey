var contract;
var accounts;

// Function from web3examples. responsible for loading the provider.
async function asyncloaded() {
    web3 = new Web3(Web3.givenProvider); // provider from metamask      
    var result = await web3.eth.requestAccounts().catch(x => console.log(x.message));
    console.log(`web3 is present: ${web3.version}`); // note: use ` (back quote)
    const network = await web3.eth.net.getId().catch((reason) => console.log(`Cannnot find network ${reason}`));
    if (typeof network === 'undefined' || network != 4) { console.log("Please select Rinkeby test network"); return; }
    console.log("Ethereum network: Rinkeby")
    accounts = await web3.eth.getAccounts();
    console.log(accounts[0]); // show current user.
    contract = new web3.eth.Contract(contractWaifuCoin.abi, contractWaifuCoin.networks[4].contract_address);
}
window.addEventListener('load', asyncloaded);   

function mintToken() {
    contract.methods.mint(accounts[0], "http://web3examples.com/ethereum/token_examples/10.json").send({from: accounts[0]})
    .then(console.log("Minted"));
}

function getUri() {
    var uri = contract.methods.getUri().call().then(
        result => {return result}
    );
    console.log(uri);
}
