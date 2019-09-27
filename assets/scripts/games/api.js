'use strict'

const config = require('../config.js')
const store = require('../store.js')

let id = 0

const createGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    success: function (data) {
      console.log(data)
      id = data.game.id
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
        },
        'over': false
      }
    },
    success: function (data) {
      console.log(data)
    }

  })
}

module.exports = {
  createGame,
  updateGame
}
