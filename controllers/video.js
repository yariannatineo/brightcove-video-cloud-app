// principal imports
const { videoCloudInstance } = require ('../apis/brightcoveApi');
//  models
const Video = require('../models/video');

// function that gets all the videos and insert them into db
exports.getVideos = async (req, res, next) => {
    // gets the token
    const token = req.token;
    // array for playlists
    let newVideoArray = [];
    
    try {
        // check for the videos
        const videos = await Video.find();  
        
        //  if there isn´t any video, send the request
        if(videos.length === 0) {
            //  this is the request
            const apiRes = await videoCloudInstance.get(
                '/videos',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

             // fill the array with videos
             await apiRes.data.forEach(async videoData => {
                // console.log(videoData);
                newVideoArray.push({
                    idVideo: videoData.id,
                    name: videoData.name,
                    duration: videoData.duration,
                    tag: videoData.tags
                });
            });

            // insert them into db
            await Video.insertMany(newVideoArray, async (err, videos) => {
                // if there is an error, show it 
                if(err) {
                    res.status(422).json({ errorMsg: err });
                }
                // if there is no error show the videos
                res.status(200).json(videos); 
            });
        // if videos exist, show them
        }else {
            res.status(200).json(videos);
        }
    } catch (err) {
        res.status(500).json({ errorMsg: err });
    }
};

// function that gets all videos with tag mexico
exports.getVideosTagMexico = async (req, res, next) => {
    
    try{
        //  search in database 
        const videosMexico = await Video.find({ tag: 'mexico'});
        //  send the response with all videos 
        res.status(200).json(videosMexico);
    // catch any errors
    }catch(err){
        res.status(500).json({ errMsg: err });
    }
}
