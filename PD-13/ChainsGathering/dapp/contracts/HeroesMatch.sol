/// Based on https://solidity.readthedocs.io/en/develop/natspec-format.html

pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

import "./Heroes.sol";
import "./ProvableAPI.sol";
//import "../../node_modules/@openzeppelin/upgrades-core/contracts/Initializable.sol";
//import "../../node_modules/@openzeppelin/contracts/access/AccessControl.sol";
//import "../../node_modules/@openzeppelin/contracts/access/Ownable.sol";

import "@openzeppelin/upgrades-core/contracts/Initializable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


//"SPDX-License-Identifier: UNLICENSED"

/// @title A arena for a 1 on 1 battle
/// @author Jeffrey Lo-A-Foe
/// @notice You can use this contract for a simple one on one battle 
/// @dev All function calls are currently implemented without side effects
contract HeroesMatch is usingProvable, Initializable, AccessControl, Ownable{

    Heroes public deployed;
    string  public temp;
    uint256 public priceOfUrl;
    string public season;

    bytes32 public constant CHAMPION_ROLE = keccak256("CHAMPION");
    bytes32 public constant LOSER_ROLE = keccak256("LOSER");

    modifier minAmount(uint _amount){ require(msg.value >= _amount, "MORE STAKE NEEDED"); _;}

    struct Match {
        Heroes.HeroesClass challenger;
        Heroes.HeroesClass opponent;
    }

    event RoundWinner(Heroes.HeroesClass challenger, Heroes.HeroesClass opponent, bool result) ;
    event ReceivedItem(address player, uint item);

    mapping(address => Match) public ownerToMatch;

    constructor() public Ownable() payable{}

    function __callback(bytes32 /* myid prevent warning*/ , string memory result ) override public {
        if (msg.sender != provable_cbAddress()) revert();
        temp = result;
    }

    function initialize(string memory _season) public initializer {
        season = _season;
    }

    function setSeason(string memory _season) public {
        season = _season;
    }

    function destroyHero() public onlyOwner{
        deployed.destroy();
        deployed = Heroes(address(0));
    }

    function deployHero() public onlyOwner returns (Heroes) {
        deployed = new Heroes{salt: 0x00}();
        return deployed;
    }

    /// @notice Weather for some fight variation
    /// @dev extend
    function getTemp() public payable minAmount(0.02 ether){
        priceOfUrl = provable_getPrice("URL");
        require (address(this).balance >= priceOfUrl,
                "please add some ETH to cover for the query fee");
        provable_query("URL",
                "json(http://weerlive.nl/api/json-data-10min.php?key=e9516d6c0a&locatie=DenHaag).liveweer[0].temp");
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
    function initFight(Heroes.HeroesClass memory _challenger, Heroes.HeroesClass memory _opponent) public returns (Heroes.HeroesClass memory) {
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
            _setupRole(CHAMPION_ROLE, msg.sender);
            return true;
        }
        else {
            emit RoundWinner(ownerToMatch[msg.sender].challenger, ownerToMatch[msg.sender].opponent, false);
            _setupRole(LOSER_ROLE, msg.sender);
            return false;
        }
    }

    function showYourPresence() public view returns (string memory) {
        require(hasRole(CHAMPION_ROLE,msg.sender), "You're not the champion and cannot intimidate the arena");
        return "BOW TO YOUR CHAMPION HOEHA!";
    }

}