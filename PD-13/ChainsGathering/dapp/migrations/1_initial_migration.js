const Contract = artifacts.require('Migrations');

module.exports = async deployer => {
  await deployer.deploy(Contract);
};
