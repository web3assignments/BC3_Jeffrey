pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CGWaifuCoin is ERC721 {

    uint256 tokenNumber;

    constructor ()
        ERC721("CGWaifuCoin", "CGWC")
        public{
            tokenNumber = 0;
        }

    function mint(address to, string memory tokenUri) public {
        _mint(to, tokenNumber);
        _setTokenURI(tokenNumber, tokenUri);
        tokenNumber++;
    }

    function getUri(uint256 tokenId) public view returns(string memory) {
        return tokenURI(tokenId);
    }
}