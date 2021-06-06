import React, {useEffect} from "react";
import ClearSpace from "../../components/clearSpace/ClearSpace";
import DashboardNav from "../../components/dashboardNav/DashboardNav";
import Transaction from "../../components/dashboardUtils/Showtransaction";
import AddTransaction from "../../components/dashboardUtils/AddTransaction";
import Teaminfo from "../../components/dashboardUtils/teamsss/Teaminfo";
import "./DashboardTransactions.css";
import axios from "axios";
import url from "../../constants/url";
const DashboardTransactions = (props) => {
  const [currentTab, setCurrentTab] = React.useState("transactions");
  const [transactions, setTransactions]=React.useState([]);
  const [teamId, setTeamId]=React.useState("");
  const [secret, setSecret]=React.useState("");
  const [users, setUsers]=React.useState([]);
  useEffect(() => {
    // Axios.post(props.match.params.id)
    // console.log( window.location.pathname.split("/"));
    const teamid=window.location.pathname.split("/")[2];
    axios
    .post(
      url+"/api/teams/getTeam",
      { teamid, },
      {
        withCredentials: true,
      }
    ).then(res=>{
      console.log(res.data);
      setTransactions(res.data.transactions);
      setTeamId(res.data.teamId);
      setSecret(res.data.secret);
      setUsers(res.data.users);
    })

   
  },[])  

  const renderTransactionsTabContent = () => {
    switch (currentTab) {
      case "transactions":
        return transactions.map((item) => {
          console.log(item);
          return <Transaction data={item}></Transaction>;
        });
      case "teaminfo":
        return <Teaminfo data1={teamId} data2={secret}></Teaminfo>
      case "add":
        console.log(users)
        return <AddTransaction data={users}></AddTransaction>;
      default:
        return <p>Something is not right!</p>;
    }
  };
  return (
    <div className="dashboard">
      <ClearSpace height="60px"></ClearSpace>
      <div className="dashboard-container">
        <div className="transactions">
          <DashboardNav
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          ></DashboardNav>
          {/* {currentTab==="transactions"?:null} */}
          {renderTransactionsTabContent()}
        </div>
        <div className="users">
        {users.map((item) => {
            return(
            <div className="user">
            <div className="user-avatar-container">
              <div
                className="user-avatar"
                style={{
                  backgroundColor: `rgba(${Math.floor(
                    Math.random() * 255
                  )},${Math.floor(Math.random() * 255)},${Math.floor(
                    Math.random() * 255
                  )})`,
                }}
              ></div>
            </div>
            <div className="user-name-email">
              <h5>{item.username}</h5>
              <p>{item.email}</p>
            </div>
          </div>);
          })}
          {/* <div className="user">
            <div className="user-avatar-container">
              <div
                className="user-avatar"
                style={{
                  backgroundColor: `rgba(${Math.floor(
                    Math.random() * 255
                  )},${Math.floor(Math.random() * 255)},${Math.floor(
                    Math.random() * 255
                  )})`,
                }}
              ></div>
            </div>
            <div className="user-name-email">
              <h5>Ishika</h5>
              <p>ishika@gmail.com</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardTransactions;
