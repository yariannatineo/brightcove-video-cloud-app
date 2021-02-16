// principal imports
const express = require('express');

// Controllers
const videoController = require('../controllers/video');


// router
const router = express.Router();

// get all videos
router.get('/', videoController.getVideos);

//  get videos with tag mexico
router.get('/mexico', videoController.getVideosTagMexico);

// exports
module.exports = router;
