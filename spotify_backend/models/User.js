const mongoose=require("mongoose");
// how to create a mondle
// step2:
// create the schema for mongoose

const User=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        private:true,
    },
    password:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        required:true,
    },
    phoneNo:{
        type:Number,
        required:false,
    },
    likedSongs:{
        type:String,
        default:"",
    },
    likedPlayList:{
        type:String,
        default:"",
    },
    subscribeArtist:{
        type:String,
        default:"",
    },

});

//Step 3:Create the model
const UserModel=mongoose.model("User",User);

module.exports=UserModel;