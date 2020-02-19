const SmartInvoice = artifacts.require("SmartInvoice");

module.exports = function(deployer) {
  deployer.deploy(SmartInvoice, "2","1902020","0x535f6be6964b6ec4d4b0f6e52e6a88be8632c39b","0x2b9368262fb4a6f06443d1ccc1385c82f2059e42","0xba2c955d139be01cffb76f2354ce718828006d94","azert" );
};
