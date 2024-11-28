//BackEnd for Spotify
const express = require("express");
const mongoose = require('mongoose')
const app = express();
require("dotenv").config();
const passport = require("passport");
const User = require("./models/User");
const authRouter=require("./routes/auth")
const songRouter=require("./routes/song")
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const PORT = 8080;
app.use(express.json());


const URL = process.env.MONGO_URI;

//Connect MongoDB to Node APP
mongoose.connect(URL)
    .then(console.log("MongoDB connected"))
    .catch((error) => {
        console.log(error); 
    });


// SetUp Passport JWT

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.Key;

passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
        // Use async/await instead of callback for findOne
        const user = await User.findOne({ _id: jwt_payload.sub });

        if (user) {
            return done(null, user); // User found
        } else {
            return done(null, false); // User not found
        }
    } catch (err) {
        return done(err, false); // Error during query
    }
}));


app.get('/', (req, res) => {
    // req contains all data for the request
    // res contains all data for the response
    return res.send("Hello World")
});

app.use("/auth",authRouter);
app.use('/song',songRouter);

// Tell Express the Sever will Run on this PORT
app.listen(PORT, () => {
    console.log(`Server Listening on PORT ${PORT}`)
});



