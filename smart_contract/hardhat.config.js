require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    ropsten: {
      url: 'the address that alchemy give',
      accounts: ['from metamask account, click export private key']
    }
  }
};
