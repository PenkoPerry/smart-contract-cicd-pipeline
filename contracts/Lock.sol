
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// This is a basic example contract from Hardhat.
// It allows someone to deposit ETH that can only be withdrawn after a specific time.
contract Lock {
    uint public unlockTime;
    address payable public owner;

    event Withdrawal(uint amount, uint when);

    constructor(uint _unlockTime) payable {
        // The owner is the deployer of the contract
        owner = payable(msg.sender);
        // The unlock time must be in the future
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );
        unlockTime = _unlockTime;
    }

    function withdraw() public {
        // Check if the unlock time has passed
        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        // Check if the caller is the owner
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        // Transfer the entire contract balance to the owner
        owner.transfer(address(this).balance);
    }
}
