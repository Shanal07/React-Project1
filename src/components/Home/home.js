import React from "react";
import "./home.scss";
import history from "../../helpers/history";
import {v4 as uuidv4} from 'uuid';
import cookies from 'browser-cookies';

function Home() {
  const handleLogout = () => {
    cookies.erase('token');
    history.push("/");
  };

  return (
    <div className="home">
      <h1>Shanal</h1>
      <button type="submit" onClick={() => handleLogout()}>
        Logout
      </button>
    </div>
  );
}

export default Home;
