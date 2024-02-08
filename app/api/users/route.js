import { connectDb } from "@/helper/db";
import { Users } from "@/models/users";
import { NextResponse } from "next/server";
import  bcrypt from 'bcryptjs';
connectDb();
export async function  GET(request) {

    const data = await Users.find().select("-password  -__v")
    return NextResponse.json(data,{status:200})
}
export async function POST(request){
    const data = await request.json();
    // const salt = await bcrypt.genSalt(10)
    data.password= bcrypt.hashSync(data.password,parseInt(process.env.BCRYPT_SALT))
    
    // data.passowrd="baloch"
    // console.log("the password is",data.passowd);
    try {
   
        const addData = await Users(data);
        addData.save();
        // console.log("the data is ". addData)
        return NextResponse.json([{
            "data":addData,
            "message":"Data has been inserted successfully",
            "status":true,
        }],{status:200,statusText:"Data has been inserted"})
    } catch (error) {
        NextResponse.json([{
            message:"Dubilcate Email Id"
        }],{status:500,statusText:"Error"})
    }
   
}