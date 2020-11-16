pragma solidity ^0.6.0;

//https://docs.openzeppelin.com/contracts/3.x/erc721
//npm install @openzeppelin/contracts
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ChainsGathering is ERC721{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Characters", "HERO") public {

    }

    function spawnHero(address player, string memory tokenURI)
    public
    returns (uint256){
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

}