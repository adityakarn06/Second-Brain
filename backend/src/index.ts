import 'dotenv/config'

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

const app = express();

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/content", authMiddleware, contentRouter);
app.use("/api/v1/brain", sharingRouter);

connectDB();

app.listen(3000, () => {
    console.log("server started at http://localhost:3000");
})