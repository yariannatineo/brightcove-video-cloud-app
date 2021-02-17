require('dotenv').config();
//  config object
let config = {};

//  client id credentials
config.CLIENT_ID = process.env.CLIENT_ID || '';

//port
config.PORT = process.env.PORT || '';

//  client secret credentials
config.CLIENT_SECRET = process.env.CLIENT_SECRET || '';

// This is for the connection string of mongodb
config.MONGODB_URI = process.env.MONGODB_URI || '';

//  export
module.exports = config;
