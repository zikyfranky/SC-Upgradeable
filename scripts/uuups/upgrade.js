async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Upgrading implementations...");
  const proxyAddress = "0xf58a2b411653c2d24c73eFADD4a5D593bf629645";
  const box = await upgrades.upgradeProxy(proxyAddress, BoxV2);
  console.log("Upgraded Implementation! ", box.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
[];
