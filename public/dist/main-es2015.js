(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./build/contracts/Librarian.json":
/*!****************************************!*\
  !*** ./build/contracts/Librarian.json ***!
  \****************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, networkType, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"Librarian\",\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"employee\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\"},{\"constant\":false,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"addAdmin\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"addEmployee\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"deleteEmployee\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.5.8+commit.23d335f2\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"employee\\\",\\\"outputs\\\":[{\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"_address\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"deleteEmployee\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"_address\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"addAdmin\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"_address\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"addEmployee\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":false,\\\"name\\\":\\\"admin\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"NewAdmin\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":false,\\\"name\\\":\\\"employee\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"NewEmployee\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":false,\\\"name\\\":\\\"employee\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"DeletedEmployee\\\",\\\"type\\\":\\\"event\\\"}],\\\"devdoc\\\":{\\\"methods\\\":{}},\\\"userdoc\\\":{\\\"methods\\\":{}}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/home/zangif/Documents/projectcs/dapp-library-sys/contracts/Librarian.sol\\\":\\\"Librarian\\\"},\\\"evmVersion\\\":\\\"petersburg\\\",\\\"libraries\\\":{},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/home/zangif/Documents/projectcs/dapp-library-sys/contracts/Librarian.sol\\\":{\\\"keccak256\\\":\\\"0x6ec06d6693d4cad1f3af5de96ffd8790cb72e3e17e30d96eea9f2dac8ccd7c40\\\",\\\"urls\\\":[\\\"bzzr://3dfbc8664075b8a1d8a8ad631112291d04772f385b1f89e58e00878b0a806550\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x608060405234801561001057600080fd5b5060026000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061056f806100646000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806309d495fd146100515780636e7c4ab1146100a957806370480275146100ed578063f3cb8c3114610131575b600080fd5b6100936004803603602081101561006757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610175565b6040518082815260200191505060405180910390f35b6100eb600480360360208110156100bf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061018d565b005b61012f6004803603602081101561010357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102b9565b005b6101736004803603602081101561014757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610403565b005b60006020528060005260406000206000915090505481565b60026000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146101d857600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561021157600080fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090557f25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b60026000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461030457600080fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461034f57600080fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919060010191905055507f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b60026000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461044e57600080fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461049957600080fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15056fea165627a7a72305820422b0b7c34aef589a574bdca6b9f85688c3c2889a28142dfd7626e2a753b687a0029\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806309d495fd146100515780636e7c4ab1146100a957806370480275146100ed578063f3cb8c3114610131575b600080fd5b6100936004803603602081101561006757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610175565b6040518082815260200191505060405180910390f35b6100eb600480360360208110156100bf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061018d565b005b61012f6004803603602081101561010357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102b9565b005b6101736004803603602081101561014757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610403565b005b60006020528060005260406000206000915090505481565b60026000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146101d857600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561021157600080fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090557f25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b60026000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461030457600080fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461034f57600080fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919060010191905055507f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b60026000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461044e57600080fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461049957600080fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15056fea165627a7a72305820422b0b7c34aef589a574bdca6b9f85688c3c2889a28142dfd7626e2a753b687a0029\",\"sourceMap\":\"25:886:0:-;;;220:62;8:9:-1;5:2;;;30:1;27;20:12;5:2;220:62:0;274:1;251:8;:20;260:10;251:20;;;;;;;;;;;;;;;:24;;;;25:886;;;;;;\",\"deployedSourceMap\":\"25:886:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;25:886:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;172:41;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;172:41:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;727:182;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;727:182:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;377:165;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;377:165:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;548:173;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;548:173:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;172:41;;;;;;;;;;;;;;;;;:::o;727:182::-;351:1;327:8;:20;336:10;327:20;;;;;;;;;;;;;;;;:25;319:34;;;;;;818:8;804:22;;:10;:22;;;;796:31;;;;;;844:8;:18;853:8;844:18;;;;;;;;;;;;;;;837:25;;;877;893:8;877:25;;;;;;;;;;;;;;;;;;;;;;727:182;:::o;377:165::-;351:1;327:8;:20;336:10;327:20;;;;;;;;;;;;;;;;:25;319:34;;;;;;470:1;448:8;:18;457:8;448:18;;;;;;;;;;;;;;;;:23;440:32;;;;;;482:8;:18;491:8;482:18;;;;;;;;;;;;;;;;:20;;;;;;;;;;;;;517:18;526:8;517:18;;;;;;;;;;;;;;;;;;;;;;377:165;:::o;548:173::-;351:1;327:8;:20;336:10;327:20;;;;;;;;;;;;;;;;:25;319:34;;;;;;644:1;622:8;:18;631:8;622:18;;;;;;;;;;;;;;;;:23;614:32;;;;;;677:1;656:8;:18;665:8;656:18;;;;;;;;;;;;;;;:22;;;;693:21;705:8;693:21;;;;;;;;;;;;;;;;;;;;;;548:173;:::o\",\"source\":\"pragma solidity ^0.5.1;\\n\\ncontract Librarian {\\n    event NewAdmin(address admin);\\n    event NewEmployee(address employee);\\n    event DeletedEmployee(address employee);\\n\\n    mapping (address => uint) public employee;\\n\\n    constructor() public {\\n        employee[msg.sender] = 2;\\n    }\\n\\n    modifier adminOnly() {\\n        require(employee[msg.sender] == 2);\\n        _;\\n    }\\n\\n    function addAdmin(address _address) public adminOnly {\\n        require(employee[_address] == 1);\\n        employee[_address]++;\\n        emit NewAdmin(_address);\\n    }\\n\\n    function addEmployee(address _address) public adminOnly {\\n        require(employee[_address] == 0);\\n        employee[_address] = 1;\\n        emit NewEmployee(_address);\\n    }\\n\\n    function deleteEmployee(address _address) public adminOnly {\\n        require(msg.sender != _address);\\n        delete employee[_address];\\n        emit DeletedEmployee(_address);\\n    }\\n}\\n\",\"sourcePath\":\"/home/zangif/Documents/projectcs/dapp-library-sys/contracts/Librarian.sol\",\"ast\":{\"absolutePath\":\"/home/zangif/Documents/projectcs/dapp-library-sys/contracts/Librarian.sol\",\"exportedSymbols\":{\"Librarian\":[117]},\"id\":118,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":1,\"literals\":[\"solidity\",\"^\",\"0.5\",\".1\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:0\"},{\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":true,\"id\":117,\"linearizedBaseContracts\":[117],\"name\":\"Librarian\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"anonymous\":false,\"documentation\":null,\"id\":5,\"name\":\"NewAdmin\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":4,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":3,\"indexed\":false,\"name\":\"admin\",\"nodeType\":\"VariableDeclaration\",\"scope\":5,\"src\":\"65:13:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":2,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"65:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"64:15:0\"},\"src\":\"50:30:0\"},{\"anonymous\":false,\"documentation\":null,\"id\":9,\"name\":\"NewEmployee\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":8,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7,\"indexed\":false,\"name\":\"employee\",\"nodeType\":\"VariableDeclaration\",\"scope\":9,\"src\":\"103:16:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":6,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"103:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"102:18:0\"},\"src\":\"85:36:0\"},{\"anonymous\":false,\"documentation\":null,\"id\":13,\"name\":\"DeletedEmployee\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":12,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":11,\"indexed\":false,\"name\":\"employee\",\"nodeType\":\"VariableDeclaration\",\"scope\":13,\"src\":\"148:16:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":10,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"148:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"147:18:0\"},\"src\":\"126:40:0\"},{\"constant\":false,\"id\":17,\"name\":\"employee\",\"nodeType\":\"VariableDeclaration\",\"scope\":117,\"src\":\"172:41:0\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"},\"typeName\":{\"id\":16,\"keyType\":{\"id\":14,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"181:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"172:25:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"},\"valueType\":{\"id\":15,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"192:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}},\"value\":null,\"visibility\":\"public\"},{\"body\":{\"id\":27,\"nodeType\":\"Block\",\"src\":\"241:41:0\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":25,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":20,\"name\":\"employee\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":17,\"src\":\"251:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":23,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":21,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":189,\"src\":\"260:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":22,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"260:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"251:20:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"32\",\"id\":24,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"274:1:0\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_2_by_1\",\"typeString\":\"int_const 2\"},\"value\":\"2\"},\"src\":\"251:24:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":26,\"nodeType\":\"ExpressionStatement\",\"src\":\"251:24:0\"}]},\"documentation\":null,\"id\":28,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":18,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"231:2:0\"},\"returnParameters\":{\"id\":19,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"241:0:0\"},\"scope\":117,\"src\":\"220:62:0\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":40,\"nodeType\":\"Block\",\"src\":\"309:62:0\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":36,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":31,\"name\":\"employee\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":17,\"src\":\"327:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":34,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":32,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":189,\"src\":\"336:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":33,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"336:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"327:20:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"hexValue\":\"32\",\"id\":35,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"351:1:0\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_2_by_1\",\"typeString\":\"int_const 2\"},\"value\":\"2\"},\"src\":\"327:25:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":30,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[192,193],\"referencedDeclaration\":192,\"src\":\"319:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":37,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"319:34:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":38,\"nodeType\":\"ExpressionStatement\",\"src\":\"319:34:0\"},{\"id\":39,\"nodeType\":\"PlaceholderStatement\",\"src\":\"363:1:0\"}]},\"documentation\":null,\"id\":41,\"name\":\"adminOnly\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":29,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"306:2:0\"},\"src\":\"288:83:0\",\"visibility\":\"internal\"},{\"body\":{\"id\":65,\"nodeType\":\"Block\",\"src\":\"430:112:0\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":53,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":49,\"name\":\"employee\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":17,\"src\":\"448:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":51,\"indexExpression\":{\"argumentTypes\":null,\"id\":50,\"name\":\"_address\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":43,\"src\":\"457:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"448:18:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"hexValue\":\"31\",\"id\":52,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"470:1:0\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"448:23:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":48,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[192,193],\"referencedDeclaration\":192,\"src\":\"440:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":54,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"440:32:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":55,\"nodeType\":\"ExpressionStatement\",\"src\":\"440:32:0\"},{\"expression\":{\"argumentTypes\":null,\"id\":59,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"482:20:0\",\"subExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":56,\"name\":\"employee\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":17,\"src\":\"482:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":58,\"indexExpression\":{\"argumentTypes\":null,\"id\":57,\"name\":\"_address\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":43,\"src\":\"491:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"482:18:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":60,\"nodeType\":\"ExpressionStatement\",\"src\":\"482:20:0\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":62,\"name\":\"_address\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":43,\"src\":\"526:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"id\":61,\"name\":\"NewAdmin\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":5,\"src\":\"517:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":63,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"517:18:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":64,\"nodeType\":\"EmitStatement\",\"src\":\"512:23:0\"}]},\"documentation\":null,\"id\":66,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":46,\"modifierName\":{\"argumentTypes\":null,\"id\":45,\"name\":\"adminOnly\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":41,\"src\":\"420:9:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"420:9:0\"}],\"name\":\"addAdmin\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":44,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":43,\"name\":\"_address\",\"nodeType\":\"VariableDeclaration\",\"scope\":66,\"src\":\"395:16:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":42,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"395:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"394:18:0\"},\"returnParameters\":{\"id\":47,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"430:0:0\"},\"scope\":117,\"src\":\"377:165:0\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":91,\"nodeType\":\"Block\",\"src\":\"604:117:0\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":78,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":74,\"name\":\"employee\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":17,\"src\":\"622:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":76,\"indexExpression\":{\"argumentTypes\":null,\"id\":75,\"name\":\"_address\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":68,\"src\":\"631:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"622:18:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"hexValue\":\"30\",\"id\":77,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"644:1:0\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"src\":\"622:23:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":73,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[192,193],\"referencedDeclaration\":192,\"src\":\"614:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":79,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"614:32:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":80,\"nodeType\":\"ExpressionStatement\",\"src\":\"614:32:0\"},{\"expression\":{\"argumentTypes\":null,\"id\":85,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":81,\"name\":\"employee\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":17,\"src\":\"656:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":83,\"indexExpression\":{\"argumentTypes\":null,\"id\":82,\"name\":\"_address\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":68,\"src\":\"665:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"656:18:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"31\",\"id\":84,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"677:1:0\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"656:22:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":86,\"nodeType\":\"ExpressionStatement\",\"src\":\"656:22:0\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":88,\"name\":\"_address\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":68,\"src\":\"705:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"id\":87,\"name\":\"NewEmployee\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":9,\"src\":\"693:11:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":89,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"693:21:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":90,\"nodeType\":\"EmitStatement\",\"src\":\"688:26:0\"}]},\"documentation\":null,\"id\":92,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":71,\"modifierName\":{\"argumentTypes\":null,\"id\":70,\"name\":\"adminOnly\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":41,\"src\":\"594:9:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"594:9:0\"}],\"name\":\"addEmployee\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":69,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":68,\"name\":\"_address\",\"nodeType\":\"VariableDeclaration\",\"scope\":92,\"src\":\"569:16:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":67,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"569:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"568:18:0\"},\"returnParameters\":{\"id\":72,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"604:0:0\"},\"scope\":117,\"src\":\"548:173:0\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":115,\"nodeType\":\"Block\",\"src\":\"786:123:0\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":103,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":100,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":189,\"src\":\"804:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":101,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"804:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"!=\",\"rightExpression\":{\"argumentTypes\":null,\"id\":102,\"name\":\"_address\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":94,\"src\":\"818:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"804:22:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":99,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[192,193],\"referencedDeclaration\":192,\"src\":\"796:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":104,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"796:31:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":105,\"nodeType\":\"ExpressionStatement\",\"src\":\"796:31:0\"},{\"expression\":{\"argumentTypes\":null,\"id\":109,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"delete\",\"prefix\":true,\"src\":\"837:25:0\",\"subExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":106,\"name\":\"employee\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":17,\"src\":\"844:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":108,\"indexExpression\":{\"argumentTypes\":null,\"id\":107,\"name\":\"_address\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":94,\"src\":\"853:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"844:18:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":110,\"nodeType\":\"ExpressionStatement\",\"src\":\"837:25:0\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":112,\"name\":\"_address\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":94,\"src\":\"893:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"id\":111,\"name\":\"DeletedEmployee\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":13,\"src\":\"877:15:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":113,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"877:25:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":114,\"nodeType\":\"EmitStatement\",\"src\":\"872:30:0\"}]},\"documentation\":null,\"id\":116,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":97,\"modifierName\":{\"argumentTypes\":null,\"id\":96,\"name\":\"adminOnly\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":41,\"src\":\"776:9:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"776:9:0\"}],\"name\":\"deleteEmployee\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":95,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":94,\"name\":\"_address\",\"nodeType\":\"VariableDeclaration\",\"scope\":116,\"src\":\"751:16:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":93,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"751:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"750:18:0\"},\"returnParameters\":{\"id\":98,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"786:0:0\"},\"scope\":117,\"src\":\"727:182:0\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"}],\"scope\":118,\"src\":\"25:886:0\"}],\"src\":\"0:912:0\"},\"legacyAST\":{\"absolutePath\":\"/home/zangif/Documents/projectcs/dapp-library-sys/contracts/Librarian.sol\",\"exportedSymbols\":{\"Librarian\":[117]},\"id\":118,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":1,\"literals\":[\"solidity\",\"^\",\"0.5\",\".1\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:23:0\"},{\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":true,\"id\":117,\"linearizedBaseContracts\":[117],\"name\":\"Librarian\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"anonymous\":false,\"documentation\":null,\"id\":5,\"name\":\"NewAdmin\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":4,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":3,\"indexed\":false,\"name\":\"admin\",\"nodeType\":\"VariableDeclaration\",\"scope\":5,\"src\":\"65:13:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":2,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"65:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"64:15:0\"},\"src\":\"50:30:0\"},{\"anonymous\":false,\"documentation\":null,\"id\":9,\"name\":\"NewEmployee\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":8,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7,\"indexed\":false,\"name\":\"employee\",\"nodeType\":\"VariableDeclaration\",\"scope\":9,\"src\":\"103:16:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":6,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"103:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"102:18:0\"},\"src\":\"85:36:0\"},{\"anonymous\":false,\"documentation\":null,\"id\":13,\"name\":\"DeletedEmployee\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":12,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":11,\"indexed\":false,\"name\":\"employee\",\"nodeType\":\"VariableDeclaration\",\"scope\":13,\"src\":\"148:16:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":10,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"148:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"147:18:0\"},\"src\":\"126:40:0\"},{\"constant\":false,\"id\":17,\"name\":\"employee\",\"nodeType\":\"VariableDeclaration\",\"scope\":117,\"src\":\"172:41:0\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"},\"typeName\":{\"id\":16,\"keyType\":{\"id\":14,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"181:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"nodeType\":\"Mapping\",\"src\":\"172:25:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"},\"valueType\":{\"id\":15,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"192:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}}},\"value\":null,\"visibility\":\"public\"},{\"body\":{\"id\":27,\"nodeType\":\"Block\",\"src\":\"241:41:0\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":25,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":20,\"name\":\"employee\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":17,\"src\":\"251:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":23,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":21,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":189,\"src\":\"260:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":22,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"260:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"251:20:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"32\",\"id\":24,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"274:1:0\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_2_by_1\",\"typeString\":\"int_const 2\"},\"value\":\"2\"},\"src\":\"251:24:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":26,\"nodeType\":\"ExpressionStatement\",\"src\":\"251:24:0\"}]},\"documentation\":null,\"id\":28,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":18,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"231:2:0\"},\"returnParameters\":{\"id\":19,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"241:0:0\"},\"scope\":117,\"src\":\"220:62:0\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":40,\"nodeType\":\"Block\",\"src\":\"309:62:0\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":36,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":31,\"name\":\"employee\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":17,\"src\":\"327:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":34,\"indexExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":32,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":189,\"src\":\"336:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":33,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"336:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"327:20:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"hexValue\":\"32\",\"id\":35,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"351:1:0\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_2_by_1\",\"typeString\":\"int_const 2\"},\"value\":\"2\"},\"src\":\"327:25:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":30,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[192,193],\"referencedDeclaration\":192,\"src\":\"319:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":37,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"319:34:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":38,\"nodeType\":\"ExpressionStatement\",\"src\":\"319:34:0\"},{\"id\":39,\"nodeType\":\"PlaceholderStatement\",\"src\":\"363:1:0\"}]},\"documentation\":null,\"id\":41,\"name\":\"adminOnly\",\"nodeType\":\"ModifierDefinition\",\"parameters\":{\"id\":29,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"306:2:0\"},\"src\":\"288:83:0\",\"visibility\":\"internal\"},{\"body\":{\"id\":65,\"nodeType\":\"Block\",\"src\":\"430:112:0\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":53,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":49,\"name\":\"employee\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":17,\"src\":\"448:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":51,\"indexExpression\":{\"argumentTypes\":null,\"id\":50,\"name\":\"_address\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":43,\"src\":\"457:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"448:18:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"hexValue\":\"31\",\"id\":52,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"470:1:0\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"448:23:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":48,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[192,193],\"referencedDeclaration\":192,\"src\":\"440:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":54,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"440:32:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":55,\"nodeType\":\"ExpressionStatement\",\"src\":\"440:32:0\"},{\"expression\":{\"argumentTypes\":null,\"id\":59,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"++\",\"prefix\":false,\"src\":\"482:20:0\",\"subExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":56,\"name\":\"employee\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":17,\"src\":\"482:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":58,\"indexExpression\":{\"argumentTypes\":null,\"id\":57,\"name\":\"_address\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":43,\"src\":\"491:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"482:18:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":60,\"nodeType\":\"ExpressionStatement\",\"src\":\"482:20:0\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":62,\"name\":\"_address\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":43,\"src\":\"526:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"id\":61,\"name\":\"NewAdmin\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":5,\"src\":\"517:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":63,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"517:18:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":64,\"nodeType\":\"EmitStatement\",\"src\":\"512:23:0\"}]},\"documentation\":null,\"id\":66,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":46,\"modifierName\":{\"argumentTypes\":null,\"id\":45,\"name\":\"adminOnly\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":41,\"src\":\"420:9:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"420:9:0\"}],\"name\":\"addAdmin\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":44,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":43,\"name\":\"_address\",\"nodeType\":\"VariableDeclaration\",\"scope\":66,\"src\":\"395:16:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":42,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"395:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"394:18:0\"},\"returnParameters\":{\"id\":47,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"430:0:0\"},\"scope\":117,\"src\":\"377:165:0\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":91,\"nodeType\":\"Block\",\"src\":\"604:117:0\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"id\":78,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":74,\"name\":\"employee\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":17,\"src\":\"622:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":76,\"indexExpression\":{\"argumentTypes\":null,\"id\":75,\"name\":\"_address\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":68,\"src\":\"631:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"622:18:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"==\",\"rightExpression\":{\"argumentTypes\":null,\"hexValue\":\"30\",\"id\":77,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"644:1:0\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_0_by_1\",\"typeString\":\"int_const 0\"},\"value\":\"0\"},\"src\":\"622:23:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":73,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[192,193],\"referencedDeclaration\":192,\"src\":\"614:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":79,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"614:32:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":80,\"nodeType\":\"ExpressionStatement\",\"src\":\"614:32:0\"},{\"expression\":{\"argumentTypes\":null,\"id\":85,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":81,\"name\":\"employee\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":17,\"src\":\"656:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":83,\"indexExpression\":{\"argumentTypes\":null,\"id\":82,\"name\":\"_address\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":68,\"src\":\"665:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"656:18:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"argumentTypes\":null,\"hexValue\":\"31\",\"id\":84,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"number\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"677:1:0\",\"subdenomination\":null,\"typeDescriptions\":{\"typeIdentifier\":\"t_rational_1_by_1\",\"typeString\":\"int_const 1\"},\"value\":\"1\"},\"src\":\"656:22:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":86,\"nodeType\":\"ExpressionStatement\",\"src\":\"656:22:0\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":88,\"name\":\"_address\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":68,\"src\":\"705:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"id\":87,\"name\":\"NewEmployee\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":9,\"src\":\"693:11:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":89,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"693:21:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":90,\"nodeType\":\"EmitStatement\",\"src\":\"688:26:0\"}]},\"documentation\":null,\"id\":92,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":71,\"modifierName\":{\"argumentTypes\":null,\"id\":70,\"name\":\"adminOnly\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":41,\"src\":\"594:9:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"594:9:0\"}],\"name\":\"addEmployee\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":69,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":68,\"name\":\"_address\",\"nodeType\":\"VariableDeclaration\",\"scope\":92,\"src\":\"569:16:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":67,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"569:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"568:18:0\"},\"returnParameters\":{\"id\":72,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"604:0:0\"},\"scope\":117,\"src\":\"548:173:0\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":115,\"nodeType\":\"Block\",\"src\":\"786:123:0\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"commonType\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"id\":103,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftExpression\":{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":100,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":189,\"src\":\"804:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":101,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"804:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}},\"nodeType\":\"BinaryOperation\",\"operator\":\"!=\",\"rightExpression\":{\"argumentTypes\":null,\"id\":102,\"name\":\"_address\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":94,\"src\":\"818:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"src\":\"804:22:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}],\"id\":99,\"name\":\"require\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[192,193],\"referencedDeclaration\":192,\"src\":\"796:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_require_pure$_t_bool_$returns$__$\",\"typeString\":\"function (bool) pure\"}},\"id\":104,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"796:31:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":105,\"nodeType\":\"ExpressionStatement\",\"src\":\"796:31:0\"},{\"expression\":{\"argumentTypes\":null,\"id\":109,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"UnaryOperation\",\"operator\":\"delete\",\"prefix\":true,\"src\":\"837:25:0\",\"subExpression\":{\"argumentTypes\":null,\"baseExpression\":{\"argumentTypes\":null,\"id\":106,\"name\":\"employee\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":17,\"src\":\"844:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_address_$_t_uint256_$\",\"typeString\":\"mapping(address => uint256)\"}},\"id\":108,\"indexExpression\":{\"argumentTypes\":null,\"id\":107,\"name\":\"_address\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":94,\"src\":\"853:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"nodeType\":\"IndexAccess\",\"src\":\"844:18:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":110,\"nodeType\":\"ExpressionStatement\",\"src\":\"837:25:0\"},{\"eventCall\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":112,\"name\":\"_address\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":94,\"src\":\"893:8:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"id\":111,\"name\":\"DeletedEmployee\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":13,\"src\":\"877:15:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_event_nonpayable$_t_address_$returns$__$\",\"typeString\":\"function (address)\"}},\"id\":113,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"877:25:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_tuple$__$\",\"typeString\":\"tuple()\"}},\"id\":114,\"nodeType\":\"EmitStatement\",\"src\":\"872:30:0\"}]},\"documentation\":null,\"id\":116,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[{\"arguments\":null,\"id\":97,\"modifierName\":{\"argumentTypes\":null,\"id\":96,\"name\":\"adminOnly\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":41,\"src\":\"776:9:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_modifier$__$\",\"typeString\":\"modifier ()\"}},\"nodeType\":\"ModifierInvocation\",\"src\":\"776:9:0\"}],\"name\":\"deleteEmployee\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":95,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":94,\"name\":\"_address\",\"nodeType\":\"VariableDeclaration\",\"scope\":116,\"src\":\"751:16:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":93,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"751:7:0\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"750:18:0\"},\"returnParameters\":{\"id\":98,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"786:0:0\"},\"scope\":117,\"src\":\"727:182:0\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"}],\"scope\":118,\"src\":\"25:886:0\"}],\"src\":\"0:912:0\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.5.8+commit.23d335f2.Emscripten.clang\"},\"networks\":{\"42\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0xa977B0fEFA6734d00B9315559BaD7b0a24AA8Be6\",\"transactionHash\":\"0x8e1c6bb42927c577b8d30e58871fe4e1750b85fcf87a83a2684ecff22429fba3\"},\"1573843862100\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x856609C7c3DA78a7503ff16D4Da8FfcF8792ADe3\",\"transactionHash\":\"0x0fc79c042a03459d5f5641525f13ed87f82fbbee82260cd1793421e805e744ee\"},\"1573859602635\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1573861631634\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1573861886583\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1573862345445\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1573862941276\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1573863322818\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1573863432378\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1573863575045\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1573864193398\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1573864811233\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1573864991029\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1573869074220\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1573874348891\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1573922107011\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574009282094\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574025945364\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574029555731\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574105741864\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574178084316\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574278333510\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574344499631\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574355418764\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574365961167\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574380959443\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574478022958\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574527121621\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574639404060\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574699965424\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574732356821\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574804171389\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574812975156\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574864079073\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574887714740\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574887818824\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574887915654\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574888156469\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574889857561\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574890260777\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574890661398\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574891720593\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574898355300\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574984689012\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574991042140\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574994168460\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1574998513421\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575034107952\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575134902295\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575160963392\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575212420823\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575303098675\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575313047077\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575397465575\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575476968743\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575488895009\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575494608741\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575495716539\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575502109427\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575503090477\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575503123674\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575503219358\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575503938306\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575504781558\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575558539998\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575566543450\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575566680737\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575571372227\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575571989791\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575573393942\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575578477732\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575578601443\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575578719810\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575581981222\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575657424332\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575685016796\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575686278452\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575841670500\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575846507887\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575847568848\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575848691770\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575871534757\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1575935660806\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576085488392\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576087068523\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576091313365\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576092050031\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576093798243\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576094204524\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576100969618\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576103486861\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576103737262\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576104152395\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576104350038\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576109254495\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576109395970\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576109608251\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576110222757\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576111427545\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576113335412\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576113852714\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576114764836\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"},\"1576164341162\":{\"events\":{\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"admin\",\"type\":\"address\"}],\"name\":\"NewAdmin\",\"type\":\"event\",\"signature\":\"0x71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c\"},\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"NewEmployee\",\"type\":\"event\",\"signature\":\"0x37e9308d0d750d43a2e5ef16b6d47b60b2741e12be41128ca3bec877db4f9dcb\"},\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\":{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"employee\",\"type\":\"address\"}],\"name\":\"DeletedEmployee\",\"type\":\"event\",\"signature\":\"0x25eb2102325c2e781a3640da7ca93ed0ba2d259cce9b60806932dac087c60c2c\"}},\"links\":{},\"address\":\"0x2812251cd3eE8aAc0DF18596fEDd041cAEf6585B\",\"transactionHash\":\"0x533b5c43037e62d97726dc541cb942749f552b547f1280ef84a20b109f1afd16\"}},\"schemaVersion\":\"3.0.17\",\"updatedAt\":\"2019-12-12T15:25:49.631Z\",\"networkType\":\"ethereum\",\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}}");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home/home.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home/home.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid bg-primary\">\n  <div class=\"container text-center\">\n    <h1 class=\"text-white\">Online School Library</h1>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row buff-bottom\">\n    <div class=\"col-md-4 buff-bottom-sm\">\n      <search-title\n        (addBookEvent)=\"getBooks($event)\"></search-title>\n    </div>\n    <div class=\"col-md-4 buff-bottom-sm\">\n      <search-author\n        (addBookEvent)=\"getBooks($event)\"></search-author>\n    </div>\n    <div class=\"col-md-4 buff-bottom-sm\">\n      <search-genre\n        (addBookEvent)=\"getBooks($event)\"></search-genre>\n    </div>\n  </div>\n\n  <div class=\"text-center\">\n    <books [books]=\"books\" *ngIf=\"books\"\n      (bookEvent)=\"selectBook($event)\"></books>\n  </div>\n\n  <div class=\"text-center\">\n    <book *ngIf=\"bookData\" [bookData]=\"bookData\"></book>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/search-author/search-author.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/search-author/search-author.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"authorForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"first_name\">\n      Author First Name:\n    </label>\n    <input class=\"form-control\" type=\"text\"\n\t\t\tformControlName=\"first_name\" required>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"last_name\">\n      Author Last Name:\n    </label>\n    <input class=\"form-control\" type=\"text\"\n\t\t\tformControlName=\"last_name\" required>\n  </div>\n\t<button class=\"btn btn-primary\" type=\"submit\"\n\t\t[disabled]=\"!authorForm.valid\">Enter</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/search-genre/search-genre.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/search-genre/search-genre.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (submit)=\"searchGenre()\" *ngIf=\"genres\">\n  <div class=\"form-group\">\n    <label for=\"genre\">Genre: </label>\n    <select [(ngModel)]=\"genre\" name=\"genre\">\n      <option [value]=\"genre._id\" *ngFor=\"let genre of genres\">\n        {{ genre.name }}</option>\n    </select>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Enter</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/check-in-out/check-in-out.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/check-in-out/check-in-out.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<search-users (usersEvent)=\"getUsers($event)\"></search-users>\n\n<div class=\"text-center buff-top\" *ngIf=\"users\">\n  <users [users]=\"users\" class=\"buff-top-sm\"\n    (userEvent)=\"getUser($event)\"></users>\n</div>\n\n<div class=\"text-center buff-top\" *ngIf=\"user\">\n  <user *ngIf=\"user\" [user]=\"user\" class=\"buff-top-sm\"\n    (returnEvent)=\"returnBook($event)\"></user>\n</div>\n\n<search-title *ngIf=\"user\"\n\t(addBookEvent)=\"getBooks($event)\"></search-title>\n\n<div class=\"buff-top-sm text-center\" *ngIf=\"books\">\n  <books [books]=\"books\"\n    (bookEvent)=\"bookEvent($event)\"></books>\n</div>\n\n<div class=\"text-center buff-top-sm\">\n  <book *ngIf=\"bookData\" [bookData]=\"bookData\"\n    (instanceEvent)=\"selectInstance($event)\"></book>\n</div>\n\n<return-button></return-button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/check-in-out/search-users/search-users.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/check-in-out/search-users/search-users.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"first\">\n      First Name:\n    </label>\n    <input class=\"form-control\" type=\"text\"\n      formControlName=\"first\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"last\">\n      Last Name:\n    </label>\n    <input class=\"form-control\" type=\"text\"\n      formControlName=\"last\" required>\n  </div>\n  <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!userForm.valid\">Enter</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/check-in-out/user/user.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/check-in-out/user/user.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"font-weight-bolder\">{{ user.name.first }} {{ user.name.last }} {{ user.email }} </p>\n\n<div class=\"buff-top-sm\" *ngIf=\"user.books\">\n  <div *ngFor=\"let book of user.books\">\n  <p>\n    <span class=\"font-weight-bold\">Book Title:</span>\n      {{ book.book.title }}\n    <span class=\"font-weight-bold\">Due Date: </span>\n    <span [style.color]=\"isRed(book.instance.due_date) ? 'red' : 'green'\"> {{ book.instance.due_date | date }} </span>\n    <span><button class=\"btn btn-warning\"\n        (click)=\"returnBook(book)\">Return</button>\n    </span>\n </p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/check-in-out/users/users.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/check-in-out/users/users.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let user of users\" (click)=selectUser(user)>\n  <p>{{ user.name.first }} {{ user.name.last }} {{ user.email }}\n    <span> <button class=\"btn btn-success\">Select</button></span>\n  </p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/create-book/create-book.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/create-book/create-book.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert alert-success\" *ngIf=\"alertMessage\">\n\t<strong>Success!</strong> {{ bookNumber }} books have been created.\n</div>\n\n<search-title\n\t(addBookEvent)=\"getBooks($event)\"></search-title>\n\n<div class=\"text-center\">\n  <div class=\"buff-top\">\n    <books *ngIf=\"books\" [books]=\"books\"\n      (bookEvent)=\"bookEvent($event)\"></books>\n  </div>\n\n  <book *ngIf=\"bookData\" [bookData]=\"bookData\"></book>\n</div>\n\n<div class=\"buff-top-mini\" *ngIf=\"bookData\">\n  <form [formGroup]=\"instanceForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"quantity\">\n        Number of Books:\n      </label>\n      <input class=\"form-control\" type=\"number\"\n        formControlName=\"quantity\" required>\n    </div>\n    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!instanceForm.valid\">Enter</button>\n  </form>\n</div>\n\n<return-button></return-button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/create-data/book-data/book-data.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/create-data/book-data/book-data.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"book && book.isbn\" class=\"buff-top\">\n  <h5>Title: {{ book.title }}</h5>\n\n  <div *ngIf=\"book.authors\" class=\"buff-top-sm\">\n    <div *ngFor=\"let author of book.authors buff-top-mini\">\n      <p> Author: {{ author.first_name  }}\n      <span *ngIf=\"author.middle_name\">{{ author.middle_name }} </span>\n      <span *ngIf=\"author.last_name\">{{ author.last_name }} </span>\n      <span *ngIf=\"author._id\" class=\"text-success\"> Replaced !</span>\n      </p>\n    </div>\n  </div>\n\n  <div *ngIf=\"book.genres buff-top-sm\">\n    <p *ngFor=\"let genre of book.genres\">Genre: {{ genre }}</p>\n  </div>\n\n  <div class=\"buff-top-sm\">\n    <p>ISBN: {{ book.isbn }}</p>\n  </div>\n\n  <div class=\"buff-top-sm\">\n    <img *ngIf=\"book.img\" src=\"{{book.img}}\">\n  </div>\n\n  <div class=\"buff-top-sm\" *ngIf=\"authors.length>0 && !book.saved\">\n    <check-author [authors]=\"authors\"></check-author>\n  </div>\n\n  <div *ngIf=\"!book.saved; else elseBlock\" class=\"buff-top-sm\">\n    <button class=\"btn btn-primary\" (click)=\"saveBook()\">Save Book</button>\n  </div>\n\n  <ng-template #elseBlock>\n    <p class=\"text-danger font-weight-bold buff-top-sm\">The Book Data Exists</p>\n  </ng-template>\n</div>\n\n<div *ngIf=\"book && !book.isbn\">\n  <p class=\"buff-top-mini font-weight-bold text-danger\">The searched book doesn't contain an ISBN</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/create-data/check-author/check-author.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/create-data/check-author/check-author.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let author of authors\">\n\t<p> Saved Authors: {{ author.first_name  }}\n\t<span *ngIf=\"author.middle_name\">{{ author.middle_name }} </span>\n\t<span *ngIf=\"author.last_name\">{{ author.last_name }} </span>\n\t<button class=\"btn btn-warning\"\n\t\t(click)=\"replace(author)\">Replace</button>\n\t</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/create-data/create-data.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/create-data/create-data.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert alert-success\" *ngIf=\"alertMessage\">\n\t<strong>Success!</strong> A new book data has been created.\n</div>\n\n<search-data\n  (dataEvent)=\"dataEvent($event)\">\n</search-data>\n\n<book-data *ngIf=\"bookData\" class=\"text-center\"\n  [bookData]=\"bookData\" (alertEvent)=\"alertEvent()\">\n</book-data>\n\n<return-button></return-button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/create-data/search-data/search-data.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/create-data/search-data/search-data.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"bookForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"title\">\n      Book Title:\n    </label>\n    <input class=\"form-control\" type=\"text\"\n      formControlName=\"title\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"author\">\n      Author Name:\n    </label>\n    <input class=\"form-control\" type=\"text\"\n      formControlName=\"author\">\n  </div>\n  <button class=\"btn btn-primary\" type=\"submit\"\n\t\t[disabled]=\"!bookForm.valid\">Enter</button>\n</form>\n<!--  -->\n\n<div *ngIf=\"books\" class=\"row buff-top-sm text-center\">\n  <div *ngFor=\"let book of books\" class=\"col-sm-12 buff-bottom-sm\">\n    <div (click)=\"selectData(book)\">{{ book.volumeInfo.title }} <button class=\"btn btn-success\">select </button></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/employee/employee.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/employee/employee.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let employee of employees\">\n  <p>\n\t\t{{ employee.name.first }} {{ employee.name.last }}\n\n\t\t<span class=\"spacing\" *ngIf=\"employee.auth == 0\">\n\t\t\t<button class=\"btn btn-success\"\n\t\t\t(click)=\"registerEmp(employee)\">Register</button>\n\t\t</span>\n\n\t\t<span class=\"spacing\" *ngIf=\"employee.auth == 2\">\n\t\t\t<button class=\"btn btn-primary\">Admin</button>\n\t\t</span>\n\n\t\t<span class=\"spacing\" *ngIf=\"employee.auth == 1\">\n\t\t\t<button class=\"btn btn-warning\">Employee</button>\n\t\t</span>\n\n\t\t<span class=\"spacing\" *ngIf=\"employee.auth == 1\"\n\t\t\t(click)=\"addAdmin(employee)\">\n\t\t\t<button class=\"btn btn-success\">Upgrade</button>\n\t\t</span>\n\n\t\t<span class=\"spacing\" *ngIf=\"employee.auth >= 1\">\n\t\t\t<button class=\"btn btn-danger\"\n\t\t\t\t(click)=\"deleteEmp(employee)\">Delete</button>\n\t\t</span>\n  </p>\n</div>\n\n<return-button></return-button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/home/home.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/home/home.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"buff-top-lg\">\n  <div class=\"jumbotron\">\n    <div class=\"row text-center\">\n      <a class=\"col box bg-primary text-white\"\n        *ngFor=\"let link of officeLinks\" routerLink=\"{{ link.url }}\">\n        <h3>{{ link.name  }}</h3>\n      </a>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/login/login.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/login/login.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"buff-top\">\n    <form [formGroup]=\"credentials\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"email\">\n          User Email:\n        </label>\n        <input class=\"form-control\" type=\"email\"\n          formControlName=\"email\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">\n          User Password:\n        </label>\n        <input class=\"form-control\" type=\"password\"\n          formControlName=\"password\" required>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!credentials.valid\">Enter</button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/office-home/office-home.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/office-home/office-home.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/office\">Office</a>\n\t<ul class=\"navbar-nav\">\n    <li class=\"nav-item\" *ngFor=\"let link of links\">\n      <a class=\"nav-link\" routerLink=\"{{ link.url }}\">{{ link.name }}</a>\n    </li>\n\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n    </li>\n  </ul>\n</nav>\n<!--  -->\n<div class=\"container\">\n  <div class=\"buff-top\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/return-button/return-button.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/office/return-button/return-button.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center buff-top-lg\">\n  <button class=\"btn btn-primary btn-lg\"\n      routerLink=\"/office\">Return Home\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/book/book.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/book/book.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5>{{ bookData.title }}</h5>\n\n<div *ngIf=\"bookData.authorName\" class=\"buff-top-sm\">\n  <div *ngFor=\"let author of bookData.authorName\">\n    <p>{{ author.first_name  }}\n    <span *ngIf=\"author.middle_name\">{{ author.middle_name }} </span>\n    <span *ngIf=\"author.last_name\">{{ author.last_name }}</span>\n    </p>\n  </div>\n</div>\n\n<div *ngIf=\"bookData.isbn\" class=\"buff-top-sm\">\n  <p>ISBN: {{ bookData.isbn }}</p>\n</div>\n\n<div *ngIf=\"bookData.genreName\" class=\"buff-top-sm\">\n  <p *ngFor=\"let genre of bookData.genreName\">\n    Genre: {{ genre.name }}</p>\n</div>\n\n<img *ngIf=\"bookData.img\" class=\"buff-top-sm\" src=\"{{bookData.img}}\">\n\n<div *ngIf=\"bookData.instances\" class=\"buff-top-sm\">\n  <div *ngFor=\"let instance of bookData.instances; let i = index\">\n\n    <div *ngIf=\"instance.availability === 'available' ||\n      instance.availability === 'lent'\">\n      <p> {{ i + 1 }}:\n        <span class=\"spacing font-weight-bold text-primary\"\n          *ngIf=\"instance.availability === 'available'\">\n          {{ instance.availability }}\n        </span>\n        <span class=\"spacing font-weight-bold text-danger\"\n          *ngIf=\"instance.availability === 'lent'\">\n            {{ instance.availability }}\n        </span>\n\n        <span class=\"spacing\">ID {{ instance._id }}</span>\n\n        <span class=\"spacing\" *ngIf=\"bookData.checkout &&\n          instance.availability === 'available'\">\n          <button class=\"btn btn-info\"\n          (click)=\"instanceSelect(instance)\">Lend</button>\n        </span>\n\n      </p>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/books/books.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/books/books.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let book of books\">\n  <div (click)=\"selectBook(book)\">\n    <p>{{ book.title }},\n      <span *ngFor=\"let author of book.authorName\">\n        <span *ngIf=\"author.first_name\"> {{ author.first_name }}</span>\n        <span *ngIf=\"author.middle_name\"> {{ author.middle_name }}</span>\n        <span *ngIf=\"author.last_name\"> {{ author.last_name }} </span>\n      </span>\n      <span class=\"spacing\"><button class=\"btn btn-success\">Select</button></span>\n    </p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/search-title/search-title.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/search-title/search-title.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"titleForm\"\n  (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"title\">\n      Book Title:\n    </label>\n    <input class=\"form-control\" type=\"text\"\n\t\t\tformControlName=\"title\" required>\n  </div>\n\t<button class=\"btn btn-primary\" type=\"submit\"\n\t\t[disabled]=\"!titleForm.valid\">Enter</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(mod => mod.HomeModule)
    },
    {
        path: 'office',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./office/office.module */ "./src/app/office/office.module.ts")).then(mod => mod.OfficeModule),
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'dapp-library-sys';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _office_office_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./office/office.module */ "./src/app/office/office.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _http_error_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http-error.interceptor */ "./src/app/http-error.interceptor.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"],
            _office_office_module__WEBPACK_IMPORTED_MODULE_7__["OfficeModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _http_error_interceptor__WEBPACK_IMPORTED_MODULE_9__["HttpErrorInterceptor"],
                multi: true
            }
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.routing */ "./src/app/home/home.routing.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _search_author_search_author_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-author/search-author.component */ "./src/app/home/search-author/search-author.component.ts");
/* harmony import */ var _search_genre_search_genre_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-genre/search-genre.component */ "./src/app/home/search-genre/search-genre.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");









