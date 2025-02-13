import mongoose from "mongoose";

export const connectDB = () =>{ 
    mongoose.connect(process.env.MONGODB_URI,{
    dbName:"BlogAPI",
}).then(() =>{
    console.log("Database connected")
}).catch((err)=>{
    console.log("Error:",err.message)
})
}
