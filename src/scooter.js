class Scooter {
  constructor(model) {
    this.model = model;
  }
}

class ElectricScooter extends Scooter {
  constructor(model) {
    super(model);
    this.charged = false;
  }
}
module.exports = { Scooter, ElectricScooter };
