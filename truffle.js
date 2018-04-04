var HDWalletProvider = require("truffle-hdwallet-provider");
var infura_apikey = "lqBlzZvt3zk2jcVnJ3A9"; // Either use this key or get yours at https://infura.io/signup. It's free.
var mnemonic = "drip mask square double ostrich gorilla bubble twin duty copper fossil route";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      gas: 6500000,
      network_id: "5777"
    },
    ropsten:  {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_apikey),
      network_id: 3,
      gas: 4500000
  	}
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};