//Global Variables
//let data = sessionStorage.getItem('Lis')
const buttonLis = document.getElementById('buttonLis')
const buttonAsp = document.getElementById('buttonAsp')
const ptRoomCheck = document.getElementById('PagePatientRoom')
const buttonMedReturn = document.getElementById('return-meds')
const heldMeds = document.getElementById('All-Held-Meds')
const ptRoomButtons = document.getElementsByClassName('ptRoom-button')

//Global Functions

let storedMeds = Object.keys(sessionStorage)

let medCarryOver = () => {
  for (let key of storedMeds) {
    //console.log(`${key}: ${sessionStorage.getItem(key)}`) -- string of 'key: value'
    //console.log(sessionStorage.getItem(key)) -- string of value
    const newButton = document.createElement('button')
    newButton.innerText = sessionStorage.getItem(key)
    newButton.classList.add('ptRoom-button')
    heldMeds.appendChild(newButton)
  }
}

if (ptRoomCheck !== null) {
  console.log('Page IS Pt Room')
  //Code to DOM add med elements to PtRoom to carry over from medRoom
  medCarryOver()
} else {
  console.log('Page is NOT Pt Room')
}

//Event Listeners
buttonMedReturn.addEventListener('click', () => {
  sessionStorage.clear()
  if (ptRoomCheck !== null) {
    while (heldMeds.firstChild) {
      heldMeds.removeChild(heldMeds.firstChild)
    }
  }
  console.log(sessionStorage)
})

buttonLis.addEventListener('click', () => {
  sessionStorage.setItem('Lis', 'Lisinopril 5 mg tablet')
  console.log(sessionStorage)
})

buttonAsp.addEventListener('click', () => {
  sessionStorage.setItem('Asp', 'Aspirin 81 mg tablet')
  console.log(sessionStorage)
})
