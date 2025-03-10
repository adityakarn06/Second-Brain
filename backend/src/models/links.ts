import mongoose, { trusted } from "mongoose";

const linkSchema = new mongoose.Schema({
    hash: {type:String, required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true, unique: true },
})

const Link = mongoose.model("link", linkSchema);

export default Link;