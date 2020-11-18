pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

import "./Skill.sol";

contract Heroes is Skill{

    struct HeroesClass {
        string name;
        uint rarity;
        SkillClass skill_1;
        SkillClass skill_2;
    }

    constructor() public {}

}