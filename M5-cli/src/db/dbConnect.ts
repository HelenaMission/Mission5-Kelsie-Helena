import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mission5");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};
