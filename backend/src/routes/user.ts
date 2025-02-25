import { Router } from "express";
import UserModel from "../models/users";
import bcrypt from "bcrypt";
import { z } from "zod";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config";

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const requiredBody = z.object({
    username: z.string().min(3).max(10),
    password: z
      .string()
      .min(8)
      .max(20)
      .refine(
        (v) => {
          return /^(?=.*[A-Z]).+$/g.test(v);
        },
        { message: "At least one uppercase expected" }
      )
      .refine(
        (v) => {
          return /^(?=.*[0-9]).+$/g.test(v);
        },
        { message: "At least one digit expected" }
      )
      .refine(
        (v) => {
          return /^(?=.*[^a-zA-Z0-9]).+$/g.test(v);
        },
        { message: "At least one symbol expected" }
      ),
  });

  const parsedDatWithSuccess = requiredBody.safeParse(req.body);

  if (!parsedDatWithSuccess.success) {
    res.json({
      msg: "Incorrect Password",
      error: parsedDatWithSuccess.error,
    });
    return;
  }

  const { username, password } = req.body;

  try {
    const exists = await UserModel.findOne({ username });
    if (exists) {
      res.json({
        success: "false",
        msg: "username already exists...pls enter different username",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      password: hashedPassword,
    });

    const user = await newUser.save();

    res.json({
      success: "true",
      msg: "Signup successful",
    });
  } catch (error) {
    console.log("Error while signup", error);
    res.json({
      msg: "Error while signup",
    });
  }
});

userRouter.post("/signin", async (req, res) => {
  const requiredBody = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(3).max(30),
  });

  const parsedDatWithSuccess = requiredBody.safeParse(req.body);

  if (!parsedDatWithSuccess.success) {
    res.json({
      msg: "Incorrect Password",
      error: parsedDatWithSuccess.error,
    });
    return;
  }

  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });
  if (!user) {
    res.json({
      success: false,
      msg: "User not found. Check username",
    });
    return;
  }

  try {
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign(
        {
          id: user._id.toString(),
        },
        JWT_SECRET
      );

      res.json({
        success:true,
        token,
      });
    } else {
      res.status(403).json({
        message: "Incorrect credentials",
      });
    }
  } catch (error) {
    console.log("Error while login");
  }
});

export default userRouter;