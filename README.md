# smart-contract-cicd-pipeline
Automated DevSecOps pipeline for Ethereum smart contracts using GitHub Actions and Hardhat. This system integrates linting, compiling, security scanning with Slither, and unit testing into a CI/CD workflow that automatically deploys to a testnet upon successful validation.

Smart Contract DevSecOps Pipeline
This project demonstrates a professional, automated CI/CD pipeline for developing, testing, securing, and deploying Ethereum smart contracts. It uses Hardhat as the development framework and GitHub Actions for automation.

The system ensures that every code change pushed to the main branch undergoes a rigorous set of quality and security checks before being automatically deployed to the Sepolia testnet.

The System's Workflow
Trigger: A developer pushes code to the main branch.

Lint: Code style is checked with solhint.

Compile: Contracts are compiled with hardhat.

Security Scan: Static analysis is performed using Slither to find vulnerabilities.

Test: Unit tests are executed on a local Hardhat network.

Deploy: If all previous stages pass, the contract is automatically deployed to the Sepolia testnet.

Development with GitHub Codespaces
This project is configured to run entirely in the cloud using GitHub Codespaces, requiring no local setup.

Click the < > Code button on the repository page.

Go to the "Codespaces" tab and create a new codespace.

Once the codespace loads, open a new terminal.

Install the dependencies:

npm install

Create a local .env file for testing within the codespace:

cp .env.example .env

Fill in your details in the .env file (your Sepolia RPC URL and a private key with testnet ETH).

GitHub Secrets for Deployment
The automated deployment is powered by GitHub Actions and requires the following secrets to be set in your repository (Settings > Secrets and variables > Actions):

SEPOLIA_RPC_URL: Your RPC URL for the Sepolia testnet from a node provider like Alchemy or Infura.

PRIVATE_KEY: The private key of the wallet you want to use for deployment. This wallet must have Sepolia testnet ETH.
