import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import './home.css';
import Navbar from "../../Components/Navbar/navbar";


function Home() {

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`${process.env.REACT_APP_URL}/api/blog`);
      const json = await response.json();

      if (response.ok) {
        setBlog(json);
        // console.log(json);
        // console.log("This is Blog Data:", blog);
        
      }
    };

    fetchBlog();
  }, []);

  if (!blog) {
    return <div>Loading...</div>;
  }


  return (
    <div className="homepage">
      {/* <Navbar/> */}
      <div className="mainContainer"> 
          {blog && blog.map((allBlog) => (
            <Link to={`/blog/${allBlog._id}`} key={allBlog._id} className="Link">
              <div className="blog">
                <div className="upperTemp">
                    <div className="profileDiv"><img className="profilePhoto" src={allBlog.profilePhoto} alt={allBlog.name}/></div>
                    <div className="nameGenreDiv">
                        <p>{allBlog.name}</p>
                        <p>{allBlog.genre}</p>
                    </div>
                </div>
                <div className="lowerTemp">
                    <div className="blogImageDiv"><img className="imageBlog" src={allBlog.image.url} alt={allBlog.name}/></div>
                    <h3>{allBlog.title}</h3>
                    <p>{allBlog.content}, updated at {allBlog.timeStamp}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Home;
