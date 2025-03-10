import { Router } from "express";
import Content from "../models/contents";
const contentRouter = Router();

contentRouter.post("/", async (req, res) => {
  const { link, type, title, tags } = req.body;

  const newContent = new Content({
    link,
    type,
    title,
    tags: [],
    userId: req.userId,
  });
  try {
    await newContent.save();
    res.json({
      success: true,
      message: "Content saved successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "error while saving content",
      error,
    });
  }
});

contentRouter.get("/", async (req, res) => {
  // @ts-ignore
  const userId = req.userId;

  try {
    // userId waala content khojo aur userId ka data bhi le aao (populate)... sirf username lekin
    const content = await Content.find({
      userId: userId,
    }).populate("userId", "username");
    res.json({
      content,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      Message: "Error while fetching content",
    });
  }
});

contentRouter.delete("/", async (req, res) => {
  // @ts-ignore
  const userId = req.userId;
  const { contentId } = req.body;
  try {
    const content = await Content.findOneAndDelete({
      userId,
      contentId,
    });
    res.json({
        success: true,
        message: "Deleted successfully"
    })
  } catch (error) {
    res.json({
        message: "error while deleting"
    })
  }
});

export default contentRouter;
