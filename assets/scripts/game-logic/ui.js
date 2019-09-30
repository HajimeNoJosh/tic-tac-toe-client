'use strict'
const update = require('../games/api.js')

let board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let playerTurn = true
let gameOver = false
let turnNum = 0
let firstBackground = '#034001'
let secondBackground = '#0339A6'


// Each of these changes color depending on who won. It takes the winning combo
// and depending on the index of the board array based off the winning combos
// first index number, check for an x or o and changes color accordingly.

const changeColor1 = function (win1) {
  if (board[win1[0]] === 'x') {
    gameOver = true
    $('#0').css('background-color', firstBackground)
    $('#1').css('background-color', firstBackground)
    $('#2').css('background-color', firstBackground)
  } else {
    gameOver = true
    $('#0').css('background-color', secondBackground)
    $('#1').css('background-color', secondBackground)
    $('#2').css('background-color', secondBackground)
  }
}

const changeColor2 = function (win2) {
  if (board[win2[0]] === 'x') {
    gameOver = true
    $('#3').css('background-color', firstBackground)
    $('#4').css('background-color', firstBackground)
    $('#5').css('background-color', firstBackground)
  } else {
    gameOver = true
    $('#3').css('background-color', secondBackground)
    $('#4').css('background-color', secondBackground)
    $('#5').css('background-color', secondBackground)
  }
}

const changeColor3 = function (win3) {
  if (board[win3[0]] === 'x') {
    gameOver = true
    $('#6').css('background-color', firstBackground)
    $('#7').css('background-color', firstBackground)
    $('#8').css('background-color', firstBackground)
  } else {
    gameOver = true
    $('#6').css('background-color', secondBackground)
    $('#7').css('background-color', secondBackground)
    $('#8').css('background-color', secondBackground)
  }
}

const changeColor4 = function (win4) {
  if (board[win4[0]] === 'x') {
    gameOver = true
    $('#0').css('background-color', firstBackground)
    $('#3').css('background-color', firstBackground)
    $('#6').css('background-color', firstBackground)
  } else {
    gameOver = true
    $('#0').css('background-color', secondBackground)
    $('#3').css('background-color', secondBackground)
    $('#6').css('background-color', secondBackground)
  }
}

const changeColor5 = function (win5) {
  if (board[win5[0]] === 'x') {
    gameOver = true
    $('#1').css('background-color', firstBackground)
    $('#4').css('background-color', firstBackground)
    $('#7').css('background-color', firstBackground)
  } else {
    gameOver = true
    $('#1').css('background-color', secondBackground)
    $('#4').css('background-color', secondBackground)
    $('#7').css('background-color', secondBackground)
  }
}

const changeColor6 = function (win6) {
  if (board[win6[0]] === 'x') {
    gameOver = true
    $('#2').css('background-color', firstBackground)
    $('#5').css('background-color', firstBackground)
    $('#8').css('background-color', firstBackground)
  } else {
    gameOver = true
    $('#2').css('background-color', secondBackground)
    $('#5').css('background-color', secondBackground)
    $('#8').css('background-color', secondBackground)
  }
}
const changeColor7 = function (win7) {
  if (board[win7[0]] === 'x') {
    gameOver = true
    $('#0').css('background-color', firstBackground)
    $('#4').css('background-color', firstBackground)
    $('#8').css('background-color', firstBackground)
  } else {
    gameOver = true
    $('#0').css('background-color', secondBackground)
    $('#4').css('background-color', secondBackground)
    $('#8').css('background-color', secondBackground)
  }
}

const changeColor8 = function (win8) {
  if (board[win8[0]] === 'x') {
    gameOver = true
    $('#6').css('background-color', firstBackground)
    $('#4').css('background-color', firstBackground)
    $('#2').css('background-color', firstBackground)
  } else {
    gameOver = true
    $('#6').css('background-color', secondBackground)
    $('#4').css('background-color', secondBackground)
    $('#2').css('background-color', secondBackground)
  }
}

// This has the winning combos and checks for the board array index based off of
// the winning combos number in the 0 1 and 2 index. It checks if all 3 are the
// same value and then applies the color change.

const checkWin = function () {
  const win1 = [0, 1, 2]
  const win2 = [3, 4, 5]
  const win3 = [6, 7, 8]
  const win4 = [0, 3, 6]
  const win5 = [1, 4, 7]
  const win6 = [2, 5, 8]
  const win7 = [0, 4, 8]
  const win8 = [6, 4, 2]
  if (board[win1[0]] === board[win1[1]] && board[win1[1]] === board[win1[2]]) {
    changeColor1(win1)
  } else if (board[win2[0]] === board[win2[1]] && board[win2[1]] === board[win2[2]]) {
    changeColor2(win2)
  } else if (board[win3[0]] === board[win3[1]] && board[win3[1]] === board[win3[2]]) {
    changeColor3(win3)
  } else if (board[win4[0]] === board[win4[1]] && board[win4[1]] === board[win4[2]]) {
    changeColor4(win4)
  } else if (board[win5[0]] === board[win5[1]] && board[win5[1]] === board[win5[2]]) {
    changeColor5(win5)
  } else if (board[win6[0]] === board[win6[1]] && board[win6[1]] === board[win6[2]]) {
    changeColor6(win6)
  } else if (board[win7[0]] === board[win7[1]] && board[win7[1]] === board[win7[2]]) {
    changeColor7(win7)
  } else if (board[win8[0]] === board[win8[1]] && board[win8[1]] === board[win8[2]]) {
    changeColor8(win8)
  }
}

