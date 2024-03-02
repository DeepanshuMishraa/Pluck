import mongoose from "mongoose";

const connect = async()=>{
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
       connection.on('connected',()=>{
        console.log("Database Connected Successfully")
       })
    }catch(err){
        console.log("Something went wrong?")
        console.log(err); 
    }
}

export default connect;