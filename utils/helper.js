const jwt = require('jsonwebtoken');
async function getToken(email, newUser) {

    const token = jwt.sign({
        identifier: email?._id,
    },
        process.env.Key,
    );
    return token;
}

module.exports = {getToken};