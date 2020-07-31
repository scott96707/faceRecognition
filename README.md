## What this is:
Front-end for a face recognition app using the [Clarifai AI](https://www.clarifai.com/). This front-end builds the site that you see. It calls out to the [back-end](https://github.com/scott96707/faceRecognitionApi) through an API that I built, and displays responses from the back-end.

## How to use:
This front-end has a simple login, which you can bypass by leaving username/password fields blank. 

After you've logged-in, you'll see a text field. Copy the URL of an image ([here's a good one](https://m.media-amazon.com/images/M/MV5BODViZDg3ZjYtMzhiYS00YTVkLTk4MzktYWUxMTlkYjc1NjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,674,1000_AL_.jpg)) from the internet into the text field and hit "Detect". The App will make an API call to the Clarifai AI, which detects human faces in the image. The App will then draw a box around the faces the Clarifai AI detects in the image.

You can also register a user. User information is stored in an encrypted format via brypt, in a Postgres database which I setup alongside the back-end on Heroku.

## Dependencies:
1. react
1. Clarifai
1. react-particles-js
1. tachyons
1. [back-end](https://github.com/scott96707/faceRecognitionApi)

## To run locally:
The App will not work locally, there is no Clarifai API key stored in the App code.

To see the app go to: [Heroku Deployment](https://facerecognitionfrontend.herokuapp.com/)
