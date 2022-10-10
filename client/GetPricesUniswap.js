const { ethers } = require("ethers");

const {
  abi: QuoterABI,
} = require("@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json");

// import { abi as QuoterABI } from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json'

const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/ef99378ef61c441098c57e96c3074bd1"
);

async function getPrice() {
  const quoterAddress = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";
  const quoterContract = new ethers.Contract(
    quoterAddress,
    QuoterABI,
    provider
  );
  console.log(quoterContract)
}
getPrice()