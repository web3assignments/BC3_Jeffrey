pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

contract Skill {

    struct SkillClass {
        string skill_name;
        string description;
        uint min_skill_damage;
        uint max_skill_damage;
    }

    function increaseSkillDamage(SkillClass memory skill) public returns(SkillClass memory) {
        skill.min_skill_damage += 10;
        skill.max_skill_damage += 10;
        return skill;
    }

    constructor() public {}

}