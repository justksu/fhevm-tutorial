// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "fhevm/lib/TFHE.sol";

contract Counter {
    euint32 private counter;

    constructor() {
        counter = TFHE.asEuint32(0);
    }

    function increment() public {
        counter = TFHE.add(counter, 1);
    }

    function getCounter() public view returns (euint32) {
        return counter;
    }
}