// This function changes the player. It sets a varaible player and if playerTurn
// is true changes to x otherwise to o and switches playerTurn to false or true
// after being run through. It then returns the player.

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

// This function just increases the turnNum for use in which turn it is.

const increaseTurn = function () {
  turnNum++
}

// This function changes the text of who won the game over all. It takes the
// gameOver variable and checks if the game is over which if it isn't then its a
// tie if the turnNum is 9. Otherwise based off which turn it is thats who won.

const whoWon = function () {
  if (turnNum === 9 && gameOver === false) {
    $('#whoseturn').html(`<h1 id="whoseturn">Its a tie</h1>`)
  } else if (gameOver === true && turnNum === 3) {
    $('#whoseturn').html(`<h1 id="whoseturn">x won</h1>`)
  } else if (gameOver === true && turnNum === 4) {
    $('#whoseturn').html(`<h1 id="whoseturn">o won</h1>`)
  } else if (gameOver === true && turnNum === 5) {
    $('#whoseturn').html(`<h1 id="whoseturn">x won</h1>`)
  } else if (gameOver === true && turnNum === 6) {
    $('#whoseturn').html(`<h1 id="whoseturn">o won</h1>`)
  } else if (gameOver === true && turnNum === 7) {
    $('#whoseturn').html(`<h1 id="whoseturn">x won</h1>`)
  } else if (gameOver === true && turnNum === 8) {
    $('#whoseturn').html(`<h1 id="whoseturn">o won</h1>`)
  } else if (gameOver === true && turnNum === 9) {
    $('#whoseturn').html(`<h1 id="whoseturn">x won</h1>`)
  }
}

// This is being passwed into the API to increase the counter of how many games
// where completed or are in progress.

const updateGameOver = function () {
  if (turnNum < 9) {
    update.updateGameOver(gameOver)
  } else if (turnNum === 9 && gameOver === true) {
    update.updateGameOver(gameOver)
  } else if (turnNum === 9 && gameOver === false) {
    update.updateGameOver(true)
  }
}

// This function switches the text for whose turn it is.

const whoseTurn = function (player) {
  if (player === 'x' && turnNum < 9) {
    $('#whoseturn').html(`<h1 id="whoseturn">It is o's turn</h1>`)
  } else if (player === 'o' && turnNum < 9) {
    $('#whoseturn').html(`<h1 id="whoseturn">It is x's turn</h1>`)
  }
}

// This function does the whole game. It checks to see if the game is over which
// if it is not over then it checks if the text within the clicked space is empty.
// if it is then it sets the varaible player to equeal checkTurn() it updates
// the text to that player and updates the board array to that player. It
// increases the turn. The API is updated with a similar functionality. Finally,
// it invokes the whoseTurn function to update the HTML. Otherwise it is an
// invalid move. It then invokes the 3 remaining functions as defined above.

const changeText = function (event) {
  if (gameOver === false) {
    if ($(this).text() === '') {
      const player = checkTurn()
      $(this).text(player)
      board[$(this).attr('id')] = player
      increaseTurn()
      update.updateGame($(this).attr('id'), player)
      whoseTurn(player)
    } else if ($(this).text() === 'x' || $(this).text() === 'o') {
      $('#whoseturn').html(`<h1 id="whoseturn">Invalid Move</h1>`)
    }
  }
  checkWin()
  updateGameOver()
  whoWon()
}

// Change the color if user wants
const getRandomColor = function () {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const changeColorDefault = function () {
  firstBackground = '#034001'
  secondBackground = '#0339A6'
}

const changeColorWhite = function () {
  firstBackground = 'white'
  secondBackground = 'purple'
}

const changeColorYellow = function () {
  firstBackground = 'yellow'
  secondBackground = 'indigo'
}
const changeColorBlue = function () {
  firstBackground = 'blue'
  secondBackground = 'red'
}
const changeColorOrange = function () {
  firstBackground = 'orange'
  secondBackground = 'black'
}
const changeColorRandom = function () {
  firstBackground = getRandomColor()
  secondBackground = getRandomColor()
}

// This just resets the game engine to the original state.

const reset = function () {
  playerTurn = true
  board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  $('.cell').text('')
  $('.cell').css('background-color', '#0D0D0D')
  gameOver = false
  turnNum = 0
  $('#whoseturn').html(`<h1 id="whoseturn">It is x's turn</h1>`)
}

module.exports = {
  reset,
  changeText,
  changeColorWhite,
  changeColorDefault,
  changeColorYellow,
  changeColorBlue,
  changeColorOrange,
  changeColorRandom
}
