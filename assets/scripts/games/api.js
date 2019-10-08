'use strict'

const config = require('../config.js')
const store = require('../store.js')

let id = 0

const createGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    success: function (data) {
      id = data.game.id
      $('#whoseturn').show()
      $('.cell').show()
      $('.aicell').hide()
      $('#getstats').show()
      $('#getstatswon').show()
      $('#getstatslost').show()
      $('#sign-up').hide()
      $('#indexNum').text('This is index: ' + id)
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}
const createGameAi = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    success: function (data) {
      id = data.game.id
      $('#whoseturn').show()
      $('.aicell').show()
      $('.cell').hide()
      $('#getstats').show()
      $('#getstatswon').show()
      $('#getstatslost').show()
      $('#sign-up').hide()
      $('#indexNum').text('This is index: ' + id)
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

const updateGame = function (board, player) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': board,
          'value': player
        }
      }
    },
    success: function (data) {
      console.log(data)
    }
  })
}

const updateGameOver = function (over) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'over': over
      }
    }
  })
}

const getGames = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {

    },
    success: function (data) {
      $('#amount-games').text('Amount of games: ' + data.games.length)
      console.log(data)
    }
  })
}

const getGamesWon = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/?over=true',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {

    },
    success: function (data) {
      $('#amount-games-won').text('Amount of games: ' + data.games.length)
      console.log(data)
    }
  })
}

const getGamesLost = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/?over=false',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {

    },
    success: function (data) {
      $('#amount-games-lost').text('Amount of games: ' + data.games.length)
      console.log(data)
    }
  })
}

const fillBoard = function (event) {
  event.preventDefault()
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
    },
    success: function (data) {
      $('#indexNum').text('This is index: ' + data.games.id)
      for (let i = 0; i < data.games.length; i++) {
        const index = event.target[0].value
        if (parseInt(data.games[i].id) === parseInt(index)) {
          console.log(data.games[i])
          for (let j = 0; j < 9; j++) {
            $('#' + j).text(data.games[i].cells[j])
            console.log(data.games[i].cells[j])
          }
        } else {
          $('#indexNum').text('index not found! Try again.')
        }
      }
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  getGames,
  updateGameOver,
  getGamesWon,
  getGamesLost,
  fillBoard,
  createGameAi
}
