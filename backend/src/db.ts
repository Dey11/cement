import mongoose from "mongoose";
mongoose.set("strictQuery", true);

export const connectToDb = async (uri: string) => {
  return await mongoose.connect(uri);
};
