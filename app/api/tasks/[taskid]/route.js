import { Task } from "@/models/tasks";
import { NextResponse } from "next/server";

const { connectDb } = require("@/helper/db");

connectDb();
export const GET= async(request,{params})=>{
    const {taskid} = params;
    console.log(taskid);
   
    try {
        const data= await Task.findById(taskid);
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
    }
}
export const DELETE = async(request,{params})=>{
    const {taskid} = params;
    const deleteTask = await Task.deleteOne({
        _id: taskid,
    });
    return NextResponse.json([{
        message:"Task has been deleted successfully",
        data:deleteTask
       
    }])
}
export const PUT=async(request,{params})=>{
    const {taskid}= params;
    try {
          const {title,details,status}= await request.json();
    const updateTask = await Task.findById(taskid);
    updateTask.title = title;
    updateTask.details = details;
    updateTask.status = status;
    return NextResponse.json(updateTask,{status:200,statusText:"Task updated"});
        
    } catch (error) {
        console.error(error);
    }
  
    
}