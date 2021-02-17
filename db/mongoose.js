// principal imports
const mongoose = require('mongoose');
// others
const config = require('../config');


// this function allows the connection with the data base
const mongooseConnection = mongoose.connect(`${config.MONGODB_URI}`, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useFindAndModify: false,
   useUnifiedTopology: true
});
// exports
module.exports = mongooseConnection;
