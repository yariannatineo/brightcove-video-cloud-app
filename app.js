//  principal required libraries
const express = require('express');
const bodyParser = require('body-parser');

//  others
const cors = require('cors');
const config = require('./config');
const path = require("path");


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
//app.use(cors());

//  use middleware before access to video route and playlist route
app.use(tokenMiddleware);

app.get("/api", (req, res) => {
    res.status(200).json({ msg: "Hello" });
});

//  routes
//app.use('/token', tokenRouter)
app.use('/api/video', videoRouter);
app.use('/api/playlist', playlistRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "client", "build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}


//  server process
app.listen(config.PORT, () => {
    console.log(`${config.PORT} Listening`);
});
