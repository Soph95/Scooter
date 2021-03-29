const { Scooter, ElectricScooter } = require("../src/scooter");
const HiringStn = require("../src/stations");

class User {
  constructor(name) {
    this.name = name;
    this.scooter = null;
  }
  returnScooter(hiringStation) {
    if (!this.scooter) return null;
    if (this.scooter instanceof Scooter) {
      hiringStation.manualScooters.push(this.scooter);
      this.scooter = null;
    } else if (this.scooter instanceof ElectricScooter) {
      hiringStation.ElectricScooters.push(this.scooter);
      this.scooter = null;
    }
  }
}
module.exports = User;
