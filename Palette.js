//Palette:
// on page load, a new instance of Palette will be declared.
// old palette is saved
// It should have 5 Colors
// It should have a unique ID
// It should be able to replace the Colors with new Colors
// It should be able to lock Colors
// It should only replace unlocked Colors

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
};
