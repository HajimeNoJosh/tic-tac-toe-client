'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData,
    success: function () {
      $('#sign-out').show()
      $('#sign-in').hide()
      $('#sign-up').hide()
      $('.signin').hide()
      $('.signUp').hide()
      $('#createGame').show()
      $('#change-password').show()
      $('#changePassword').show()
      $('#colors').show()
    }
  })
}

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    success: function () {
      $('.cell').hide()
      $('#createGame').hide()
      $('#change-password').hide()
      $('#sign-in').show()
      $('#getstats').hide()
      $('#getstatswon').hide()
      $('#getstatslost').hide()
      $('#sign-up').show()
      $('#sign-out').hide()
      $('#amount-games-lost').hide()
      $('#amount-games-won').hide()
      $('#amount-games').hide()
      $('#whoseturn').hide()
      $('#changePassword').hide()
      $('#colors').hide()
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
