pragma solidity ^0.6.0;

contract owned {
    address owner;

    modifier onlyowner() {
        if (msg.sender == owner) {
            _;
        }
    }

    function owneds() public {
        owner = msg.sender;
    }
}
