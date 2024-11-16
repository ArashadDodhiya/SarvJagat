// models/User.ts
import mongoose, { Document, Model, Schema } from 'mongoose';

// 1. Define the User Interface
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'serviceProvider' | 'serviceSeeker';
  createdAt: Date;
  updatedAt: Date;
}

// 2. Define the Schema
const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'serviceProvider', 'serviceSeeker'], default: 'serviceSeeker' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// 3. Define the Model
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
