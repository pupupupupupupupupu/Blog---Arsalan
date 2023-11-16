const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
  cloud_name: 'dan9otqee', 
  api_key: '122113392872921', 
  api_secret: 'zBg4RNHqu6Qj3USY8MgObZDBiRA' 
});

module.exports = cloudinary;
