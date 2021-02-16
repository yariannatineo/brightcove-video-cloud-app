require('dotenv').config();
//  config object
let config = {};

//  client id credentials
config.CLIENT_ID = process.env.CLIENT_ID || '';

//  client secret credentials
config.CLIENT_SECRET = process.env.CLIENT_SECRET || '';

// This is for the connection string of mongodb
config.mongodb_uri = process.env.MONGODB_URI || '';

//  export
module.exports = config;
