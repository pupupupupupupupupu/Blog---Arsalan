import React, { useState, useEffect } from "react";
import "./post.css"


const Post = () => {

  const [setError] = useState(null);
  const [upload, setUpload] = useState({
    profilePhoto: "",
    clientID: "",
    emailID: "",
    name: "",
    image: "",
    title: "",
    genre: "",
    content: "",
  });

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  // const fetchUserData = async () => {
  //   try {
  //     // Make a request to backend to get user data
  //     const response = await fetch(`${process.env.REACT_APP_URL}/api/auth/google`);
  //     console.log(response);
  //     const userData = await response.json();

  //     // Set user data in the state
  //     setUpload((prevUpload) => ({
  //       ...prevUpload,
  //       clientID: userData.user_id,
  //       emailID: userData.user_email,
  //       name: userData.user_name,
  //       profilePhoto: userData.user_picture,
  //     }));
  //     console.log(userData.user_id);
  //   } catch (error) {
  //     console.log("Error fetching user data:", error);
  //   }
  // };

  useEffect(() => {
    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUpload((prevUpload) => ({
        ...prevUpload,
        clientID: userData.user_id,
        emailID: userData.user_email,
        name: userData.user_name,
        profilePhoto: userData.user_picture,
      }));
      console.log(userData.profilePhoto);
    }
  }, []);

  const storedUser = localStorage.getItem('user');
  const user = JSON.parse(storedUser);
  console.log('User Profile Photo:', user.profilePhoto);
  console.log('User  Photo:', user.picture);
  console.log('User:', user);


  // useEffect(() => {
  //   // Retrieve user data from the backend
  //   fetchUserData();
  // }, []);
  
  // const fetchUserData = async () => {
  //   try {
  //     // Make a request to backend to get user data
  //     const response = await fetch(`${process.env.REACT_APP_URL}/api/auth/google`);
  //     const userData = await response.json();
  
  //     // Set user data in the state
  //     setUpload((prevUpload) => ({
  //       ...prevUpload,
  //       clientID: userData.user_id,
  //       emailID: userData.user_email,
  //       name: userData.user_name,
  //       profilePhoto: userData.user_picture,
  //     }));
  
  //     // Store user data in local storage
  //     localStorage.setItem('user', JSON.stringify(userData));
  //   } catch (error) {
  //     console.log("Error fetching user data:", error);
  //   }
  // };
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_URL}/api/blog`, {
      method: "POST",
      body: JSON.stringify(upload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setUpload({
        ...upload,
        profilePhoto: "",
        clientID: "",
        emailID: "",
        name: "",
        image: "",
        title: "",
        genre: "",
        content: "",
      });
      console.log("New blog added:", json);
    }
  };


  const convertToBase64 = (e) => {
    const image = e.target.files[0];

    if (image.size > 5000000) {
      alert("Image should be less than 5MB");
      return;
    }

    let reader = new FileReader();

    reader.readAsDataURL(image);

    reader.onload = () => {
      console.log(reader.result);
      const base64Image = reader.result;
      setUpload((upload) => ({
        ...upload,
        image: base64Image,
        // {public_id: "", url: base64Image}
      }));
    };

    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };



  return (
    <div className="postDiv">
      <form className="formData" onSubmit={handleSubmit}>
        <div className="imageContainer">
          <label className="blogImage">
              <b>Click Here</b> to upload image for blog 
              <input
                type="file"
                accept="image/*"
                onChange={convertToBase64}
                className="inputCSS"
              />
          </label>
              {upload.image ? (
                <img
                  style={{ height: "40px", width: "40px" }}
                  alt="blogImage"
                  src={upload.image}
                  className="previewImg"
                />
              ) : null}              
        </div>

        <div className="titleContainer">
          <label> Blog's title &nbsp; &nbsp;</label>
              <input
                type="text"
                name="blogTitle"
                onChange={(e) =>
                  setUpload({ ...upload, title: e.target.value })
                }
                value={upload.title}
              />
        </div>

        <div className="genreContainer">
          <label> Genre &nbsp; &nbsp;</label>
              <input
                type="text"
                name="blogGenre"
                onChange={(e) =>
                  setUpload({ ...upload, genre: e.target.value })
                }
                value={upload.genre}
              />
        </div>

        <div className="blogArea">
          <label> Blog here &nbsp; &nbsp;</label>
              <textarea
                type="text"
                name="blog"
                onChange={(e) =>
                  setUpload({ ...upload, content: e.target.value })
                }
                value={upload.content}
              />
        </div>

          <button className="submitButton">Submit</button>
      </form>
    </div>
  )
}

export default Post
