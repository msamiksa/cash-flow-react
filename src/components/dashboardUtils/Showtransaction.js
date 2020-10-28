import React from 'react'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import DoneIcon from '@material-ui/icons/Done';
const Transaction = (props) =>{
    return(
        <div className="transaction">
            <div className="amount-n-date">
                <p>100 Rs <span>8th July 2020</span></p>
            </div>
            <hr/>
            <div className="transaction-details">
                <div>
                    <p>From: Kartik <br/>To: Prerna</p>
                </div>
                <div className="user-icons-container">
                    <div className="user-icons">
                        <AccountBalanceWalletIcon></AccountBalanceWalletIcon>
                        <DoneIcon></DoneIcon>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transaction