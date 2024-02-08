import { connectDb } from "@/helper/db";
import { Users } from "@/models/users";
import { NextResponse } from "next/server";
connectDb();
export async function GET(request,{params}){
    const {userid}= params;
     let data=[];
     try {
        data= await Users.findById(userid);
     }
     catch(error){
        console.log(error)
        return NextResponse.json([{
            message:"Field to get data",
            status:false,
        }])
     }
     return NextResponse.json(data);

}
export async function DELETE(request,{params}){
    const {userid}=params;
    try{
        const data= await Users.deleteOne({
            _id:userid
        });
        // data.delete();
        return NextResponse.json([{
            result:data,
            message: 'User deleted',
            status:true,
        }]);
    }
    catch(error){
        console.log(error)
        return NextResponse.json([{
            message:"Field to delete data",
            status:false,
        }])
     }
}
export async function PUT(request,{params}){
    const {userid}= params;
    let updateUser=[];
    try {
        const {firstName,lastName,password}= await request.json();
        const user = await Users.findById(userid);
        user.firstName = firstName;
        user.lastName = lastName;
        user.password = password;
         updateUser= await user.save();
        console.log(firstName,lastName);
    } catch (error) {
        
    }
    return NextResponse.json(updateUser)
}