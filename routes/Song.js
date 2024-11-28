
const express = require("express");
const passport = require("passport");
// const passport = require("passport-jwt");

const Songs = require("../models/Songs");
const router = express.Router();

router.post('/create', passport.authenticate('jwt', { session: false }), async (req, res) => {
    console.log("Authenticated user:", req.user); // Log user details

    const { name, thumbnail, track } = req.body;
    if (!name || !thumbnail || !track) {
        return res.status(301).json({ error: "Insufficient details to Create song " });
    }
    const artist = req.user._id;
    const songDetails = { name, thumbnail, track, artist };
    
    try {
        const createdSong = await Songs.create(songDetails);
        return res.status(200).json(createdSong);
    } catch (error) {
        console.error("Error creating song:", error); // Log errors
        return res.status(500).json({ error: "Failed to create song" });
    }
});


router.get("/get/mysongs", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const current = req.user;
    //we need to get all songs where artist id == currentUser._id;
    const songs = await Songs.find({ artist: req.user._id });
    return res.status(200).json({data:songs});
})
module.exports = router;
