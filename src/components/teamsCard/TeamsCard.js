import React from "react";
import "./TeamsCard.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const TeamsCard = (props) => {
  return (
    <>
      <div className="our-team-card">
        <div className="our-team-name">{props.name}</div>
        <div className="our-team-description">{props.description}</div>
        <div className="our-team-icons">
          <img
            src={github}
            alt="github"
            style={{ marginRight: "1vw", cursor: "pointer" }}
          ></img>
          <img
            src={linkedin}
            alt="github"
            style={{ marginRight: "1vw", cursor: "pointer" }}
          ></img>
        </div>
        <div className="our-team-image">
          <img src={props.image} alt="team" style={{marginTop: "85px"}}></img>
        </div>
      </div>
    </>
  );
};

export default TeamsCard;
