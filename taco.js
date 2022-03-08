//Global Variables
let data = sessionStorage.setItem
const buttonLis = document.getElementById('buttonLis')
const buttonAsp = document.getElementById('buttonAsp')

//Global Functions

// function storageAvailable(type) {
//   var storage
//   try {
//     storage = window[type]
//     var x = '__storage_test__'
//     storage.setItem(x, x)
//     storage.removeItem(x)
//     return true
//   } catch (e) {
//     return (
//       e instanceof DOMException &&
//       // everything except Firefox
//       (e.code === 22 ||
//         // Firefox
//         e.code === 1014 ||
//         // test name field too, because code might not be present
//         // everything except Firefox
//         e.name === 'QuotaExceededError' ||
//         // Firefox
//         e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
//       // acknowledge QuotaExceededError only if there's something already stored
//       storage &&
//       storage.length !== 0
//     )
//   }
// }
// if (storageAvailable('localStorage')) {
//   console.log('Yippee! We can use localStorage awesomeness')
// } else {
//   console.log('Too bad, no localStorage for us')
// }

//Event Listeners
buttonLis.addEventListener('click', () => {
  sessionStorage.setItem('Lis', 'yes')
  console.log(sessionStorage)
})

buttonAsp.addEventListener('click', () => {
  sessionStorage.setItem('Asp', 'yes')
  console.log(sessionStorage)
})
