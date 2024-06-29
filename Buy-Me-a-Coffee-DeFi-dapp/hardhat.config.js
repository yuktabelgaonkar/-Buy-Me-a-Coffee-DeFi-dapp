require("@nomiclabs/hardhat-waffle");
require("dotenv").config();  // Load environment variables from .env file

module.exports = {
    solidity: "0.8.4",
    networks: {
        sepolia: {
            url: `https://eth-sepolia.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
            accounts: [`0x${process.env.SEPOLIA_PRIVATE_KEY}`]
        }
    }
};
