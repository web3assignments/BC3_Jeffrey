var contractWaifuCoin = {
  "contractName": "CGWaifuCoin",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "baseURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "tokenUri",
          "type": "string"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getUri",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getUri\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"tokenUri\",\"type\":\"string\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"baseURI()\":{\"details\":\"Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/jeffrey/token/inleveren/BC3_Jeffrey/PD-10/contracts/CGWaifuCoin.sol\":\"CGWaifuCoin\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/jeffrey/token/inleveren/BC3_Jeffrey/PD-10/contracts/CGWaifuCoin.sol\":{\"keccak256\":\"0x4c3b1e6b9631913219cf85f90e3c93a948908f29cd97b9e812e0d0080184710e\",\"urls\":[\"bzz-raw://72c695fb89522aa72e936045dcd22a86cc904e7b5c950956136e678f372a0373\",\"dweb:/ipfs/QmZ21R1R6AG4WnzpDLPjZL2V5SRiAA9XgsCNbEdBoZ58S2\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0x8d3cb350f04ff49cfb10aef08d87f19dcbaecc8027b0bed12f3275cd12f38cf0\",\"urls\":[\"bzz-raw://ded47ec7c96750f9bd04bbbc84f659992d4ba901cb7b532a52cd468272cf378f\",\"dweb:/ipfs/QmfBrGtQP7rZEqEg6Wz6jh2N2Kukpj1z5v3CGWmAqrzm96\"]},\"@openzeppelin/contracts/introspection/ERC165.sol\":{\"keccak256\":\"0xd6b90e604fb2eb2d641c7110c72440bf2dc999ec6ab8ff60f200e71ca75d1d90\",\"urls\":[\"bzz-raw://7b92d8ab83b21ff984b1f0d6d66897d5afb1f2052004cbcb133cea023e0ae468\",\"dweb:/ipfs/QmTarypkQrFp4UMjTh7Zzhz2nZLz5uPS4nJQtHDEuwBVe6\"]},\"@openzeppelin/contracts/introspection/IERC165.sol\":{\"keccak256\":\"0xf70bc25d981e4ec9673a995ad2995d5d493ea188d3d8f388bba9c227ce09fb82\",\"urls\":[\"bzz-raw://bd970f51e3a77790c2f02b5b1759827c3b897c3d98c407b3631e8af32e3dc93c\",\"dweb:/ipfs/QmPF85Amgbqjk3SNZKsPCsqCw8JfwYEPMnnhvMJUyX58je\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x3b21f2c8d626de3b9925ae33e972d8bf5c8b1bffb3f4ee94daeed7d0679036e6\",\"urls\":[\"bzz-raw://7f8d45329fecbf0836ad7543330c3ecd0f8d0ffa42d4016278c3eb2215fdcdfe\",\"dweb:/ipfs/QmXWLT7GcnHtA5NiD6MFi2CV3EWJY4wv5mLNnypqYDrxL3\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x5a3de7f7f76e47a071195cf42e2a702265694a6b32037de709463bd8ad784fb5\",\"urls\":[\"bzz-raw://678cbad1f972a4d8c9d47bc39fa6d39560b4fc143c8d9c812a63fe99bb13062e\",\"dweb:/ipfs/QmUhLDvUndcbQLakDNg9G4UXz8UPzRqC6S3rWGKupB6DYs\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x5a9f5c29bd7cf0b345e14d97d5f685f68c07e1e5bfdd47e5bcec045e81b0b6ac\",\"urls\":[\"bzz-raw://321cbaa1412fc8d013d8ad3fb5f98c0db7401ddacfb09b70828ea2cebe37397e\",\"dweb:/ipfs/Qmd3Hoc71w6rmxAR6A5VKW9at677VP1L5KDcJnyvu4ksu3\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol\":{\"keccak256\":\"0xe6bd1b1218338b6f9fe17776f48623b4ac3d8a40405f74a44bc23c00abe2ca13\",\"urls\":[\"bzz-raw://0c354c3f6e9c487759aa7869be4fba68e0b2efc777b514d289c4cbd3ff8f7e1a\",\"dweb:/ipfs/QmdF9LcSYVmiUCL7JxLEYmSLrjga6zJsujfi6sgEJD4M1z\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\":{\"keccak256\":\"0xccb917776f826ac6b68bd5a15a5f711e3967848a52ba11e6104d9a4f593314a7\",\"urls\":[\"bzz-raw://430255ad2229ced6d880e61a67bdc6e48dbbaed8354a7c1fe918cd8b8714a886\",\"dweb:/ipfs/QmTHY56odzqEpEC6v6tafaWMYY7vmULw25q5XHJLCCAeox\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x52146049d6709c870e8ddcd988b5155cb6c5d640cfcd8978aee52bc1ba2ec4eb\",\"urls\":[\"bzz-raw://ada84513617b7c1b2f890b44503735abaec73a1acd030112a17aac7e6c66a4a1\",\"dweb:/ipfs/QmaiFwdio67iJrfjAdkMac24eJ5sS1qD7CZW6PhUU6KjiK\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6a15ddddcbf29d2922a1e0d4151b5d2d33da24b93cc9ebc12390e0d855532f8\",\"urls\":[\"bzz-raw://7c119bcaecfa853d564ac88d312777f75fa1126a3bca88a3371adb0ad9f35cb0\",\"dweb:/ipfs/QmY9UPuXeSKq86Zh38fE43VGQPhKMN34mkuFSFqPcr6nvZ\"]},\"@openzeppelin/contracts/utils/EnumerableMap.sol\":{\"keccak256\":\"0xf6bdf22fe038e5310b6f0372ecd01f221e2c0b248b45efc404542d94fcac9133\",\"urls\":[\"bzz-raw://6e798f3492180627d6616fa94925b61a9f105347eed9e895f3e18a0eb3dfcd3d\",\"dweb:/ipfs/QmQcTro5nv3Lopf4c4rEe1BuykCfPsjRsJmysdNXtHNUdt\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0xae0992eb1ec30fd1ecdf2e04a6036decfc9797bf11dc1ec84b546b74318d5ec2\",\"urls\":[\"bzz-raw://3b61f99a64e999682ad7bfbb3a1c762a20a0a5b30f9f2011693fa857969af61f\",\"dweb:/ipfs/QmZystFY76wkWCf7V3yKh3buZuKVKbswiE7y6yU62kk3zi\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x16b5422892fbdd9648f12e59de85b42efd57d76b6d6b2358cb46e0f6d4a71aaf\",\"urls\":[\"bzz-raw://4ef38821a4ee756757dc1ce9074ef6096d1b5c760627e92c0852d788dc636ea7\",\"dweb:/ipfs/QmdGwP6BtRMcp4VVJUWwTmXEjYmL52A8WZpBdFJYmzc9pJ\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280600b81526020017f43475761696675436f696e0000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4347574300000000000000000000000000000000000000000000000000000000815250620000966301ffc9a760e01b6200012060201b60201c565b8160069080519060200190620000ae92919062000229565b508060079080519060200190620000c792919062000229565b50620000e06380ac58cd60e01b6200012060201b60201c565b620000f8635b5e139f60e01b6200012060201b60201c565b6200011063780e9d6360e01b6200012060201b60201c565b50506000600a81905550620002d8565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620001bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200026c57805160ff19168380011785556200029d565b828001600101855582156200029d579182015b828111156200029c5782518255916020019190600101906200027f565b5b509050620002ac9190620002b0565b5090565b620002d591905b80821115620002d1576000816000905550600101620002b7565b5090565b90565b612cae80620002e86000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80636352211e116100ad578063b88d4fde11610071578063b88d4fde14610684578063c87b56dd14610789578063d0def52114610830578063da0544aa1461090b578063e985e9c5146109b257610121565b80636352211e146104685780636c0360eb146104d657806370a082311461055957806395d89b41146105b1578063a22cb4651461063457610121565b806318160ddd116100f457806318160ddd146102ca57806323b872dd146102e85780632f745c591461035657806342842e0e146103b85780634f6ccce71461042657610121565b806301ffc9a71461012657806306fdde031461018b578063081812fc1461020e578063095ea7b31461027c575b600080fd5b6101716004803603602081101561013c57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610a2e565b604051808215151515815260200191505060405180910390f35b610193610a95565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101d35780820151818401526020810190506101b8565b50505050905090810190601f1680156102005780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61023a6004803603602081101561022457600080fd5b8101908080359060200190929190505050610b37565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102c86004803603604081101561029257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bd2565b005b6102d2610d16565b6040518082815260200191505060405180910390f35b610354600480360360608110156102fe57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d27565b005b6103a26004803603604081101561036c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d9d565b6040518082815260200191505060405180910390f35b610424600480360360608110156103ce57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610df8565b005b6104526004803603602081101561043c57600080fd5b8101908080359060200190929190505050610e18565b6040518082815260200191505060405180910390f35b6104946004803603602081101561047e57600080fd5b8101908080359060200190929190505050610e3b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104de610e72565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561051e578082015181840152602081019050610503565b50505050905090810190601f16801561054b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61059b6004803603602081101561056f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f14565b6040518082815260200191505060405180910390f35b6105b9610fe9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105f95780820151818401526020810190506105de565b50505050905090810190601f1680156106265780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106826004803603604081101561064a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080351515906020019092919050505061108b565b005b6107876004803603608081101561069a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561070157600080fd5b82018360208201111561071357600080fd5b8035906020019184600183028401116401000000008311171561073557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611243565b005b6107b56004803603602081101561079f57600080fd5b81019080803590602001909291905050506112bb565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107f55780820151818401526020810190506107da565b50505050905090810190601f1680156108225780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6109096004803603604081101561084657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561088357600080fd5b82018360208201111561089557600080fd5b803590602001918460018302840111640100000000831117156108b757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506115a4565b005b6109376004803603602081101561092157600080fd5b81019080803590602001909291905050506115d2565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561097757808201518184015260208101905061095c565b50505050905090810190601f1680156109a45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610a14600480360360408110156109c857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115e4565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b2d5780601f10610b0257610100808354040283529160200191610b2d565b820191906000526020600020905b815481529060010190602001808311610b1057829003601f168201915b5050505050905090565b6000610b4282611678565b610b97576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612b77602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610bdd82610e3b565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612c276021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610c83611695565b73ffffffffffffffffffffffffffffffffffffffff161480610cb25750610cb181610cac611695565b6115e4565b5b610d07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180612aca6038913960400191505060405180910390fd5b610d11838361169d565b505050565b6000610d226002611756565b905090565b610d38610d32611695565b8261176b565b610d8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612c486031913960400191505060405180910390fd5b610d9883838361185f565b505050565b6000610df082600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611aa290919063ffffffff16565b905092915050565b610e1383838360405180602001604052806000815250611243565b505050565b600080610e2f836002611abc90919063ffffffff16565b50905080915050919050565b6000610e6b82604051806060016040528060298152602001612b2c602991396002611aeb9092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f0a5780601f10610edf57610100808354040283529160200191610f0a565b820191906000526020600020905b815481529060010190602001808311610eed57829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612b02602a913960400191505060405180910390fd5b610fe2600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611b0a565b9050919050565b606060078054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110815780601f1061105657610100808354040283529160200191611081565b820191906000526020600020905b81548152906001019060200180831161106457829003601f168201915b5050505050905090565b611093611695565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611134576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b8060056000611141611695565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166111ee611695565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b61125461124e611695565b8361176b565b6112a9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612c486031913960400191505060405180910390fd5b6112b584848484611b1f565b50505050565b60606112c682611678565b61131b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612bf8602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113c45780601f10611399576101008083540402835291602001916113c4565b820191906000526020600020905b8154815290600101906020018083116113a757829003601f168201915b505050505090506000600980546001816001161561010002031660029004905014156113f3578091505061159f565b6000815111156114cc57600981604051602001808380546001816001161561010002031660029004801561145e5780601f1061143c57610100808354040283529182019161145e565b820191906000526020600020905b81548152906001019060200180831161144a575b505082805190602001908083835b6020831061148f578051825260208201915060208101905060208303925061146c565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405291505061159f565b60096114d784611b91565b60405160200180838054600181600116156101000203166002900480156115355780601f10611513576101008083540402835291820191611535565b820191906000526020600020905b815481529060010190602001808311611521575b505082805190602001908083835b602083106115665780518252602082019150602081019050602083039250611543565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529150505b919050565b6115b082600a54611cc1565b6115bc600a5482611eb5565b600a600081548092919060010191905055505050565b60606115dd826112bb565b9050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600061168e826002611f3f90919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661171083610e3b565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061176482600001611f59565b9050919050565b600061177682611678565b6117cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612a9e602c913960400191505060405180910390fd5b60006117d683610e3b565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061184557508373ffffffffffffffffffffffffffffffffffffffff1661182d84610b37565b73ffffffffffffffffffffffffffffffffffffffff16145b80611856575061185581856115e4565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661187f82610e3b565b73ffffffffffffffffffffffffffffffffffffffff16146118eb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180612bcf6029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611971576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612a546024913960400191505060405180910390fd5b61197c838383611f6a565b61198760008261169d565b6119d881600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611f6f90919063ffffffff16565b50611a2a81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611f8990919063ffffffff16565b50611a4181836002611fa39092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000611ab18360000183611fd8565b60001c905092915050565b600080600080611acf866000018661205b565b915091508160001c8160001c8090509350935050509250929050565b6000611afe846000018460001b846120f4565b60001c90509392505050565b6000611b18826000016121ea565b9050919050565b611b2a84848461185f565b611b36848484846121fb565b611b8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180612a226032913960400191505060405180910390fd5b50505050565b60606000821415611bd9576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611cbc565b600082905060005b60008214611c03578080600101915050600a8281611bfb57fe5b049150611be1565b6060816040519080825280601f01601f191660200182016040528015611c385781602001600182028038833980820191505090505b50905060006001830390508593505b60008414611cb457600a8481611c5957fe5b0660300160f81b82828060019003935081518110611c7357fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481611cac57fe5b049350611c47565b819450505050505b919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d64576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611d6d81611678565b15611de0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b611dec60008383611f6a565b611e3d81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611f8990919063ffffffff16565b50611e5481836002611fa39092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b611ebe82611678565b611f13576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612ba3602c913960400191505060405180910390fd5b80600860008481526020019081526020016000209080519060200190611f3a92919061295a565b505050565b6000611f51836000018360001b612440565b905092915050565b600081600001805490509050919050565b505050565b6000611f81836000018360001b612463565b905092915050565b6000611f9b836000018360001b61254b565b905092915050565b6000611fcf846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b6125bb565b90509392505050565b600081836000018054905011612039576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612a006022913960400191505060405180910390fd5b82600001828154811061204857fe5b9060005260206000200154905092915050565b600080828460000180549050116120bd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612b556022913960400191505060405180910390fd5b60008460000184815481106120ce57fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b600080846001016000858152602001908152602001600020549050600081141583906121bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612180578082015181840152602081019050612165565b50505050905090810190601f1680156121ad5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508460000160018203815481106121ce57fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b600061221c8473ffffffffffffffffffffffffffffffffffffffff16612697565b6122295760019050612438565b60606123bf63150b7a0260e01b61223e611695565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156122ee5780820151818401526020810190506122d3565b50505050905090810190601f16801561231b5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001612a22603291398773ffffffffffffffffffffffffffffffffffffffff166126aa9092919063ffffffff16565b905060008180602001905160208110156123d857600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b6000808360010160008481526020019081526020016000205490506000811461253f57600060018203905060006001866000018054905003905060008660000182815481106124ae57fe5b90600052602060002001549050808760000184815481106124cb57fe5b906000526020600020018190555060018301876001016000838152602001908152602001600020819055508660000180548061250357fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050612545565b60009150505b92915050565b600061255783836126c2565b6125b05782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506125b5565b600090505b92915050565b600080846001016000858152602001908152602001600020549050600081141561266257846000016040518060400160405280868152602001858152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508460000180549050856001016000868152602001908152602001600020819055506001915050612690565b8285600001600183038154811061267557fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080823b905060008111915050919050565b60606126b984846000856126e5565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b606082471015612740576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612a786026913960400191505060405180910390fd5b61274985612697565b6127bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b6020831061280b57805182526020820191506020810190506020830392506127e8565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461286d576040519150601f19603f3d011682016040523d82523d6000602084013e612872565b606091505b509150915061288282828661288e565b92505050949350505050565b6060831561289e57829050612953565b6000835111156128b15782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156129185780820151818401526020810190506128fd565b50505050905090810190601f1680156129455780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061299b57805160ff19168380011785556129c9565b828001600101855582156129c9579182015b828111156129c85782518255916020019190600101906129ad565b5b5090506129d691906129da565b5090565b6129fc91905b808211156129f85760008160009055506001016129e0565b5090565b9056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732314d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a264697066735822122056518153372a2c1be5958f9739774d5675a39348095256b63d7f2d6244c6ca8b64736f6c63430006020033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101215760003560e01c80636352211e116100ad578063b88d4fde11610071578063b88d4fde14610684578063c87b56dd14610789578063d0def52114610830578063da0544aa1461090b578063e985e9c5146109b257610121565b80636352211e146104685780636c0360eb146104d657806370a082311461055957806395d89b41146105b1578063a22cb4651461063457610121565b806318160ddd116100f457806318160ddd146102ca57806323b872dd146102e85780632f745c591461035657806342842e0e146103b85780634f6ccce71461042657610121565b806301ffc9a71461012657806306fdde031461018b578063081812fc1461020e578063095ea7b31461027c575b600080fd5b6101716004803603602081101561013c57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610a2e565b604051808215151515815260200191505060405180910390f35b610193610a95565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101d35780820151818401526020810190506101b8565b50505050905090810190601f1680156102005780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61023a6004803603602081101561022457600080fd5b8101908080359060200190929190505050610b37565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102c86004803603604081101561029257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bd2565b005b6102d2610d16565b6040518082815260200191505060405180910390f35b610354600480360360608110156102fe57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d27565b005b6103a26004803603604081101561036c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d9d565b6040518082815260200191505060405180910390f35b610424600480360360608110156103ce57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610df8565b005b6104526004803603602081101561043c57600080fd5b8101908080359060200190929190505050610e18565b6040518082815260200191505060405180910390f35b6104946004803603602081101561047e57600080fd5b8101908080359060200190929190505050610e3b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104de610e72565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561051e578082015181840152602081019050610503565b50505050905090810190601f16801561054b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61059b6004803603602081101561056f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f14565b6040518082815260200191505060405180910390f35b6105b9610fe9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105f95780820151818401526020810190506105de565b50505050905090810190601f1680156106265780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106826004803603604081101561064a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080351515906020019092919050505061108b565b005b6107876004803603608081101561069a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561070157600080fd5b82018360208201111561071357600080fd5b8035906020019184600183028401116401000000008311171561073557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611243565b005b6107b56004803603602081101561079f57600080fd5b81019080803590602001909291905050506112bb565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107f55780820151818401526020810190506107da565b50505050905090810190601f1680156108225780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6109096004803603604081101561084657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561088357600080fd5b82018360208201111561089557600080fd5b803590602001918460018302840111640100000000831117156108b757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506115a4565b005b6109376004803603602081101561092157600080fd5b81019080803590602001909291905050506115d2565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561097757808201518184015260208101905061095c565b50505050905090810190601f1680156109a45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610a14600480360360408110156109c857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115e4565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b2d5780601f10610b0257610100808354040283529160200191610b2d565b820191906000526020600020905b815481529060010190602001808311610b1057829003601f168201915b5050505050905090565b6000610b4282611678565b610b97576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612b77602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610bdd82610e3b565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612c276021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610c83611695565b73ffffffffffffffffffffffffffffffffffffffff161480610cb25750610cb181610cac611695565b6115e4565b5b610d07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180612aca6038913960400191505060405180910390fd5b610d11838361169d565b505050565b6000610d226002611756565b905090565b610d38610d32611695565b8261176b565b610d8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612c486031913960400191505060405180910390fd5b610d9883838361185f565b505050565b6000610df082600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611aa290919063ffffffff16565b905092915050565b610e1383838360405180602001604052806000815250611243565b505050565b600080610e2f836002611abc90919063ffffffff16565b50905080915050919050565b6000610e6b82604051806060016040528060298152602001612b2c602991396002611aeb9092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f0a5780601f10610edf57610100808354040283529160200191610f0a565b820191906000526020600020905b815481529060010190602001808311610eed57829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612b02602a913960400191505060405180910390fd5b610fe2600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611b0a565b9050919050565b606060078054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110815780601f1061105657610100808354040283529160200191611081565b820191906000526020600020905b81548152906001019060200180831161106457829003601f168201915b5050505050905090565b611093611695565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611134576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b8060056000611141611695565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166111ee611695565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b61125461124e611695565b8361176b565b6112a9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612c486031913960400191505060405180910390fd5b6112b584848484611b1f565b50505050565b60606112c682611678565b61131b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612bf8602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113c45780601f10611399576101008083540402835291602001916113c4565b820191906000526020600020905b8154815290600101906020018083116113a757829003601f168201915b505050505090506000600980546001816001161561010002031660029004905014156113f3578091505061159f565b6000815111156114cc57600981604051602001808380546001816001161561010002031660029004801561145e5780601f1061143c57610100808354040283529182019161145e565b820191906000526020600020905b81548152906001019060200180831161144a575b505082805190602001908083835b6020831061148f578051825260208201915060208101905060208303925061146c565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405291505061159f565b60096114d784611b91565b60405160200180838054600181600116156101000203166002900480156115355780601f10611513576101008083540402835291820191611535565b820191906000526020600020905b815481529060010190602001808311611521575b505082805190602001908083835b602083106115665780518252602082019150602081019050602083039250611543565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529150505b919050565b6115b082600a54611cc1565b6115bc600a5482611eb5565b600a600081548092919060010191905055505050565b60606115dd826112bb565b9050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600061168e826002611f3f90919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661171083610e3b565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061176482600001611f59565b9050919050565b600061177682611678565b6117cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612a9e602c913960400191505060405180910390fd5b60006117d683610e3b565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061184557508373ffffffffffffffffffffffffffffffffffffffff1661182d84610b37565b73ffffffffffffffffffffffffffffffffffffffff16145b80611856575061185581856115e4565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661187f82610e3b565b73ffffffffffffffffffffffffffffffffffffffff16146118eb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180612bcf6029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611971576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612a546024913960400191505060405180910390fd5b61197c838383611f6a565b61198760008261169d565b6119d881600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611f6f90919063ffffffff16565b50611a2a81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611f8990919063ffffffff16565b50611a4181836002611fa39092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000611ab18360000183611fd8565b60001c905092915050565b600080600080611acf866000018661205b565b915091508160001c8160001c8090509350935050509250929050565b6000611afe846000018460001b846120f4565b60001c90509392505050565b6000611b18826000016121ea565b9050919050565b611b2a84848461185f565b611b36848484846121fb565b611b8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180612a226032913960400191505060405180910390fd5b50505050565b60606000821415611bd9576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611cbc565b600082905060005b60008214611c03578080600101915050600a8281611bfb57fe5b049150611be1565b6060816040519080825280601f01601f191660200182016040528015611c385781602001600182028038833980820191505090505b50905060006001830390508593505b60008414611cb457600a8481611c5957fe5b0660300160f81b82828060019003935081518110611c7357fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481611cac57fe5b049350611c47565b819450505050505b919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d64576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611d6d81611678565b15611de0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b611dec60008383611f6a565b611e3d81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611f8990919063ffffffff16565b50611e5481836002611fa39092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b611ebe82611678565b611f13576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612ba3602c913960400191505060405180910390fd5b80600860008481526020019081526020016000209080519060200190611f3a92919061295a565b505050565b6000611f51836000018360001b612440565b905092915050565b600081600001805490509050919050565b505050565b6000611f81836000018360001b612463565b905092915050565b6000611f9b836000018360001b61254b565b905092915050565b6000611fcf846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b6125bb565b90509392505050565b600081836000018054905011612039576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612a006022913960400191505060405180910390fd5b82600001828154811061204857fe5b9060005260206000200154905092915050565b600080828460000180549050116120bd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612b556022913960400191505060405180910390fd5b60008460000184815481106120ce57fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b600080846001016000858152602001908152602001600020549050600081141583906121bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612180578082015181840152602081019050612165565b50505050905090810190601f1680156121ad5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508460000160018203815481106121ce57fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b600061221c8473ffffffffffffffffffffffffffffffffffffffff16612697565b6122295760019050612438565b60606123bf63150b7a0260e01b61223e611695565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156122ee5780820151818401526020810190506122d3565b50505050905090810190601f16801561231b5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001612a22603291398773ffffffffffffffffffffffffffffffffffffffff166126aa9092919063ffffffff16565b905060008180602001905160208110156123d857600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b6000808360010160008481526020019081526020016000205490506000811461253f57600060018203905060006001866000018054905003905060008660000182815481106124ae57fe5b90600052602060002001549050808760000184815481106124cb57fe5b906000526020600020018190555060018301876001016000838152602001908152602001600020819055508660000180548061250357fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050612545565b60009150505b92915050565b600061255783836126c2565b6125b05782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506125b5565b600090505b92915050565b600080846001016000858152602001908152602001600020549050600081141561266257846000016040518060400160405280868152602001858152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508460000180549050856001016000868152602001908152602001600020819055506001915050612690565b8285600001600183038154811061267557fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080823b905060008111915050919050565b60606126b984846000856126e5565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b606082471015612740576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612a786026913960400191505060405180910390fd5b61274985612697565b6127bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b6020831061280b57805182526020820191506020810190506020830392506127e8565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461286d576040519150601f19603f3d011682016040523d82523d6000602084013e612872565b606091505b509150915061288282828661288e565b92505050949350505050565b6060831561289e57829050612953565b6000835111156128b15782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156129185780820151818401526020810190506128fd565b50505050905090810190601f1680156129455780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061299b57805160ff19168380011785556129c9565b828001600101855582156129c9579182015b828111156129c85782518255916020019190600101906129ad565b5b5090506129d691906129da565b5090565b6129fc91905b808211156129f85760008160009055506001016129e0565b5090565b9056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732314d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a264697066735822122056518153372a2c1be5958f9739774d5675a39348095256b63d7f2d6244c6ca8b64736f6c63430006020033",
  "sourceMap": "84:458:1:-:0;;;148:107;8:9:-1;5:2;;;30:1;27;20:12;5:2;148:107:1;3575:369:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;768:40:4;435:10;787:20;;768:18;;;:40;;:::i;:::-;3657:5:9;3649;:13;;;;;;;;;;;;:::i;:::-;;3682:7;3672;:17;;;;;;;;;;;;:::i;:::-;;3777:40;2740:10;3796:20;;3777:18;;;:40;;:::i;:::-;3827:49;3072:10;3846:29;;3827:18;;;:49;;:::i;:::-;3886:51;3445:10;3905:31;;3886:18;;;:51;;:::i;:::-;3575:369;;243:1:1::1;229:11;:15;;;;84:458:::0;;1499:198:4;1597:10;1582:25;;:11;:25;;;;;1574:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1686:4;1650:20;:33;1671:11;1650:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;1499:198;:::o;84:458:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "84:458:1:-:0;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;84:458:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;965:140:4;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;965:140:4;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;4500:90:9;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4500:90:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7107:209;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7107:209:9;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;6665:381;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6665:381:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6175:200;;;:::i;:::-;;;;;;;;;;;;;;;;;;;7955:300;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7955:300:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;5952:152;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5952:152:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;8321:149;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8321:149:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6447:161;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6447:161:9;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4271:167;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4271:167:9;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5786:87;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;5786:87:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4003:211;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4003:211:9;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4654:94;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4654:94:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7383:290;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7383:290:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;8536:282;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;8536:282:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;8536:282:9;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;8536:282:9;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;8536:282:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;8536:282:9;;;;;;;;;;;;;;;:::i;:::-;;4814:740;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4814:740:9;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4814:740:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;261:164:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;261:164:1;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;261:164:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;261:164:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;261:164:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;261:164:1;;;;;;;;;;;;;;;:::i;:::-;;431:109;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;431:109:1;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;431:109:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7739:154:9;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7739:154:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;965:140:4;1042:4;1065:20;:33;1086:11;1065:33;;;;;;;;;;;;;;;;;;;;;;;;;;;1058:40;;965:140;;;:::o;4500:90:9:-;4546:13;4578:5;4571:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4500:90;:::o;7107:209::-;7175:7;7202:16;7210:7;7202;:16::i;:::-;7194:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7285:15;:24;7301:7;7285:24;;;;;;;;;;;;;;;;;;;;;7278:31;;7107:209;;;:::o;6665:381::-;6745:13;6761:16;6769:7;6761;:16::i;:::-;6745:32;;6801:5;6795:11;;:2;:11;;;;6787:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6879:5;6863:21;;:12;:10;:12::i;:::-;:21;;;:62;;;;6888:37;6905:5;6912:12;:10;:12::i;:::-;6888:16;:37::i;:::-;6863:62;6855:152;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7018:21;7027:2;7031:7;7018:8;:21::i;:::-;6665:381;;;:::o;6175:200::-;6228:7;6347:21;:12;:19;:21::i;:::-;6340:28;;6175:200;:::o;7955:300::-;8114:41;8133:12;:10;:12::i;:::-;8147:7;8114:18;:41::i;:::-;8106:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8220:28;8230:4;8236:2;8240:7;8220:9;:28::i;:::-;7955:300;;;:::o;5952:152::-;6041:7;6067:30;6091:5;6067:13;:20;6081:5;6067:20;;;;;;;;;;;;;;;:23;;:30;;;;:::i;:::-;6060:37;;5952:152;;;;:::o;8321:149::-;8424:39;8441:4;8447:2;8451:7;8424:39;;;;;;;;;;;;:16;:39::i;:::-;8321:149;;;:::o;6447:161::-;6514:7;6534:15;6555:22;6571:5;6555:12;:15;;:22;;;;:::i;:::-;6533:44;;;6594:7;6587:14;;;6447:161;;;:::o;4271:167::-;4335:7;4361:70;4378:7;4361:70;;;;;;;;;;;;;;;;;:12;:16;;:70;;;;;:::i;:::-;4354:77;;4271:167;;;:::o;5786:87::-;5826:13;5858:8;5851:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5786:87;:::o;4003:211::-;4067:7;4111:1;4094:19;;:5;:19;;;;4086:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4178:29;:13;:20;4192:5;4178:20;;;;;;;;;;;;;;;:27;:29::i;:::-;4171:36;;4003:211;;;:::o;4654:94::-;4702:13;4734:7;4727:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4654:94;:::o;7383:290::-;7497:12;:10;:12::i;:::-;7485:24;;:8;:24;;;;7477:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7595:8;7550:18;:32;7569:12;:10;:12::i;:::-;7550:32;;;;;;;;;;;;;;;:42;7583:8;7550:42;;;;;;;;;;;;;;;;:53;;;;;;;;;;;;;;;;;;7647:8;7618:48;;7633:12;:10;:12::i;:::-;7618:48;;;7657:8;7618:48;;;;;;;;;;;;;;;;;;;;;;7383:290;;:::o;8536:282::-;8667:41;8686:12;:10;:12::i;:::-;8700:7;8667:18;:41::i;:::-;8659:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8772:39;8786:4;8792:2;8796:7;8805:5;8772:13;:39::i;:::-;8536:282;;;;:::o;4814:740::-;4879:13;4912:16;4920:7;4912;:16::i;:::-;4904:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4991:23;5017:10;:19;5028:7;5017:19;;;;;;;;;;;4991:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5135:1;5115:8;5109:22;;;;;;;;;;;;;;;;:27;5105:74;;;5159:9;5152:16;;;;;5105:74;5307:1;5287:9;5281:23;:27;5277:110;;;5355:8;5365:9;5338:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5338:37:9;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5338:37:9;;;5324:52;;;;;5277:110;5517:8;5527:18;:7;:16;:18::i;:::-;5500:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5500:46:9;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5500:46:9;;;5486:61;;;4814:740;;;;:::o;261:164:1:-;328:22;334:2;338:11;;328:5;:22::i;:::-;360:35;373:11;;386:8;360:12;:35::i;:::-;405:11;;:13;;;;;;;;;;;;;261:164;;:::o;431:109::-;484:13;516:17;525:7;516:8;:17::i;:::-;509:24;;431:109;;;:::o;7739:154:9:-;7828:4;7851:18;:25;7870:5;7851:25;;;;;;;;;;;;;;;:35;7877:8;7851:35;;;;;;;;;;;;;;;;;;;;;;;;;7844:42;;7739:154;;;;:::o;10252:117::-;10309:4;10332:30;10354:7;10332:12;:21;;:30;;;;:::i;:::-;10325:37;;10252:117;;;:::o;598:104:3:-;651:15;685:10;678:17;;598:104;:::o;15908:155:9:-;16000:2;15973:15;:24;15989:7;15973:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;16048:7;16044:2;16017:39;;16026:16;16034:7;16026;:16::i;:::-;16017:39;;;;;;;;;;;;15908:155;;:::o;7031:121:15:-;7100:7;7126:19;7134:3;:10;;7126:7;:19::i;:::-;7119:26;;7031:121;;;:::o;10527:329:9:-;10612:4;10636:16;10644:7;10636;:16::i;:::-;10628:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10711:13;10727:16;10735:7;10727;:16::i;:::-;10711:32;;10772:5;10761:16;;:7;:16;;;:51;;;;10805:7;10781:31;;:20;10793:7;10781:11;:20::i;:::-;:31;;;10761:51;:87;;;;10816:32;10833:5;10840:7;10816:16;:32::i;:::-;10761:87;10753:96;;;10527:329;;;;:::o;13521:559::-;13638:4;13618:24;;:16;13626:7;13618;:16::i;:::-;:24;;;13610:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13720:1;13706:16;;:2;:16;;;;13698:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13774:39;13795:4;13801:2;13805:7;13774:20;:39::i;:::-;13875:29;13892:1;13896:7;13875:8;:29::i;:::-;13915:35;13942:7;13915:13;:19;13929:4;13915:19;;;;;;;;;;;;;;;:26;;:35;;;;:::i;:::-;;13960:30;13982:7;13960:13;:17;13974:2;13960:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;14001:29;14018:7;14027:2;14001:12;:16;;:29;;;;;:::i;:::-;;14065:7;14061:2;14046:27;;14055:4;14046:27;;;;;;;;;;;;13521:559;;;:::o;9214:135:16:-;9285:7;9319:22;9323:3;:10;;9335:5;9319:3;:22::i;:::-;9311:31;;9304:38;;9214:135;;;;:::o;7480:224:15:-;7560:7;7569;7589:11;7602:13;7619:22;7623:3;:10;;7635:5;7619:3;:22::i;:::-;7588:53;;;;7667:3;7659:12;;7689:5;7681:14;;7651:46;;;;;;;;;7480:224;;;;;:::o;8123:202::-;8230:7;8272:44;8277:3;:10;;8297:3;8289:12;;8303;8272:4;:44::i;:::-;8264:53;;8249:69;;8123:202;;;;;:::o;8770:112:16:-;8830:7;8856:19;8864:3;:10;;8856:7;:19::i;:::-;8849:26;;8770:112;;;:::o;9680:269:9:-;9793:28;9803:4;9809:2;9813:7;9793:9;:28::i;:::-;9839:48;9862:4;9868:2;9872:7;9881:5;9839:22;:48::i;:::-;9831:111;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9680:269;;;;:::o;210:723:17:-;266:13;492:1;483:5;:10;479:51;;;509:10;;;;;;;;;;;;;;;;;;;;;479:51;539:12;554:5;539:20;;569:14;593:75;608:1;600:4;:9;593:75;;625:8;;;;;;;655:2;647:10;;;;;;;;;593:75;;;677:19;709:6;699:17;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;699:17:17;;;;677:39;;726:13;751:1;742:6;:10;726:26;;769:5;762:12;;784:112;799:1;791:4;:9;784:112;;857:2;850:4;:9;;;;;;845:2;:14;834:27;;816:6;823:7;;;;;;;816:15;;;;;;;;;;;:45;;;;;;;;;;;883:2;875:10;;;;;;;;;784:112;;;919:6;905:21;;;;;;210:723;;;;:::o;12085:393:9:-;12178:1;12164:16;;:2;:16;;;;12156:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12236:16;12244:7;12236;:16::i;:::-;12235:17;12227:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12296:45;12325:1;12329:2;12333:7;12296:20;:45::i;:::-;12352:30;12374:7;12352:13;:17;12366:2;12352:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;12393:29;12410:7;12419:2;12393:12;:16;;:29;;;;;:::i;:::-;;12463:7;12459:2;12438:33;;12455:1;12438:33;;;;;;;;;;;;12085:393;;:::o;14227:212::-;14326:16;14334:7;14326;:16::i;:::-;14318:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14423:9;14401:10;:19;14412:7;14401:19;;;;;;;;;;;:31;;;;;;;;;;;;:::i;:::-;;14227:212;;:::o;6799:149:15:-;6883:4;6906:35;6916:3;:10;;6936:3;6928:12;;6906:9;:35::i;:::-;6899:42;;6799:149;;;;:::o;4491:108::-;4547:7;4573:3;:12;;:19;;;;4566:26;;4491:108;;;:::o;16659:93:9:-;;;;:::o;8329:135:16:-;8399:4;8422:35;8430:3;:10;;8450:5;8442:14;;8422:7;:35::i;:::-;8415:42;;8329:135;;;;:::o;8032:129::-;8099:4;8122:32;8127:3;:10;;8147:5;8139:14;;8122:4;:32::i;:::-;8115:39;;8032:129;;;;:::o;6247:174:15:-;6336:4;6359:55;6364:3;:10;;6384:3;6376:12;;6406:5;6398:14;;6390:23;;6359:4;:55::i;:::-;6352:62;;6247:174;;;;;:::o;4452:201:16:-;4519:7;4567:5;4546:3;:11;;:18;;;;:26;4538:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4628:3;:11;;4640:5;4628:18;;;;;;;;;;;;;;;;4621:25;;4452:201;;;;:::o;4942:274:15:-;5009:7;5018;5067:5;5045:3;:12;;:19;;;;:27;5037:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5122:22;5147:3;:12;;5160:5;5147:19;;;;;;;;;;;;;;;;;;5122:44;;5184:5;:10;;;5196:5;:12;;;5176:33;;;;;4942:274;;;;;:::o;5623:315::-;5717:7;5736:16;5755:3;:12;;:17;5768:3;5755:17;;;;;;;;;;;;5736:36;;5802:1;5790:8;:13;;5805:12;5782:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;5782:36:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5871:3;:12;;5895:1;5884:8;:12;5871:26;;;;;;;;;;;;;;;;;;:33;;;5864:40;;;5623:315;;;;;:::o;4013:107:16:-;4069:7;4095:3;:11;;:18;;;;4088:25;;4013:107;;;:::o;15313:589:9:-;15433:4;15458:15;:2;:13;;;:15::i;:::-;15453:58;;15496:4;15489:11;;;;15453:58;15520:23;15546:246;15598:45;;;15657:12;:10;:12::i;:::-;15683:4;15701:7;15722:5;15562:175;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;15562:175:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;15562:175:9;;;;;;;38:4:-1;29:7;25:18;67:10;61:17;96:58;199:8;192:4;186;182:15;179:29;167:10;160:49;0:215;;;15562:175:9;15546:246;;;;;;;;;;;;;;;;;:2;:15;;;;:246;;;;;:::i;:::-;15520:272;;15802:13;15829:10;15818:32;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;15818:32:9;;;;;;;;;;;;;;;;15802:48;;1076:10;15878:16;;15868:26;;;:6;:26;;;;15860:35;;;;15313:589;;;;;;;:::o;4278:123:15:-;4349:4;4393:1;4372:3;:12;;:17;4385:3;4372:17;;;;;;;;;;;;:22;;4365:29;;4278:123;;;;:::o;2212:1512:16:-;2278:4;2394:18;2415:3;:12;;:19;2428:5;2415:19;;;;;;;;;;;;2394:40;;2463:1;2449:10;:15;2445:1273;;2806:21;2843:1;2830:10;:14;2806:38;;2858:17;2899:1;2878:3;:11;;:18;;;;:22;2858:42;;3140:17;3160:3;:11;;3172:9;3160:22;;;;;;;;;;;;;;;;3140:42;;3303:9;3274:3;:11;;3286:13;3274:26;;;;;;;;;;;;;;;:38;;;;3420:1;3404:13;:17;3378:3;:12;;:23;3391:9;3378:23;;;;;;;;;;;:43;;;;3527:3;:11;;:17;;;;;;;;;;;;;;;;;;;;;;;;3619:3;:12;;:19;3632:5;3619:19;;;;;;;;;;;3612:26;;;3660:4;3653:11;;;;;;;;2445:1273;3702:5;3695:12;;;2212:1512;;;;;:::o;1640:404::-;1703:4;1724:21;1734:3;1739:5;1724:9;:21::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1761:23:16;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;1836:678:15:-;1912:4;2026:16;2045:3;:12;;:17;2058:3;2045:17;;;;;;;;;;;;2026:36;;2089:1;2077:8;:13;2073:435;;;2143:3;:12;;2161:38;;;;;;;;2178:3;2161:38;;;;2191:5;2161:38;;;2143:57;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2143:57:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2355:3;:12;;:19;;;;2335:3;:12;;:17;2348:3;2335:17;;;;;;;;;;;:39;;;;2395:4;2388:11;;;;;2073:435;2466:5;2430:3;:12;;2454:1;2443:8;:12;2430:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2492:5;2485:12;;;1836:678;;;;;;:::o;726:413:14:-;786:4;989:12;1098:7;1086:20;1078:28;;1131:1;1124:4;:8;1117:15;;;726:413;;;:::o;3581:193::-;3684:12;3715:52;3737:6;3745:4;3751:1;3754:12;3715:21;:52::i;:::-;3708:59;;3581:193;;;;;:::o;3805:127:16:-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;4608:523:14:-;4735:12;4792:5;4767:21;:30;;4759:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4858:18;4869:6;4858:10;:18::i;:::-;4850:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4981:12;4995:23;5022:6;:11;;5042:5;5050:4;5022:33;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5022:33:14;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;19;14:27;;;;67:4;61:11;56:16;;134:4;130:9;123:4;105:16;101:27;97:43;94:1;90:51;84:4;77:65;157:16;154:1;147:27;211:16;208:1;201:4;198:1;194:12;179:49;5:228;;14:27;32:4;27:9;;5:228;;4980:75:14;;;;5072:52;5090:7;5099:10;5111:12;5072:17;:52::i;:::-;5065:59;;;;4608:523;;;;;;:::o;6111:725::-;6226:12;6254:7;6250:580;;;6284:10;6277:17;;;;6250:580;6415:1;6395:10;:17;:21;6391:429;;;6653:10;6647:17;6713:15;6700:10;6696:2;6692:19;6685:44;6602:145;6792:12;6785:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;6785:20:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6111:725;;;;;;:::o;84:458:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.6.0;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\n\ncontract CGWaifuCoin is ERC721 {\n\n    uint256 tokenNumber;\n\n    constructor ()\n        ERC721(\"CGWaifuCoin\", \"CGWC\")\n        public{\n            tokenNumber = 0;\n        }\n\n    function mint(address to, string memory tokenUri) public {\n        _mint(to, tokenNumber);\n        _setTokenURI(tokenNumber, tokenUri);\n        tokenNumber++;\n    }\n\n    function getUri(uint256 tokenId) public view returns(string memory) {\n        return tokenURI(tokenId);\n    }\n}",
  "sourcePath": "/home/jeffrey/token/inleveren/BC3_Jeffrey/PD-10/contracts/CGWaifuCoin.sol",
  "ast": {
    "absolutePath": "/home/jeffrey/token/inleveren/BC3_Jeffrey/PD-10/contracts/CGWaifuCoin.sol",
    "exportedSymbols": {
      "CGWaifuCoin": [
        80
      ]
    },
    "id": 81,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 29,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 30,
        "nodeType": "ImportDirective",
        "scope": 81,
        "sourceUnit": 1841,
        "src": "25:57:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 31,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1840,
              "src": "108:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$1840",
                "typeString": "contract ERC721"
              }
            },
            "id": 32,
            "nodeType": "InheritanceSpecifier",
            "src": "108:6:1"
          }
        ],
        "contractDependencies": [
          136,
          189,
          199,
          1840,
          1943,
          1970,
          1993
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 80,
        "linearizedBaseContracts": [
          80,
          1840,
          1970,
          1993,
          1943,
          189,
          199,
          136
        ],
        "name": "CGWaifuCoin",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 34,
            "name": "tokenNumber",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 80,
            "src": "122:19:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 33,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "122:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 45,
              "nodeType": "Block",
              "src": "215:40:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 43,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 41,
                      "name": "tokenNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34,
                      "src": "229:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 42,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "243:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "229:15:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 44,
                  "nodeType": "ExpressionStatement",
                  "src": "229:15:1"
                }
              ]
            },
            "documentation": null,
            "id": 46,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "43475761696675436f696e",
                    "id": 37,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "178:13:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_d720fcbe102b32d9d12366930eb29222dde827afe03d86c2f62f7e24bddb7e05",
                      "typeString": "literal_string \"CGWaifuCoin\""
                    },
                    "value": "CGWaifuCoin"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "43475743",
                    "id": 38,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "193:6:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_f47f52bdfe2e9c6e8807bed1da2faeff168cc8de042cef4b07f4439ca99d438d",
                      "typeString": "literal_string \"CGWC\""
                    },
                    "value": "CGWC"
                  }
                ],
                "id": 39,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 36,
                  "name": "ERC721",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1840,
                  "src": "171:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721_$1840_$",
                    "typeString": "type(contract ERC721)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "171:29:1"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 35,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "160:2:1"
            },
            "returnParameters": {
              "id": 40,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "215:0:1"
            },
            "scope": 80,
            "src": "148:107:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 66,
              "nodeType": "Block",
              "src": "318:107:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 54,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48,
                        "src": "334:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 55,
                        "name": "tokenNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34,
                        "src": "338:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 53,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1582,
                      "src": "328:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 56,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "328:22:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 57,
                  "nodeType": "ExpressionStatement",
                  "src": "328:22:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 59,
                        "name": "tokenNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34,
                        "src": "373:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 60,
                        "name": "tokenUri",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50,
                        "src": "386:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 58,
                      "name": "_setTokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1740,
                      "src": "360:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 61,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "360:35:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62,
                  "nodeType": "ExpressionStatement",
                  "src": "360:35:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 64,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "405:13:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 63,
                      "name": "tokenNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34,
                      "src": "405:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 65,
                  "nodeType": "ExpressionStatement",
                  "src": "405:13:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "d0def521",
            "id": 67,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 51,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 67,
                  "src": "275:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "275:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50,
                  "name": "tokenUri",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 67,
                  "src": "287:22:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 49,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "287:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "274:36:1"
            },
            "returnParameters": {
              "id": 52,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "318:0:1"
            },
            "scope": 80,
            "src": "261:164:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 78,
              "nodeType": "Block",
              "src": "499:41:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 75,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 69,
                        "src": "525:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 74,
                      "name": "tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1163,
                      "src": "516:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) view returns (string memory)"
                      }
                    },
                    "id": 76,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "516:17:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 73,
                  "id": 77,
                  "nodeType": "Return",
                  "src": "509:24:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "da0544aa",
            "id": 79,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getUri",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 70,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 69,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 79,
                  "src": "447:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 68,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "446:17:1"
            },
            "returnParameters": {
              "id": 73,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 72,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 79,
                  "src": "484:13:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 71,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "484:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "483:15:1"
            },
            "scope": 80,
            "src": "431:109:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 81,
        "src": "84:458:1"
      }
    ],
    "src": "0:542:1"
  },
  "legacyAST": {
    "absolutePath": "/home/jeffrey/token/inleveren/BC3_Jeffrey/PD-10/contracts/CGWaifuCoin.sol",
    "exportedSymbols": {
      "CGWaifuCoin": [
        80
      ]
    },
    "id": 81,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 29,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 30,
        "nodeType": "ImportDirective",
        "scope": 81,
        "sourceUnit": 1841,
        "src": "25:57:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 31,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1840,
              "src": "108:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$1840",
                "typeString": "contract ERC721"
              }
            },
            "id": 32,
            "nodeType": "InheritanceSpecifier",
            "src": "108:6:1"
          }
        ],
        "contractDependencies": [
          136,
          189,
          199,
          1840,
          1943,
          1970,
          1993
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 80,
        "linearizedBaseContracts": [
          80,
          1840,
          1970,
          1993,
          1943,
          189,
          199,
          136
        ],
        "name": "CGWaifuCoin",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 34,
            "name": "tokenNumber",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 80,
            "src": "122:19:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 33,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "122:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 45,
              "nodeType": "Block",
              "src": "215:40:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 43,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 41,
                      "name": "tokenNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34,
                      "src": "229:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 42,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "243:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "229:15:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 44,
                  "nodeType": "ExpressionStatement",
                  "src": "229:15:1"
                }
              ]
            },
            "documentation": null,
            "id": 46,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "43475761696675436f696e",
                    "id": 37,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "178:13:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_d720fcbe102b32d9d12366930eb29222dde827afe03d86c2f62f7e24bddb7e05",
                      "typeString": "literal_string \"CGWaifuCoin\""
                    },
                    "value": "CGWaifuCoin"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "43475743",
                    "id": 38,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "193:6:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_f47f52bdfe2e9c6e8807bed1da2faeff168cc8de042cef4b07f4439ca99d438d",
                      "typeString": "literal_string \"CGWC\""
                    },
                    "value": "CGWC"
                  }
                ],
                "id": 39,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 36,
                  "name": "ERC721",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1840,
                  "src": "171:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721_$1840_$",
                    "typeString": "type(contract ERC721)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "171:29:1"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 35,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "160:2:1"
            },
            "returnParameters": {
              "id": 40,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "215:0:1"
            },
            "scope": 80,
            "src": "148:107:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 66,
              "nodeType": "Block",
              "src": "318:107:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 54,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48,
                        "src": "334:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 55,
                        "name": "tokenNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34,
                        "src": "338:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 53,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1582,
                      "src": "328:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 56,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "328:22:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 57,
                  "nodeType": "ExpressionStatement",
                  "src": "328:22:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 59,
                        "name": "tokenNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34,
                        "src": "373:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 60,
                        "name": "tokenUri",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 50,
                        "src": "386:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 58,
                      "name": "_setTokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1740,
                      "src": "360:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 61,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "360:35:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62,
                  "nodeType": "ExpressionStatement",
                  "src": "360:35:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 64,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "405:13:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 63,
                      "name": "tokenNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34,
                      "src": "405:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 65,
                  "nodeType": "ExpressionStatement",
                  "src": "405:13:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "d0def521",
            "id": 67,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 51,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 67,
                  "src": "275:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 47,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "275:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 50,
                  "name": "tokenUri",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 67,
                  "src": "287:22:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 49,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "287:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "274:36:1"
            },
            "returnParameters": {
              "id": 52,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "318:0:1"
            },
            "scope": 80,
            "src": "261:164:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 78,
              "nodeType": "Block",
              "src": "499:41:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 75,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 69,
                        "src": "525:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 74,
                      "name": "tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1163,
                      "src": "516:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) view returns (string memory)"
                      }
                    },
                    "id": 76,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "516:17:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 73,
                  "id": 77,
                  "nodeType": "Return",
                  "src": "509:24:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "da0544aa",
            "id": 79,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getUri",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 70,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 69,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 79,
                  "src": "447:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 68,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "446:17:1"
            },
            "returnParameters": {
              "id": 73,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 72,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 79,
                  "src": "484:13:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 71,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "484:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "483:15:1"
            },
            "scope": 80,
            "src": "431:109:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 81,
        "src": "84:458:1"
      }
    ],
    "src": "0:542:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.2+commit.bacdbe57.Emscripten.clang"
  },
  "networks": {
    "4": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x7d959B1F629F2aE431F5D67Ba5FB9A4A38F9Ad4A",
      "transactionHash": "0x8f858813846da0c9196b05e4af722b76509e470b7df05edf5682651502ad9515"
    }
  },
  "schemaVersion": "3.3.2",
  "updatedAt": "2021-01-04T14:39:04.359Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {
      "approve(address,uint256)": {
        "details": "See {IERC721-approve}."
      },
      "balanceOf(address)": {
        "details": "See {IERC721-balanceOf}."
      },
      "baseURI()": {
        "details": "Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID."
      },
      "getApproved(uint256)": {
        "details": "See {IERC721-getApproved}."
      },
      "isApprovedForAll(address,address)": {
        "details": "See {IERC721-isApprovedForAll}."
      },
      "name()": {
        "details": "See {IERC721Metadata-name}."
      },
      "ownerOf(uint256)": {
        "details": "See {IERC721-ownerOf}."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "setApprovalForAll(address,bool)": {
        "details": "See {IERC721-setApprovalForAll}."
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas."
      },
      "symbol()": {
        "details": "See {IERC721Metadata-symbol}."
      },
      "tokenByIndex(uint256)": {
        "details": "See {IERC721Enumerable-tokenByIndex}."
      },
      "tokenOfOwnerByIndex(address,uint256)": {
        "details": "See {IERC721Enumerable-tokenOfOwnerByIndex}."
      },
      "tokenURI(uint256)": {
        "details": "See {IERC721Metadata-tokenURI}."
      },
      "totalSupply()": {
        "details": "See {IERC721Enumerable-totalSupply}."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC721-transferFrom}."
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}