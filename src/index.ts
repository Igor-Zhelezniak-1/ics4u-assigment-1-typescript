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
const gameString = prompt(
  'Please pick rock(1), paper(2) or scissor(3): '
)
const rock = 1
const paper = 2
const scissor = 3
try {
  const game = parseFloat(gameString)
  if (isNaN(game)) {
    throw new Error('Not a number')
  }
  if (game < 1) {
    throw new Error('Negative number')
  }
  if (game > 3) {
    throw new Error('Number higher than 3')
  }
  // set min & max
  const min = 1
  const max = 3
  // use random npm install --save random
  const randomNum = Math.floor(Math.random() * max) + min
  const robot = randomNum

  if (robot === game) {
    console.log('Tie!')
  } else if (
    (robot === paper && game === rock) ||
    (robot === scissor && game === paper) ||
    (robot === rock && game === scissor)
  ) {
    console.log('PC wins!')
  } else {
    console.log('You win!')
  }
} catch (e) {
  console.log('Invalid input')
}

console.log('\nDone.')
