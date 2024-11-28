
const express = require("express");
const passport = require("passport");
const Songs = require("../models/Songs");
const router = express.Router();

router.post('/create', passport.authenticate('user'), async (req, res) => {
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


module.exports = router;
