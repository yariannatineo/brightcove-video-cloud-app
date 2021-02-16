// this file is not used


// const { OAuthInstance, updateAPIConfig } = require ('../apis/brightcoveApi');

// const config = require('../config');
// const { stringToBase64 } = require('../util/format');

// // get token from OAuth
// exports.getToken = async (req, res, next) => {

//     try {
//         const apiRes = await OAuthInstance.post(
//             '/v4/access_token?grant_type=client_credentials',
//             {},
//             {
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                     'Authorization': `Basic ${stringToBase64(`${config.CLIENT_ID}:${config.CLIENT_SECRET}`)}`
//                 }
//             }
//         );
        
//         updateAPIConfig(apiRes.data.access_token);
//         res.status(200).json(apiRes.data);       
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ errorMsg: err });
//     }
// };
