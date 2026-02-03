const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    category: String,
    published: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
