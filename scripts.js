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

function populateColors() {
  var color1 = new Color(randomHexGenerator())
  var color2 = new Color(randomHexGenerator())
  var color3 = new Color(randomHexGenerator())
  var color4 = new Color(randomHexGenerator())
  var color5 = new Color(randomHexGenerator())
  var randomColorPalette = [color1, color2, color3, color4, color5]


  var currentPalette = createNewPalette(randomColorPalette)
  return currentPalette
}


function createNewPalette(randomPalette) {
  palette = new Palette(randomPalette)
  return palette
}


function makeNewPalette() {
var populatedColors = populateColors()
return populatedColors
}


function persistLockedColors(colors) {
  colors[1].lockColor() // this tests locking color at index 1
  for (var i = 0; i < colors.length; i++) {
    if (colors[i].locked === false) {
      colors.splice(i, 1, new Color(randomHexGenerator()))
      return colors
    } else {
      return
    }
  }
}

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
