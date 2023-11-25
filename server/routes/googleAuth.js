require("dotenv").config({ path: "../client/.env"});

const express = require("express")
const {auth} = require("../controllers/auth")

const router = express.Router()

router.post("/google", auth);

module.exports = router