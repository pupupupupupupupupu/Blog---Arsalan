require("dotenv").config({ path: "../client/.env"});

const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
const mongoose = require("mongoose");
const postRoutes = require("./routes/blog");
const googleAuth = require("./routes/googleAuth")



//express app
const app = express();


//middleware
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));
app.use(cors());
app.use(morgan("combined"));


app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use("/api/blog", postRoutes)

// Include the postRoutes for handling the Google authentication
// app.use("/api/google-authenticate", googleAuth);
// app.use("/api/auth", googleAuth);

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.REACT_APP_PORT, () => {
      console.log("Connected to db & listening to port", process.env.REACT_APP_PORT);
    });
  })
  .catch((error) => {
    console.log(error)
  })



