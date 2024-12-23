
const express = require("express");
const passport = require("passport");
const Songs = require("../models/Songs");
const router = express.Router();
const User=require("../models/User")

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
    const songs = await Songs.find({ artist: req.user._id }).populate("artist");
    return res.status(200).json({ data: songs });
})

//Get route to get all songs any artist has published.
// I will send the artist id and I want to see all songs that artist has published.
router.get("/get/artist/:artistId", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const { artistId } = req.params;
    //If artist not exist
    const artist=await User.findOne({_id:artistId});
    if(!artist){
        return res.status(301).json({err:"Artist does not exit!"});
    }
    const songs = await Songs.find({ artist: artistId });

    return res.status(201).json({data:songs});
})

//Get router to get a single song by name
router.get("/get/songname/:songName",passport.authenticate("jwt",{session:false}),async (req,res)=>{
    const {songName}=req.params;

    const songs = await Songs.find({ name: songName }).populate("artist");

    return res.status(201).json({data:songs});
});

module.exports = router;
