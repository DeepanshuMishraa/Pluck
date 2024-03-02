import connect from "@/app/dbConfig/dbConfig";

import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, password } = reqBody;

    //check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json(
        { error: "User Does not exist" },
        { status: 400 }
      );
    }
    //check if password is correct
    const vaildPass = await bcryptjs.compare(password, user.password);
    if (!vaildPass) {
      return NextResponse.json({ error: "Wrong Password" }, { status: 400 });
    }
    // create and assign token data

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login Success",
      success: true,
    });

    

    response.cookies.set("token", token,{ httpOnly: true });
    return response
  } catch (err: any) {
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}
