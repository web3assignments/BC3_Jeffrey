pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/HeroesMatch.sol";

//SPDX-License-Identifier: UNLICENSED
contract TestHeroesMatch {

    HeroesMatch matchContract;

    function beforeEach() public {
        matchContract = HeroesMatch(DeployedAddresses.HeroesMatch());
    }

    function testSeason() public {
        string memory expected = "summer";
        matchContract.setSeason("summer");
        string memory season = matchContract.season();
        Assert.equal(season, expected, "Wrong season");
    }

    function testInitFight() public {
        HeroesMatch myMatch = HeroesMatch(DeployedAddresses.HeroesMatch());

        string memory expected = "Hero";

        Heroes.HeroesClass memory challenger = Heroes.HeroesClass({
            name:"Hero",
            rarity: 2,
            skill_1: Skill.SkillClass({
                skill_name:"basic_skill1",
                description:"first basic skill",
                min_skill_damage: 10,
                max_skill_damage: 20
            }),
            skill_2: Skill.SkillClass({
                skill_name:"basic_skill2",
                description:"second basic skill",
                min_skill_damage: 10,
                max_skill_damage: 20
            })          
        });

        Heroes.HeroesClass memory opponent = Heroes.HeroesClass({
            name:"Hero",
            rarity: 1,
            skill_1: Skill.SkillClass({
                skill_name:"basic_skill1",
                description:"first basic skill",
                min_skill_damage: 10,
                max_skill_damage: 20
            }),
            skill_2: Skill.SkillClass({
                skill_name:"basic_skill2",
                description:"second basic skill",
                min_skill_damage: 10,
                max_skill_damage: 20
            })
        });

        Heroes.HeroesClass memory returnedHero = myMatch.initFight(challenger, opponent);

        Assert.equal(returnedHero.name,expected,"Wrong opponent name, something went wrong");

    }

    function testHeroWin() public{
        HeroesMatch myMatch = HeroesMatch(DeployedAddresses.HeroesMatch());

        bool expectedResult = true;
        uint expectedDamageResult = 10;

        Heroes.HeroesClass memory challenger = Heroes.HeroesClass({
            name:"Hero",
            rarity: 2,
            skill_1: Skill.SkillClass({
                skill_name:"basic_skill1",
                description:"first basic skill",
                min_skill_damage: 10,
                max_skill_damage: 20
            }),
            skill_2: Skill.SkillClass({
                skill_name:"basic_skill2",
                description:"second basic skill",
                min_skill_damage: 10,
                max_skill_damage: 20
            })          
        });

        Heroes.HeroesClass memory opponent = Heroes.HeroesClass({
            name:"Hero",
            rarity: 1,
            skill_1: Skill.SkillClass({
                skill_name:"basic_skill1",
                description:"first basic skill",
                min_skill_damage: 10,
                max_skill_damage: 20
            }),
            skill_2: Skill.SkillClass({
                skill_name:"basic_skill2",
                description:"second basic skill",
                min_skill_damage: 10,
                max_skill_damage: 20
            })
        });

        Heroes.HeroesClass memory returnedHero = myMatch.initFight(challenger, opponent);
        bool returnedBoolValue;
        uint returnedDamageValue;

        (returnedBoolValue, returnedDamageValue) = myMatch.beginFight(5,1);

        Assert.equal(returnedBoolValue,expectedResult,"Wrong winner");
        Assert.equal(returnedDamageValue,expectedDamageResult,"Wrong damage count");
    }

    function testRightWinner() public {
        HeroesMatch myMatch = HeroesMatch(DeployedAddresses.HeroesMatch());

        bool expectedResult = false;

        Heroes.HeroesClass memory challenger = Heroes.HeroesClass({
            name:"Hero",
            rarity: 2,
            skill_1: Skill.SkillClass({
                skill_name:"basic_skill1",
                description:"first basic skill",
                min_skill_damage: 10,
                max_skill_damage: 20
            }),
            skill_2: Skill.SkillClass({
                skill_name:"basic_skill2",
                description:"second basic skill",
                min_skill_damage: 10,
                max_skill_damage: 20
            })          
        });

        Heroes.HeroesClass memory opponent = Heroes.HeroesClass({
            name:"Hero",
            rarity: 1,
            skill_1: Skill.SkillClass({
                skill_name:"basic_skill1",
                description:"first basic skill",
                min_skill_damage: 10,
                max_skill_damage: 20
            }),
            skill_2: Skill.SkillClass({
                skill_name:"basic_skill2",
                description:"second basic skill",
                min_skill_damage: 10,
                max_skill_damage: 20
            })
        });

        Heroes.HeroesClass memory returnedHero = myMatch.initFight(challenger, opponent);
        bool returnedBoolValue = myMatch.didChallengerWin(1,5);
        Assert.equal(returnedBoolValue,expectedResult,"Wrong winner");
    }


    function testPresence() public {
                HeroesMatch myMatch = HeroesMatch(DeployedAddresses.HeroesMatch());

        string memory expectedResult = "BOW TO YOUR CHAMPION HOEHA!";

        Heroes.HeroesClass memory challenger = Heroes.HeroesClass({
            name:"Hero",
            rarity: 2,
            skill_1: Skill.SkillClass({
                skill_name:"basic_skill1",
                description:"first basic skill",
                min_skill_damage: 10,
                max_skill_damage: 20
            }),
            skill_2: Skill.SkillClass({
                skill_name:"basic_skill2",
                description:"second basic skill",
                min_skill_damage: 10,
                max_skill_damage: 20
            })          
        });

        Heroes.HeroesClass memory opponent = Heroes.HeroesClass({
            name:"Hero",
            rarity: 1,
            skill_1: Skill.SkillClass({
                skill_name:"basic_skill1",
                description:"first basic skill",
                min_skill_damage: 10,
                max_skill_damage: 20
            }),
            skill_2: Skill.SkillClass({
                skill_name:"basic_skill2",
                description:"second basic skill",
                min_skill_damage: 10,
                max_skill_damage: 20
            })
        });

        myMatch.initFight(challenger, opponent);
        bool returnedBoolValue;
        uint returnedDamageValue;

        myMatch.beginFight(5,1);

        string memory returnedValue = myMatch.showYourPresence();

        Assert.equal(returnedValue, expectedResult, "Not a champion???");
    }

}