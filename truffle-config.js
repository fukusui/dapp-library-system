if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
// const HDWalletProviderMem = require("truffle-hdwallet-provider");
// const mnemonic = "swing enroll monkey train oak lottery work dash offer transfer online open leg job argue"
//private key: 0x937745f3098091f02f67e7c9f4be6719dbc790dab82c3ae9f4e6f3183be3c7dd

//address: 0xAf32d7Aeb38791a4DB7eF1Ba6a2E6c8D85518143

module.exports = {
  networks: {
    development: {
      host:"localhost",
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      from: process.env.ADMIN_ADDRESS
    },
    // kovan: {
    //   provider: new HDWalletProviderMem(mnemonic, "https://kovan.infura.io/v3/09323fc48925428bbae7cefd272dd0c1"),
    //   gas: "6238278",
    //   gasPrice: "8000000000",
    //   network_id: "*"
    // }

    // Another network with more advanced options...
    // advanced: {
      // port: 8777,             // Custom port
      // network_id: 1342,       // Custom network
      // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
      // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
      // from: <address>,        // Account to send txs from (default: accounts[0])
      // websockets: true        // Enable EventEmitter interface for web3 (default: false)
    // },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    // ropsten: {
      // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
      // network_id: 3,       // Ropsten's id
      // gas: 5500000,        // Ropsten has a lower block limit than mainnet
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },

    // Useful for private networks
    // private: {
      // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
      // network_id: 2111,   // This network is yours, in the cloud.
      // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}
