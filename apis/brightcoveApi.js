// principal imports
const axios = require('axios');

//  creation of axios instance for request to brightcove api url for OAuth
exports.OAuthInstance = axios.create({ baseURL: 'https://oauth.brightcove.com' });

//  creation of axios instance for request to brightcove api url an get all videos and playlists
exports.videoCloudInstance = axios.create({ baseURL: 'https://cms.api.brightcove.com/v1/accounts/6044537239001' });
