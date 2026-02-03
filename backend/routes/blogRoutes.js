const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const editorOnly = require("../middleware/editorOnly");
const ctrl = require("../controllers/blogController");

router.get("/", ctrl.getBlogs);          // public
router.get("/:id", ctrl.getSingleBlog); // public
router.post("/", auth, editorOnly, ctrl.createBlog);
router.put("/:id", auth, editorOnly, ctrl.updateBlog);
router.delete("/:id", auth, editorOnly, ctrl.deleteBlog);

module.exports = router;
