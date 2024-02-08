const { connectDb } = require("@/helper/db");
import { Task } from "@/models/tasks";
import { NextRequest, NextResponse } from "next/server";
connectDb();

export async function GET(request){
    try {
        const data= await Task.find();
        return NextResponse.json(data)
    } catch (error) {
        console.log(error);
    }
}
export async function POST(request){
    try {
        const taskData = await request.json();
        const addData = await Task(taskData);
        addData.save();
        return NextResponse.json(addData);
    } catch (error) {
        
    }
}
