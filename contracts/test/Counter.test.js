const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  it("Should increment counter", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    await counter.increment();
    console.log("Counter incremented successfully");
  });
});
