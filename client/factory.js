const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/ef99378ef61c441098c57e96c3074bd1"
);

const addressfactory = "0x1F98431c8aD98523631AE4a59f267346ea31F984";

const abi = [
  "function getPool(address tokenA , address tokenB,uint24 fee) external view returns (address pool)",
];

const ContractFactory = new ethers.Contract(addressfactory, abi, provider);

const addressWETH = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const addressankr = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

const getPool = async () => {
  const addresspool = await ContractFactory.getPool(
    addressWETH,
    addressankr,
    3000
  );
  console.log(addresspool);
};

getPool();
