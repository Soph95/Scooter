const { Scooter, ElectricScooter } = require("../src/scooter");

class HiringStn {
  constructor(location) {
    this.location = location;
    this.electricScooters = [];
    this.manualScooters = [];
  }
  addScooter(scooter) {
    if (scooter instanceof ElectricScooter) {
      this.electricScooters.push(scooter);
    } else if (scooter instanceof Scooter) {
      this.manualScooters.push(scooter);
    }
  }

  hireScooter(scooter, user) {
    if (scooter instanceof Scooter) {
      user.scooter = scooter;
      const index = this.manualScooters.indexOf(scooter);
      this.manualScooters.splice(index, 1);
    } else if (scooter instanceof ElectricScooter) {
      user.scooter = scooter;
      const index = this.electricScooters.indexOf(scooter);
      this.electricScooters.splice(index, 1);
    }
  }

  async charge(electricScooter) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 seconds
    electricScooter.charged = true;
    // after 2 seconds this line will print
  }
}

module.exports = HiringStn;
