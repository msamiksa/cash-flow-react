import React from "react";
import "./LandingWorking.css";
import image from "../../assets/landing1.png";

const LandingWorking = () => {
  return (
    <div className="landing-working-container">
      <div className="landing-working-sub">
        <div className="working-image">
          <img src={image} alt="landing"></img>
        </div>
        <div className="working-note">
          <div className="working-note-sub">
            <div className="working-heading">How it works</div>
            <div className="working-text">
              This is the best website to handle all your financial transactions
              and split money among friends, It takes your transactions as input
              splits them the way you wish and provides you with the easiest way
              to clear them out making your life easy. YOu can see a graphical
              representation of how it works below.
            </div>
            <button onClick= { () => window.open('http://cash-flow-visual.surge.sh/')} className="explore">EXPLORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingWorking;
