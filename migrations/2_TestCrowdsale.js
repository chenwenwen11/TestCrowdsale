var TestCrowdsale = artifacts.require("./TestCrowdsale.sol");
var TestToken = artifacts.require("./TestToken.sol");

module.exports = function(deployer) {
  	const startTime = web3.eth.getBlock('latest').timestamp + 120;
  	const endTime = startTime + (86400 * 30); // 30 days;

  	deployer.deploy(TestToken).then(function() {
  		return deployer.deploy(TestCrowdsale,	
	  		startTime, 
		    endTime,
		    5, 
		    "0x5AEDA56215b167893e80B4fE645BA6d5Bab767DE", 
		    2000000000000000000, // 2 ETH
		    TestToken.address,
		    500000000000000000000 // 500 ETH
		);
	});
};

