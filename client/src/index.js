import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import Signin from "./Pages/Login/login";
import Home from "./Pages/Home/home";
import Error from "./Pages/Error/error";
import AboutUs from "./Pages/AboutUs/aboutUs";
import Post from "./Pages/Post/post.jsx";
import Navbar from "./Components/Navbar/navbar.jsx"
import MyBlogs from "./Pages/myBlogs/myBlogs.jsx"

// const clientId = process.env.REACT_APP_CLIENT_ID;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <AppProvider>
  // <GoogleOAuthProvider clientId={clientId}>
  <GoogleOAuthProvider clientId={"491726625407-3lafm9k3ogeg9599uvuvvumgq61m52rb.apps.googleusercontent.com"}>
    <BrowserRouter>
      <Routes><Route path="/signin" element={<Signin />} /></Routes>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/myblogs" element={<MyBlogs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </GoogleOAuthProvider>
  // </AppProvider>
);
