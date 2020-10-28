import React from "react";
import "./FeaturesCard.css";

const FeaturesCard = (props) => {
  return (
    <div className="features-card">
      <div className="card-heading">{props.heading}</div>
      <div className="card-text">{props.text}</div>
    </div>
  );
};

export default FeaturesCard;
