/// Based on https://solidity.readthedocs.io/en/develop/natspec-format.html

pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

/// @title A arena for a 1 on 1 battle
/// @author Jeffrey Lo-A-Foe
/// @notice You can use this contract for a simple one on one battle 
/// @dev All function calls are currently implemented without side effects
contract HeroesMatch2 {

string  public temp;
uint256 public priceOfUrl;
string public season;

modifier minAmount(uint _amount){ require(msg.value >= _amount, "MORE STAKE NEEDED"); _;}

    struct Match {
        HeroesClass challenger;
        HeroesClass opponent;
    }

    struct HeroesClass {
        string name;
        uint rarity;
        SkillClass skill_1;
        SkillClass skill_2;
    }

    struct SkillClass {
        string skill_name;
        string description;
        uint min_skill_damage;
        uint max_skill_damage;
    }    

    event RoundWinner(HeroesClass challenger, HeroesClass opponent, bool result) ;
    event ReceivedItem(address player, uint item);

    mapping(address => Match) public ownerToMatch;

    constructor() public payable{}

    function setSeason(string memory _season) public {
        season = _season;
    }

    function getReward(uint item) public{
        emit ReceivedItem(msg.sender, item);
    }

    /// @notice set the fighting arena and say who battles who
    /// @dev extend
    /// @param _opponent contains of name skill damage
    /// @param _challenger contains of name skill damage
    /// @return _challenger give back what character is made
    //Set the fight arena
    function initFight(HeroesClass memory _challenger, HeroesClass memory _opponent) public returns (HeroesClass memory) {
        ownerToMatch[msg.sender] = Match(_challenger,_opponent);
        return _challenger;
    }

    /// @notice calculate the winning state
    /// @dev extend
    /// @param randomNumberChallenger The numbers are random generated from the dApp
    /// @param randomNumberOpponent The numbers are random generated from the dApp
    /// @return did challenger win and how much dmg is done
    //Start the fight and determine damage.
    function beginFight(uint randomNumberChallenger, uint randomNumberOpponent) public returns (bool, uint){
        //No challenger or opponent
        require(keccak256(abi.encodePacked(ownerToMatch[msg.sender].challenger.name)) != keccak256(abi.encodePacked("")), "No challenger");
        require(keccak256(abi.encodePacked(ownerToMatch[msg.sender].opponent.name)) != keccak256(abi.encodePacked("")), "No opponent");

        bool winner = didChallengerWin(randomNumberChallenger, randomNumberOpponent);

        //Give result and the amount of damage
        if(winner) {
            return (true, ownerToMatch[msg.sender].challenger.skill_1.min_skill_damage);
        }
        else {
            return (false, ownerToMatch[msg.sender].opponent.skill_2.min_skill_damage);
        }
    }
    /// @notice announce the winner in the event log
    /// @dev extend
    /// @param randomNumberChallenger The numbers are random generated from the dApp
    /// @param randomNumberOpponent The numbers are random generated from the dApp
    /// @return did challenger win
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