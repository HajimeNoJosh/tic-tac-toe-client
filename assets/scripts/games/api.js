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
      $('#getstats').show()
      $('#getstatswon').show()
      $('#getstatslost').show()
      $('#sign-up').hide()
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
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  getGames,
  updateGameOver,
  getGamesWon,
  getGamesLost
}
