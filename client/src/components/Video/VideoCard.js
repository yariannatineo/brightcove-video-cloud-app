import React, { Component } from 'react';
// img
import cameraIcon from '../../img/video-camera.png';


const VideoCard = ({ video }) => {
    // short name of a video
    const shortName = name => {
        return name.substring(0,5);
    }

    return (
          
            <div className="column">
            <div className="ui card">
                <div style={{ textAlign: 'center' }}>
                    <h2 className="header">Title: {shortName(video.name)}...</h2>
                </div>
                <div className="ui centered small image">
                  <img src={cameraIcon}></img>
                </div>
                <div className="content">
                    <div className="meta">
                        <span className="ui compact">{`Duration: ${video.duration} ms`}</span>
                    </div>                  
                </div>
            </div>
        </div>
        );
}

export default VideoCard;
