import React from 'react'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
const Transaction = (props) =>{
    console.log(props.data);
    const timestamp = props.data._id.toString().substring(0,8)
    const date = new Date( parseInt( timestamp, 16 ) * 1000 )
    return(
        <div className="transaction">
            <div className="amount-n-date">
                
                <p>Amount: {props.data.amount} <span>{date.toISOString().substring(0,10)}</span></p>
            </div>
            <hr/>
            <div className="transaction-details">
                <div>
                    <p>From: {props.data.from} <br/>To: {props.data.to}</p>
                    <p>Description: <br/> {props.data.description}</p>
                </div>
                <div className="user-icons-container">
                    <div className="user-icons">
                        <AccountBalanceWalletIcon></AccountBalanceWalletIcon>
                        {/* <DoneIcon></DoneIcon> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transaction