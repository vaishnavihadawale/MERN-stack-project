import express from "express";
import {
  addBlog,
  getAllBlogs,
  editBlog,
  getById,
  deleteBlog,
  doLike,
  unLike,
} from "../controllers/blog-controller";
import { verifyToken } from "../controllers/user-controller";
const blogRouter = express.Router();

blogRouter.get("/", verifyToken, getAllBlogs);
blogRouter.post("/add", verifyToken, addBlog);
blogRouter.put("/update/:id", verifyToken, editBlog);
blogRouter.get("/:bid", verifyToken, getById);
blogRouter.delete("/:id", verifyToken, deleteBlog);
blogRouter.post("/dolike/:bid",verifyToken,doLike);
blogRouter.post("/unlike/:bid",verifyToken,unLike)
export default blogRouter;
