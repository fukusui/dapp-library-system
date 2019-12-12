pragma solidity ^0.5.1;

contract Librarian {
    event NewAdmin(address admin);
    event NewEmployee(address employee);
    event DeletedEmployee(address employee);

    mapping (address => uint) public employee;

    constructor() public {
        employee[msg.sender] = 2;
    }

    modifier adminOnly() {
        require(employee[msg.sender] == 2);
        _;
    }

    function addAdmin(address _address) public adminOnly {
        require(employee[_address] == 1);
        employee[_address]++;
        emit NewAdmin(_address);
    }

    function addEmployee(address _address) public adminOnly {
        require(employee[_address] == 0);
        employee[_address] = 1;
        emit NewEmployee(_address);
    }

    function deleteEmployee(address _address) public adminOnly {
        require(msg.sender != _address);
        delete employee[_address];
        emit DeletedEmployee(_address);
    }
}
