// app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/User';
import { connectToDatabase } from '@/lib/mongoose';

interface SignupRequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  console.log("Received request to signup");

  try {
    // Parse request body
    const { name, email, password }: SignupRequestBody = await req.json();
    console.log("Request body:", { name, email, password });

    // Set default role to 'serviceSeeker' automatically
    const userRole: string = "serviceSeeker";

    // Connect to the database
    await connectToDatabase();
    console.log("Database connected");

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Password hashed");

    // Create new user with the 'serviceSeeker' role
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: userRole,
    });
    await user.save();
    console.log("User saved to database");

    // Respond with a success message
    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
  } catch (error: unknown) {
    // Log the full error for debugging
    if (error instanceof Error) {
      console.error("Error creating user:", error);
      console.error("Error details:", error.message);
      return NextResponse.json({ error: error.message || 'Error creating user' }, { status: 500 });
    }

    // Handle cases where the error is not an instance of Error
    console.error("Unknown error:", error);
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}
