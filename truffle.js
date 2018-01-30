module.exports = {
	networks: {
	development: {
		host: "localhost",
		port: 8545,
		network_id: "*" // Match any network id
		},
	ropsten: {
		network_id: 3,
		host: "localhost",
		port: 8545

		},
	Rinkeby: {
		network_id: 4,
		host: "localhost",
		port: 8545

		}


	},
	rpc: {
	host: "localhost",
	post:8080
	}
};