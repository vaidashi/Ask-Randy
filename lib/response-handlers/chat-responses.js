const $  = require('jquery')


function appendInputText(words) {
  $('textarea').val(" ")
  var date  = new Date()

  $(".text-container").prepend(`
    <div class="container darker">
      <img src="/images/user.png" alt="Avatar" class="right">
      <p>${words}</p>
      <span class="time-left">${date}</span>
    </div>
    `)
}

function addReplyText(reply) {
  var time  = new Date()

  $(".text-container").prepend(`
    <div class="container">
      <img src="./images/randy_profile.png" alt="Avatar">
      <p>${reply}</p>
      <span class="time-right">${time}</span>
    </div>
    `)

    sayReplyText(reply)
}

function sayReplyText(reply) {
  var msg = new SpeechSynthesisUtterance(reply)
  msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Google UK English Male'; })[0];
  msg.rate = 1.25
  speechSynthesis.speak(msg);
}


export {appendInputText, addReplyText}
