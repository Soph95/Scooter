const HiringStn = require("../src/stations");
const { Scooter, ElectricScooter } = require("../src/scooter");
const User = require("../src/user");

describe("location", () => {
  test("shows correct location", () => {
    const london = new HiringStn("LDN");
    console.log(london);
    expect(london.location).toEqual("LDN");
  });
});

describe("scooter", () => {
  test("can charge a scooter", async () => {
    const el = new ElectricScooter("500");
    const hr = new HiringStn("ldn");
    await hr.charge(el);
    expect(el.charged).toEqual(true);
  });
});

describe("user", () => {
  test("can user hire manual scooter", () => {
    const sophie = new User("Sophie");
    const sophieScooter = new Scooter("200");
    const hr = new HiringStn("aus");
    hr.hireScooter(sophieScooter, sophie);
    console.log(hr);
    expect(hr.manualScooter).toEqual([sophie, sophieScooter]);
  });
  test("can user hire electric scooter", async () => {
    const hire = new HiringStn("ny");
    const john = new User("John");
    const johnScooter = new ElectricScooter("400");
    hire.hireScooter(johnScooter, john);
    await hire.charge(johnScooter);
    console.log(hire);
    expect(hire.electricScooter).toEqual([john, johnScooter]);
  });
});
