class Scooter {
  constructor(model) {
    console.log("scooter");
    this.model = model;
  }
}
//test does not pass if extending
class ElectricScooter {
  constructor(model) {
    console.log("electric scooter");
    this.model = model;
    this.charged = false;
  }
}
module.exports = { Scooter, ElectricScooter };
