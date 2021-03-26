const { Scooter, ElectricScooter } = require("../src/scooter");
const HiringStn = require("../src/stations");

describe("model", () => {
  test("shows correct scooter model", () => {
    const newModel = new Scooter("450E");
    console.log(newModel);
    expect(newModel.model).toEqual("450E");
  });
  test("shows correct electric scooter model and charge", async () => {
    const newModelEl = new ElectricScooter("780A");
    const newHire = new HiringStn("FR");
    await newHire.charge(newModelEl);
    console.log(newModelEl);
    expect(newModelEl.model).toEqual("780A");
    expect(newModelEl.charged).toEqual(true);
  });
});
