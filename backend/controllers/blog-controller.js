import Blog from "../model/Blog";
import Jwt from "jsonwebtoken";
import User from "../model/User";
import mongoose from "mongoose";
const jwtKey = "blog-app";
export const getAllBlogs = async (req, res, next) => {
  let user = req.user;
  console.log("req899", req);
  console.log("user: ", user);
  let blog;

  try {
    blog = await Blog.find({});

    console.log("blog: ", blog);
  } catch (error) {
    return console.log("error: ", error);
  }
  if (!blog) {
    return res.status(402).json({ message: "No blogs yet" });
  }
  return res.status(202).json({ blog });
};

export const addBlog = async (req, res, next) => {
  console.log("hhjhvhfgttttjb5653343445");
  console.log("userid", req.user);
  let userId = req.user.userid;

  const { title, description } = req.body;

  const blog = new Blog({
    title:title,
    description:description,
    user: userId,
  });

  try {
    console.log("userId12334443: ", userId);

    await blog.save();
    let blogId = blog._id;

    let existingUser = await User.findOne({ _id: userId });
    console.log("existingUser@@@: ", existingUser);
    existingUser.blogs.push(blogId);
    await existingUser.save();
  } catch (err) {
    console.log("err: ", err);
  }
  return res.status(201).json({ blog, message: "save successfully" });
};
export const doLike = async (req, res, next) => {
  let blogId = req.params.bid;
  console.log("blogId: ", blogId);
  let loginUser = req.user.userid;
  let blog;
  try {
    blog = await Blog.findById(blogId);
    console.log(" blog for like: ", blog);
    let blogUser = blog.user;
    console.log("blogUser1111: ", blogUser);

    let unlikeArray = blog.unlike.includes(loginUser);
    console.log(blog.unlike);
    if (unlikeArray) {
      blog.unlike.splice(loginUser, 1);
      blog.like.push(loginUser);
      await blog.save();
    } else {
      blog.like.push(loginUser);
      await blog.save();
    }
  } catch (error) {
    console.log("error: ", error);
  }
  return res.status(200).json({ blog, message: "like hitted for post" });
};
export const unLike = async (req, res, next) => {
  console.log("like for function call");
  let loginUser = req.user.userid;
  console.log("loginUser: ", loginUser);
  let blogId = req.params.bid;
  let blog;
  try {
    blog = await Blog.findById(blogId);
    console.log(" blog for like: ", blog);
    let likeArray = blog.like.includes(loginUser);
    console.log("likeArray: ", likeArray);
    console.log("like", blog.like);
    if (likeArray) {
      blog.like.splice(loginUser, 1);

      blog.unlike.push(loginUser);
      await blog.save();
    } else {
      console.log("abc");
      console.log("loginUser: ", loginUser);
      blog.unlike.push(loginUser);

      await blog.save();
    }
  } catch (error) {
    console.log("error: ", error);
  }
  return res.status(200).json({ blog, message: "unlike hitted for post" });
};
export const commentOnPost = async (req, res, next) => {
  let loginUser = req.user.userid;
  let blogId = req.params.bid;

  try {
    let currentBlog = await Blog.findById(blogId);
    console.log("currentBlog: ", currentBlog);
  let comment={
    commentedBy:req.user.userid,
    descriptionOfComment:req.body.descriptionOfComment
  }
    currentBlog.comments.push(comment);
    await currentBlog.save();
  } catch (err) {
    console.log("err: ", err);
  }
  return res.status(204).json({ message: "comment posted" });
};
export const editBlog = async (req, res, next) => {
  console.log("edit blog");
  const { title, description } = req.body;
  const blogId = req.params.id;
  const userId = req.user.userid;
  let convertedId = new mongoose.Types.ObjectId(userId);
  console.log("convertedId: ", convertedId);
  console.log("userId: ", userId);
  let blog;

  try {
    blog = await Blog.findById({ _id: blogId });
    console.log("blog354545: ", blog);

    let createdUserOfBlog = blog.user;

    let isEqual = createdUserOfBlog.equals(convertedId);
    console.log("isEqual: ", isEqual);
    console.log("createdUserOfBlog: ", createdUserOfBlog);

    if (isEqual) {
      blog = await Blog.findByIdAndUpdate(blogId, {
        title,
        description,
        updatedOn: new Date(),
      });
      console.log("blog updated", blog);
    } else {
      console.log("caanot update");
      //return res.status(409) .json({message:"cannot update blog"})
    }
  } catch (err) {
    console.log("err: ", err);
  }
  if (!blog) {
    return res.status(404).json({ message: "cannot update blog" });
  }
  return res.status(202).json({ blog });
};

export const getById = async (req, res, next) => {
  // console.log("req@",req);
  const id = req.params.bid;
  console.log("id: ", req.params);
  console.log("req123@@", req.query);
  let blog;

  try {
    blog = await Blog.findById(id);
  } catch (err) {
    console.log("err: ", err);
  }
  if (!blog) {
    return res.status(408).json({ message: "blog not found" });
  }
  return res.status(203).json({ blog });
};

export const deleteBlog = async (req, res, next) => {
  const id = req.params.id;
  let convertedBlogId = new mongoose.Types.ObjectId(id);

  let blog;
  let user;
  let index;
  let userid = req.user.userid;
  console.log("userid: ", userid);
  let newUserId = new mongoose.Types.ObjectId(userid);
  console.log("newUserId:111 ", newUserId);
  let blogUser;

  try {
    blogUser = await Blog.findOne({ user: userid });
    user = blogUser.user;
    console.log("blogUser: ", blogUser);
    console.log("user: ", user);
    let isEqual = user.equals(newUserId);
    console.log("isEqual: ", isEqual);
    if (isEqual) {
      user = await User.findById({ _id: userid });
      console.log(" user find: ", user.blogs);
      console.log("convertedBlogId: ", convertedBlogId);
      index = user.blogs.indexOf(convertedBlogId);
      user.blogs.splice(index, 1);

      await user.save();

      blog = await Blog.findByIdAndDelete({ _id: id });
      await blog.save();
    } else {
      console.log("cannot delete it");
    }
  } catch (err) {
    console.log("err: ", err);
  }
  if (!blog) {
    return res.status(407).json({ message: "Unable to search" });
  }
  return res.status(290).json({ message: "successfully deleted" });
};

export const verifytheToken = (req, res, next) => {
  let token;
  token = req.headers["authorization"];
  console.log("token: ", token);
  if (token) {
    token = token.split(" ");
    console.log("token: ", token);
  }
};
