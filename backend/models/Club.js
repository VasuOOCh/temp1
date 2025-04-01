import mongoose from "mongoose";

const clubSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    association : {
        type : String
    },
    admins : [{
        type : mongoose.Types.ObjectId,
        ref : "User"
    }],
    members : [{
        type : mongoose.Types.ObjectId,
        ref : "User"
    }],
    projects : [{
        type : mongoose.Types.ObjectId,
        ref : "Project"
    }],
    domain : [{
        String
    }],
    logo : {
        type : String,
        default : avatar.jpeg
    },
    website : {
        type : String
    },
    gallery : [{
        type : String
    }],
    reviews : [
        {
            userId : {
                type : mongoose.Types.ObjectId,
                ref : "User",
                required : true
            },
            rating : {
                type : Number,
                enum : [1,2,3,4,5]
            },
            comment : {
                type: String,
                required : type
            }
            
        }
    ]
}, {timestamps : true})

const Club = mongoose.model('Club', clubSchema);
export default Club