// principal imports
import { FETCH_PLAYLISTS } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PLAYLISTS:
            return { ...state, playlists: action.payload };
        default:
            return state;
    }
}