const myAppId = config.APP_ID
const myKey = config.USER_KEY

// const APP_ID = require('../config')
// const USER_KEY = require('../config')
// require('env2')('.env');

const randyAjaxRequests = require('./ajax-requests/chat-requests')
const randyResponseHandlers = require('./response-handlers/chat-responses')
const randyEventListeners = require('./event-listeners/chat-listeners')


export{myAppId, myKey}
// export{APP_ID, USER_KEY}
