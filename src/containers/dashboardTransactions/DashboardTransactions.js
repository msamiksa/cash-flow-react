import React, {useEffect} from "react";
import ClearSpace from "../../components/clearSpace/ClearSpace";
import DashboardNav from "../../components/dashboardNav/DashboardNav";
import Transaction from "../../components/dashboardUtils/Showtransaction";
import AddTransaction from "../../components/dashboardUtils/AddTransaction";
import Teaminfo from "../../components/dashboardUtils/teamsss/Teaminfo";
import "./DashboardTransactions.css";
import axios from "axios";
import Axios from "axios";
const DashboardTransactions = (props) => {
  const [currentTab, setCurrentTab] = React.useState("transactions");
  // useEffect(() => {
  //   Axios.get(props.match.params.id)
    
  // })  
  const renderTransactionsTabContent = () => {
    switch (currentTab) {
      case "transactions":
        return [0, 0].map((item) => {
          // console.log(props.match.params.id);
          return <Transaction></Transaction>;
        });
      case "teaminfo":
        return <Teaminfo></Teaminfo>
      case "add":
        return <AddTransaction></AddTransaction>;
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
              <h5>Samiksa</h5>
              <p>samiksa@gmail.com</p>
            </div>
          </div>
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
              <h5>Ishika</h5>
              <p>ishika@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTransactions;
