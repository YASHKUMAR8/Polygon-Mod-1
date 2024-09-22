# Sample Hardhat Project
This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

## Project Overview
This project involves building a simple contract using Solidity to deploy on the Ethereum blockchain. Key components include generating an NFT collection, utilizing IPFS for decentralized storage, deploying the contract on Ethereum, and mapping the collection on the Polygon network.

## Objectives
* Generate a 5-item NFT collection: Utilize tools like DALL·E 2, Midjourney, etc., to create a set of images.
* Store images on IPFS: Use platforms such as Pinata or any other service of your choice to store these images on a decentralized network.
* Deploy an ERC721 or ERC1155 contract: Deploy the smart contract on the Goerli Ethereum Testnet.
* Prompt Description: Implement a promptDescription function in your Solidity contract to return the prompt used to generate each image.
* Map the NFT collection: (Optional but useful) Use Polygon’s token mapper to visualize your collection.
* Batch minting of NFTs: Write a Hardhat script to batch mint the NFTs. ERC721A can be optimal here for gas savings.
* Transfer NFTs from Sepolia to Polygon (Amoy): Create a Hardhat script to batch transfer the NFTs using the FxPortal bridge, and perform approval and deposit transactions.
  
## Steps to Run the Project
1. Install Metamask: Download the Metamask extension and set up your wallet.
2. Add Sepolia and Amoy Test Networks: Visit Chainlist to add both Sepolia (chain ID 11155111) and Amoy (chain ID 80002) test networks to your wallet.
3. Get Testnet Tokens:
   * For Sepolia tokens, use Google's Web3 faucet.
   * For Amoy testnet tokens, visit the Polygon faucet (you’ll need to join the Polygon Discord).
4. Clone the GitHub repository: Ensure all necessary files are available.
5. Install dependencies: Open the project directory in VS Code and run npm i to install required packages.
6. Deploy Contract: Add your private key to the .env file, then deploy the contract using Hardhat with the command:
```
npx hardhat run scripts/deploy.js --network sepolia
```
7. Update Scripts: Copy the newly deployed contract address into the tokenAddress variable in relevant scripts.
8. Mint NFTs: Use the following command to mint your NFTs:
```
npx hardhat run scripts/mint.js --network sepolia
```
9. Approve and Transfer NFTs: Approve and deposit the NFTs for transfer to Polygon using:
```
npx hardhat run scripts/approveDeposit.js --network sepolia
```
Wait for 20-30 minutes for the NFTs to show in your Polygon account.
10. Check NFT Status: Go to OKLink to verify your NFTs under "NFT Holdings" in the Amoy network.
11. Check Balances: After transfer, update your getBalance script with the new Polygon contract address and check your balance:
```
npx hardhat run scripts/getBalance.js --network amoy
```
12. View Prompts and URLs: Use the following command to retrieve the prompt descriptions and image URLs:
```
npx hardhat run scripts/prompt.js --network sepolia
```

## Conclusion
This project showcases the basics of Solidity, smart contracts, and NFT creation, offering a hands-on introduction to blockchain development.

## Author
Yash Kumar
