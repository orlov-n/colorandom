var buttonSave = document.querySelector('#new');
var paletteContainer = document.querySelector('.palette-container')
buttonSave.addEventListener('click', makeNewPalette);




var palette = null;

window.onload = function() {
 populateColors()
 renderPalette(palette)
// console.log(populatedColors)
// This is how we can lock the color of the first index
// populatedColors.colors[0].lockColor()
// console.log(populatedColors.colors[0])
}

function renderPalette(paletteToRender) {
  paletteContainer.innerHTML = ''
  for (var i = 0; i < paletteToRender.colors.length; i++) {
    paletteContainer.innerHTML +=  `
    <section>
    <section class="color-box"></section>
    <section class="hex-section">
      <p>${paletteToRender.colors[i].name}</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    </section>
  </section>
    `
  }
}


function populateColors() {
  var color1 = new Color(randomHexGenerator())
  var color2 = new Color(randomHexGenerator())
  var color3 = new Color(randomHexGenerator())
  var color4 = new Color(randomHexGenerator())
  var color5 = new Color(randomHexGenerator())
  var randomColorPalette = [color1, color2, color3, color4, color5]

  console.log(persistLockedColors(randomColorPalette))

  var currentPalette = createNewPalette(randomColorPalette)
  return currentPalette
}

function createNewPalette(randomPalette) {
  palette = new Palette(randomPalette)
  // console.log(palette)
  return palette
}

function makeNewPalette() {
  populateColors()
  renderPalette(palette)

}

function persistLockedColors(colors) {
  console.log('colors before ', colors)
  colors[1].lockColor() // this tests locking color at index 1
  for (var i = 0; i < colors.length; i++) {
    if (colors[i].locked === false) {
      colors.splice(i, 1, new Color(randomHexGenerator()))
      return colors
    }
    //   // colors[i] = new Color(randomHexGenerator())
    //   console.log('colors after ', colors)
    //   return
    // }
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
  console.log(randomColor)
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
