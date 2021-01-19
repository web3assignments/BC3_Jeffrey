var Contract = artifacts.require('HeroesMatch');

const { deployProxy } = require('@openzeppelin/truffle-upgrades')

/*module.exports = async function(deployer) {
  const HeroesMatchContract1 = await deployProxy(Contract, ['Winter'], { deployer, unsafeAllowCustomTypes:true });
  console.log(`Address of Debug1Contract: ${HeroesMatchContract1.address}`);
  console.log("Doing some tests with the just deployed contract");
  var season = await HeroesMatchContract1.season();
  console.log(`Initialized with winter, season is now ${season.toString()}`);
  await HeroesMatchContract1.setSeason('Fall');
  season = await HeroesMatchContract1.season();
  console.log(`Called function set(Fall), season is now ${season.toString()}`);
}*/

module.exports = async deployer => {
  await deployer.deploy(Contract);
};


