async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Upgrading implementations...");
  const proxyAddress = "0x74ce8e840f03b7435ddd3bf3b0fd8c47ec8d823b";
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
