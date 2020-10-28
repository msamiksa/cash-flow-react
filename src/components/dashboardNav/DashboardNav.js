import React from 'react'
import './DashboardNav.css'
import Button from '@material-ui/core/Button'
const DashboardNav = (props) =>{
    

    return(
        <div className="dashboard-nav">
            <Button disabled={props.currentTab==="add"?true:false} onClick={()=>props.setCurrentTab("add")}>Add +</Button>
            <Button disabled={props.currentTab==="transactions"?true:false} onClick={()=>props.setCurrentTab("transactions")}>Show transactions</Button>
            <Button disabled={props.currentTab==="teaminfo"?true:false} onClick={()=>props.setCurrentTab("teaminfo")}>Team info</Button>
        </div>
    )
}

export default DashboardNav