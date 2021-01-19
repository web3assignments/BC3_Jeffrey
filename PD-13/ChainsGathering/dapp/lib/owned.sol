pragma solidity ^0.6.0;

//"SPDX-License-Identifier: UNLICENSED"
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
