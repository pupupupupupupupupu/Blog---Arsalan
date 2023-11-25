import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import './home.css';


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
      <div className="mainContainer"> 
          {blog && blog.map((allBlog) => (
            <Link to={`/blog/${allBlog._id}`} key={allBlog._id}>
              <div className="blog">
                  <img src={allBlog.image.url} alt={allBlog.name}/>
                  <h3>{allBlog.title}</h3>
                  <p>{allBlog.content}, updated at {allBlog.timeStamp}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Home;
