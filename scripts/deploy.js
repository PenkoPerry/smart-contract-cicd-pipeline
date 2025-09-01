const hre = require("hardhat");

async function main() {
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // Calculate the unlock time as one year from the latest block's timestamp
  const latestBlock = await hre.ethers.provider.getBlock('latest');
  const unlockTime = latestBlock.timestamp + ONE_YEAR_IN_SECS;

  // We are deploying with a locked value of 0.001 ETH for this example.
  const lockedAmount = hre.ethers.parseEther("0.001");

  console.log(`Deploying Lock.sol contract...`);
  console.log(`Unlock time will be: ${new Date(unlockTime * 1000).toLocaleString()}`);
  console.log(`Locked amount will be: ${hre.ethers.formatEther(lockedAmount)} ETH`);

  const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  await lock.waitForDeployment();

  console.log(`\nContract 'Lock' deployed successfully!`);
  console.log(`Deployed to address: ${lock.target}`);
  console.log(`Transaction hash: ${lock.deploymentTransaction().hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

