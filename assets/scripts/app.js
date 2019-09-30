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
  $('#colors').hide().on('change', function () {
    if (this.value === 'white') {
      gamelogicui.changeColorWhite()
    } else if (this.value === 'yellow') {
      gamelogicui.changeColorYellow()
    } else if (this.value === 'blue') {
      gamelogicui.changeColorBlue()
    } else if (this.value === 'orange') {
      gamelogicui.changeColorOrange()
    } else if (this.value === 'random') {
      gamelogicui.changeColorRandom()
    } else {
      gamelogicui.changeColorDefault()
    }
  })
})
