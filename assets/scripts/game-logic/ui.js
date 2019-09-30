'use strict'
const update = require('../games/api.js')

let board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let playerTurn = true
let gameOver = false
let turnNum = 0


const changeColor1 = function (win1) {
  if (board[win1[0]] === 'x') {
    gameOver = true
    $('#0').css('background-color', '#034001')
    $('#1').css('background-color', '#034001')
    $('#2').css('background-color', '#034001')
  } else {
    gameOver = true
    $('#0').css('background-color', '#0339A6')
    $('#1').css('background-color', '#0339A6')
    $('#2').css('background-color', '#0339A6')
  }
}

const changeColor2 = function (win2) {
  if (board[win2[0]] === 'x') {
    gameOver = true
    $('#3').css('background-color', '#034001')
    $('#4').css('background-color', '#034001')
    $('#5').css('background-color', '#034001')
  } else {
    gameOver = true
    $('#3').css('background-color', '#0339A6')
    $('#4').css('background-color', '#0339A6')
    $('#5').css('background-color', '#0339A6')
  }
}

const changeColor3 = function (win3) {
  if (board[win3[0]] === 'x') {
    gameOver = true
    $('#6').css('background-color', '#034001')
    $('#7').css('background-color', '#034001')
    $('#8').css('background-color', '#034001')
  } else {
    gameOver = true
    $('#6').css('background-color', '#0339A6')
    $('#7').css('background-color', '#0339A6')
    $('#8').css('background-color', '#0339A6')
  }
}

const changeColor4 = function (win4) {
  if (board[win4[0]] === 'x') {
    gameOver = true
    $('#0').css('background-color', '#034001')
    $('#3').css('background-color', '#034001')
    $('#6').css('background-color', '#034001')
  } else {
    gameOver = true
    $('#0').css('background-color', '#0339A6')
    $('#3').css('background-color', '#0339A6')
    $('#6').css('background-color', '#0339A6')
  }
}

const changeColor5 = function (win5) {
  if (board[win5[0]] === 'x') {
    gameOver = true
    $('#1').css('background-color', '#034001')
    $('#4').css('background-color', '#034001')
    $('#7').css('background-color', '#034001')
  } else {
    gameOver = true
    $('#1').css('background-color', '#0339A6')
    $('#4').css('background-color', '#0339A6')
    $('#7').css('background-color', '#0339A6')
  }
}

const changeColor6 = function (win6) {
  if (board[win6[0]] === 'x') {
    gameOver = true
    $('#2').css('background-color', '#034001')
    $('#5').css('background-color', '#034001')
    $('#8').css('background-color', '#034001')
  } else {
    gameOver = true
    $('#2').css('background-color', '#0339A6')
    $('#5').css('background-color', '#0339A6')
    $('#8').css('background-color', '#0339A6')
  }
}
const changeColor7 = function (win7) {
  if (board[win7[0]] === 'x') {
    gameOver = true
    $('#0').css('background-color', '#034001')
    $('#4').css('background-color', '#034001')
    $('#8').css('background-color', '#034001')
  } else {
    gameOver = true
    $('#0').css('background-color', '#0339A6')
    $('#4').css('background-color', '#0339A6')
    $('#8').css('background-color', '#0339A6')
  }
}

const changeColor8 = function (win8) {
  if (board[win8[0]] === 'x') {
    gameOver = true
    $('#6').css('background-color', '#034001')
    $('#4').css('background-color', '#034001')
    $('#2').css('background-color', '#034001')
  } else {
    gameOver = true
    $('#6').css('background-color', '#0339A6')
    $('#4').css('background-color', '#0339A6')
    $('#2').css('background-color', '#0339A6')
  }
}

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

const increaseTurn = function () {
  turnNum++
}

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

const changeText = function () {
  if (gameOver === false) {
    if ($(this).text() === '') {
      const player = checkTurn()
      $(this).text(player)
      board[$(this).attr('id')] = player
      console.log(board)
      increaseTurn()
      console.log(turnNum)
      update.updateGame($(this).attr('id'), player)
      if (player === 'x' && turnNum < 9) {
        $('#whoseturn').html(`<h1 id="whoseturn">It is o's turn</h1>`)
      } else if (player === 'o' && turnNum < 9) {
        $('#whoseturn').html(`<h1 id="whoseturn">It is x's turn</h1>`)
      }
    } else if ($(this).text() === 'x' || $(this).text() === 'o') {
      $('#whoseturn').html(`<h1 id="whoseturn">Invalid Move</h1>`)
    }
  }
  checkWin()
  if (turnNum < 9) {
    update.updateGameOver(gameOver)
  } else if (turnNum === 9 && gameOver === true) {
    update.updateGameOver(gameOver)
  }
  whoWon()
  if (turnNum === 9 && gameOver === false) {
    update.updateGameOver(true)
  }
}

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
  changeText
}
