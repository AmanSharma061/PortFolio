import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
}
