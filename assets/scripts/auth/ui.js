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
  // save the `user` we got from the API inside of `store`
  // so we can use it later, from any file
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
  console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
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
