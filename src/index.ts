/**
 * The program
 *
 *
 * By: Igor Zhelezniak
 * Version: 1.0
 * Since:   2022-09-17
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()
console.log('Rock-Paper-Scissor')
console.log('You VS PC')
const number = prompt(
  'Please pick rock(1), paper(2) or scissor(3): '
)
const rock = 1
const paper = 2
const scissor = 3
const min = 1
const max = 3
const yPC = Math.floor(Math.random() * max) + min
try {
  const yNumber = parseFloat(number)
  if (isNaN(yNumber)) {
    console.log('Invalid input')
  }
  else if (yNumber < 1 && yNumber > 3) {
    console.log('Invalid input')
  }
  else {
    if (yNumber === yPC) {
      console.log('Tie!')
    } else if (
      (yPC === paper && yNumber === rock) ||
      (yPC === scissor && yNumber === paper) ||
      (yPC === rock && yNumber === scissor)
    ) {
      console.log('PC wins!')
    } else {
      console.log('You win!')
    }
  }
} catch (e) {
  console.log('Invalid input')
}

console.log('\nDone.')
