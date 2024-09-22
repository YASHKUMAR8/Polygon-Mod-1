const hre = require("hardhat");
const randomNFTContractJSON = require("../artifacts/contracts/randomp.sol/RandomNFT.json");

const contract_address = "0xD1b854FDAF939B97fB8e902E4448fF33aD80ffD5"; // Replace with your contract address that you see on mumbai polygon after all token depoite
const randomNFTABI = randomNFTContractJSON.abi;
const walletAddress = "0x11BEC911757CA7Ef7b54dbD5f45F995C76a7D841"; // Replace with your wallet address

async function main() {
  const randomNFTContract = await hre.ethers.getContractAt(
    randomNFTABI,
    contract_address
  );
  // console.log(randomNFTABI);
  // console.log(randomNFTContract);
  console.log(
    "Your Polygon Address have: " +
      (await randomNFTContract.balanceOf(walletAddress)).toString() +
      " Nfts"
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
