import mongoose from "mongoose";

const userDetailsSchema = new mongoose({
    userId : {
        type : mongoose.Types.ObjectId,
        ref : "User",
        required : true
    },
    github : {
        type : Boolean
    },
    linkedIn : {
        type : String
    },
    resume : {
        type : String
    },
    clubs : [
        {
            id : {
                type : mongoose.Types.ObjectId,
                ref : "Club"
            },
            role : {
                type : String,
                required : true,
                default : "member"
            }
        }
    ],
    interests : [
        {
            type : String
        }
    ],
    projects : [
        {
            type : mongoose.Types.ObjectId,
            ref : "Project"
        }
    ]
})