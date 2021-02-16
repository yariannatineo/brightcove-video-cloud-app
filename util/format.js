//  this function convert string to base 64
exports.stringToBase64 = (data) => {

    let buf = Buffer.from(data);
    let encodedData = buf.toString('base64');

    return encodedData;
};
