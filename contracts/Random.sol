// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

//creating erc721 contract to create nfts
contract RandomNFT is ERC721, ERC721URIStorage, Ownable {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    constructor() ERC721("RandomTokens", "RND") {}

    string[] private randomTokenURIs = [
    "https://gateway.pinata.cloud/ipfs/QmYyaroTxXjBcDuGnuLkZwx97VoEKzXPstHNR4w6nYYH5M/"
    ];

    
    // to transfer the token from one address to another with amount passing as token id 
     function transferToken(address to, uint256 tokenId) public {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Transfer caller is not owner nor approved");
        safeTransferFrom(msg.sender, to, tokenId);
    }
   
   // it is used to mint token  it will add the tokens to to tokenid 
     function mintRandomToken(address to) public onlyOwner returns (uint256) {
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, randomTokenURIs[tokenId % randomTokenURIs.length]);
        return tokenId;
    

    }


   // it is used to burn token  it will minus the tokens to to tokenid 
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
        
    }

this function will return all the tokenuri having tokenid
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

   
    // return all the superinterface with super id
    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    return the prompt description with given token id
    function promptDescription(uint256 tokenId) external view returns (string memory) {
        require(_exists(tokenId), "Token ID does not exist");
        return "Created some pictures  with the help of midjourney";
    }

}
