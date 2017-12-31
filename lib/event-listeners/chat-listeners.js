const $ = require('jquery')
import {appendInputText} from "../response-handlers/chat-responses"
// import {postChat} from "../ajax-requests/chat-requests"


$(document).ready(function(){

  $("button").on("click", function(event) {
    var inputtedText = $("textarea").val()

    appendInputText(inputtedText)
    // sendChat(inputtedText)
  })

})


// function sendChat(text) {
//   postChat(text)
// }
