import mongoose from "mongoose";

export const connectDB = (url: string) => {
    mongoose.connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB Error",err))
}