let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _search_author_search_author_component__WEBPACK_IMPORTED_MODULE_6__["SearchAuthorComponent"], _search_genre_search_genre_component__WEBPACK_IMPORTED_MODULE_7__["SearchGenreComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _home_routing__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/home/home.routing.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.routing.ts ***!
  \**************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home/home.component.ts");




const homeRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(homeRoutes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/home/home/home.component.sass":
/*!***********************************************!*\
  !*** ./src/app/home/home/home.component.sass ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/home/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/book.service */ "./src/app/shared/book.service.ts");



let HomeComponent = class HomeComponent {
    constructor(book) {
        this.book = book;
    }
    getBooks(evt) {
        this.books = evt;
        delete this.bookData;
    }
    selectBook(evt) {
        this.bookData = evt;
        delete this.books;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _shared_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.sass */ "./src/app/home/home/home.component.sass")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/search-author/search-author.component.sass":
/*!*****************************************************************!*\
  !*** ./src/app/home/search-author/search-author.component.sass ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2VhcmNoLWF1dGhvci9zZWFyY2gtYXV0aG9yLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/home/search-author/search-author.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/search-author/search-author.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAuthorComponent", function() { return SearchAuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/book.service */ "./src/app/shared/book.service.ts");




let SearchAuthorComponent = class SearchAuthorComponent {
    constructor(formBuilder, book) {
        this.formBuilder = formBuilder;
        this.book = book;
        this.addBookEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.authorForm = this.formBuilder.group({
            first_name: '',
            last_name: ''
        });
    }
    onSubmit() {
        this.book.searchAuthor(this.authorForm.value)
            .subscribe(authors => {
            if (authors.length > 0) {
                for (let data of authors) {
                    this.book.check({ author: data._id }).subscribe(data => {
                        if (data.length > 0) {
                            this.addBookEvent.emit(data);
                        }
                    });
                }
            }
        });
        this.authorForm.reset();
    }
};
SearchAuthorComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchAuthorComponent.prototype, "addBookEvent", void 0);
SearchAuthorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'search-author',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-author.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/search-author/search-author.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-author.component.sass */ "./src/app/home/search-author/search-author.component.sass")).default]
    })
], SearchAuthorComponent);



