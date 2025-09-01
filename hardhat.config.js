require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

// Retrieve environment variables securely.
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x0000000000000000000000000000000000000000000000000000000000000000";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    // Configuration for the public Sepolia testnet
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    // NEW: Configuration for the local Ganache network
    ganache: {
      url: "http://127.0.0.1:8545", // Standard Ganache RPC server URL
      chainId: 1337, // Default chain ID for Ganache
      // No 'accounts' needed here, Ganache provides them automatically
    },
    hardhat: {
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};


