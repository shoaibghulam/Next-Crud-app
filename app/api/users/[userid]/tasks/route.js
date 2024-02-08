import { Task } from "@/models/tasks";
import { NextResponse } from "next/server";


export const GET= async(request,{params}) =>{
    const {userid}= params;
    try {
        console.log(userid)
        const data = await Task.find({userId:userid})
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.json([
            {
                msg:"Error",
                error: error
            }
        ])
    }
}