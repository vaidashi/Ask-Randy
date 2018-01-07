# Ask Randy
This project was undertaken during my time as a student at the Turing School of Software & Design. It's the final project (capstone) required to complete during the final phase of the program. The project was required to be completed in two weeks. For this capstone, I had chosen to develop and deploy an app that would be a Chatbot based on my roommate at the time, Randy Springer. It's intent was to be part comical and informative. The technology used to build the AI was Pandorabots   https://www.pandorabots.com/

Currently, I'm facing an issue with a production deployment. Summary of my issue can be found here: https://stackoverflow.com/questions/48105917/does-anyone-know-how-to-successfully-transition-a-vanilla-javascript-app-into-an

I have created another repo and incorporated Node.js and Express in an attempt to make it deployable https://github.com/vaidashi/randy-bot . However I encountered another issue with it not allowing me to require the JS functionality despite having it recognize static assets.

## Technologies Used
1. Javascript, HTML, CSS
2. AIML and Pandorabot Services

## To Run the App Locally
1. Clone this repo, but the app requires an API key to communicate with the chatbot, I have it placed in my gitignore. As a result, and the aforementioned issue, cloning down in the current state does not allow for communication with the chatbot.

2. Install Packages:
```
npm init
npm install
further steps will be added once I have fixed the issue
```

## To Contribute
Pull Requests are welcome.
