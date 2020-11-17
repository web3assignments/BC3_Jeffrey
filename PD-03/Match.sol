pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

contract HeroesMatch {

    struct Skill {
        string skill_name;
        string description;
        uint min_skill_damage;
        uint max_skill_damage;
    }

    struct Heroes {
        string name;
        uint rarity;
        Skill skill_1;
        Skill skill_2;
    }

    struct Match {
        Heroes challenger;
        Heroes opponent;
    }

    event RoundWinner(Heroes challenger, Heroes opponent, bool result) ;

    mapping(address => Match) public ownerToMatch;

    constructor() public {}

    //Set the fight arena
    function initFight(Heroes memory _challenger, Heroes memory _opponent) public {
        ownerToMatch[msg.sender] = Match(_challenger,_opponent);
    }

    //Start the fight and determine damage.
    function beginFight(uint randomNumberChallenger, uint randomNumberOpponent) public returns (bool, uint){
        //No challenger or opponent
        require(keccak256(abi.encodePacked(ownerToMatch[msg.sender].challenger.name)) != keccak256(abi.encodePacked("")), "No challenger");
        require(keccak256(abi.encodePacked(ownerToMatch[msg.sender].opponent.name)) != keccak256(abi.encodePacked("")), "No opponent");

        //Determine winner
        bool winner = didChallengerWin(randomNumberChallenger, randomNumberOpponent);

        //Give result and the amount of damage
        if(winner) {
            return (true, ownerToMatch[msg.sender].challenger.skill_1.min_skill_damage);
        }
        else {
            return (false, ownerToMatch[msg.sender].opponent.skill_2.min_skill_damage);
        }   
    }

    //Determine who wins the fight
    function didChallengerWin(uint randomNumberChallenger, uint randomNumberOpponent) public returns(bool) {
        if(randomNumberChallenger > randomNumberOpponent) {
            emit RoundWinner(ownerToMatch[msg.sender].challenger, ownerToMatch[msg.sender].opponent, true);
            return true;
        }
        else {
            emit RoundWinner(ownerToMatch[msg.sender].challenger, ownerToMatch[msg.sender].opponent, false);
            return false;
        }
    }
}