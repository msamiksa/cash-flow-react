import React from "react";
import { Redirect } from "react-router-dom";
import ClearSpace from "../../components/clearSpace/ClearSpace";
import MyTeams from "../../components/dashboardUtils/myTeams/MyTeams";
import "./Dashboard.css";
const Dashboard = (props) => {
  return (
    <div className="dashboardContainer">
      {!props.loggedIn?<Redirect></Redirect>:null}
      <ClearSpace height="60px"></ClearSpace>
      <MyTeams></MyTeams>
    </div>
  );
};

export default Dashboard;
