
const express = require("express");
const passport = require("passport");
const Songs = require("../models/Songs");
const router = express.Router();

router.post('/create', passport.authenticate('jwt', { session: false }), async (req, res) => {
    //req.user gets user because of passport.authenticate 
    const { name, thumbnail, track } = req.body;
    if (!name || !thumbnail || !track) {
        return res.status(301).json({ error: "Insufficient details to Create song " });
    }
    const artist = req.user._id;
    const songDetails = { name, thumbnail, track, artist };
    const createdSong = await Songs.create(songDetails);

    return res.status(200).json(createdSong);
})

router.get("/get/mysongs", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const current = req.user;
    //we need to get all songs where artist id== currentUser._id;
    const songs = await Songs.find({ artist: req.user._id });
    return res.status(200).json({data:songs});
})
module.exports = router;
