// principal imports
const express = require('express');

// Controllers
const playlistController = require('../controllers/playlist');


// Router
const router = express.Router();

// get all playlists 
router.get('/', playlistController.getPlaylists);

// exports
module.exports = router;
