const $ = require('jquery')
import {appendInputText} from "../response-handlers/chat-responses"
import {postChat} from "../ajax-requests/chat-requests"


$(document).ready(function(){

  $(".btn.teal.pull-right").on("click", function(event) {
    var inputtedText = $("textarea").val()
    var parsedText = inputtedText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\r?\n|\r]/g, " ")

    appendInputText(inputtedText)
    sendChat(parsedText)
  })

  $(".btn.red.pull-right").on("click", function(event) {
    $(".text-container").empty()
  })

})


function sendChat(text) {
  postChat(text)
}
