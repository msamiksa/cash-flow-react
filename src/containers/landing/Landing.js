import React from "react";
import "./Landing.css";
import ClearSpace from "../../components/clearSpace/ClearSpace";
import LandingHome from "../../components/landingHome/LandingHome";
import FeaturesSection from "../../components/featuresSection/FeaturesSection";
import OurTeam from "../../components/ourTeam/OurTeam";
import ContactUs from "../../components/contactUs/ContactUs";
const Landing = (props) => {
  return (
    <div className="landing">
      <ClearSpace height="60px"></ClearSpace>
      <div className="first">
        <LandingHome
        setShowSignIn={props.setShowSignIn}
        setShowSignUp={props.setShowSignUp}
        ></LandingHome>
      </div>
      <div className="second">
        <FeaturesSection></FeaturesSection>
      </div>
      <div className="third">
        <OurTeam></OurTeam>
      </div>
      <div className="fourth">
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Landing;
