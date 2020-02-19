const SmartInvoice = artifacts.require("SmartInvoice");

module.exports = function(deployer) {
  deployer.deploy(SmartInvoice);
};
