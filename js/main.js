// pick a random number between 0 and 16


let correctNumber = Math.floor(Math.random() * 15)



let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1

console.log(`The correct number is ${correctNumber}`)

function evalGuess() {
  totalGuesses += 1 // totalGuesses = totalGuesses +1
  gamerGuess = document.querySelector('#guess').value
  console.log(totalGuesses, gamerGuess)
  const feedback = document.querySelector('#feedback')

  if (gamerGuess == correctNumber) {
      console.log(`gamerGuess is equal to correctNumber`)
      feedback.innerText = 'Winner winner chicken dinner!'
      giveAward()
  } else if (gamerGuess > correctNumber && gamerGuess < 16) {
      feedback.innerText = 'too high, try again'
  } else if (gamerGuess < correctNumber && gamerGuess > 0) {
      feedback.innerText = 'too low, try again'
  } else {
      feedback.innerText = 'Please choose a number between 1 and 15 and try again'
      totalGuesses -= 1
  }


document.querySelector('#attempts').innerText = totalGuesses
}

function giveAward () {

//disable button
document.getElementById('guessBtn').disabled = true;
console.log('Congratulations!')
let imagePath ='#'
if(totalGuesses < 4){
    imagePath = 'image/blue.png'
}else if (totalGuesses >= 4 && totalGuesses <= 6){
    imagePath = 'image/red.png'
}else{
    imagePath = 'image/yellow.png'
}
// switch (totalGuesses) {
//     case 1:
//     case 2:
//     case 3:
//         imagePath = 'image/blue.png'
//     break;
//     case 4: 
//     case 5: 
//     case 6:  
//        imagePath = 'image/red.png'
//     break;
    
    
//     //do the rest here
// }


const awardImage = document.createElement('img') // Creates a <img> element
awardImage.setAttribute('src', imagePath)
const ribbon = document.querySelector('#ribbon')

ribbon.appendChild(awardImage)
// only append child if the ribbon does not have any child nodes yet
}

