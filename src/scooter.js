class Scooter {
  constructor(model) {
    this.model = model;
  }
}

class ElectricScooter {
  constructor(model) {
    this.model = model;
    this.charged = false;
  }
}
//test does not pass if extending - overides electric scooter.
// class ElectricScooter extends Scooter {
//   constructor(model) {
//     super(model);
//     this.charged = false;
//   }
// }
module.exports = { Scooter, ElectricScooter };
