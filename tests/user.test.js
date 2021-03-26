const User = require("../src/user");

describe("user", () => {
  test("can create new user", () => {
    const user1 = new User("Sarah");
    expect(user1.name).toEqual("Sarah");
  });
});
