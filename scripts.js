var buttonSave = document.querySelector('#save');
var buttonNew = document.querySelector('#new');
var paletteContainer = document.querySelector('.palette-container');
// var imageLock = document.querySelector('.image-lock')
// var colorBox = document.querySelector('.color-box');
//var paletteContainer = document.querySelector('.palette-container') duplicate?
var colorBox = document.querySelector('.color-outer-box')
var savedPaletteSection = document.querySelector('.saved-palette-section')

// Add Event Listeners-Buttons
buttonNew.addEventListener('click', makeNewPalette);
paletteContainer.addEventListener('click', onPadlockClick);
buttonSave.addEventListener('click', savePalette);

// Global Variables
var palette = null;
var savedPalettes = [];

console.log('line 17', savedPalettes)
window.onload = function() {
 populateColors()
//  console.log(imageLock)
//  console.log(savedPalettes[4].colors[4].name)

 renderPalette(palette)
//  console.log('this is a palette ', palette)
// console.log(populatedColors)
// This is how we can lock the color of the first index
// populatedColors.colors[0].lockColor()
// console.log(populatedColors.colors[0])
}

function renderPalette(paletteToRender) {
  paletteContainer.innerHTML = ''
   for (var i = 0; i < paletteToRender.colors.length; i++) {
     if (!palette.colors[i].locked) {

       paletteContainer.innerHTML += `
       <section class="color-outer-box" data-color-index="${i}">
         <section class="color-box" style="background-color:${paletteToRender.colors[i].name}" data-color-index="${i}"></section>
         <section class="hex-section">
           <p>${paletteToRender.colors[i].name}</p>
           <svg class="image-lock" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
           </svg>
         </section>
       </section>
       `
     } else {
      paletteContainer.innerHTML += `
      <section class="color-outer-box" data-color-index="${i}">
        <section class="color-box" style="background-color:${paletteToRender.colors[i].name}" data-color-index="${i}"></section>
        <section class="hex-section">
          <p>${paletteToRender.colors[i].name}</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        </section>
      </section>
      `
     }
  }
}

function onPadlockClick(event) {
  // var targetElement = event.target.closest('.color-outer-box')
  if (!event.target.dataset.colorIndex) {
   return
  }
  var selectedColorIndex = event.target.dataset.colorIndex
  // var selectedColorIndex = targetElement.dataset.colorIndex
  if (palette.colors[selectedColorIndex].locked) {
    palette.unlockColorAtIndex(selectedColorIndex)
  }
  //console.log(selectedColorIndex)
  else if (!palette.colors[selectedColorIndex].locked) {
    palette.lockColorAtIndex(selectedColorIndex)
    
    
  //console.log('palette after: ', palette)
  //conditional if locked...
}
renderPalette(palette)

};

function populateColors() {
  var color1 = new Color(randomHexGenerator())
  var color2 = new Color(randomHexGenerator())
  var color3 = new Color(randomHexGenerator())
  var color4 = new Color(randomHexGenerator())
  var color5 = new Color(randomHexGenerator())
  var randomColorPalette = [color1, color2, color3, color4, color5]

  //console.log(persistLockedColors(randomColorPalette))

  // var currentPalette =
  createNewPalette(randomColorPalette)
  // return currentPalette
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
    // var currentPalette =
    createNewPalette(randomColorPalette)
       // return currentPalette
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

// function savePalette(palette) {
//   if (!savedPalettes.includes(palette)) {
//     savedPalettes.push(palette)
//     savedPaletteSection.innerHTML += savedPalettes
//     console.log(savedPalettes)
//   }
// }

  function savePalette() {
    // savedPaletteSection.innerHTML = ""
    // console.log(savedPalettes[4].colors[4].name)
    savedPalettes.unshift(palette)
    // console.log(savedPalettes[4].colors[4].name)
    
    // for (var i = 0; i < palette.colors.length; i++) {
      savedPaletteSection.innerHTML += `<section class="mini-colors-container">
      <section class="mini-1-colors mini-colors" style="background-color:${savedPalettes[0].colors[0].name}"></section>
      <section class="mini-2-colors mini-colors" style="background-color:${savedPalettes[0].colors[1].name}"></section>
      <section class="mini-3-colors mini-colors" style="background-color:${savedPalettes[0].colors[2].name}"></section>
      <section class="mini-4-colors mini-colors" style="background-color:${savedPalettes[0].colors[3].name}"></section>
      <section class="mini-5-colors mini-colors" style="background-color:${savedPalettes[0].colors[4].name}"></section>
      <section class="delete-icon mini-colors"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg></section>
      </section> `
      // console.log(savedPalettes[4].colors[4].name)
    }
    // console.log(savedPalettes[4].colors[4].name)
  

// 


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
