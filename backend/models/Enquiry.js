import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
    userId : {
        type : mongoose.Types.ObjectId,
        ref : "User"
    },
    clubId : {
        type : mongoose.Types.ObjectId,
        ref : "Club"
    },

    // why the person needs to join the club
    description : {
        type : String
    },
    isAccepted : {
        type : Boolean,
        default : false
    },
    isRejected : {
        type : Boolean,
        default : false
    }
})