/***/ }),

/***/ "./src/app/home/search-genre/search-genre.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/home/search-genre/search-genre.component.sass ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2VhcmNoLWdlbnJlL3NlYXJjaC1nZW5yZS5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/home/search-genre/search-genre.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/search-genre/search-genre.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchGenreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchGenreComponent", function() { return SearchGenreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/book.service */ "./src/app/shared/book.service.ts");



let SearchGenreComponent = class SearchGenreComponent {
    constructor(book) {
        this.book = book;
        this.addBookEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.book.genres().subscribe(genres => {
            this.genres = genres;
        });
    }
    searchGenre() {
        if (this.genre) {
            this.book.check({ genre: this.genre }).subscribe(data => {
                if (data.length > 0) {
                    this.addBookEvent.emit(data);
                }
            });
        }
    }
};
SearchGenreComponent.ctorParameters = () => [
    { type: _shared_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchGenreComponent.prototype, "addBookEvent", void 0);
SearchGenreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'search-genre',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-genre.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/search-genre/search-genre.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-genre.component.sass */ "./src/app/home/search-genre/search-genre.component.sass")).default]
    })
], SearchGenreComponent);



/***/ }),

/***/ "./src/app/http-error.interceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/http-error.interceptor.ts ***!
  \*******************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



class HttpErrorInterceptor {
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = `Error: ${error.error.message}`;
            }
            else {
                // server-side error
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            window.alert(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }));
    }
}


