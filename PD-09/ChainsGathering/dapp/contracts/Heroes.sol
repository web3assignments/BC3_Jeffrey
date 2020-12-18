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

    function increaseRarity(HeroesClass memory hero) public returns (HeroesClass memory) {
        hero.rarity += 1;
        return hero;
    }

    function changeSkill(uint number, SkillClass memory skill, HeroesClass memory hero) public returns (HeroesClass memory) {
        if(number > 1){
            hero.skill_2 = skill;
        }
        else{
            hero.skill_1 = skill;
        }
        return hero;
    }

    function destroySkill(Skill SC) public{
        SC.destroy();
    }

    constructor() public {}

}