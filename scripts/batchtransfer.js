const hre = require("hardhat");
const randomNFTJSON = require("../artifacts/contracts/randomp.sol/RandomNFT.json");

const contract_address = "0xef29b12f3A17Cc462183BF2caEB3404A0A79f88A"; // Replace with your contract address
const randomNFTABI = randomNFTJSON.abi;
const walletAddress = "0x11BEC911757CA7Ef7b54dbD5f45F995C76a7D841"; // Replace with your wallet address

const fxRootContractABI = require("../fxRootcontract.json");
const fxERC21RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de"; // Replace with the actual fxERC21Root contract address

async function main() {
  const randomNFTContract = await hre.ethers.getContractAt(
    randomNFTABI,
    contract_address
  );

  const fxContract = await hre.ethers.getContractAt(
    fxRootContractABI,
    fxERC21RootAddress
  );

  const approveTx = await randomNFTContract.setApprovalForAll(
    fxERC21RootAddress,
    true
  );
  await approveTx.wait();

  console.log("Approval confirmed wait for token deposite");

  for (let i = 1; i < 6; i++) {
    const depositTx = await fxContract.deposit(
      contract_address,
      walletAddress,
      i,
      "0x6566"
    );
    await depositTx.wait();
    console.log(
      `Token ${i} deposited please wait untill all the token is depositing`
    );
  }

  console.log("Your 5 Tokens deposited successfully to your Polygon address");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
