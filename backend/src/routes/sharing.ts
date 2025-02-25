import { Router } from "express";
const sharingRouter = Router();

sharingRouter.post("/", (req, res) => {
    const { share } = req.body;
    // @ts-ignore
    const userId = req.userId;
    try {
        
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "error while sharing"
        })
    }
})

sharingRouter.get("/:shareLink", (req, res) => {

})

export default sharingRouter;