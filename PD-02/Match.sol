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
        string rarity;
        Skill skill_1;
        Skill skill_2;
    }

    Heroes challenger;
    Heroes opponent;

    constructor() public {

    }

    //Set the fight arena
    function initFight(Heroes memory _challenger, Heroes memory _opponent) public {
        challenger = _challenger;
        opponent = _opponent;        
    }

    //Start the fight and determine damage.
    function beginFight(uint randomNumberChallenger, uint randomNumberOpponent) public view returns (string memory, uint){
        //No challenger or opponent
        require(keccak256(abi.encodePacked(challenger.name)) != "", "No challenger");
        require(keccak256(abi.encodePacked(opponent.name)) != "", "No opponent");

        //Determine winner
        string memory winner = winnerOfFight(randomNumberChallenger, randomNumberOpponent);

        //Give result and the amount of damage
        if(keccak256(abi.encodePacked(winner)) == keccak256(abi.encodePacked(challenger.name))) {
            return ("Challenger won and did some damage", challenger.skill_1.min_skill_damage);
        }
        else if(keccak256(abi.encodePacked(winner)) == keccak256(abi.encodePacked(opponent.name))) {
            return ("Challenger lost and received some damage", opponent.skill_2.min_skill_damage);
        }
        
    }

    //Determine who wins the fight
    function winnerOfFight(uint randomNumberChallenger, uint randomNumberOpponent) public view returns(string memory) {
        if(randomNumberChallenger > randomNumberOpponent) {
            return challenger.name;
        }
        else if (randomNumberChallenger < randomNumberOpponent) {
            return opponent.name;
        }
        else {
            return "TIE";
        }
    }
}