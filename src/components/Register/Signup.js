import React, { useState, useEffect } from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import AOS from 'aos';

function Register() {

  useEffect(()=>
  {
    AOS.init();
  });
  
  useEffect(() => {
    const animationContainer = document.getElementById("lottie");
    lottie.loadAnimation({
      container: animationContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./Signupani.json"),
    });
  }, []);

  const [state, setState] = useState({
    username: "",
    usermail: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (event, id) => {
    console.log("event:", event.target.value, id);

    setState({
      ...state,
      [id]: event.target.value,
    });
  };

  const handleSubmit = () => {
    const { username, usermail, password , cpassword } = state;
    console.log("username: ", username);
    console.log("usermail: ", usermail);

    console.log("password: ", password);
    console.log("cpassword: ", cpassword);
    
  };

  const { username,usermail, password, cpassword } = state;

  return (
    <div className="login-m-container" >

      <div id="login-m-container" data-aos="fade-right">
        <div className="login-form">
          <label className="signin">Register Here</label>
          <input
            type="text"
            value={username}
            placeholder="Enter Full Name"
            onChange={(event) => handleChange(event, "username")}
          />

          <input
            type="email"
            value={usermail}
            placeholder="Enter Email Address"
            onChange={(event) => handleChange(event, "usermail")}
          />
          
          <input
            type="password"
            value={password}
            placeholder="Enter a New Password"
            onChange={(event) => handleChange(event, "password")}
          />
          <input
            type="password"
            value={cpassword}
            placeholder="Confirm Password"
            onChange={(event) => handleChange(event, "cpassword")}
          />

          <div className="btn-forgot">
            <button type="submit" onClick={() => handleSubmit()}>
              SignUp
            </button>
            <label className="register-click">
              Already Have a Account! <Link to ="/" className="signin-click">Sign In</Link> </label>
          </div>
        </div>
      </div>

      <div className="login-f-cont" id="lottie" data-aos="fade-up">
      
  
    </div>

    </div>
  );
}

export default Register;
