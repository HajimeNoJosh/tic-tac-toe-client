'use strict'

const store = require('../store.js')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('Signed Up Successfully!')
}

const onSignUpFailure = function () {
  failureMessage('Sign Up Failed')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed In Successfully!')
  store.user = responseData.user
}

const onSignInFailure = function () {
  failureMessage('Sign In Failed')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed Password Successfully!')
}

const onChangePasswordFailure = function () {
  failureMessage('Change Password Failed')
}

const signOutSuccess = function () {
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
