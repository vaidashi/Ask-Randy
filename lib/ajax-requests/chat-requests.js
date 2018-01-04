const $ = require('jquery')
const API = "https://aiaas.pandorabots.com"
import {addReplyText} from "../response-handlers/chat-responses"
// import {myAppId, myKey} from "../index"


function postChat(words) {
  $.ajax({
    url: API + `/talk/${myAppId}/randy?user_key=${myKey}&input=${words}`,
    url: API + `/talk/${APP_ID}/randy?user_key=${USER_KEY}&input=${words}`,

    method: "POST",
  }).then(function(data) {
    var botReply = data.responses
    addReplyText(botReply)
  }).fail(function() {
    handleError()
  })
}



function handleError(error) {
  console.log(error.statusText)
  console.log(error.responseText)
}


export {postChat}
