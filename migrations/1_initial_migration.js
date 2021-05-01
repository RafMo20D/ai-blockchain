var Migrations = artifacts.require("./ConvertLib.sol");
var Migrations = artifacts.require("./Migrations.sol");
var Migrations = artifacts.require("./MetaCoin.sol");
var Migrations = artifacts.require("./SendSignal.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib.sol);
  deployer.deploy(Migrations);
  deployer.deploy(MetaCoin.sol);
  deployer.deploy(SendSignal.sol);
};
