pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CGCoin is ERC20 {
    constructor ()
        ERC20("CGCoin", "CGC")
        public
    {
        
    }
}