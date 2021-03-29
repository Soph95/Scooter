const { Scooter } = require("../src/scooter");
const User = require("../src/user");
const HiringStn = require("../src/stations");

describe("user", () => {
  test("can create new user", () => {
    const user1 = new User("Sarah");
    expect(user1.name).toEqual("Sarah");
  });
});

describe("Return scooter", () => {
  test("Can user return scooter", () => {
    const user1 = new User("Sarah");
    const user1Scooter = new Scooter("L500");
    const station1 = new HiringStn("aus");
    station1.addScooter(user1Scooter);
    station1.hireScooter(user1Scooter, user1);
    user1.returnScooter(station1);
    expect(user1.scooter).toEqual(null);
    expect(station1.manualScooters).toEqual([user1Scooter]);
  });
});
