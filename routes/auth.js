
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/helper")
const User = require("../models/User")
//This POST router will help to register the user
router.post("/register", async (req, res) => {
    //This code is run when /register api is called as POST request
    //This req.body will be-of-the-format{emil,password,firstNAme,lastName,username}

    const { email, password, firstName, lastName, username } = (req.body);

    // step 2:Thus the user alredy exits or not if yes we throw error:

    const user = await User.findOne({ email: email });
    if (user) {
        return res.status(403).json({ error: "User with email already exits" });
    }

    // This is valid request 
    //Step 3: Create the new user:
    //Step 3.1 : We donot store passowrd in plain text
    // xyz: we convert the plain text into a hash
    const hashPassword = await bcrypt.hash(password, 10);
    const newUserData = { email, password: hashPassword, firstName, lastName, username };

    const newUser = await User.create(newUserData);

    // Step 4:we want to create the token to return to the user
    const token = await getToken(email, newUser);

    //Step % Return result to the User:
    const userToReturn = { ...newUser.toJSON(), token };
    delete userToReturn.password;
    return res.status(200).json(userToReturn);

});

router.post("/login", async (req, res) => {
    //step 1: Get email and pass from user
    const { email, password } = req.body;

    //step 2: check if user(with email) exit or not
    const user = await User.findOne({ email: email });
    if (!user) return res.status(403).json("Invalid Credentials");

    //Step 3 if user exits check if password s correct if not the credentioal are invalid

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(403).json("Invalid Credentials");
    }

    //Step 4: credential are correct thn return token to user

    const token = await getToken(user.email, user);

    const userToReturn = { ...user.toJSON(), token };

    delete userToReturn.password;

    return res.status(200).json(userToReturn);

})



module.exports = router;

