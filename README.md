# DappLibrarySys

An online library application developed with MEAN Stack and ethereum blockchain. The application allows librarians to input data via google Book API, register book statuses and checks in and out books to users. In addition, the ethereum contract providers security where only registered librarians can administer new librarian employee data. Finally, the appplication provides search engines and statuses of books in the library.

## Install project dependencies

- Install nodejs and npm
- Install Mongo DB
- Install Angular-cli version 8 and above globally
- Install Ganche-cli globally
- Install nodejs deps via `npm install`
- The operating browser must be a chrome web browser or other web browser with MetaMask application insnstalled. [MetaMask](https://metamask.io/)
- Create .env file with all the required global variables based on .env.example file.
- In the .env file, the Admin Address variable must be an ethereum address.

## Development server with Ganache test blockchain

For each numbered command lines, execute in different shell windows. Also, the numbered command lines must be orderly. Every ganche-cli execution, requires a new Angular compilation.

1. Start the ganache test blockchain with admin ethereum address options with ethereum gasses. For more information checkout [Ganache-cli](https://github.com/trufflesuite/ganache-cli). Once again, the privateKey varaible must be replaced with a privateKey associated with the Admin public address in the .env file.

'''
$ ganache-cli --account="privateKey, 1000000000000000000000000000000000000000"
'''

2. Deploy the Ethereum Contract

'''
$ truffle migrate
'''

3. Compile Angular Client Side code.

'''
$ ng build
'''

4. Start the application server.

'''
$ node app.js
'''

5. In order to upgrade employee status, Metamask must be logged in with the Admin wallet to localhost:8545.


## Production Server with Kovan Test Network

The application's ethereum contract has been uploaded in Kovan Test Network. In order to use the uploaded ethereum contract on Kovan Network, follow the commands below.

1. Replace the Admin address variable and Dapp_Url in .env file with the information in the .env.example.

2. Compile client side angular code.

'''
$ ng build --prod
'''

3. Start the server.

'''
$ node app.js
'''
