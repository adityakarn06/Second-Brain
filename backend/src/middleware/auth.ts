import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../config/config";
import { NextFunction, Request, Response } from "express";

export const authMiddleware = (req:Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"];

    if (!token) {
        res.status(401).json({success:false, message: "Unauthorized... NO token provided"});
        return;
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (typeof decoded === "string") {
            res.status(403).json({
                msg: "u have sent a string type token... it should be an object!"
            })
            return;
        }
        req.userId = (decoded as JwtPayload).id;
        next();
    } catch (error) {
        console.log(error)
        res.status(401).json({success:false, message: "Invalid Token"});
    }
}

// override the types of the express request object