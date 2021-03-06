// import type
import { FETCH_VIDEOS, FETCH_VIDEOS_MEXICO } from './types';
// import api
import myVideoApi from '../api/myVideoApi';

// get all videos
export const fetchVideos = () => async dispatch => {
    try {
        // request to api
        const res = await myVideoApi.get('/video');
        // send data to the reducer
        dispatch({ type: FETCH_VIDEOS , payload: res.data});
    // catch errors
    } catch (err) {
        console.log(`videos: ${err}`);
    }

};
// get all videos with tag mexico
export const fetchVideosMexico = () => async dispatch => {
    try {
        // request to api
        const res = await myVideoApi.get('/video/mexico');
        // send data to the reducer
        dispatch({ type: FETCH_VIDEOS_MEXICO , payload: res.data});
    //  catch errors
    } catch (err) {
        console.log(`videosMexico: ${err}`);
    }
};
