const { Scooter, ElectricScooter } = require("../src/scooter");

class HiringStn {
  constructor(location) {
    this.location = location;
    this.electricScooter = [];
    this.manualScooter = [];
  }

  hireScooter(scooter, user) {
    if (scooter instanceof Scooter) {
      this.manualScooter.push(user);
      this.manualScooter.push(scooter);
    } else if (scooter instanceof ElectricScooter) {
      this.electricScooter.push(user);
      this.electricScooter.push(scooter);
    }
  }

  async charge(electricScooter) {
    console.log("Starting charge");

    await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 seconds
    electricScooter.charged = true;
    console.log("Charge complete"); // after 2 seconds this line will print
  }
}

module.exports = HiringStn;
