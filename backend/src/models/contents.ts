import mongoose from "mongoose";

// const contentTypes = ['image', 'video', "article", 'audio']; // will extend as needed

const contentSchema = new mongoose.Schema({
    title: { type: String },
    link: { type: String },
    // type: { type: String, enum: contentTypes, required: true },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    type: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
}, {timestamps: true});

const Content = mongoose.model("content", contentSchema);

export default Content;