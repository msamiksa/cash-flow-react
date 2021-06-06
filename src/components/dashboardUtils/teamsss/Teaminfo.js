import React from 'react'
import TeamInformation from "../teamsss/aaaa/TeamInformation";

const Teaminfo = (props) =>{
  console.log(props.data1);
    return(
        <>
        <TeamInformation
          id={props.data1}
          secret={props.data2}
        ></TeamInformation>
      </>
    )
};

export default Teaminfo