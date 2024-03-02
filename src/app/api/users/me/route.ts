import { getDataFromToken } from "@/helpers/getTokenData";

import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModel";
import connect from "@/app/dbConfig/dbConfig"

connect();

export async function GET(request:NextRequest){
    try{
        const userId = getDataFromToken(request);
        const user = await User.findOne({_id:userId}).select("-password");
        return NextResponse.json({
            message:"user found",
            data:user
        })
    }catch(err:any){
        return NextResponse.json({error:err.message},{status:400})
    }
}