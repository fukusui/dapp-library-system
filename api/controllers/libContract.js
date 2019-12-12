var Web3 = require('web3');
var express = require('express');
var LibContract = require('../../build/contracts/Librarian');

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

module.exports.getEmployee = async (address)  => {
  try {
    var web3 = new Web3(process.env.DAPP_URL);
    var networkId = await web3.eth.net.getId();
    var deployedNetwork = LibContract.networks[networkId];
    var libContract = new web3.eth.Contract(
      LibContract.abi, deployedNetwork && deployedNetwork.address,
    );
    var employee = await libContract.methods.employee(address).call();
    return employee;
  } catch (e) {
    console.log(e);
  }
}
