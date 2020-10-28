import React,{useEffect} from 'react';
import TeamInformation from "../teamsss/aaaa/TeamInformation";

const Teaminfo = (props) =>{
  const [id, setid]=React.useState("");
  const [secret, setsecret]=React.useState("");
  useEffect(() => {
    setid(window.localStorage.getItem("teamid"));
    setsecret(window.localStorage.getItem("secret"));
  })
    return(
        <>
        <TeamInformation
          id="12345678"
          secret="569876"
        ></TeamInformation>
      </>
    )
};

export default Teaminfo