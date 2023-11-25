const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = process.env.CLIENT_ID; // Replace with your Google Client ID
const client = new OAuth2Client(CLIENT_ID);

// Endpoint to handle the verification
exports.auth = async (req, res) => {
  const { credential } = req.body; // Assuming this is how you're receiving data
  
  try {
    // Verify the token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: CLIENT_ID,
    });
    
    const payload = ticket.getPayload();
    console.log(payload);
    const userId = payload['sub']; // Unique Google user ID
    
    const userInfo = {
      user_name: payload['name'],
      user_id: payload['sub'],
      user_picture: payload['picture'],
      user_email: payload['email'],
    }
    // console.log(userInfo.user_picture);

    // Set user data in local storage
    // localStorage.setItem('user', JSON.stringify(userInfo));


    res.status(200).json({ success: true, ...userInfo});
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ success: false, error: 'Token verification failed' });
  }
};


