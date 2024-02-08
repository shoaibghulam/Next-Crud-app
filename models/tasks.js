import mongoose from "mongoose";

const TasksSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    details:{
        type:String,
        required:true,
    },
    taskDate:{
        type:Date,
        default:Date.now(),
    },
    status:{
        type:String,
        enum:["Pending", "Completed"],
        default:"Pending",
        required:true,
    },
    userId:{
        type:mongoose.ObjectId,
        required:true,
    }
})
 export const Task = mongoose.models.task || mongoose.model("task",TasksSchema);