import React, { useEffect, useState } from "react";

const MyBlogs = () => {
  const [blog, setBlog] = useState(null);
  const [data, setData] = useState({
    user_id: "",
  });

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`${process.env.REACT_APP_URL}/api/blog`);
      const json = await response.json();

      if (response.ok) {
        setBlog(json);
        console.log("Updated Blog State:1", json);
      }
    };

    fetchBlog();
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const user = JSON.parse(storedUser);

    if (user) {
      setData((prevData) => ({
        ...prevData,
        user_id: user.user_id
      }));
      console.log("User here:2", user);
      console.log("User here:3", user.user_id);
    } else {
      // Handle the case where user data is not available
    }
  }, []);

  if (!blog) {
    return <div>Loading...</div>;
  }

  // Filter blogs by the current user
  // const userBlogs = blog.filter((myBlogs) => myBlogs.user_id === data?.user_id);
  // const userBlogs = blog.filter((myBlogs) => myBlogs.user_id === data?.user_id);
  const ID = data.user_id;
  console.log("Hero 4", ID);
  // const filteredBlogs = blog.filter((myBlogs) => myBlogs.clientID === ID);
  console.log("Hero 5", data.user_id);
  
  return (
    <div className="myBlogsPage">
      <div className="blogPage">
        {blog.filter((myBlogs) => myBlogs.name === blog.user_name).map((myBlogs) => (
          <div className="singleBlog">
            <p>{myBlogs.name}</p>
          <p>{myBlogs.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBlogs;
