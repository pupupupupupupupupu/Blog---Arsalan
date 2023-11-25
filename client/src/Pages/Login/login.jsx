import React from "react";
import "./login.css";
import leftMail from "../../Images/leftMail.svg";
import leftRobo from "../../Images/leftRobo.svg";
import rightSearch from "../../Images/rightSearch.svg";
import bottomGuysKey from "../../Images/bottomGuys-key.svg";
import bottomGuysLeft from "../../Images/bottomGuys-left.svg";
import bottomGuysMid from "../../Images/bottomGuys-mid.svg";
import bottomGuysRight from "../../Images/bottomGuys-right.svg";
import loginMan from "../../Images/loginMan.svg";
import catchPhrase from "../../Images/catchPhrase.svg";
// import { GoogleLogin } from "@react-oauth/google";
import { useAuth0 } from "@auth0/auth0-react";




function Login() {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  console.log(clientId);

  const { user, logout, loginWithPopup } = useAuth0();

  // const onSuccess = (res) => {
  //     console.log("Login Success! Current User: ", credentialResponse);
  // }

  // const onSuccess = async (credentialResponse) => {
  //   const credential = credentialResponse.credential;

  //   try {
  //     const response = await fetch(`${process.env.REACT_APP_URL}/api/auth/google`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ credential }),
  //     });

  //     const data = await response.json();
  //     console.log(data);
  //     // localStorage.setItem('user', JSON.stringify(credential));
  //     localStorage.setItem('user', JSON.stringify({
  //       user_id: data.user_id,
  //       user_email: data.user_email,
  //       user_name: data.user_name,
  //       user_picture: data.user_picture,
  //     }));
      
  //     console.log("Data: ", data);
  //     const storedUser = localStorage.getItem('user');
  //     const user = JSON.parse(storedUser);
  //     console.log('User:', user);




  //     // Use the user data received from the backend as needed.
  //     window.location.href = "/post";
  //   } catch (error) {
  //     console.error("Error calling backend:", error);
  //   }
  // };

  // const [upload, setUpload] = useState({
  //   profilePhoto: "",
  //   clientID: "",
  //   emailID: "",
  //   name: "",
  //   image: "",
  //   title: "",
  //   genre: "",
  //   content: "",
  // });

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
  //   } catch (error) {
  //     console.log("Error fetching user data:", error);
  //   }
  // };

  // const onFailure = (res) => {
  //   console.log("Login Failed! Response: ", res);
  // }

  return (
    <div className="loginBg">
      {/* <p>Login</p> */}
      <div className="divMail">
        <img className="leftMail" src={leftMail} alt="leftMail" />
      </div>
      <div className="divRobo">
        <img className="leftRobo" src={leftRobo} alt="leftRobo" />
      </div>
      <div className="divSearch">
        <img className="rightSearch" src={rightSearch} alt="rightSearch" />
      </div>

      <div className="loginContainer"></div>
      <div className="loginManContainer">
        <img className="loginMan" src={loginMan} alt="loginMan" />
      </div>
      <div className="googleButton">
        {/* <GoogleLogin
          size="large"
          // onSuccess={(credentialResponse) => {
          //   console.log(credentialResponse);
          // }}
          onSuccess={onSuccess}
          // onFailure={onFailure}
          onError={() => {
            console.log("Login Failed");
          }}
        /> */}
        <div className="main">
          <div className="user" onClick={() => loginWithPopup()}>
            <i className="bx bxs-user"></i>
            {user ? user.given_name : "Sign in"}
            {/* <i class="bx bxs-user"></i>Sign In */}
          </div>

          <div
            className="register"
            onClick={() => {
              user ? logout() : loginWithPopup();
            }}
          >
            {user ? "Logout" : "Register"}
          </div>
        </div>
      </div>
      <div className="catchPhraseContainer">
        <img className="catchPhrase" src={catchPhrase} alt="catchPhrase" />
      </div>

      <div className="people">
        <div className="peopleInisdeIndex">
          <img
            className="group groupKey"
            src={bottomGuysKey}
            alt="bottomGuys-key"
          />
        </div>
        <div className="peopleOverIndex">
          <img
            className="group groupOldman"
            src={bottomGuysLeft}
            alt="bottomGuys-left"
          />
          <img
            className="group groupGirl"
            src={bottomGuysMid}
            alt="bottomGuys-mid"
          />
          <img
            className="group groupBoy"
            src={bottomGuysRight}
            alt="bottomGuys-top "
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
