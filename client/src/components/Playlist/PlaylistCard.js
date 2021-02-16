import React, { Component } from 'react';
// img
import playlistIcon from '../../img/playlist.png';


const PlaylistCard = ({ playlist, videos }) => {
    // function for sum duration and convert it to hour
    const sumDurationAndConvertToHour = videos => {
        let totalDuration = 0;
        // this sum all the durations
        videos.forEach(video => {
            totalDuration += video.duration;
        })
        // this converts the total into hours min secs and ms     
        var ms = totalDuration % 1000;
        totalDuration = (totalDuration - ms) / 1000;

        var secs = totalDuration % 60;
        totalDuration = (totalDuration - secs) / 60;
        
        var mins = totalDuration % 60;

        var hrs = (totalDuration - mins) / 60;

        // this returns the format hour
        return hrs + ' hours ' + mins + ' mins ' + secs + ' secs ' + ms +' ms';
    }
    return (  
            <div className="column">
            <div className="ui card">
                <div style={{ textAlign: 'center' }}>
                    <h2 className="header">Title: {playlist.name}</h2>
                </div>
                <div className="ui centered small image">
                  <img src={playlistIcon}></img>
                </div>
                <div className="content">
                    <div className="meta">
                        <span className="ui compact">{`Playlist duration: ${sumDurationAndConvertToHour(videos)}`}</span>
                    </div>              
                </div>
            </div>
        </div>
    );
}

export default PlaylistCard;
