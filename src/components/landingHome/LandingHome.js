import React from "react";
import "./LandingHome.css";
import cashflow from "../../assets/android.svg";

const LandingFirstSection = (props) => {
  return (
    <>
      <div className="cover-image">
        <img src={cashflow} alt="cash"></img>
      </div>
      <div className="landing-home-container">
        <div className="tilted-bg"></div>
        <div className="landing-heading">
          <div className="main-heading">Cash Flow</div>
          <div className="main-subheading">
            Handling transactions has never been this easy!
          </div>
          <div className="landing-buttons">
            {/* <button  variant='contained'
              style={{
                color: 'white',
                backgroundColor: '#065cd0',
                width: '10vw',
              }}
              onClick={() => props.setShowSignIn(true)} className="login">LOGIN</button>
            <button variant='contained'
              style={{
                color: 'white',
                backgroundColor: '#065cd0',
                width: '10vw',
                marginRight: '20px',
              }}
              onClick={() => props.setShowSignUp(true)} className="landing-button">SIGNUP</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingFirstSection;
