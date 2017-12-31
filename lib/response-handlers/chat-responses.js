const $  = require('jquery')


function appendInputText(words) {
  var date  = new Date()
  $(".text-container").append(`
    <div class="container darker">
      <img src="/images/user.png" alt="Avatar" class="right">
      <p>${words}</p>
      <span class="time-left">${date}</span>
    </div>
    `)
}

export {appendInputText}
