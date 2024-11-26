const mongoose=require("mongoose");
// how to create a mondle
// step2:
// create the schema for mongoose

const Song=new mongoose.Schema({
   name:{
    type:String,
    required:true,
   },
   thumbnail:{
    type:String,
    required:true,
   },
   track:{
    type:String,
    required:true,
   },
   artist:{
    type:mongoose.Types.ObjectId,
    ref:"user",
    required:true,
   },


});

//Step 3:Create the model
const SongModel=mongoose.model("Song",Song);

module.exports=SongModel;