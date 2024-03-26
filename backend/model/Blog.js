import mongoose from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  updatedOn: {
    type: Date,
    default: Date.now,
  },
  like: [{ type: mongoose.Types.ObjectId, ref: "User", required: true }],
  unlike: [{ type: mongoose.Types.ObjectId, ref: "User", required: true }],
  comments: [
    {
      commentedBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
      },
      descriptionOfComment: {
        type: String,

        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

export default mongoose.model("Blog", blogSchema);
