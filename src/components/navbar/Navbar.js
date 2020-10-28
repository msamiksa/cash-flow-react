import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "@material-ui/core/Button";
import Axios from "axios";

const Navbar = (props) => {
  const [disabledButton, setDisabledButton] = React.useState("Home");
  let listener = null;
  const [scrollState, setScrollState] = useState("top");
  if (
    document.location.pathname === "/dashboard" &&
    disabledButton !== "dashboard"
  )
    setDisabledButton("dashboard");
  if (document.location.pathname === "/" && disabledButton !== "home")
    setDisabledButton("home");

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== "amir") {
          setScrollState("amir");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  const logoutHandler = () =>{
    Axios.get("http://localhost:3001/api/users/logout",{
      withCredentials: true,
    }).then((data)=>{
      localStorage.removeItem("loggedIn")
      window.localStorage.clear();
      props.setLoggedIn(false)
      console.log(data)
    }).catch((e)=>{
      console.log(e)
    })
  }

  return (
    <div
      className="navbar"
      style={{
        backgroundColor: scrollState === "amir" || props.loggedIn ? "#5765bf" : "transparent",
      }}
    >
      <div className="nav-left">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <Button
            style={{ color: "white" }}
            disabled={disabledButton === "dashboard" ? true : false}
            onClick={() => setDisabledButton("dashboard")}
          >
            Dashboard
          </Button>
        </Link>
        <Link to="/About"  style={{ textDecoration: "none" }}>
        <Button
          style={{ color: "white" }}
          disabled={disabledButton === "About" ? true : false}
          onClick={() => setDisabledButton("about")}
        >
          About
        </Button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            style={{ color: "white" }}
            disabled={disabledButton === "home" ? true : false}
            onClick={() => setDisabledButton("home")}
          >
            Home
          </Button>
        </Link>
      </div>
      <div className="nav-right">
        {props.loggedIn?
        <Button
          className="nav-right-button"
          onClick={logoutHandler}
        >
          Logout
        </Button>
        :
          <Button
            className="nav-right-button"
            onClick={() => props.setShowSignIn(true)}
          >
            Login
          </Button>
        }
        <div className="nav-avatar"></div>
      </div>
    </div>
  );
};

export default Navbar;
