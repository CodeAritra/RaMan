const Blog = require("../models/Blog");

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find({ published: true });
  res.json(blogs);
};

exports.getSingleBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
};

exports.createBlog = async (req, res) => {
  const blog = await Blog.create(req.body);
  res.json(blog);
};

exports.updateBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(blog);
};

exports.deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};
