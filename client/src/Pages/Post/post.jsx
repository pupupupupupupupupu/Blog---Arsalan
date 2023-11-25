import React, { useState } from "react";
import "./post.css"


const Post = () => {

  const [setError] = useState(null);
  const [upload, setUpload] = useState({
    clientID: "",
    emailID: "",
    name: "",
    image: "",
    title: "",
    genre: "",
    content: "",
  });


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
    <div>
      <form className="formData" onSubmit={handleSubmit}>
        <div className="imageContainer">
          <label className="blogImage">
              Descriptive image about blog 
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
