'use strict'

const store = require('../store.js')

const successMessage = function (newText) {
  $('#message').text(newText).hide(2000).show().hide(2000)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText).hide(2000).show().hide(2000)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('Signed Up Successfully!')
  $('.password').val('')
}

const onSignUpFailure = function () {
  failureMessage('Sign Up Failed')
  $('.password').val('')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed In Successfully!')
  store.user = responseData.user
  $('.password').val('')
}

const onSignInFailure = function () {
  failureMessage('Sign In Failed')
  $('.password').val('')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed Password Successfully!')
  $('.password').val('')
}

const onChangePasswordFailure = function () {
  failureMessage('Change Password Failed')
  $('.password').val('')
}

const signOutSuccess = function () {
  location.reload()
  $('#message').text('Signed out successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function () {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  signOutSuccess,
  signOutFailure
}
