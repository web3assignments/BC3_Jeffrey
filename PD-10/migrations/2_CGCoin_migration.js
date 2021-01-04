const Migrations = artifacts.require("CGWaifuCoin");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
