# DappLibrarySys

An online library application developed with MEAN Stack and ethereum blockchain. The application allows librarians to input data via [Google Books API](https://developers.google.com/books/docs/overview), register book statuses and checks in and out books to users. In addition, the ethereum contract providers security where only registered librarians can administer new librarian employee data. Finally, the application provides search engines and statuses of books in the library.

## Install project dependencies

- Install nodejs and npm
- Install Mongo DB
- Install Angular-cli version 8 and above globally
- Install Ganche-cli globally `npm install -g ganache-cli`
- Install nodejs deps via `npm install`
- The operating browser must be a chrome web browser or other web browser with MetaMask application insnstalled. [MetaMask](https://metamask.io/)
- Create .env file with all the required global variables based on .env.example file.
- In the .env file, the Admin Address variable must be an ethereum address.

## Development server with Ganache test blockchain

For each numbered command lines, execute in different shell windows. Also, the numbered command lines must be orderly. For every ganche-cli execution, a new Angular compilation is required.

1. Start the ganache test blockchain with admin ethereum address options with ethereum gasses. For more information checkout [Ganache-cli](https://github.com/trufflesuite/ganache-cli). Once again, the privateKey varaible must be replaced with a privateKey associated with the Admin public address in the .env file.

```
$ ganache-cli --account="privateKey, 1000000000000000000000000000000000000000"
```

2. Deploy the Ethereum Contract

```
$ truffle migrate
```

3. Compile Angular Client Side code.

```
$ ng build
```

4. Start the application server.

```
$ node app.js
```

5. In order to upgrade an employee status, Metamask must be logged in with the Admin wallet to localhost:8545.

### Usage

#### Create employee data and grant access
1. Go to `/admin` and login in with the Admin email address and password saved in the .env file.

2. Select the Admins page and fill out all the input to create a new lbrarian data. After the data has been created, make sure to select the can access Keystone button.

3. Go to `/office` and login with the same email and password.

4. Select the Employee button. The Employee page presents all the employee data with admin statuses presented from the blockchain. Only the employees with admin status can grant employee status by clicking the register button using Metamask. In addition, admin users can grant registered epmloyee an admin status by clicking the upgrade button.

5. Finally, registerd employee can log into `/admin` with the email and password. Also an employee with admin status has the ability to create new employee data.

#### Creat book data

1. Go to `/office` and click the Add Data. Search any desired book by filling the input. Select the searched data below the input form. Once the data is presented, select the Save Book button.

2. Return back to the main `/office` and select Add Book button. Enter the the title of the book saved previously from the Add Data page. At the bottom of the page, enter the number of books to be added in the library.

3. Go to `/`, the home page and enter the title, author, or the genre of the saved book.

#### Lend and return books to users

1. Go to `/admin` and click Users. Create a new user by entering all the input.

2. Go to `/office` and click CheckInOut. Enter the first and last name of the user. If a user exists, the data will present in the bottom of the form.

3. To lend a book, search the title of the book. If a user wants to return a book, click the return button next to the barrowed book.


## Production Server with Kovan Test Network

The application's ethereum contract has been uploaded in Kovan Test Network. In order to use the uploaded ethereum contract on Kovan Network, follow the commands below.

1. Replace the Admin address variable and Dapp_Url in .env file with the information in the .env.example.

2. Compile client side angular code.

```
$ ng build --prod
```

3. Start the server.

```
$ node app.js
```

## Testing

### Testing solidity contract

Replace the word privekey with actual privatekey related to ethereum account. Also the first privatekey variable must be related to the admin publickey presented in the .env file.

```
$ ganache-cli --account="privateKey, 1000000000000000000000000000000000000000" "privateKey, 1000000000000000000000000000000000000000" "privateKey, 1000000000000000000000000000000000000000"
```

Open a new shell window and enter the command below.

```
$ truffle test
```

### Testing API/Server

```
$ sudo mongod
```

```
$ npm test
```

## Available Routes

- Home Page `/`
- Office Page `/office`
- Admin Page `/admin`
