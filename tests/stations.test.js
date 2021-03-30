const HiringStn = require("../src/stations");
const { Scooter, ElectricScooter } = require("../src/scooter");
const User = require("../src/user");

describe("Location", () => {
  test("Shows correct hiring station location", () => {
    const london = new HiringStn("LDN");
    expect(london.location).toEqual("LDN");
  });
});

describe("Scooter adding tests", () => {
  test("Can add scooter to hiring station", () => {
    const station1 = new HiringStn("ldn");
    const scooter1 = new Scooter("model345");
    station1.addScooter(scooter1);
    expect(station1.manualScooters).toEqual([scooter1]);
  });
  test("Can add electric scooter to hiring station", () => {
    const station1 = new HiringStn("ldn");
    const elScooter1 = new ElectricScooter("model345");
    station1.addScooter(elScooter1);
    expect(station1.electricScooters).toEqual([elScooter1]);
  });
});

describe("Electric scooter charging", () => {
  test("Can charge an electric scooter", async () => {
    const el = new ElectricScooter("500");
    expect(el.charged).toEqual(false);
    const hr = new HiringStn("ldn");
    await hr.charge(el);
    expect(el.charged).toEqual(true);
  });
});

describe("User hiring tests", () => {
  test("Can user hire manual scooter", () => {
    const sophie = new User("Sophie");
    const sophieScooter = new Scooter("200");
    const station1 = new HiringStn("aus");
    station1.addScooter(sophieScooter);
    station1.hireScooter(sophieScooter, sophie);
    expect(sophie.scooter).toEqual(sophieScooter);
    expect(sophie.scooter instanceof Scooter).toEqual(true);
  });
  test("Can user hire electric scooter with charge", async () => {
    const station2 = new HiringStn("ny");
    const john = new User("John");
    const johnScooter = new ElectricScooter("400");
    await station2.charge(johnScooter);
    expect(johnScooter.charged).toEqual(true);
    station2.hireScooter(johnScooter, john);
    expect(john.scooter).toEqual(johnScooter);
    expect(john.scooter instanceof ElectricScooter).toEqual(true);
  });
  test("Does hired scooter get removed from hiring station", () => {
    const sophie = new User("Sophie");
    const sophieScooter = new Scooter("200");
    const station1 = new HiringStn("aus");
    station1.addScooter(sophieScooter);
    expect(station1.manualScooters).toEqual([sophieScooter]);
    station1.hireScooter(sophieScooter, sophie);
    expect(station1.manualScooters).toEqual([]);
  });
});
