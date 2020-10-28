import React from "react";
import LandingHome from "../../components/landingHome/LandingHome";
import LandingWorking from "../../components/landingWorking/LandingWorking";
import FeaturesSection from "../../components/featuresSection/FeaturesSection";
import OurTeam from "../../components/ourTeam/OurTeam";
import ContactUs from "../../components/contactUs/ContactUs";

const LandingPage = (props) => {
  return (
    <>
      <LandingHome></LandingHome>
      <LandingWorking></LandingWorking>
      <FeaturesSection></FeaturesSection>
      <OurTeam></OurTeam>
      <ContactUs></ContactUs>
    </>
  );
};

export default LandingPage;
