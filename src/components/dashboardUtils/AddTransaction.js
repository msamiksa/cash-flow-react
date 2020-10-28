import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import ListMembers from './ListMemberAddTrans'
import Button from '@material-ui/core/Button'
const splitTypes = [
    {
      value: 'SEIM',
      label: 'Split equally including me',
    },
    {
      value: 'DEEM',
      label: 'Split equally excluding me',
    },
    {
      value: 'SWIM',
      label: 'Split with * including me',
    },
    {
      value: 'SWEM',
      label: 'Split with * excluting me',
    },
  ];
const AddTransactions = () =>{
    const [type, setType] = React.useState('SEIM');
    const [selectedMembers,setSelectedMembers] = React.useState({'Samiksa':false,'Shatakshi':false,'Ishika':false});
    const handleChange = (event) => {
        setType(event.target.value);
    };
    return(
        <div className="add-transaction">
            <h1>Add transaction</h1>
            <div className="add-trans-form">
                <TextField id="paid-to" className="at-input" label="Paid by" />
                <TextField id="paid-amount" className="at-input" label="Amount" /><br/>
                <TextField
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
                :null}
                <center style={{marginTop:"40px"}}><Button variant="contained" color="primary">Add</Button></center>
            </div>
        </div>
    )
}

export default AddTransactions