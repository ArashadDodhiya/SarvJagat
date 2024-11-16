// app/api/auth/signin/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '@/models/User';
import { connectToDatabase } from '@/lib/mongoose';

interface SigninRequestBody {
  email: string;
  password: string;
}

// Set a secret key for JWT (secure this in environment variables)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

export async function POST(request: Request) {
  await connectToDatabase();

  const { email, password }: SigninRequestBody = await request.json();

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Set token as a secure HTTP-only cookie
    const response = NextResponse.json({ message: 'Sign-in successful', token });
    response.cookies.set('token', token, { httpOnly: true, secure: true, path: '/', maxAge: 3600 });

    return response;
  } catch (error) {
    console.error('Sign-in error:', error);
    return NextResponse.json({ error: 'Error during sign-in' }, { status: 500 });
  }
}
