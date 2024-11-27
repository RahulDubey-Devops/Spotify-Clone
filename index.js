//BackEnd for Spotify
const express = require("express");
const mongoose = require('mongoose')
const app = express();
require("dotenv").config();
const passport = require("passport");
const User = require("./models/User");
const authRouter=require("./routes/auth")
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const PORT = 8080;
app.use(express.json());

const URL = "mongodb+srv://admin:" + process.env.MONGO_PASSWORD + "@spotifycluster01.eiq26.mongodb.net/?retryWrites=true&w=majority&appName=SpotifyCluster01";

//Connect MongoDB to Node APP
mongoose.connect(URL)
    .then(console.log("MongoDB connected"))
    .catch((error) => {
        console.log(error); 
    });


// SetUp Passport JWT

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.Key;

passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));


app.get('/', (req, res) => {
    // req contains all data for the request
    // res contains all data for the response
    return res.send("Hello World")
});

app.use("/auth",authRouter);

// Tell Express the Sever will Run on this PORT
app.listen(PORT, () => {
    console.log(`Server Listening on PORT ${PORT}`)
});



