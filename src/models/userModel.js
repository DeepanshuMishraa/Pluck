import mongoose from 'mongoose';



const userSchema = new mongoose.Schema({
        email:{
        type:String,
        required:[true,"Please Provide an Email"],
        unique:true,
    },
    username:{
        type:String,
        required:[true,"Please Provide an Username"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Please Provide an Password"],
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users",userSchema)

export default User;