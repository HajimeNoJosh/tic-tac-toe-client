'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

let board = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

let playerTurn = true

function checkTurn () {
  let player = ''
  if (playerTurn) {
    player = 'x'
  } else {
    player = 'o'
  }
  playerTurn = !playerTurn
  return player
}

const changeText = function () {
  const player = checkTurn()
  if ($(this).text() === '') {
    $(this).text(player)
  } else {
    console.log('Bugger me')
  }
}

const reset = function () {
  playerTurn = true
  $('div').text('')
}

$(() => {
  $('div').on('click', changeText)
  $('.click').on('click', reset)
})
