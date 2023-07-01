const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
            required:true,
        },
        username:{
            type:String,
            required:true,
        },
    }
);

const userModel = mongoose.model("users1", userSchema);
module.exports = userModel;
