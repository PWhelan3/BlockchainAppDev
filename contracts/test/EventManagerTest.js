const { expect } = require("chai");

describe("EventManager", () => {
  it("Should create and return events", async () => {
    const EventManager = await ethers.getContractFactory("EventManager");
    const eventManager = await EventManager.deploy();
    await eventManager.createEvent("Test Event", "Berlin", 1720000000);
    const events = await eventManager.getAllEvents();
    expect(events.length).to.equal(1);
  });
});
