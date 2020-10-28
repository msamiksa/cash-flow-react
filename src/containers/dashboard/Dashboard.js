import React from "react";
import { Redirect } from "react-router-dom";
import ClearSpace from "../../components/clearSpace/ClearSpace";
import DashboardNav from '../../components/dashboardNav/DashboardNav'
import Transaction from '../../components/dashboardUtils/Showtransaction'
import AddTransaction from '../../components/dashboardUtils/AddTransaction'
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
