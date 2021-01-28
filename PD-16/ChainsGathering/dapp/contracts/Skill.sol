pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

//"SPDX-License-Identifier: UNLICENSED"
contract Skill {

    struct SkillClass {
        string skill_name;
        string description;
        uint min_skill_damage;
        uint max_skill_damage;
    }

    function increaseSkillDamage(SkillClass memory skill) public pure returns(SkillClass memory) {
        skill.min_skill_damage += 10;
        skill.max_skill_damage += 10;
        return skill;
    }

    function destroy() public {
        selfdestruct(msg.sender);
    }

    constructor() public {}

}