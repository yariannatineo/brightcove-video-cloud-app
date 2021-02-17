// principal imports
const mongoose = require('mongoose');
// others
const config = require('../config');


// this function allows the connection with the data base
const mongooseConnection = mongoose.connect(`mongodb+srv://yariannatineo:Yarianna82463@cluster0.vqp2t.mongodb.net/videocloud?retryWrites=true&w=majority`, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useFindAndModify: false,
   useUnifiedTopology: true
});
// exports
module.exports = mongooseConnection;
