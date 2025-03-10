import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import Link from "../models/links";
import { random } from "../utils";
import Content from "../models/contents";
import UserModel from "../models/users";
const sharingRouter = Router();

sharingRouter.post("/share", authMiddleware, async (req, res) => {
    const { share } = req.body;
    const userId = req.userId;
    try {
        if (share) {
            const existingLink = await Link.findOne({
                userId
            });
            if (existingLink) {
                res.json({
                    hash: existingLink.hash
                })
            }
            const hash = random(10);
            await Link.create({
                userId,
                hash
            })
            res.json({
                message: "/share/" + hash
            })
        } else {
            await Link.deleteOne({
                userId
            })
            res.json({
                message: "Removed link"
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "error while sharing"
        })
    }
})

sharingRouter.get("/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;

    const link = await Link.findOne({
        hash
    });

    if (!link) {
        res.status(411).json({
            message: "Sorry incorrect input"
        })
        return;
    }

    const content = await Content.findOne({
        userId: link.userId
    })

    const user = await UserModel.findOne({
        _id: link.userId
    })

    if (!user) {
        res.status(411).json({
            message: "user not found"
        })
        return;
    }

    res.json({
        username: user.username,
        content: content
    })
})

export default sharingRouter;