/***/ }),

/***/ "./src/app/office/guard/librarian.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/office/guard/librarian.guard.ts ***!
  \*************************************************/
/*! exports provided: LibGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibGuard", function() { return LibGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_librarian_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/librarian.service */ "./src/app/office/services/librarian.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let LibGuard = class LibGuard {
    constructor(libService, router) {
        this.libService = libService;
        this.router = router;
    }
    canActivateChild() {
        return this.libService.auth$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            if (data >= 1) {
                return true;
            }
            else {
                this.router.navigateByUrl('office/login');
                return false;
            }
        }));
    }
};
LibGuard.ctorParameters = () => [
    { type: _services_librarian_service__WEBPACK_IMPORTED_MODULE_3__["LibService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LibGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LibGuard);



/***/ }),

/***/ "./src/app/office/guard/librarian.non-guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/office/guard/librarian.non-guard.ts ***!
  \*****************************************************/
/*! exports provided: LibNonGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibNonGuard", function() { return LibNonGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_librarian_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/librarian.service */ "./src/app/office/services/librarian.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let LibNonGuard = class LibNonGuard {
    constructor(libService, router) {
        this.libService = libService;
        this.router = router;
    }
    canActivate() {
        return this.libService.auth$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            if (data >= 1) {
                this.router.navigateByUrl('office');
                return false;
            }
            else {
                return true;
            }
        }));
    }
};
LibNonGuard.ctorParameters = () => [
    { type: _services_librarian_service__WEBPACK_IMPORTED_MODULE_3__["LibService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LibNonGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LibNonGuard);



/***/ }),

/***/ "./src/app/office/guard/office.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/office/guard/office.guard.ts ***!
  \**********************************************/
/*! exports provided: OfficeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeGuard", function() { return OfficeGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_office_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/office.service */ "./src/app/office/services/office.service.ts");




