'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const gamelogicui = require('./game-logic/ui.js')
const authEvents = require('./auth/events.js')
const gamesApi = require('./games/api.js')

// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  $('.cell').on('click', gamelogicui.changeText).hide()
  $('#createGame').on('click', gamelogicui.reset).hide()
  $('.cell').each(function (index) {
    $(this).attr('id', index)
  })
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword).hide()
  $('#sign-out').on('submit', authEvents.onSignOut).hide()
  $('#createGame').on('click', gamesApi.createGame).hide()
  $('#getstats').on('click', gamesApi.getGames).hide()
  $('#getstatswon').on('click', gamesApi.getGamesWon).hide()
  $('#getstatslost').on('click', gamesApi.getGamesLost).hide()
  $('#whoseturn').hide()
  $('#changePassword').hide()
})
