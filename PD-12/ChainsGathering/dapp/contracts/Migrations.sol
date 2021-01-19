pragma solidity >=0.4.21 < 0.7.0;

import "../lib/mortal.sol";

//"SPDX-License-Identifier: UNLICENSED"
contract Migrations is mortal {
  address payable public owners;
  uint public last_completed_migration;

  modifier restricted() {
    if (msg.sender == owners) _;
  }

  constructor() public {
    owner = msg.sender;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }

  function upgrade(address new_address) public restricted {
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }
}