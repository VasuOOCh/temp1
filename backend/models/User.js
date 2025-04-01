import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        unique : true,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    avatar : {
        type : String,
        default : "avatar.jpeg"
    },
    college : {
        type : String
    },
    premium : {
        type : Boolean,
        default : false
    },
    isVerified : {
        type : Boolean,
        default : false
    }

}, {timestamps : true})

const User = mongoose.model('User', userSchema);
export default User;