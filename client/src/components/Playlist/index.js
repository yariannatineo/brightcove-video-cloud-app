// principal import
import React, { Component } from 'react';
//  Connect import
import { connect } from 'react-redux';
//  Action import
import { fetchPlaylists } from '../../actions/playlist';
import { fetchVideos } from '../../actions/video';
// import component
import PlaylistCard from './PlaylistCard';
import Loader from '../Loader';

class Playlist extends Component {
   
    componentDidMount(){
        this.props.fetchPlaylists();
        this.props.fetchVideos();
    }
    
    // this renders the videos in cards
    renderPlaylistCard = (playlists, videos) => {
        
        return playlists.map(playlist => {
            // new array for all videos in a playlist
            let videosPlaylist = [];

            for(let i = 0; i < playlist.videos.length; i ++){
                for(let j = 0; j < videos.length; j ++){
                    // compare id of videos inside playlist with the videos id 
                    if(playlist.videos[i] === videos[j].idVideo){
                       console.log(videos[j]);
                       // push them into the array
                       videosPlaylist.push(videos[j]);
                    }
                }
            }
            // show playlist card
            return <PlaylistCard key={playlist._id} playlist={playlist} videos={videosPlaylist} />
        });
    }
    
    render(){       
        const { playlists, videos } = this.props;
        return(
            <div className='ui container'>
                {
                    !(playlists  && videos) ?
                        <Loader/>
                    :
                        <div>
                            <h2 className="ui center aligned header">
                                Playlists
                            </h2>
                            <hr/>
                            <br/>
                            <div className="ui stackable grid three column">
                                {this.renderPlaylistCard(playlists, videos)}
                            </div>
                        </div>
                }

            </div>
           
        );
    }
}

const mapStateToProps = state => {
    return { 
        playlists: state.playlist.playlists,
        videos: state.video.videos
    };
};

export default connect(
    mapStateToProps, 
    { fetchPlaylists, fetchVideos }
)(Playlist);
