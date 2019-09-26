'use strict'

const config = require('../config.js')
const store = require('../store.js')
const gamelogicui = require('../game-logic/ui.js')

const createGame = function () {
  gamelogicui.reset()
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

module.exports = {
  createGame
}
