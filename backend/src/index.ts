require('dotenv').config();

declare global {
    namespace Express {
        export interface Request {
            userId?:string;
        }
    }
}

import express from "express";
import userRouter from "./routes/user";
import contentRouter from "./routes/content";
import sharingRouter from "./routes/sharing";
import { connectDB } from "./config/db";
import { authMiddleware } from "./middleware/auth";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/content", authMiddleware, contentRouter);
app.use("/api/v1/brain", sharingRouter);

connectDB(process.env.MONGO_URL as string);

app.listen(3001, () => {
    console.log("server started at http://localhost:3000");
})