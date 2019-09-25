'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
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
  $('div').first().text(player)
}

const reset = function () {
  playerTurn = true
  $('div').text('')
}


$(() => {
  $('div').on('click', changeText)
  $('.click').on('click', reset)
})
