import mongoose from "mongoose";
import User from "./User";
import Club from "./Club";

const projectSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    thumbnail : {
        type : String
    },
    github: {
        type : String,
    },
    deployment : {
        type : String
    },
    isPersonal : {
        type : Boolean
    },
    associationType: {
        type: String,
        required: true,
        enum: ["User", "Club"] // Ensure it only takes valid values
    },
    // if it is personal, then it will search for userIds, else clubIds
    association : {
        type : mongoose.Types.ObjectId,
        required : true,
        refPath : "associationType"
    }
}, {timestamps : true})

const Project = mongoose.model('Project', projectSchema)
export default Project;