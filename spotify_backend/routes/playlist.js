const express = require("express");
const passport = require("passport");
const router = express.Router();
const PlayList = require("../models/PlayList");
const User = require("../models/User")
const Song = require("../models/Songs")
//1: Create a PlayList
router.post("/create", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const currentUser = req.user;
    const { name, thumbnail, songs } = req.body;
    if (!name || !thumbnail || !songs) {
        return res.status(301).json({ error: "Insufficient Data" });
    }
    const playlistData = {
        name,
        thumbnail,
        songs,
        owner: currentUser._id, collaborator: [],
    };
    const playlist = await PlayList.create(playlistData);

    return res.status(200).json(playlist);
});
// Get PlayList by ID;
// will get the playList ID as a route parameter and we will return the playlist having that ID;

router.get("/get/playlist/:playlistId", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const playlistId = req.params.playlistId;
    const playlist = await PlayList.findOne({ _id: playlistId });
    if (!playlist) {
        return res.status(301).json({ err: "Invalid ID" });
    }
    return res.status(201).json(playlist);
})

// get all playlist made by me
router.get("/get/me", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const artistId = req.user._id;
  
    const playists = await PlayList.find({ owner: artistId }).populate("owner");
    return res.status(200).json({ data: playists });
})


// Get all the PlayList made by an artist
router.get("/get/artist/:artistId", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const artistId = req.params.artistId;
    const artist = await User.findOne({ _id: artistId });
    if (!artist) {
        return res.status(304).json({ error: "Invalid ID" });
    }
    const playists = await PlayList.find({ owner: artistId });
    return res.status(200).json({ data: playists });
})



// Add a song to a PlayList:
router.post("/add/song", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const currentUser = req.user;
    const { playlistId, songId } = req.body;
    const playlist = await PlayList.findOne({ _id: playlistId });
    // Get the playList if Valid:
    if (!playlist) {
        return res.status(304).json({ err: "PlayList does not exit!" });
    }
    // 1: Check if current User owns the playlist or is a collaborator:
    if (!playlist.owner.equals(currentUser._id) && !playlist.collaborator.includes(currentUser._id)) {
        return res.status(400).json({ err: "Not allowed " });
    }

    // Step 2: Check if the song is valid song
    const song = await Song.findOne({ _id: songId });
    if (!song) {
        return res.status(304).json({ error: "Song does not exits" });
    }
    // Step 3: Now can simply add the song in PlayList
    playlist.songs.push(songId);
    await playlist.save();
    return res.status(200).json(playlist);
})

module.exports = router;

