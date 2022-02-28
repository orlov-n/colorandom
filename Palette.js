

class Palette {
  constructor(colors) {
    this.colors = colors;
    this.id = Date.now();
  }

  lockColorAtIndex(colorIndex) {
    this.colors[colorIndex].lockColor()
  }

  unlockColorAtIndex(colorIndex) {
    this.colors[colorIndex].unlockColor()
  }
}
