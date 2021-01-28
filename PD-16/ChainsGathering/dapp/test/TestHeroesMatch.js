const HeroesMatch = artifacts.require("HeroesMatch");

contract("HeroesMatch", (accounts) => {
    it("Set and change the season to winter", async () => {
        const HeroesMatchInstance = await HeroesMatch.deployed();
        await HeroesMatchInstance.setSeason("winter");
        let contractSeason = await HeroesMatchInstance.season();

        assert.equal(contractSeason, "winter", "Thats not winter")
    })
})