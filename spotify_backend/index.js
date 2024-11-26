const express = require("express");
const mongoose=require('mongoose')
const app = express();

const PORT = 8080;
const URL="mongodb+srv://rdubey:Astha%402629@spotifycluster01.eiq26.mongodb.net/admin";
//Connect MongoDB to Node APP
mongoose.connect(URL,()=>{console.log("MongoDB connected")});

app.get('/', (req, res) => {
    // req contains all data for the request
    // res contains all data for the response
    return res.send("Hello World")
});

// Tell Express the Sever will Run on this PORT

app.listen(PORT, () => {
    console.log(`Server Listening on PORT ${PORT}`)
})