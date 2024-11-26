
const express = require("express");
const User = require("../models/User")
const router = express.Router();

//This POST router will help to register the user
router.post("/register", (req, res) => {
    //This code is run when /register api is called as POST request
    //This req.body will be-of-the-format{emil,password,firstNAme,lastName,username}

    const { email, password, firstName, lastName, username } = req.body;

    // step 2:Thus the user alredy exits or not if yes we throw error:

    const user = User.findOne({ email: email });
    if (user) {
        return res.status(403).json({ error: "User with email alredy exits" });
    }



})