let OfficeGuard = class OfficeGuard {
    constructor(office, router) {
        this.office = office;
        this.router = router;
    }
    canActivateChild() {
        if (!this.office.isLoggedIn()) {
            this.router.navigateByUrl('office/login');
            return false;
        }
        return true;
    }
};
OfficeGuard.ctorParameters = () => [
    { type: _services_office_service__WEBPACK_IMPORTED_MODULE_3__["OfficeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
OfficeGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], OfficeGuard);



/***/ }),

/***/ "./src/app/office/guard/office.non-guard.ts":
/*!**************************************************!*\
  !*** ./src/app/office/guard/office.non-guard.ts ***!
  \**************************************************/
/*! exports provided: OfficeNonGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeNonGuard", function() { return OfficeNonGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_office_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/office.service */ "./src/app/office/services/office.service.ts");




let OfficeNonGuard = class OfficeNonGuard {
    constructor(office, router) {
        this.office = office;
        this.router = router;
    }
    canActivate() {
        if (this.office.isLoggedIn()) {
            this.router.navigateByUrl('office');
            return false;
        }
        return true;
    }
};
OfficeNonGuard.ctorParameters = () => [
    { type: _services_office_service__WEBPACK_IMPORTED_MODULE_3__["OfficeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
OfficeNonGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], OfficeNonGuard);



/***/ }),

/***/ "./src/app/office/office.module.ts":
/*!*****************************************!*\
  !*** ./src/app/office/office.module.ts ***!
  \*****************************************/
/*! exports provided: OfficeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeModule", function() { return OfficeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _office_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./office.routing */ "./src/app/office/office.routing.ts");
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index */ "./src/app/office/pages/index.ts");
/* harmony import */ var _services_web3_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/web3.service */ "./src/app/office/services/web3.service.ts");
/* harmony import */ var _services_librarian_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/librarian.service */ "./src/app/office/services/librarian.service.ts");
/* harmony import */ var _services_office_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/office.service */ "./src/app/office/services/office.service.ts");
/* harmony import */ var _services_bookData_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/bookData.service */ "./src/app/office/services/bookData.service.ts");
/* harmony import */ var _services_checkInOut_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/checkInOut.service */ "./src/app/office/services/checkInOut.service.ts");
/* harmony import */ var _guard_librarian_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guard/librarian.guard */ "./src/app/office/guard/librarian.guard.ts");
/* harmony import */ var _guard_librarian_non_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guard/librarian.non-guard */ "./src/app/office/guard/librarian.non-guard.ts");
/* harmony import */ var _guard_office_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guard/office.guard */ "./src/app/office/guard/office.guard.ts");
/* harmony import */ var _guard_office_non_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guard/office.non-guard */ "./src/app/office/guard/office.non-guard.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _return_button_return_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./return-button/return-button.component */ "./src/app/office/return-button/return-button.component.ts");

















let OfficeModule = class OfficeModule {
};
OfficeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pages_index__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _pages_index__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _pages_index__WEBPACK_IMPORTED_MODULE_5__["OfficeHomeComponent"], _pages_index__WEBPACK_IMPORTED_MODULE_5__["EmployeeComponent"], _pages_index__WEBPACK_IMPORTED_MODULE_5__["CreateDataComponent"], _pages_index__WEBPACK_IMPORTED_MODULE_5__["SearchDataComponent"], _pages_index__WEBPACK_IMPORTED_MODULE_5__["BookDataComponent"], _pages_index__WEBPACK_IMPORTED_MODULE_5__["CheckAuthorComponent"], _pages_index__WEBPACK_IMPORTED_MODULE_5__["CreateBookComponent"], _pages_index__WEBPACK_IMPORTED_MODULE_5__["CheckInOutComponent"], _pages_index__WEBPACK_IMPORTED_MODULE_5__["UserComponent"], _pages_index__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"], _pages_index__WEBPACK_IMPORTED_MODULE_5__["SearchUsersComponent"], _return_button_return_button_component__WEBPACK_IMPORTED_MODULE_16__["ReturnButtonComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _office_routing__WEBPACK_IMPORTED_MODULE_4__["OfficeRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
        ],
        providers: [
            _services_librarian_service__WEBPACK_IMPORTED_MODULE_7__["LibService"],
            _services_office_service__WEBPACK_IMPORTED_MODULE_8__["OfficeService"],
            _services_web3_service__WEBPACK_IMPORTED_MODULE_6__["Web3Service"],
            _services_bookData_service__WEBPACK_IMPORTED_MODULE_9__["BookDataService"],
            _services_checkInOut_service__WEBPACK_IMPORTED_MODULE_10__["CheckInOutService"],
            _guard_librarian_guard__WEBPACK_IMPORTED_MODULE_11__["LibGuard"],
            _guard_librarian_non_guard__WEBPACK_IMPORTED_MODULE_12__["LibNonGuard"],
            _guard_office_guard__WEBPACK_IMPORTED_MODULE_13__["OfficeGuard"],
            _guard_office_non_guard__WEBPACK_IMPORTED_MODULE_14__["OfficeNonGuard"]
        ]
    })
], OfficeModule);



/***/ }),

/***/ "./src/app/office/office.routing.ts":
/*!******************************************!*\
  !*** ./src/app/office/office.routing.ts ***!
  \******************************************/
/*! exports provided: routes, OfficeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeRoutingModule", function() { return OfficeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/index */ "./src/app/office/pages/index.ts");
/* harmony import */ var _guard_office_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guard/office.guard */ "./src/app/office/guard/office.guard.ts");
/* harmony import */ var _guard_office_non_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guard/office.non-guard */ "./src/app/office/guard/office.non-guard.ts");






const routes = [
    {
        path: 'office/login',
        component: _pages_index__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        canActivate: [_guard_office_non_guard__WEBPACK_IMPORTED_MODULE_5__["OfficeNonGuard"]]
    },
    { path: 'office', component: _pages_index__WEBPACK_IMPORTED_MODULE_3__["OfficeHomeComponent"],
        canActivateChild: [_guard_office_guard__WEBPACK_IMPORTED_MODULE_4__["OfficeGuard"]],
        children: [
            { path: '', component: _pages_index__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'checkinout', component: _pages_index__WEBPACK_IMPORTED_MODULE_3__["CheckInOutComponent"] },
            { path: 'create-data', component: _pages_index__WEBPACK_IMPORTED_MODULE_3__["CreateDataComponent"] },
            { path: 'create-book', component: _pages_index__WEBPACK_IMPORTED_MODULE_3__["CreateBookComponent"] },
            { path: 'employee', component: _pages_index__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"] }
        ]
    }
];
let OfficeRoutingModule = class OfficeRoutingModule {
};
OfficeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], OfficeRoutingModule);



/***/ }),

/***/ "./src/app/office/pages/check-in-out/check-in-out.component.sass":
/*!***********************************************************************!*\
  !*** ./src/app/office/pages/check-in-out/check-in-out.component.sass ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9wYWdlcy9jaGVjay1pbi1vdXQvY2hlY2staW4tb3V0LmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/office/pages/check-in-out/check-in-out.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/office/pages/check-in-out/check-in-out.component.ts ***!
  \*********************************************************************/
/*! exports provided: CheckInOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInOutComponent", function() { return CheckInOutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/book.service */ "./src/app/shared/book.service.ts");
/* harmony import */ var _services_checkInOut_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/checkInOut.service */ "./src/app/office/services/checkInOut.service.ts");




let CheckInOutComponent = class CheckInOutComponent {
    constructor(checkInOut, book) {
        this.checkInOut = checkInOut;
        this.book = book;
    }
    getUsers(users) {
        this.users = users;
        delete this.user;
        delete this.bookData;
    }
    getUser(user) {
        this.userData(user);
        delete this.users;
    }
    getBooks(books) {
        this.books = books;
    }
    bookEvent(book) {
        this.bookData = book;
        this.bookData.checkout = true;
    }
    selectInstance(book) {
        this.checkInOut.barrow(book, this.user)
            .subscribe(([book, user]) => {
            this.userData(user);
            this.book.getById(book.book)
                .subscribe(data => delete this.bookData);
        });
    }
    returnBook(bookInstance) {
        this.checkInOut.returnBook(bookInstance, this.user)
            .subscribe(data => this.userData(data));
    }
    userData(user) {
        if (user.due_books.length > 0) {
            user.books = [];
            this.checkInOut.getBooks(user)
                .subscribe((data) => { user.books.push(data); });
            this.user = user;
        }
        else {
            this.user = user;
        }
    }
};
CheckInOutComponent.ctorParameters = () => [
    { type: _services_checkInOut_service__WEBPACK_IMPORTED_MODULE_3__["CheckInOutService"] },
    { type: _shared_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }
];
CheckInOutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-check-in-out',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./check-in-out.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/check-in-out/check-in-out.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./check-in-out.component.sass */ "./src/app/office/pages/check-in-out/check-in-out.component.sass")).default]
    })
], CheckInOutComponent);



/***/ }),

