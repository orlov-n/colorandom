
class Color {
  constructor(randomColor) {
    this.name = randomColor; 
    this.locked = false;
  }

  lockColor() {
    this.locked = true;
  }

  unlockColor() {
    this.locked = false;
  }
};
