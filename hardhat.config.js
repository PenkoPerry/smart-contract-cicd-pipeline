
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

// This is the Hardhat configuration file.
// It sets up the Solidity compiler, network connections, and other project settings.

// Retrieve environment variables securely. 
// In the GitHub Actions pipeline, these will be provided by GitHub Secrets.
// For local or Codespaces development, they will come from a .env file.
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "https://sepolia.infura.io/v3/your-infura-id";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x0000000000000000000000000000000000000000000000000000000000000000"; // Default empty key
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    hardhat: {
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
