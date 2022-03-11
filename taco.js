//Global Variables
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
const medRoomCheck = document.getElementById('pageMedRoom')
const ptRoomCheck = document.getElementById('PagePatientRoom')
const buttonMedReturn = document.getElementById('return-meds')
const heldMeds = document.getElementById('All-Held-Meds')
const ptRoomButtons = document.getElementsByClassName('ptRoom-button')
const buttonsPtInteract = document.getElementsByClassName('ptInteract')
const pulledMedsList = document.getElementById('pulled-meds-list')
const buttonFinalCheck = document.getElementById('finalConfirm')
let storedMeds = Object.keys(sessionStorage)
let storedMedsName = Object.values(sessionStorage)

//Global Functions

const replay = () => {
  if (confirm('Reset and try again?') === true) {
    localStorage.clear()
    for (let i = 0; i < buttonsPtInteract.length; i++) {
      buttonsPtInteract[i].disabled = false
    }
    sessionStorage.clear()
    while (heldMeds.firstChild) {
      heldMeds.removeChild(heldMeds.firstChild)
    }
    pulledMedsList.innerText = ' '
  }
}

const winOrLose = () => {
  if (
    sessionStorage.getItem('Asp') !== null ||
    sessionStorage.getItem('Traz') !== null ||
    sessionStorage.getItem('Lis') !== null ||
    localStorage.getItem('AskNameDOB') === null
  ) {
    alert('You lose, you can go back and try again.')
    replay()
  } else {
    alert('You win.')
    replay()
  }
}

const resetButtonsPtInteract = () => {
  for (let i = 0; i < buttonsPtInteract.length; i++) {
    buttonsPtInteract[i].disabled = true
  }
}

let medCarryOver = () => {
  for (let key of storedMeds) {
    const newButton = document.createElement('button')
    newButton.innerText = sessionStorage.getItem(key)
    newButton.classList.add('ptRoom-med-button')
    heldMeds.appendChild(newButton)
  }
}

let medsPulledList = () => {
  pulledMedsList.innerText = Object.values(sessionStorage)
}

if (ptRoomCheck !== null) {
  medCarryOver()
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
})

if (ptRoomCheck === null) {
  buttonLis.addEventListener('click', () => {
    sessionStorage.setItem('Lis', ' Lisinopril 5 mg tablet')
    medsPulledList()
  })
}

if (ptRoomCheck === null) {
  buttonAsp.addEventListener('click', () => {
    sessionStorage.setItem('Asp', ' Aspirin 81 mg tablet')
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
})

buttonAskName.addEventListener('click', () => {
  localStorage.setItem('AskName', 'AskName')
  resetButtonsPtInteract()
})

buttonAskNameDOB.addEventListener('click', () => {
  localStorage.setItem('AskNameDOB', 'AskNameDOB')
  resetButtonsPtInteract()
})

buttonResetPtInteract.addEventListener('click', () => {
  localStorage.clear()
  for (let i = 0; i < buttonsPtInteract.length; i++) {
    buttonsPtInteract[i].disabled = false
  }
})

buttonFinalCheck.addEventListener('click', () => {
  winOrLose()
})
