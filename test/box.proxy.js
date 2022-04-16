const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

let Box;
let BoxV2;
let box;

describe("Box (proxy)", function () {
  before(async function () {
    Box = await ethers.getContractFactory("Box");
    BoxV2 = await ethers.getContractFactory("BoxV2");

    box = await upgrades.deployProxy(Box, [42], { initializer: "store" });
  });

  it("returns a value previously initialized", async function () {
    expect((await box.retrieve()).toString()).to.equal("42");
  });

  it("should not have increment", async function () {
    try {
      await box.increment();
    } catch (e) {
      expect(e.toString()).to.equal(
        "TypeError: box.increment is not a function"
      );
    }
  });

  it("should upgrade and keep state", async function () {
    expect((await box.retrieve()).toString()).to.equal("42");
    box = await upgrades.upgradeProxy(box.address, BoxV2);
    expect((await box.retrieve()).toString()).to.equal("42");
  });

  it("should be inrementable", async function () {
    expect((await box.retrieve()).toString()).to.equal("42");
    await box.increment();
    expect((await box.retrieve()).toString()).to.equal("43");
  });
});
