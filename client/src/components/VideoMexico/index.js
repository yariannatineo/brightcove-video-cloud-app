import React, { Component } from 'react';
//  Connect import
import { connect } from 'react-redux';
//  Action import
import { fetchVideosMexico } from '../../actions/video';
// import component
import VideoCard from './VideoCard';
import Loader from '../Loader';

class VideoMexico extends Component {

    componentDidMount() {
        this.props.fetchVideosMexico();
    }
    // this renders the videos in cards
    renderVideoCard = videos => {
        return videos.map(video => {
            // show the card video
            return <VideoCard key={video._id} video={video} />
        });
    }

    // this make the sum of all the durations
    sumDurationAndConvertToHour = videos => {
        let totalDuration = 0;
        // this sum all the durations
        videos.forEach(video => {
            totalDuration += video.duration;
        })
        // this converts the total into hours min secs and milis     
        var ms = totalDuration % 1000;
        totalDuration = (totalDuration - ms) / 1000;

        var secs = totalDuration % 60;
        totalDuration = (totalDuration - secs) / 60;

        var mins = totalDuration % 60;

        var hrs = (totalDuration - mins) / 60;
        // this returns the format hour
        return hrs + ' hours ' + mins + ' mins ' + secs + ' secs ' + ms + ' ms';
    }


    render() {
        const { videos } = this.props;
        //console.log(videos);
        return (
            <div className='ui container'>
                {
                    !videos ?
                        <Loader/>
                        :
                        <div>
                            <h2 className="ui center aligned header">
                                Videos
                            </h2>
                            <hr/>
                            <br/>
                            <h3 className="ui header">
                                All videos duration : {this.sumDurationAndConvertToHour(videos)}
                            </h3>
                            <br/>
                            <div className="ui stackable grid three column">

                                {this.renderVideoCard(videos)}
                            </div>
                        </div>


                }

            </div>

        );
    }
}

const mapStateToProps = state => {
    return { videos: state.video.videosMexico };
};

export default connect(
    mapStateToProps,
    { fetchVideosMexico }
)(VideoMexico);

