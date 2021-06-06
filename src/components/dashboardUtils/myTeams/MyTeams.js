import React,{useEffect} from "react";
import SimpleCard from "../myTeams/myTeamCard/MyTeamCard";
import MyInformation from "../myTeams/myInformation/MyInformation";
import AddTeamCard from "../myTeams/addTeamCard/AddTeamCard";
import AddTeamPopup from "../myTeams/addTeamPopup/AddTeamPopup";
import axios from "axios";
import "./MyTeams.css";
import {Link} from 'react-router-dom'
import url from "../../../constants/url";

const MyTeams = (props) => {
  const [showCard, setShowCard] = React.useState(false);
  const [teams, setTeams]=React.useState([]);
  const [email, setemail]=React.useState("");
  const [name, setname]=React.useState("");
 
  const handleAddCard = () => {
    setShowCard(!showCard);
  };

  useEffect(() => {
    setemail(window.localStorage.getItem("emailid"));
    setname(window.localStorage.getItem("name"));
    console.log(name);
    axios
      .get(`${url}/api/users/getUsers`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        const teams1=res.data;
        let temp=teams1.filter(item=>
        {
          return item._id===window.localStorage.getItem("userId");
        }
        )
      console.log(temp[0]);
        const teams2=temp[0].teams;
        console.log(teams2);
        setTeams(teams2);
       })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1 style={{ marginTop: "20px" }}>My Teams</h1>
      <div style={{ display: showCard ? "block" : "none" }}>
        <AddTeamPopup setShowCard={setShowCard}></AddTeamPopup>
      </div>
      <div class="my-teams-container">
        <div class="my-teams-container-container">
          <div onClick={handleAddCard}>
            <AddTeamCard></AddTeamCard>
          </div>
          {teams.map((item) => {
            return <Link to={"/transactions/" + item.teamId} ><SimpleCard title={item.teamName} id={item.teamId}></SimpleCard></Link>;
          })}
          
        </div>
        <div>
          <MyInformation
            email={email}
            name={name}
          ></MyInformation>
        </div>
      </div>
    </div>
  );
};
export default MyTeams;
