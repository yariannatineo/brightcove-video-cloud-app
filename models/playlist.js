// principal imports
const mongoose = require('mongoose');

// mongoose Schema
const playlistSchema = new mongoose.Schema(
   // rows
   {
      idPlaylist:{
         type: String,
         required: true,
         unique: true
      },
      name: {
         type: String,
         required: true
      },
      videos:{
         type: Array,
         required: false
      },
   },
   {
      timestamps: true
   }
);
// model
const Playlist = mongoose.model('Playlist', playlistSchema);
// exports
module.exports = Playlist;