/***/ "./src/app/office/pages/check-in-out/search-users/search-users.component.sass":
/*!************************************************************************************!*\
  !*** ./src/app/office/pages/check-in-out/search-users/search-users.component.sass ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9wYWdlcy9jaGVjay1pbi1vdXQvc2VhcmNoLXVzZXJzL3NlYXJjaC11c2Vycy5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/office/pages/check-in-out/search-users/search-users.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/office/pages/check-in-out/search-users/search-users.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SearchUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUsersComponent", function() { return SearchUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_office_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/office.service */ "./src/app/office/services/office.service.ts");




let SearchUsersComponent = class SearchUsersComponent {
    constructor(office, formBuilder) {
        this.office = office;
        this.formBuilder = formBuilder;
        this.usersEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userForm = this.formBuilder.group({
            first: '',
            last: ''
        });
    }
    onSubmit() {
        let user = ({ name: {
                last: this.userForm.value.last,
                first: this.userForm.value.first
            }
        });
        this.office.searchUser(user).subscribe(data => {
            if (data.length > 0) {
                this.usersEvent.emit(data);
            }
        });
        this.userForm.reset();
    }
};
SearchUsersComponent.ctorParameters = () => [
    { type: _services_office_service__WEBPACK_IMPORTED_MODULE_3__["OfficeService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchUsersComponent.prototype, "usersEvent", void 0);
SearchUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'search-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/check-in-out/search-users/search-users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-users.component.sass */ "./src/app/office/pages/check-in-out/search-users/search-users.component.sass")).default]
    })
], SearchUsersComponent);



/***/ }),

/***/ "./src/app/office/pages/check-in-out/user/user.component.sass":
/*!********************************************************************!*\
  !*** ./src/app/office/pages/check-in-out/user/user.component.sass ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9wYWdlcy9jaGVjay1pbi1vdXQvdXNlci91c2VyLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/office/pages/check-in-out/user/user.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/office/pages/check-in-out/user/user.component.ts ***!
  \******************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserComponent = class UserComponent {
    constructor() {
        this.returnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    isRed(dueDate) {
        let date = new Date();
        if (dueDate > date) {
            return true;
        }
        else {
            return false;
        }
    }
    returnBook(book) {
        let bookInstance = book.instance;
        this.returnEvent.emit(bookInstance);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserComponent.prototype, "user", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UserComponent.prototype, "returnEvent", void 0);
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/check-in-out/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.sass */ "./src/app/office/pages/check-in-out/user/user.component.sass")).default]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/office/pages/check-in-out/users/users.component.sass":
/*!**********************************************************************!*\
  !*** ./src/app/office/pages/check-in-out/users/users.component.sass ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9wYWdlcy9jaGVjay1pbi1vdXQvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/office/pages/check-in-out/users/users.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/office/pages/check-in-out/users/users.component.ts ***!
  \********************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_office_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/office.service */ "./src/app/office/services/office.service.ts");



let UsersComponent = class UsersComponent {
    constructor(office) {
        this.office = office;
        this.userEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    selectUser(user) {
        this.userEvent.emit(user);
    }
};
UsersComponent.ctorParameters = () => [
    { type: _services_office_service__WEBPACK_IMPORTED_MODULE_2__["OfficeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UsersComponent.prototype, "users", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UsersComponent.prototype, "userEvent", void 0);
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/check-in-out/users/users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.sass */ "./src/app/office/pages/check-in-out/users/users.component.sass")).default]
    })
], UsersComponent);



/***/ }),

/***/ "./src/app/office/pages/create-book/create-book.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/office/pages/create-book/create-book.component.sass ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9wYWdlcy9jcmVhdGUtYm9vay9jcmVhdGUtYm9vay5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/office/pages/create-book/create-book.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/office/pages/create-book/create-book.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBookComponent", function() { return CreateBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/book.service */ "./src/app/shared/book.service.ts");
/* harmony import */ var _services_office_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/office.service */ "./src/app/office/services/office.service.ts");





let CreateBookComponent = class CreateBookComponent {
    constructor(book, office, formBuilder) {
        this.book = book;
        this.office = office;
        this.formBuilder = formBuilder;
        this.instanceForm = this.formBuilder.group({
            quantity: '',
        });
    }
    getBooks(evt) {
        this.books = evt;
        delete this.bookData;
        delete this.alertMessage;
    }
    bookEvent(e) {
        this.bookData = e;
    }
    onSubmit() {
        let bookInstance = {
            book: this.bookData._id,
            availability: "available"
        };
        this.bookNumber = this.instanceForm.value.quantity;
        for (let i = 0; i < this.instanceForm.value.quantity; i++) {
            this.office.saveInstance(bookInstance).subscribe(data => {
                console.log(data);
            });
        }
        this.alertMessage = true;
        this.instanceForm.reset();
        delete this.bookData;
    }
};
CreateBookComponent.ctorParameters = () => [
    { type: _shared_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"] },
    { type: _services_office_service__WEBPACK_IMPORTED_MODULE_4__["OfficeService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CreateBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/create-book/create-book.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-book.component.sass */ "./src/app/office/pages/create-book/create-book.component.sass")).default]
    })
], CreateBookComponent);



/***/ }),

/***/ "./src/app/office/pages/create-data/book-data/book-data.component.sass":
/*!*****************************************************************************!*\
  !*** ./src/app/office/pages/create-data/book-data/book-data.component.sass ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9wYWdlcy9jcmVhdGUtZGF0YS9ib29rLWRhdGEvYm9vay1kYXRhLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/office/pages/create-data/book-data/book-data.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/office/pages/create-data/book-data/book-data.component.ts ***!
  \***************************************************************************/
/*! exports provided: BookDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDataComponent", function() { return BookDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_bookData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/bookData.service */ "./src/app/office/services/bookData.service.ts");
/* harmony import */ var _services_office_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/office.service */ "./src/app/office/services/office.service.ts");




let BookDataComponent = class BookDataComponent {
    constructor(bookInfo, office) {
        this.bookInfo = bookInfo;
        this.office = office;
        this.alertEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges() {
        let bookInfo = this.bookData.volumeInfo;
        if (bookInfo.industryIdentifiers[0].identifier) {
            this.book = this.bookInfo.sort(bookInfo);
            this.authors = this.book.savedAuthors;
        }
        else {
            this.book = null;
        }
    }
    saveBook() {
        this.office.saveBook(this.bookInfo.data)
            .subscribe(data => {
            this.alertEvent.emit();
            delete this.book;
        });
    }
};
BookDataComponent.ctorParameters = () => [
    { type: _services_bookData_service__WEBPACK_IMPORTED_MODULE_2__["BookDataService"] },
    { type: _services_office_service__WEBPACK_IMPORTED_MODULE_3__["OfficeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BookDataComponent.prototype, "bookData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BookDataComponent.prototype, "alertEvent", void 0);
BookDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'book-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/create-data/book-data/book-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-data.component.sass */ "./src/app/office/pages/create-data/book-data/book-data.component.sass")).default]
    })
], BookDataComponent);



/***/ }),

/***/ "./src/app/office/pages/create-data/check-author/check-author.component.sass":
/*!***********************************************************************************!*\
  !*** ./src/app/office/pages/create-data/check-author/check-author.component.sass ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9wYWdlcy9jcmVhdGUtZGF0YS9jaGVjay1hdXRob3IvY2hlY2stYXV0aG9yLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/office/pages/create-data/check-author/check-author.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/office/pages/create-data/check-author/check-author.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CheckAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckAuthorComponent", function() { return CheckAuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_bookData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/bookData.service */ "./src/app/office/services/bookData.service.ts");



let CheckAuthorComponent = class CheckAuthorComponent {
    constructor(bookInfo) {
        this.bookInfo = bookInfo;
    }
    replace(author) {
        this.bookInfo.data.authors.splice(this.bookInfo.data.authors.indexOf(author), 1);
        this.bookInfo.data.authors.push(author);
        this.authors.splice(this.authors.indexOf(author), 1);
    }
};
CheckAuthorComponent.ctorParameters = () => [
    { type: _services_bookData_service__WEBPACK_IMPORTED_MODULE_2__["BookDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CheckAuthorComponent.prototype, "authors", void 0);
CheckAuthorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'check-author',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./check-author.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/create-data/check-author/check-author.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./check-author.component.sass */ "./src/app/office/pages/create-data/check-author/check-author.component.sass")).default]
    })
], CheckAuthorComponent);



/***/ }),

/***/ "./src/app/office/pages/create-data/create-data.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/office/pages/create-data/create-data.component.sass ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9wYWdlcy9jcmVhdGUtZGF0YS9jcmVhdGUtZGF0YS5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/office/pages/create-data/create-data.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/office/pages/create-data/create-data.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDataComponent", function() { return CreateDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateDataComponent = class CreateDataComponent {
    constructor() { }
    dataEvent(e) {
        this.bookData = e;
        delete this.alertMessage;
    }
    alertEvent() {
        this.alertMessage = true;
    }
};
CreateDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/create-data/create-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-data.component.sass */ "./src/app/office/pages/create-data/create-data.component.sass")).default]
    })
], CreateDataComponent);



/***/ }),

/***/ "./src/app/office/pages/create-data/search-data/search-data.component.sass":
/*!*********************************************************************************!*\
  !*** ./src/app/office/pages/create-data/search-data/search-data.component.sass ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9wYWdlcy9jcmVhdGUtZGF0YS9zZWFyY2gtZGF0YS9zZWFyY2gtZGF0YS5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/office/pages/create-data/search-data/search-data.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/office/pages/create-data/search-data/search-data.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SearchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDataComponent", function() { return SearchDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/book.service */ "./src/app/shared/book.service.ts");




let SearchDataComponent = class SearchDataComponent {
    constructor(formBuilder, book) {
        this.formBuilder = formBuilder;
        this.book = book;
        this.dataEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.bookForm = this.formBuilder.group({
            title: '',
            author: ''
        });
    }
    onSubmit() {
        let searchData = this.bookForm.value.title + '+inauthor:' + this.bookForm.value.author;
        this.book.search(searchData).subscribe(data => {
            this.books = data.items;
        });
        this.bookForm.reset();
    }
    selectData(book) {
        this.dataEvent.emit(book);
        delete this.books;
    }
};
SearchDataComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchDataComponent.prototype, "dataEvent", void 0);
SearchDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'search-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/create-data/search-data/search-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-data.component.sass */ "./src/app/office/pages/create-data/search-data/search-data.component.sass")).default]
    })
], SearchDataComponent);



/***/ }),

/***/ "./src/app/office/pages/employee/employee.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/office/pages/employee/employee.component.sass ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9wYWdlcy9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/office/pages/employee/employee.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/office/pages/employee/employee.component.ts ***!
  \*************************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_librarian_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/librarian.service */ "./src/app/office/services/librarian.service.ts");



let EmployeeComponent = class EmployeeComponent {
    constructor(libService) {
        this.libService = libService;
    }
    ngOnInit() {
        this.loadEmployee();
    }
    registerEmp(employee) {
        this.libService.addEmployee(employee.address)
            .subscribe(data => this.loadEmployee());
    }
    addAdmin(employee) {
        this.libService.addAdmin(employee.address)
            .subscribe(data => this.loadEmployee());
    }
    deleteEmp(employee) {
        this.libService.deleteEmp(employee.address)
            .subscribe(data => this.loadEmployee());
    }
    loadEmployee() {
        this.libService.combinedData()
            .subscribe(data => this.employees = data);
    }
};
EmployeeComponent.ctorParameters = () => [
    { type: _services_librarian_service__WEBPACK_IMPORTED_MODULE_2__["LibService"] }
];
EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/employee/employee.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee.component.sass */ "./src/app/office/pages/employee/employee.component.sass")).default]
    })
], EmployeeComponent);



/***/ }),

