
import mongoose from "mongoose"
export const connectDb= async()=>{
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_DB,{
            dbName:"worker"
        })
        console.log("database has been connected")
        // console.log(connection)
        // const addUser = Users({
        //     firstName:"Shoaib",
        //     laseName:"Ghulam Muhammad",
        //     email:"shoaib@gmail.com",
        //     password:"baloch11122"
        // })
        // addUser.save();
        
        
    }
    catch(error){
        console.log("database connection error: " )
        console.error(error)
    }
}