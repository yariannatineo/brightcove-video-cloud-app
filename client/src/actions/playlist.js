// import type
import { FETCH_PLAYLISTS } from './types';
// import api
//import myVideoApi from '../api/myVideoApi';
import axios from 'axios';

// method to get all playlists
export const fetchPlaylists = () => async dispatch => {

    try {
        // request to api
        const res = await axios.get('/playlist');
        // send data to the reducer
        dispatch({ type: FETCH_PLAYLISTS , payload: res.data});
    // catch any errors
    } catch (err) {
        console.log(`playlists: ${err}`);
    }

};
