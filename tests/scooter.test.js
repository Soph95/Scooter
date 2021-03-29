const { Scooter, ElectricScooter } = require("../src/scooter");

describe("Scooter tests", () => {
  test("Shows correct scooter model", () => {
    const newModel = new Scooter("450E");
    expect(newModel.model).toEqual("450E");
  });
  test("Shows correct electric scooter model", async () => {
    const newModelEl = new ElectricScooter("780A");
    expect(newModelEl.model).toEqual("780A");
  });
  test("Checks electric scooter starts with no charge", () => {
    const elScooter1 = new ElectricScooter("model345");
    expect(elScooter1.charged).toEqual(false);
  });
});
