pragma solidity ^0.6.0;

import "./owned.sol";

//"SPDX-License-Identifier: UNLICENSED"
contract mortal is owned {
    function kill() public {
        address payable wallet = payable(address(owner));
        if (msg.sender == owner)
            selfdestruct(wallet);
    }
}
