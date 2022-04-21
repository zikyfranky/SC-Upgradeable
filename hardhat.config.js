require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
const { readFileSync } = require("fs");
// import("hardhat/config");

const PV = readFileSync("./.secrets").toString();
module.exports = {
  networks: {
    // defaultNetwork: "bsc_test",
    ganache: {
      url: "http://127.0.0.1:7545", // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    bsc_test: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [PV],
      network_id: "97",
      timeout: 200000,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.11",
        settings: {
          // See the solidity docs for advice about optimization and evmVersion
          optimizer: {
            enabled: false,
            runs: 200,
          },
          evmVersion: "byzantium",
        },
      },
    ],
  },
  etherscan: {
    apiKey: {
      bscTestnet: "HJFD6X2XDC1GQDI8YYPMBDW5MM2BRVCTSB",
    },
  },
  mocha: {
    timeout: 40000,
  },
};
