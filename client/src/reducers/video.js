// principal import
import { FETCH_VIDEOS, FETCH_VIDEOS_MEXICO } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_VIDEOS:
            return { ...state, videos: action.payload };
        case FETCH_VIDEOS_MEXICO:
            return { ...state, videosMexico: action.payload };
        default:
            return state;
    }
}
