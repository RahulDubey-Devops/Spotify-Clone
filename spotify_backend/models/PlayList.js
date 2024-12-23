const mongoose = require("mongoose");
// how to create a mondle
// step2:
// create the schema for mongoose 

const PlayList = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    // 1:Song in PlayList
    songs: [{
        type: mongoose.Types.ObjectId,
        ref: "Song",
    }],
    //2 : Collaborator
    collaborator: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
    }],
});

//Step 3:Create the model
const PlayListModel = mongoose.model("PlayList", PlayList);

module.exports = PlayListModel;
