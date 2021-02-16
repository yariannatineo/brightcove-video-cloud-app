// principal imports
const { OAuthInstance } = require('../apis/brightcoveApi');
const { stringToBase64 } = require('../util/format');
// others
const config = require('../config');


// this function checks the token and store it in req
const checkToken = async (req, res, next) => {

    try {
        // this is the request to get the token
        const apiRes = await OAuthInstance.post(
            '/v4/access_token?grant_type=client_credentials',
            {},
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Basic ${stringToBase64(`${config.CLIENT_ID}:${config.CLIENT_SECRET}`)}`
                }
            }
        );
        // save the token in the req
        req.token = apiRes.data.access_token;
        next();
    // catch any errors
    } catch (err) {
        console.log(err);
        res.status(500).json({ errorMsg: err });
    }
};
// exports
module.exports = checkToken;
