class Quark {
  constructor(color, flavor) {
    Object.assign(this, { color, flavor, baryon_number: 1 / 3 });
  }
  interact(quark) {
    [this.color, quark.color] = [quark.color, this.color];
  }
}
