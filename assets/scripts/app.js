'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const gamelogicui = require('./game-logic/ui.js')
const authEvents = require('./auth/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('div').on('click', gamelogicui.changeText)
  $('.reset').on('click', gamelogicui.reset)
  $('div').each(function (index) {
    $(this).attr('id', index)
  })
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})
