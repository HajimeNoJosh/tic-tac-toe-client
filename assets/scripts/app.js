'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
let board = [0, 1, 2, 3, 4, 5, 6, 7, 8]

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

const checkWin = function () {
  const win1 = [0, 1, 2]
  for (let i = 0; )
}

let playerTurn = true

const checkTurn = function () {
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
  if ($(this).text() === '') {
    const player = checkTurn()
    $(this).text(player)
    board[$(this).attr('id')] = player
  } else {
    console.log('bugger off')
  }
}

const reset = function () {
  playerTurn = true
  $('div').text('')
}

$(() => {
  $('div').on('click', changeText)
  $('.click').on('click', reset)
  $('div').each(function (index) {
    $(this).attr('id', index)
  })
})
