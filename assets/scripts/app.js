'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const gamelogicui = require('./game-logic/ui.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('div').on('click', gamelogicui.changeText)
  $('.click').on('click', gamelogicui.reset)
  $('div').each(function (index) {
    $(this).attr('id', index)
  })
})