/***/ "./src/app/office/pages/home/home.component.sass":
/*!*******************************************************!*\
  !*** ./src/app/office/pages/home/home.component.sass ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box {\n  cursor: pointer;\n  height: 100px;\n  margin: 2px;\n}\n.box h3 {\n  padding-top: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3phbmdpZi9Eb2N1bWVudHMvcHJvamVjdGNzL2RhcHAtbGlicmFyeS1zeXMvc3JjL2FwcC9vZmZpY2UvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9vZmZpY2UvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQ0Y7QURBRTtFQUNFLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9vZmZpY2UvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveFxuICBjdXJzb3I6IHBvaW50ZXJcbiAgaGVpZ2h0OiAxMDBweFxuICBtYXJnaW46IDJweFxuICBoM1xuICAgIHBhZGRpbmctdG9wOiAzNXB4XG4iLCIuYm94IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDJweDtcbn1cbi5ib3ggaDMge1xuICBwYWRkaW5nLXRvcDogMzVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/office/pages/home/home.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/office/pages/home/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_librarian_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/librarian.service */ "./src/app/office/services/librarian.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const links = [
    { name: "Add Data", url: "/office/create-data" },
    { name: "Add Book", url: "/office/create-book" },
    { name: "CheckInOut", url: "/office/checkinout" },
    { name: "Employee", url: "/office/employee" },
];
let HomeComponent = class HomeComponent {
    constructor(router, libService) {
        this.router = router;
        this.libService = libService;
        this.officeLinks = links;
        // this.libService.auth().subscribe((data) => {
        //   if (data === 0) {
        //     this.router.navigateByUrl('office/login');
        //   }
        // });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_librarian_service__WEBPACK_IMPORTED_MODULE_2__["LibService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.sass */ "./src/app/office/pages/home/home.component.sass")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/office/pages/index.ts":
/*!***************************************!*\
  !*** ./src/app/office/pages/index.ts ***!
  \***************************************/
/*! exports provided: OfficeHomeComponent, HomeComponent, EmployeeComponent, CreateDataComponent, SearchDataComponent, BookDataComponent, CheckAuthorComponent, CreateBookComponent, CheckInOutComponent, UserComponent, UsersComponent, SearchUsersComponent, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _office_home_office_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./office-home/office-home.component */ "./src/app/office/pages/office-home/office-home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OfficeHomeComponent", function() { return _office_home_office_home_component__WEBPACK_IMPORTED_MODULE_1__["OfficeHomeComponent"]; });

/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/office/pages/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]; });

/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/office/pages/employee/employee.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"]; });

/* harmony import */ var _create_data_create_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-data/create-data.component */ "./src/app/office/pages/create-data/create-data.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateDataComponent", function() { return _create_data_create_data_component__WEBPACK_IMPORTED_MODULE_4__["CreateDataComponent"]; });

/* harmony import */ var _create_data_search_data_search_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-data/search-data/search-data.component */ "./src/app/office/pages/create-data/search-data/search-data.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchDataComponent", function() { return _create_data_search_data_search_data_component__WEBPACK_IMPORTED_MODULE_5__["SearchDataComponent"]; });

/* harmony import */ var _create_data_book_data_book_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-data/book-data/book-data.component */ "./src/app/office/pages/create-data/book-data/book-data.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookDataComponent", function() { return _create_data_book_data_book_data_component__WEBPACK_IMPORTED_MODULE_6__["BookDataComponent"]; });

/* harmony import */ var _create_data_check_author_check_author_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-data/check-author/check-author.component */ "./src/app/office/pages/create-data/check-author/check-author.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckAuthorComponent", function() { return _create_data_check_author_check_author_component__WEBPACK_IMPORTED_MODULE_7__["CheckAuthorComponent"]; });

/* harmony import */ var _create_book_create_book_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-book/create-book.component */ "./src/app/office/pages/create-book/create-book.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateBookComponent", function() { return _create_book_create_book_component__WEBPACK_IMPORTED_MODULE_8__["CreateBookComponent"]; });

/* harmony import */ var _check_in_out_check_in_out_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./check-in-out/check-in-out.component */ "./src/app/office/pages/check-in-out/check-in-out.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckInOutComponent", function() { return _check_in_out_check_in_out_component__WEBPACK_IMPORTED_MODULE_9__["CheckInOutComponent"]; });

/* harmony import */ var _check_in_out_user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./check-in-out/user/user.component */ "./src/app/office/pages/check-in-out/user/user.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return _check_in_out_user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"]; });

/* harmony import */ var _check_in_out_users_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./check-in-out/users/users.component */ "./src/app/office/pages/check-in-out/users/users.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return _check_in_out_users_users_component__WEBPACK_IMPORTED_MODULE_11__["UsersComponent"]; });

/* harmony import */ var _check_in_out_search_users_search_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./check-in-out/search-users/search-users.component */ "./src/app/office/pages/check-in-out/search-users/search-users.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchUsersComponent", function() { return _check_in_out_search_users_search_users_component__WEBPACK_IMPORTED_MODULE_12__["SearchUsersComponent"]; });

/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/office/pages/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]; });

















/***/ }),

/***/ "./src/app/office/pages/login/login.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/office/pages/login/login.component.sass ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/office/pages/login/login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/office/pages/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_office_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/office.service */ "./src/app/office/services/office.service.ts");





let LoginComponent = class LoginComponent {
    constructor(router, formBuilder, office) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.office = office;
        this.credentials = this.formBuilder.group({
            email: '',
            password: ''
        });
    }
    onSubmit() {
        this.office.login(this.credentials.value).subscribe(() => {
            window.location.reload();
        }, (err) => {
            console.error(err);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_office_service__WEBPACK_IMPORTED_MODULE_4__["OfficeService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.sass */ "./src/app/office/pages/login/login.component.sass")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/office/pages/office-home/office-home.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/office/pages/office-home/office-home.component.sass ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9wYWdlcy9vZmZpY2UtaG9tZS9vZmZpY2UtaG9tZS5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/office/pages/office-home/office-home.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/office/pages/office-home/office-home.component.ts ***!
  \*******************************************************************/
/*! exports provided: OfficeHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeHomeComponent", function() { return OfficeHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_office_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/office.service */ "./src/app/office/services/office.service.ts");
/* harmony import */ var _services_librarian_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/librarian.service */ "./src/app/office/services/librarian.service.ts");





const headerLinks = [
    { name: "Add Data", url: "/office/create-data" },
    { name: "Add Book", url: "/office/create-book" },
    { name: "CheckInOut", url: "/office/checkinout" },
    { name: "Employee", url: "/office/employee" },
    { name: "Home", url: "/" }
];
let OfficeHomeComponent = class OfficeHomeComponent {
    constructor(office, router, libService) {
        this.office = office;
        this.router = router;
        this.libService = libService;
        this.links = headerLinks;
        this.libService.auth$.subscribe((data) => {
            console.log(data);
            // if (data == 0) {
            //   this.router.navigateByUrl('office/login');
            // }
        });
    }
    logout() {
        this.office.logout();
    }
};
OfficeHomeComponent.ctorParameters = () => [
    { type: _services_office_service__WEBPACK_IMPORTED_MODULE_3__["OfficeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_librarian_service__WEBPACK_IMPORTED_MODULE_4__["LibService"] }
];
OfficeHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-office-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./office-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/pages/office-home/office-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./office-home.component.sass */ "./src/app/office/pages/office-home/office-home.component.sass")).default]
    })
], OfficeHomeComponent);



/***/ }),

/***/ "./src/app/office/return-button/return-button.component.sass":
/*!*******************************************************************!*\
  !*** ./src/app/office/return-button/return-button.component.sass ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9yZXR1cm4tYnV0dG9uL3JldHVybi1idXR0b24uY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/office/return-button/return-button.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/office/return-button/return-button.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReturnButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnButtonComponent", function() { return ReturnButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReturnButtonComponent = class ReturnButtonComponent {
    constructor() { }
};
ReturnButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'return-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./return-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/office/return-button/return-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./return-button.component.sass */ "./src/app/office/return-button/return-button.component.sass")).default]
    })
], ReturnButtonComponent);



/***/ }),

/***/ "./src/app/office/services/bookData.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/office/services/bookData.service.ts ***!
  \*****************************************************/
/*! exports provided: BookDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDataService", function() { return BookDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/book.service */ "./src/app/shared/book.service.ts");



let BookDataService = class BookDataService {
    constructor(book) {
        this.book = book;
        this.data = {
            title: "",
            authors: [],
            genres: [],
            isbn: "",
            img: "",
            saved: null,
            savedAuthors: []
        };
    }
    sort(book) {
        this.data.title = book.title;
        this.getISBN(book.industryIdentifiers[0].identifier);
        this.data.img = book.imageLinks.smallThumbnail;
        this.getAuthor(book.authors);
        this.getGenre(book.categories);
        return this.data;
    }
    getISBN(isbn) {
        if (isbn) {
            this.data.isbn = isbn;
            this.checkBookExist(isbn);
        }
    }
    checkBookExist(isbn) {
        this.book.check({ isbn: isbn })
            .subscribe(data => {
            if (data.length >= 1) {
                this.data.saved = true;
            }
            else {
                this.data.saved = false;
            }
        });
    }
    getAuthor(authors) {
        this.data.authors = [];
        this.data.savedAuthors = [];
        if (authors) {
            this.sortName(authors);
            this.searchAuthor(this.data.authors);
        }
    }
    getGenre(genres) {
        this.data.genres = [];
        if (genres) {
            for (let genre of genres) {
                this.data.genres.push(genre);
            }
        }
    }
    sortName(authors) {
        for (let author of authors) {
            let splitName = author.split(/[ ,]+/);
            if (splitName.length === 3) {
                let name = { first_name: splitName[0],
                    middle_name: splitName[1], last_name: splitName[2] };
                this.data.authors.push(name);
            }
            else if (splitName.length === 2) {
                let name = { first_name: splitName[0], last_name: splitName[1] };
                this.data.authors.push(name);
            }
            else if (splitName.length === 1 || splitName.length >= 4) {
                this.data.authors.push(name);
            }
            else {
                let name = { first_name: author };
                this.data.authors.push(name);
            }
        }
    }
    searchAuthor(authors) {
        for (let author of authors) {
            this.book.searchAuthor(author).subscribe(data => {
                if (data.length > 0) {
                    this.data.savedAuthors.push(data[0]);
                }
            });
        }
    }
};
BookDataService.ctorParameters = () => [
    { type: _shared_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }
];
BookDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BookDataService);



/***/ }),

/***/ "./src/app/office/services/checkInOut.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/office/services/checkInOut.service.ts ***!
  \*******************************************************/
/*! exports provided: CheckInOutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInOutService", function() { return CheckInOutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/book.service */ "./src/app/shared/book.service.ts");
/* harmony import */ var _office_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./office.service */ "./src/app/office/services/office.service.ts");






let CheckInOutService = class CheckInOutService {
    constructor(book, office) {
        this.book = book;
        this.office = office;
    }
    barrow(book, user) {
        let newDate = this.dueDate();
        let updateData = {
            id: book._id, availability: "lent",
            due_date: newDate,
            current_barrower: user._id,
            past_barrower: user._id
        };
        let updateUser = { id: user._id, instanceId: book._id };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.office.instanceCheckout(updateData), this.office.userCheckout(updateUser));
    }
    dueDate() {
        let today = new Date();
        let newDate = new Date();
        newDate.setDate(today.getDate() + 12);
        return newDate;
    }
    getBooks(user) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(user.due_books).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((id) => this.book.instanceId(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((bookInstance) => this.book.getById(bookInstance.book), (original, detail) => ({ book: detail, instance: original })))));
    }
    returnBook(bookInstance, user) {
        let returnData = { id: bookInstance._id, availability: "available" };
        let returnUser = { id: user._id, due_books: bookInstance._id };
        return this.office.instanceReturn(returnData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.office.userReturn(returnUser)));
    }
};
CheckInOutService.ctorParameters = () => [
    { type: _shared_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"] },
    { type: _office_service__WEBPACK_IMPORTED_MODULE_5__["OfficeService"] }
];
CheckInOutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CheckInOutService);



