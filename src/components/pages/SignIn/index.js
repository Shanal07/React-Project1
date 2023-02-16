import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import AOS from 'aos';
import "./index.scss";
import history from "../../../helpers/history"
import{v4 as uuidv4} from 'uuid';
import cookies from 'browser-cookies';


function Login() {
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
      animationData: require("./Loginani.json"),
    });
  }, []);

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, id) => {
    console.log("event:", event.target.value, id);

    setState({
      ...state,
      [id]: event.target.value,
    });
  };

  const handleSubmit = () => {
    const { username, password } = state;

    console.log("username: ", username);
    console.log("password: ", password);

    const token=uuidv4();
    if (token){
      console.log('token:',token);

      cookies.set('token',token)
      history.push("/Home")  
    }
    
  };

  const { username, password } = state;

  return (
    <div className="login-m-container" >
      <div className="login-f-cont" id="lottie" data-aos="fade-up">
      </div>

      <div id="login-m-container" data-aos="fade-left">
        <div className="login-form">
          <label className="signin">Login</label>
          <input
            type="text"
            value={username}
            placeholder="Enter Username"
            onChange={(event) => handleChange(event, "username")}
          />
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={(event) => handleChange(event, "password")}
          />

          <div className="btn-forgot">
            <label className="forgot-password">forgot password? </label>
            <button type="submit" onClick={() => handleSubmit()}>
              Log in
            </button>
            <label className="register-click">
              Not yet Registered? <Link to="/SignUp" className="signup-click">Click Here</Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
