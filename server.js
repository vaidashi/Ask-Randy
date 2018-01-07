var express = require('express')
var app  = express()
var path = require('path');
require('dotenv').config()
var appRoot = process.env.PWD
console.log(appRoot)

app.set('port', process.env.PORT || 3000)


app.get('/', function(req, res) {
    res.sendFile(appRoot + '/index.html');
});

app.use(express.static(path.join(__dirname, 'public')));




if(!module.parent) {
  app.listen(app.get('port'), function() {
    console.log("App is running on " + app.get('port') + ".")
  })
}

// const myAppId = config.APP_ID
// const myKey = config.USER_KEY

// const randyAjaxRequests = require('./public/lib/ajax-requests/chat-requests')
// const randyResponseHandlers = require('./public/lib/response-handlers/chat-responses')
// const randyEventListeners = require('./public/lib/event-listeners/chat-listeners')


// export{myAppId, myKey}
