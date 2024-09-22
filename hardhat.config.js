require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.8.9",
      },
    ],
  },
  networks: {
    //aded network mumbai and sepolia
    mumbai: {
      url: "https://rpc-amoy.polygon.technology",
      accounts: [
        "b1f1d292c5a89cb5437ed5e9e93a66d972d7afcc217c6172f07d3fe7d79f6a92",
      ], //add your wallet private key here
    },
    sepolia: {
      url: "https://rpc.sepolia.org",
      accounts: [
        "b1f1d292c5a89cb5437ed5e9e93a66d972d7afcc217c6172f07d3fe7d79f6a92",
      ], //add your wallet private key here
    },
  },
};
