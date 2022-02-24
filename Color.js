//Color:
// random hex code
// property of locked, (boolean). Starts as unlocked.
class Color {
  constructor(randomColor) {
    this.name = randomColor;
    this.locked = false;
  }

  lockColor() {
    this.locked = true;
  }
};
