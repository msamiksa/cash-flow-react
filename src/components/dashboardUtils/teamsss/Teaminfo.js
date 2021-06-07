import React from 'react'
import TeamInformation from "../teamsss/aaaa/TeamInformation";

const Teaminfo = (props) =>{
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