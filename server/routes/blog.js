const express = require("express")
const {getAllBlogs, createBlog, getOneBlog, deleteBlog, updateBlog} = require("../controllers/controller")

//Instance of Route
const router = express.Router()


//GET all posts
router.get("/", getAllBlogs)


//GET a single post
router.get("/:id", getOneBlog)


//Post a post
router.post("/", createBlog)


//DELETE a post
router.delete("/:id", deleteBlog)


//UPDATE all post
router.patch("/:id", updateBlog)

module.exports = router