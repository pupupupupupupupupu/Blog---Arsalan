const Blog = require("../models/blogModel")
const mongoose = require("mongoose");
const cloudinary = require("../Cloudinary/cloudinary");




//get all blogs
const getAllBlogs = async (req, res) => {
    const blogs = await Blog.find({}).sort({createdAt: -1})

    res.status(200).json(blogs)
}


//post a blog
const createBlog = async (req, res) => {
    const {
        profilePhoto,
        clientID,
        name,
        emailID,
        image,
        title,
        genre,
        content,
        timeStamp,
    } = req.body;
  
    // add blog to db
    try {
      const blogImage = await cloudinary.uploader.upload(image, {
        folder: "products",
      });
  
      const blog = await Blog.create({
        profilePhoto,
        clientID,
        name,
        emailID,
        image: {
          public_id: blogImage.public_id,
          url: blogImage.secure_url,
        },
        title,
        genre,
        content,
        timeStamp,
      });
  
      res.status(200).json(blog);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  
  };





//get a single blog
const getOneBlog = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such blog found"})
    }

    const blog = await Blog.findById(id)

    if(!blog) {
        return res.status(404).json({error: "No such blog found"})
    }

    res.status(200).json(blog)
}



//delete a blog
const deleteBlog = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such blog found"})
    }

    const blog = await Blog.findOneAndDelete({_id: id})

    if(!blog) {
        return res.status(400).json({error: "No such blog"})
    }

    res.status(200).json(blog)

}


//update a blog
const updateBlog = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such blog found"})
    }

    const blog = await Blog.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!blog) {
        return res.status(400).json({error: "No such blog"})
    }

    res.status(200).json(blog)
}



module.exports = {
    getAllBlogs,
    createBlog,
    getOneBlog,
    deleteBlog,
    updateBlog
}