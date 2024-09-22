const hre = require("hardhat");
const randomNFTContractJSON = require("../artifacts/contracts/randomp.sol/RandomNFT.json");

const contract_address = "0xef29b12f3A17Cc462183BF2caEB3404A0A79f88A"; //put your contract address here
const randomNFTABI = randomNFTContractJSON.abi;
const walletAddress = "0x11BEC911757CA7Ef7b54dbD5f45F995C76a7D841"; // Replace with your wallet address

async function main() {
  const randomNFTContract = await ethers.getContractAt(
    randomNFTABI,
    contract_address
  );

  for (let i = 0; i < 5; i++) {
    try {
      const tx = await randomNFTContract.mintRandomToken(walletAddress);
      await tx.wait();
    } catch (error) {
      console.error(" minting token error :", error.message);
    }
  }

  console.log(
    "You now have : " +
      (await randomNFTContract.balanceOf(walletAddress)).toString() +
      " Ethereum Token"
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
