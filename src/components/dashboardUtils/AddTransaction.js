import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import ListMembers from './ListMemberAddTrans'
import Button from '@material-ui/core/Button'
import axios from "axios";
// const splitTypes = [
//     {
//       value: 'SEIM',
//       label: 'Split equally including me',
//     },
//     {
//       value: 'DEEM',
//       label: 'Split equally excluding me',
//     },
//     {
//       value: 'SWIM',
//       label: 'Split with * including me',
//     },
//     {
//       value: 'SWEM',
//       label: 'Split with * excluting me',
//     },
//   ];
const AddTransactions = (props) =>{
    // const [type, setType] = React.useState('SEIM');
    // const [selectedMembers,setSelectedMembers] = React.useState({'Samiksa':false,'Shatakshi':false,'Ishika':false});
    // const handleChange = (event) => {
    //     setType(event.target.value);
    // };
    const [addT, setAddT] = React.useState(true);
    const [formData, setFormData] = React.useState({});
    const [addSuccess,setAddSuccess] = React.useState(false)
    const [teamid,setTeamId]=React.useState(77848170)
  const onChangePaidby = (e) => {
    setFormData({ ...formData, paidby: e.target.value });
  };
  const onChangePaidTo = (e) => {
    setFormData({ ...formData, paidto: e.target.value });
  };
  const onChangeAmount = (e) => {
    setFormData({ ...formData, amount: e.target.value });
  };
  const add = () => {
    axios
      .post(
        "http://localhost:3001/api/transactions/addTransactions",
        { ...formData, teamid, userid: window.localStorage.getItem("userId")},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        // window.alert("Added successfully");
        setAddSuccess(true)
        // props.setShowCard(false)
        window.location.reload();
        // props.setShowSignUp(false)
      })
      .catch((e) => {
        console.log(e);
        window.alert("Wrong info");
      });
  }
    return(
        <div className="add-transaction">
            <h1>Add transaction</h1>
            <div className="add-trans-form">
                <TextField 
                id="paid-by" 
                className="at-input" 
                label="Paid By" 
                type="text"
                variant="outlined"
                value={formData.paidby}
                onChange={onChangePaidby}
                />
                <TextField 
                id="paid-to" 
                className="at-input" 
                label="Paid To" 
                type="text"
                variant="outlined"
                value={formData.paidto}
                onChange={onChangePaidTo}
                />
                <TextField 
                id="paid-amount" 
                className="at-input" 
                label="Amount" 
                type="text"
                variant="outlined"
                value={formData.amount}
                onChange={onChangeAmount}
                /><br/>
                {/* <TextField
                    id="split-type"
                    className="at-input"
                    select
                    value={type}
                    onChange={handleChange}
                    helperText="Please select the split type"
                    >
                    {splitTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                {type==="SWIM"||type==="SWEM"?
                    <ListMembers 
                        selectedMembers = {selectedMembers} 
                        setSelectedMembers={setSelectedMembers}>
                    </ListMembers>
                :null} */}
                <center style={{marginTop:"40px"}}>
                  <Button variant="contained" color="primary" onClick={add} >Add</Button>
                </center>
            </div>
        </div>
    )
}

export default AddTransactions