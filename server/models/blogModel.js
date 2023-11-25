const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    clientID: {
        type: String,

    },
    name: {
        type: String,
    },
    emailID: {
        type: String,
    },
    image: {
        public_id: {
            type: String,
            required: true
          },
          url: {
            type: String,
            required: true
          }    },
    title: {
        type: String,
    },
    genre: {
        type: String,
    },
    content: {
        type: String,
    },
    timeStamp: {
        type: Date,
        default: Date.now,
    }
    
})

module.exports = mongoose.model("Blog", blogSchema)