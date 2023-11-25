const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  profilePhoto: {
    type: String,
    default: "https://i.redd.it/i5vnwk8ksbs81.jpg",
  },
  clientID: {
    type: Number,
  },
  name: {
    type: String,
    default: "Arsalan Hassan",
  },
  emailID: {
    type: String,
  },
  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
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
  },
});

// blogSchema.pre("save", function (next) {
//     if (!this.profilePhoto) {
//         this.profilePhoto = "https://i.redd.it/i5vnwk8ksbs81.jpg";
//     }

//     if (!this.name) {
//         this.name = "Arsalan Hassan";
//     }

//     next();
// });

module.exports = mongoose.model("Blog", blogSchema);
