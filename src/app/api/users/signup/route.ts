import connect from "@/app/dbConfig/dbConfig";

import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { email, username, password } = reqBody;

    console.log(reqBody);

    //check if user exists

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User Already Exists" },
        { status: 500 }
      );
    }

    //hash password

    const salt = await bcryptjs.genSalt(10);

    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      email,
      username,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    console.log(savedUser);

    //send email verfication

  

    return NextResponse.json({
      message: "User Created Succesfully",
      success: true,
      savedUser,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
