// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

// This contract is used for learning purposes.
// It is a simple time-locking contract where a user can lock funds
// for a specific duration.
contract Lock {
    // Making these variables immutable saves gas and increases security,
    // as they can only be set once in the constructor.
    uint public immutable unlockTime;
    address public immutable owner;

    event Withdrawal(uint amount, uint when);

    constructor(uint _unlockTime) payable {
        // This is a common pattern, but Slither correctly warns that
        // block.timestamp can be slightly manipulated by miners.
        // For many applications, this level of precision is acceptable.
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );

        unlockTime = _unlockTime;
        owner = msg.sender;
    }

    function withdraw() public {
        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        (bool success, ) = owner.call{value: address(this).balance}("");
        require(success, "Failed to send Ether");
    }
}


