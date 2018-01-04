// const myAppId = config.APP_ID
// const myKey = config.USER_KEY

using env file
require('env2')('.env');

const randyAjaxRequests = require('./ajax-requests/chat-requests')
const randyResponseHandlers = require('./response-handlers/chat-responses')
const randyEventListeners = require('./event-listeners/chat-listeners')


// export{myAppId, myKey}
