//BackEnd for Spotify
const express = require("express");
const mongoose = require('mongoose')
const app = express();
require("dotenv").config();
const passport = require("passport");
const User = require("./models/User");
const authRouter = require("./routes/auth")
const authSong = require("./routes/Song")

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const PORT = 8000;
app.use(express.json());

// Set the MongoDB connection options
// mongoose.set("strictQuery", true);

const connectDB = async () => {
    // console.log("coming call")
    try {
        await mongoose.connect("mongodb+srv://rdubey:Astha%402629@spotifycluster01.eiq26.mongodb.net/spotify");
        console.log("Connected to the MongoDB database");
    } catch (error) {
        console.error("Error connecting to the MongoDB database:", error);
        process.exit(1);
    }
};
connectDB()


// SetUp Passport JWT

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.Key;

passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
        console.log('JWT Payload:', jwt_payload);  // Log the JWT payload
        const user = await User.findOne({ _id: jwt_payload.sub });
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (err) {
        console.error('Error during JWT authentication:', err);
        return done(err, false);
    }
}));


app.get('/', (req, res) => {
    // req contains all data for the request
    // res contains all data for the response
    return res.send("Hello World")
});

app.use("/auth", authRouter);
app.use("/song", authSong);

// Tell Express the Sever will Run on this PORT
app.listen(PORT, () => {
    console.log(`Server Listening on PORT ${PORT}`)
});



