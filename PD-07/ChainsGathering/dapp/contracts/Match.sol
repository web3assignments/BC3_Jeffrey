pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

import "./Heroes.sol";
import "github.com/smartcontractkit/chainlink/evm-contracts/src/v0.6/VRFConsumerBase.sol";

contract HeroesMatch is VRFConsumerBase{

    bytes32 internal keyHash;
    uint256 internal fee;
    uint256 public result;

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

    mapping(address => Match) public ownerToMatch;

    constructor() 
            VRFConsumerBase(
            0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9, // VRF Coordinator https://docs.chain.link/docs/vrf-contracts#kovan
            0xa36085F69e2889c224210F603D836748e7dC0088  // LINK Token
        ) public {
            keyHash = 0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4;
            fee = 0.1 * 10 ** 18; // 0.1 LINK
    }

    function CheckBalance() public view returns (uint) {
      return LINK.balanceOf(address(this));
    }
    function fulfillRandomness(bytes32 /*requestId*/, uint256 randomness) internal override {
        result = randomness;
    }
    function getRandomNumber(uint256 userProvidedSeed) public returns (bytes32 requestId) {
        require (CheckBalance() >= fee,"Not enough LINK Tokens in contract");
        return requestRandomness(keyHash, fee, userProvidedSeed);
    }

    //Set the fight arena
    function initFight(HeroesClass memory _challenger, HeroesClass memory _opponent) public returns (HeroesClass memory) {
        ownerToMatch[msg.sender] = Match(_challenger,_opponent);
        return _challenger;
    }

    function test() public returns (string memory){
        return "successfull test";
    }

    //Start the fight and determine damage.
    function beginFight() public returns (bool, uint){
        //No challenger or opponent
        require(keccak256(abi.encodePacked(ownerToMatch[msg.sender].challenger.name)) != keccak256(abi.encodePacked("")), "No challenger");
        require(keccak256(abi.encodePacked(ownerToMatch[msg.sender].opponent.name)) != keccak256(abi.encodePacked("")), "No opponent");

        //Determine winner
        uint numberChallenger = this.getRandomNumber(msg.sender);
        uint numberOpponent = this.getRandomNumber(msg.sender);

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