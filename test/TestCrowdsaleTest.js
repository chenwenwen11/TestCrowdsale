var TestCrowdsale = artifacts.require("./TestCrowdsale.sol");
var TestToken = artifacts.require("./TestToken.sol");


contract('TestCrowdsale', function(accounts) {
	it('should deploy', async function(){
		const startTime = Math.round((new Date().getTime())/1000); // now
  		const endTime = Math.round((new Date().getTime() + (86400000 * 1))/1000); // Today + 1 day
  		let token = await TestToken.new();
  		const ico = await TestCrowdsale.new(
  			startTime, 
	    	endTime,
	    	5, 
	    	"0x20B5d5DE0403e1B1215476aD54330257F4fF3BC1", // Replace this wallet address with the last one (10th account) from Ganache UI. This will be treated as the beneficiary address. 
	    	2000000000000000000, // 2 ETH
	    	token.address,
	    	500000000000000000000 // 500 ETH
  		); 
  	})
}