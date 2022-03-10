//Global Variables
//let data = sessionStorage.getItem('Lis')
const buttonLis = document.getElementById('buttonLis')
const buttonAsp = document.getElementById('buttonAsp')
const buttonEsci = document.getElementById('buttonEsci')
const buttonTraz = document.getElementById('buttonTraz')
const buttonOmep = document.getElementById('buttonOmep')
const buttonGaba = document.getElementById('buttonGaba')
const buttonIgnorePt = document.getElementById('ignorePt')
const buttonAskName = document.getElementById('askName')
const buttonAskNameDOB = document.getElementById('askNameDOB')
const buttonResetPtInteract = document.getElementById('resetPtInteract')
const ptRoomCheck = document.getElementById('PagePatientRoom')
const buttonMedReturn = document.getElementById('return-meds')
const heldMeds = document.getElementById('All-Held-Meds')
const ptRoomButtons = document.getElementsByClassName('ptRoom-button')
const buttonsPtInteract = document.getElementsByClassName('ptInteract')
const pulledMedsList = document.getElementById('pulled-meds-list')
let storedMeds = Object.keys(sessionStorage)
let storedMedsName = Object.values(sessionStorage)

//Global Functions

const resetButtonsPtInteract = () => {
  for (let i = 0; i < buttonsPtInteract.length; i++) {
    buttonsPtInteract[i].disabled = true
  }
}

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

if (ptRoomCheck === null) {
  buttonLis.addEventListener('click', () => {
    sessionStorage.setItem('Lis', ' Lisinopril 5 mg tablet')
    console.log(sessionStorage)
    medsPulledList()
  })
}

if (ptRoomCheck === null) {
  buttonAsp.addEventListener('click', () => {
    sessionStorage.setItem('Asp', ' Aspirin 81 mg tablet')
    console.log(sessionStorage)
    medsPulledList()
  })
}

if (ptRoomCheck === null) {
  buttonEsci.addEventListener('click', () => {
    sessionStorage.setItem('Esci', ' Escitalopram 10 mg tablet')
    medsPulledList()
  })
}

if (ptRoomCheck === null) {
  buttonTraz.addEventListener('click', () => {
    sessionStorage.setItem('Traz', ' Trazodone 50 mg tablet')
    medsPulledList()
  })
}

if (ptRoomCheck === null) {
  buttonOmep.addEventListener('click', () => {
    sessionStorage.setItem('Omep', ' Omeprazole 20 mg capsule')
    medsPulledList()
  })
}

if (ptRoomCheck === null) {
  buttonGaba.addEventListener('click', () => {
    sessionStorage.setItem('Gaba', ' Gabapentin 300 mg capsule')
    medsPulledList()
  })
}

buttonIgnorePt.addEventListener('click', () => {
  localStorage.setItem('IgnorePt', 'IgnorePt')
  resetButtonsPtInteract()
  console.log(localStorage)
})

buttonAskName.addEventListener('click', () => {
  localStorage.setItem('AskName', 'AskName')
  resetButtonsPtInteract()
  console.log(localStorage)
})

buttonAskNameDOB.addEventListener('click', () => {
  localStorage.setItem('AskNameDOB', 'AskNameDOB')
  resetButtonsPtInteract()
  console.log(localStorage)
})

buttonResetPtInteract.addEventListener('click', () => {
  localStorage.clear()
  for (let i = 0; i < buttonsPtInteract.length; i++) {
    buttonsPtInteract[i].disabled = false
  }
})
