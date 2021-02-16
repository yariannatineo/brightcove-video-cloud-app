// principal imports
const mongoose = require('mongoose');
// mongoose Schema
const videoSchema = new mongoose.Schema(
   {
      idVideo:{
         type:String,
         required: true,
         unique: true
      },
      name: {
         type: String,
         required: true
      },
      duration:{
         type: Number,
         required: true,
      },
      tag: {
         type: Array,
         required: false
      },      
   },
   {
      timestamps: true
   }
);
// model
const Video = mongoose.model('Video', videoSchema);
// exports
module.exports = Video;
