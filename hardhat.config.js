require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    zama: {
      url: "https://devnet.zama.ai/",
      accounts: []
    }
  }
};
