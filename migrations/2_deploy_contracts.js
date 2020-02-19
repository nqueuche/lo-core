const SmartInvoice = artifacts.require("SmartInvoice");

module.exports = function(deployer) {
  deployer.deploy(SmartInvoice, "1","1902020","0x96d0004913d4672F705DA4546ae7094d67071c1F","0x58ca41f19ea0326b085178c275a1c7B1e57D9f1c","0x96d0004913d4672F705DA4546ae7094d67071c1F","azert" );
};
