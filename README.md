# brightcove-video-cloud-app
Brightcove video cloud challenge, which retrieves videos and playlists from VideoCloud API based on the account id, and then generates this information in a DB, and finally shows the duration of all videos and each playlist.

## NOTE 
In the account that was assigned to the challenge, in the media section a total of 50 videos are listed, but at the time of making the request to be able to save them in the database, only 20 were extracted.

## Some details
Technologies

CLIENT:

* React
* Redux

API:
* Node, Express
* Database: MongoDB


## How to use it?

1. Install [Node.js](https://nodejs.org/) and use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) as cloud db manager, [MongoDB Compass](https://www.mongodb.com/products/compass) may be useful as well, to work on the database.

2. Create database called `videocloud` or use any other name, for MongoDB Atlas change the "config.mongodb_uri" object with the string of the connection in `config/config.js` file, in other case replace the string with the one you require.

3. Replace `config.CLIENT_ID` and `config.CLIENT_SECRECT` in `config/config.js` with the corresponding credentials or use the credentials already in the `config.js`.

4. Install all dependencies both in `client` and `brightcove-video-cloud-app` folder by typing `npm install` inside each of them.

5. Run API: type `npm run start-dev` in `brightcove-video-cloud-app` folder

7. Run client: type `npm start` in `client` folder.

To create an optimized build, run `npm run build` in `client` folder

## Demo
https://bc-video-cloud-app.herokuapp.com/


