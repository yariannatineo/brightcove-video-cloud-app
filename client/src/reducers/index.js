// redux import
import { combineReducers } from 'redux';

// reducer import
import video from './video';
import playlist from './playlist';

//  combine reducers
export default combineReducers({
    video: video,
    playlist: playlist
});
