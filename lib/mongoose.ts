import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in your .env file');
}

let isConnected = false;

export async function connectToDatabase() {
  if (isConnected) return;

  try {
    // Ensuring MONGODB_URI is a string when passed to mongoose.connect
    await mongoose.connect(MONGODB_URI as string);
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Could not connect to MongoDB:', error);
    throw new Error('Failed to connect to MongoDB');
  }
}
