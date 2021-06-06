import React from "react";
import Card from "../../components/teamsCard/TeamsCard";
import "./OurTeam.css";
import Samiksa from "../../assets/samiksa1.jpeg";

const OurTeam = () => {
  return (
    <div className="our-teams-container">
      <div className="our-team-sub">
        <center className="our-team-heading">Developed By</center>
        <div className="team-photos">
          <div>
            <Card
              image={Samiksa}
              name="Samiksa M"
              description="I am a software development engineer."
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
