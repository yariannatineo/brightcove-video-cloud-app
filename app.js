//  principal required libraries
const express = require('express');
const bodyParser = require('body-parser');

//  others
const cors = require('cors');

//  db connection
require('./db/mongoose');
//  middlewares
const tokenMiddleware = require('./middleware/tokenMiddleware');

//  routes
//const tokenRouter = require('./routes/token');
const videoRouter = require('./routes/video');
const playlistRouter = require('./routes/playlist');

//  initialize express app
const app = express();

//  third party libraries for the app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//  use middleware before access to video route and playlist route
app.use(tokenMiddleware);

//  routes
//app.use('/token', tokenRouter)
app.use('/video', videoRouter)
app.use('/playlist', playlistRouter)

//  server process
app.listen(3001, () => {
    console.log('Server started on port 3001')
});
