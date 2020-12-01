const Contract = artifacts.require('HeroesMatch');

module.exports = async deployer => {
  await deployer.deploy(Contract);
};
