var buttonSave = document.querySelector('#save');
var buttonNew = document.querySelector('#new')
var paletteContainer = document.querySelector('.palette-container');
// var colorBox = document.querySelector('.color-box');
//var paletteContainer = document.querySelector('.palette-container') duplicate?
var colorBox = document.querySelector('.color-outer-box')


buttonNew.addEventListener('click', makeNewPalette);
paletteContainer.addEventListener('click', onPadlockClick);

var palette = null;

window.onload = function() {
 populateColors()
 renderPalette(palette)
 console.log('this is a palette ', palette)
// console.log(populatedColors)
// This is how we can lock the color of the first index
// populatedColors.colors[0].lockColor()
// console.log(populatedColors.colors[0])
}

function renderPalette(paletteToRender) {
  paletteContainer.innerHTML = ''
  for (var i = 0; i < paletteToRender.colors.length; i++) {
    paletteContainer.innerHTML +=  `
    <section class="color-outer-box" data-color-index="${i}">
      <section class="color-box" style="background-color:${paletteToRender.colors[i].name}"></section>
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

function onPadlockClick(event) {
  var targetElement = event.target.closest('.color-outer-box')
  var selectedColorIndex = targetElement.dataset.colorIndex
  if (palette.colors[selectedColorIndex].locked) {
    palette.unlockColorAtIndex(selectedColorIndex)
  }
  //console.log(selectedColorIndex)
  else if (!palette.colors[selectedColorIndex].locked) {
    palette.lockColorAtIndex(selectedColorIndex)
  //console.log('palette after: ', palette)
  //conditional if locked...
}
};

function populateColors() {
  var color1 = new Color(randomHexGenerator())
  var color2 = new Color(randomHexGenerator())
  var color3 = new Color(randomHexGenerator())
  var color4 = new Color(randomHexGenerator())
  var color5 = new Color(randomHexGenerator())
  var randomColorPalette = [color1, color2, color3, color4, color5]

  //console.log(persistLockedColors(randomColorPalette))

  var currentPalette = createNewPalette(randomColorPalette)
  return currentPalette
}

function populateNewColors() {
  var randomColorPalette = [];
    for (var i = 0; i < 5; i++) {
      if (!palette.colors[i].locked) {
        var color = new Color(randomHexGenerator())
         randomColorPalette.push(color)
      }
      else if (palette.colors[i].locked) {
        var color = new Color(palette.colors[i].name)
          color.lockColor()
          randomColorPalette.push(color)
      }
    }
    var currentPalette = createNewPalette(randomColorPalette)
       return currentPalette
}

function createNewPalette(randomPalette) {
  palette = new Palette(randomPalette)
  // console.log(palette)
  return palette
}

function makeNewPalette() {
  populateNewColors()
  renderPalette(palette)
  // conditional to lock color in place?
}

// function persistLockedColors(colors) {
//   console.log('colors before ', colors)
//   colors[1].lockColor() // this tests locking color at index 1
//   for (var i = 0; i < colors.length; i++) {
//     if (colors[i].locked === false) {
//       colors.splice(i, 1, new Color(randomHexGenerator()))
//       // return colors
//     }
//       // colors[i] = new Color(randomHexGenerator())
//       console.log('colors after ', colors)

//     }
//   }

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
