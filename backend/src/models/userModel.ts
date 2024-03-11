import mongoose from "mongoose";

interface IUser {
  email: string;
  password: string;
  name: string;
}

const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model<IUser>("User", userSchema);
export default userModel;