/***/ }),

/***/ "./src/app/office/services/librarian.service.ts":
/*!******************************************************!*\
  !*** ./src/app/office/services/librarian.service.ts ***!
  \******************************************************/
/*! exports provided: LibService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibService", function() { return LibService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web3.service */ "./src/app/office/services/web3.service.ts");
/* harmony import */ var _office_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./office.service */ "./src/app/office/services/office.service.ts");
/* harmony import */ var build_contracts_Librarian_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! build/contracts/Librarian.json */ "./build/contracts/Librarian.json");
var build_contracts_Librarian_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! build/contracts/Librarian.json */ "./build/contracts/Librarian.json", 1);







// declare let require: any;
// let LibContract = require( '../../../../build/contracts/Librarian.json');
//
let LibService = class LibService {
    constructor(web3Service, office) {
        this.web3Service = web3Service;
        this.office = office;
        this.libContract$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.web3Service.getWeb3()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((provider => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.getLibContract(provider)))));
        this.auth$ = this.web3Service.account$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(address => this.employee(address)));
    }
    getLibContract(web3) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                // const instance = new web3.eth.Contract(LibContract);
                const networkId = yield web3.eth.net.getId();
                const deployedNetwork = build_contracts_Librarian_json__WEBPACK_IMPORTED_MODULE_6__.networks[networkId];
                const instance = new web3.eth.Contract(build_contracts_Librarian_json__WEBPACK_IMPORTED_MODULE_6__.abi, deployedNetwork && deployedNetwork.address);
                return instance;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    employee(address) {
        return this.libContract$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(contract => contract.methods.employee(address).call()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    auth() {
        let account = this.office.getAdminDetails();
        return this.office.getAdmin(account._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(admin => this.employee(admin.address)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    addEmployee(address) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.web3Service.account$, this.libContract$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([account, contract]) => contract.methods.addEmployee(address)
            .send({ from: account })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    addAdmin(address) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.web3Service.account$, this.libContract$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([account, contract]) => contract.methods.addAdmin(address)
            .send({ from: account })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    deleteEmp(address) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.web3Service.account$, this.libContract$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([account, contract]) => contract.methods.deleteEmployee(address)
            .send({ from: account })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    combinedData() {
        return this.office.getAdmins().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((admins => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(admins).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((admin) => this.employee(admin.address), (original, detail) => (Object.assign({}, original, { auth: detail }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["toArray"])()))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
LibService.ctorParameters = () => [
    { type: _web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"] },
    { type: _office_service__WEBPACK_IMPORTED_MODULE_5__["OfficeService"] }
];
LibService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LibService);



/***/ }),

/***/ "./src/app/office/services/office.service.ts":
/*!***************************************************!*\
  !*** ./src/app/office/services/office.service.ts ***!
  \***************************************************/
/*! exports provided: OfficeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeService", function() { return OfficeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






let OfficeService = class OfficeService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.getToken()}`
            })
        };
    }
    // Admin Authentication
    saveToken(token) {
        localStorage.setItem('admin-token', token);
        this.token = token;
    }
    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem('admin-token');
        }
        return this.token;
    }
    getAdminDetails() {
        const token = this.getToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    }
    isLoggedIn() {
        const admin = this.getAdminDetails();
        if (admin) {
            return admin.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    }
    logout() {
        this.token = '';
        window.localStorage.removeItem('admin-token');
        this.router.navigateByUrl('office/login');
    }
    login(admin) {
        return this.http.post(this.apiUrl + 'office/login', admin).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            if (data.token) {
                this.saveToken(data.token);
            }
            return data;
        }));
    }
    profile() {
        return this.http.get(this.apiUrl + 'office/profile', this.httpOptions);
    }
    //Get Admin Data
    getAdmins() {
        return this.http.get(this.apiUrl + 'office/employee', this.httpOptions);
    }
    getAdmin(id) {
        return this.http.get(this.apiUrl + 'office/employee/' + id, this.httpOptions);
    }
    //Book Services
    saveBook(book) {
        return this.http.post(this.apiUrl + 'book/create', book, this.httpOptions);
    }
    saveInstance(instance) {
        return this.http.post(this.apiUrl + 'book_instance/create', instance, this.httpOptions);
    }
    searchUser(query) {
        return this.http.post(this.apiUrl + 'user', query, this.httpOptions);
    }
    //Book Barrow
    instanceCheckout(data) {
        return this.http.put(this.apiUrl + 'book_instance/checkout', data, this.httpOptions);
    }
    userCheckout(data) {
        return this.http.put(this.apiUrl + 'user/checkout', data, this.httpOptions);
    }
    //Book Return
    instanceReturn(data) {
        return this.http.put(this.apiUrl + 'book_instance/return', data, this.httpOptions);
    }
    userReturn(data) {
        return this.http.put(this.apiUrl + 'user/return', data, this.httpOptions);
    }
    userId(id) {
        return this.http.get(this.apiUrl + "user/" + id, this.httpOptions);
    }
};
OfficeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
OfficeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], OfficeService);



/***/ }),

/***/ "./src/app/office/services/web3.service.ts":
/*!*************************************************!*\
  !*** ./src/app/office/services/web3.service.ts ***!
  \*************************************************/
/*! exports provided: Web3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3Service", function() { return Web3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






let Web3Service = class Web3Service {
    constructor() {
        this.interval$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.dappUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.getWeb3().then(web3 => {
            this.web3 = web3;
        });
        this.account$ = this.interval$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.web3.eth.getAccounts())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(accounts => accounts && accounts[0] ? accounts[0] : null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
    }
    getWeb3() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let web3;
            try {
                if (window.ethereum) {
                    web3 = new web3__WEBPACK_IMPORTED_MODULE_4___default.a(window.ethereum);
                }
                else if (window.web3) {
                    web3 = new web3__WEBPACK_IMPORTED_MODULE_4___default.a(window.web3.currentProvider);
                }
                else {
                    web3 = new web3__WEBPACK_IMPORTED_MODULE_4___default.a(web3__WEBPACK_IMPORTED_MODULE_4___default.a.givenProvider || this.dappUrl);
                }
                return web3;
            }
            catch (e) {
                console.log('getWeb3', e);
                return new web3__WEBPACK_IMPORTED_MODULE_4___default.a(window.ethereum || window.web3 || this.dappUrl);
            }
        });
    }
};
Web3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Web3Service);



/***/ }),

/***/ "./src/app/shared/book.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/book.service.ts ***!
  \****************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let BookService = class BookService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.assetUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].asset;
    }
    search(term) {
        return this.http.get(this.baseUrl + term);
    }
    searchAuthor(author) {
        return this.http.post(this.apiUrl + "author/search", author);
    }
    check(query) {
        return this.http.post(this.apiUrl + "book/search", query);
    }
    instance(query) {
        return this.http.post(this.apiUrl + "book_instance/search", query);
    }
    instanceId(id) {
        return this.http.get(this.apiUrl + "book_instance/" + id);
    }
    getById(id) {
        return this.http.get(this.apiUrl + "book/" + id);
    }
    genres() {
        return this.http.get(this.apiUrl + "genre/");
    }
    genre(id) {
        return this.http.get(this.apiUrl + "genre/" + id);
    }
};
BookService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BookService);



/***/ }),

/***/ "./src/app/shared/book/book.component.sass":
/*!*************************************************!*\
  !*** ./src/app/shared/book/book.component.sass ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ib29rL2Jvb2suY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/book/book.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/book/book.component.ts ***!
  \***********************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../book.service */ "./src/app/shared/book.service.ts");



let BookComponent = class BookComponent {
    constructor(book) {
        this.book = book;
        this.instanceEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges() {
        if (this.bookData.genre) {
            this.bookData.genreName = [];
            for (let genre of this.bookData.genre) {
                this.book.genre(genre).subscribe(data => {
                    this.bookData.genreName.push(data);
                });
            }
        }
        this.book.instance({ book: this.bookData._id })
            .subscribe(data => {
            if (data.length > 0) {
                this.bookData.instances = data;
            }
        });
    }
    instanceSelect(instance) {
        this.instanceEvent.emit(instance);
    }
};
BookComponent.ctorParameters = () => [
    { type: _book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BookComponent.prototype, "bookData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BookComponent.prototype, "instanceEvent", void 0);
BookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/book/book.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book.component.sass */ "./src/app/shared/book/book.component.sass")).default]
    })
], BookComponent);



/***/ }),

/***/ "./src/app/shared/books/books.component.sass":
/*!***************************************************!*\
  !*** ./src/app/shared/books/books.component.sass ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ib29rcy9ib29rcy5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/books/books.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/books/books.component.ts ***!
  \*************************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../book.service */ "./src/app/shared/book.service.ts");



let BooksComponent = class BooksComponent {
    constructor(book) {
        this.book = book;
        this.bookEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges() {
        for (let book of this.books) {
            for (let author of book.author) {
                this.book.searchAuthor({ _id: author }).subscribe(data => {
                    book.authorName = data;
                });
            }
        }
    }
    selectBook(book) {
        this.bookEvent.emit(book);
        delete this.books;
    }
};
BooksComponent.ctorParameters = () => [
    { type: _book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BooksComponent.prototype, "books", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BooksComponent.prototype, "bookEvent", void 0);
BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'books',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./books.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/books/books.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./books.component.sass */ "./src/app/shared/books/books.component.sass")).default]
    })
], BooksComponent);



/***/ }),

/***/ "./src/app/shared/search-title/search-title.component.sass":
/*!*****************************************************************!*\
  !*** ./src/app/shared/search-title/search-title.component.sass ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZWFyY2gtdGl0bGUvc2VhcmNoLXRpdGxlLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/shared/search-title/search-title.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/search-title/search-title.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTitleComponent", function() { return SearchTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../book.service */ "./src/app/shared/book.service.ts");




let SearchTitleComponent = class SearchTitleComponent {
    constructor(formBuilder, book) {
        this.formBuilder = formBuilder;
        this.book = book;
        this.addBookEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.titleForm = this.formBuilder.group({
            title: '',
        });
    }
    onSubmit() {
        this.book.check(this.titleForm.value).subscribe(data => {
            if (data.length > 0) {
                this.addBookEvent.emit(data);
            }
        });
        this.titleForm.reset();
    }
};
SearchTitleComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchTitleComponent.prototype, "addBookEvent", void 0);
SearchTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'search-title',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-title.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/search-title/search-title.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-title.component.sass */ "./src/app/shared/search-title/search-title.component.sass")).default]
    })
], SearchTitleComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book.service */ "./src/app/shared/book.service.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./books/books.component */ "./src/app/shared/books/books.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book/book.component */ "./src/app/shared/book/book.component.ts");
/* harmony import */ var _search_title_search_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-title/search-title.component */ "./src/app/shared/search-title/search-title.component.ts");
var SharedModule_1;








let SharedModule = SharedModule_1 = class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule_1,
            providers: [_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"]]
        };
    }
};
SharedModule = SharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_books_books_component__WEBPACK_IMPORTED_MODULE_5__["BooksComponent"], _book_book_component__WEBPACK_IMPORTED_MODULE_6__["BookComponent"], _search_title_search_title_component__WEBPACK_IMPORTED_MODULE_7__["SearchTitleComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        exports: [
            _book_book_component__WEBPACK_IMPORTED_MODULE_6__["BookComponent"], _books_books_component__WEBPACK_IMPORTED_MODULE_5__["BooksComponent"], _search_title_search_title_component__WEBPACK_IMPORTED_MODULE_7__["SearchTitleComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: false,
    apiUrl: "http://localhost:8000/api/",
    asset: "http://localhost:8000/static/",
    dappUrl: "ws://localhost:8545"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/zangif/Documents/projectcs/dapp-library-sys/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map