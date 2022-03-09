//Global Variables
//let data = sessionStorage.getItem('Lis')
const buttonLis = document.getElementById('buttonLis')
const buttonAsp = document.getElementById('buttonAsp')
const buttonEsci = document.getElementById('buttonEsci')
const buttonTraz = document.getElementById('buttonTraz')
const buttonOmep = document.getElementById('buttonOmep')
const buttonGaba = document.getElementById('buttonGaba')
const ptRoomCheck = document.getElementById('PagePatientRoom')
const buttonMedReturn = document.getElementById('return-meds')
const heldMeds = document.getElementById('All-Held-Meds')
const ptRoomButtons = document.getElementsByClassName('ptRoom-button')
const pulledMedsList = document.getElementById('pulled-meds-list')
let storedMeds = Object.keys(sessionStorage)
let storedMedsName = Object.values(sessionStorage)

//Global Functions

let medCarryOver = () => {
  for (let key of storedMeds) {
    //console.log(`${key}: ${sessionStorage.getItem(key)}`) -- string of 'key: value'
    //console.log(sessionStorage.getItem(key)) -- string of value
    const newButton = document.createElement('button')
    newButton.innerText = sessionStorage.getItem(key)
    newButton.classList.add('ptRoom-med-button')
    heldMeds.appendChild(newButton)
  }
}

let medsPulledList = () => {
  // for (let key of storedMeds) {
  //   const newButton = document.createElement('li')
  //   newButton.innerText = sessionStorage.getItem(key)
  //   pulledMedsList.appendChild(newButton)
  // }
  pulledMedsList.innerText = Object.values(sessionStorage)
}

if (ptRoomCheck !== null) {
  console.log('Page IS Pt Room')
  medCarryOver()
} else {
  console.log('Page is NOT Pt Room')
}

let clearMedRmPulled = () => {
  while (pulledMedsList.firstChild) {
    pulledMedsList.removeChild(pulledMedsList.firstChild)
  }
}

//Event Listeners
buttonMedReturn.addEventListener('click', () => {
  sessionStorage.clear()
  if (ptRoomCheck !== null) {
    while (heldMeds.firstChild) {
      heldMeds.removeChild(heldMeds.firstChild)
    }
  }
  pulledMedsList.innerText = ' '
  console.log(sessionStorage)
})

buttonLis.addEventListener('click', () => {
  sessionStorage.setItem('Lis', 'Lisinopril 5 mg tablet')
  console.log(sessionStorage)
  //clearMedRmPulled()
  medsPulledList()
})

buttonAsp.addEventListener('click', () => {
  sessionStorage.setItem('Asp', 'Aspirin 81 mg tablet')
  console.log(sessionStorage)
  //clearMedRmPulled()
  medsPulledList()
})

buttonEsci.addEventListener('click', () => {
  sessionStorage.setItem('Esci', 'Escitalopram 10 mg tablet')
  //console.log(sessionStorage)
  medsPulledList()
})

buttonTraz.addEventListener('click', () => {
  sessionStorage.setItem('Traz', 'Trazodone 50 mg tablet')
  //console.log(sessionStorage)
  medsPulledList()
})

buttonOmep.addEventListener('click', () => {
  sessionStorage.setItem('Omep', 'Omeprazole 20 mg capsule')
  //console.log(sessionStorage)
  medsPulledList()
})

buttonGaba.addEventListener('click', () => {
  sessionStorage.setItem('Gaba', 'Gabapentin 300 mg capsule')
  //console.log(sessionStorage)
  medsPulledList()
})
