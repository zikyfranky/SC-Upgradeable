async function main() {
  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying proxy, proxy admin and implementations...");
  const box = await upgrades.deployProxy(Box, [42], { initializer: "store" });
  console.log("Proxy deployed to: ", box.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
[];
