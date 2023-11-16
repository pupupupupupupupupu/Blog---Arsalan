require("dotenv").config({ path: "../client/.env"});


const express = require("express");
const { OAuth2Client, GoogleAuth } = require("google-auth-library");
const googleAuth = express.Router();

const CLIENT_ID = process.env.CLIENT_ID; // Replace with your actual client ID
const client = new OAuth2Client(CLIENT_ID);

googleAuth.post("/", async (req, res) => {
  const { tokenId } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const userId = payload['sub'];

    // Now 'payload' contains user information such as name, email, picture, etc.
    // You can use this information to perform actions on the backend.

    res.status(200).json({ success: true, user: payload, mssg: "Authentication Successful!" });
  } catch (error) {
    console.error('Google authentication failed:', error.message);
    res.status(401).json({ success: false, error: 'Authentication failed' });
  }
});

module.exports = googleAuth;
