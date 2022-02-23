// 2 classes - color and palette each in their own new js file

//Color:
// random hex code
// property of locked, (boolean). Starts as unlocked.

//Palette:
// on page load, a new instance of Palette will be declared.
// old palette is saved
// It should have 5 Colors
// It should have a unique ID
// It should be able to replace the Colors with new Colors
// It should be able to lock Colors
// It should only replace unlocked Colors
var palette = null;

window.onload = function() {
  createNewPalette()
}

function createNewPalette() {
  palette = new Palette()
  console.log(palette)
}
