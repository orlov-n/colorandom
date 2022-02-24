//Global Variables:
var palette = null;

// Query Selectors:
var buttonSave = document.querySelector('#new');

// Event Listeners:
buttonSave.addEventListener('click', makeNewPalette);

//Functions:
window.onload = function() {
  var populatedColors = populateColors()
}

// function createNewPalette() {
//   palette = new Palette()
//   console.log(palette)
// }

function randomHexGenerator() {
  var characters = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
  var randomColor = '#'

  for (var i = 0; i < 6; i++) {
    var index = Math.floor(Math.random() * characters.length)
    var value = characters[index]


    randomColor += value

  }
  return randomColor
}

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
