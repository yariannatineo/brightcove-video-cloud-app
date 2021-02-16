//  principal imports
const { videoCloudInstance } = require('../apis/brightcoveApi');

//  models
const Playlist = require('../models/playlist');

// this function gets all playlists and insert them into db
exports.getPlaylists = async (req, res, next) => {
    //  gets the token 
    const token = req.token;
    // array for playlists
    let newPlaylistArray = [];

    try {
        // check for playlists 
        const playlists = await Playlist.find();  
        
        //  if there isn´t any playlist, send the request
        if(playlists.length === 0) {
            // this is the request
            const apiRes = await videoCloudInstance.get(
                '/playlists',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            ); 

            // fill the array with playlists
            await apiRes.data.forEach(async playlistData => {
    
                newPlaylistArray.push({
                    idPlaylist: playlistData.id,
                    name: playlistData.name,
                    videos: playlistData.video_ids
                });
            });

            // insert them into db
            await Playlist.insertMany(newPlaylistArray, async (err, playlists) => {
                // if there is an error, show it 
                if(err) {
                    res.status(422).json({ errorMsg: err });
                }
                // if there is no error show the playlist
                res.status(200).json(playlists); 
            });
        
        // if playlists exist, show them
        } else {
            res.status(200).json(playlists);
        }
        
        // catch any errors
    } catch (err) {
        //console.log(err);
        res.status(500).json({ errorMsg: err });
    }
};
