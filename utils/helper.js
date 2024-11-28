const jwt = require('jsonwebtoken');
async function getToken(email, newUser) {
// console.log(newUser,"newUser")
    const token = jwt.sign({
        sub: newUser._id,
    },
        process.env.Key,
    );
    return token;
}

module.exports = {getToken};