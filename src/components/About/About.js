import React from "react";
import { Redirect } from "react-router-dom";
import ClearSpace from "../clearSpace/ClearSpace";
import "./About.css";
import cashflow from "../../assets/android.svg";

const About = (props) => {
  return (
    <div className="about">
       {!props.loggedIn?<Redirect></Redirect>:null}
      <ClearSpace height="60px"></ClearSpace>
      <div
        className="dashboard-container"
        style={{ textAlign: "justify", fontSize: "20px" }}
      >
        <div className="cover-image">
        <img src={cashflow} alt="cash"></img>
      </div>
        <p>
          This website will help to split bills among people and also keep track
          of expenses (lending/borrowing). Groups can be formed and the expenses
          can be added in the group and it can be divided among any number of
          users. This is will be very helpful for people when they go out and
          pay as a group. The division will give everyone the clear idea of whom
          to pay to or who has to pay them. A proper flow of the money can be
          recorded without it getting forgotten.
        </p>{" "}
        <br></br>
        <p>
          Keeping a track of the expenses can be very useful, especially to keep
          a check on the money being spent. This will be of enormous help to
          college students like us who are very amateur in the world of
          appropriating the expenses. The division feature also helps in
          eliminating the awkwardness among people in having to ask them to pay
          the money.
        </p>
      </div>
    </div>
  );
};

export default About;
