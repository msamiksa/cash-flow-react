import React, {useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'
import axios from "axios";
import url from '../../constants/url';

const AddTransactions = (props) =>{
    const [formData, setFormData] = React.useState({});
    const [addSuccess,setAddSuccess] = React.useState(false)
    const [user, setUser]=React.useState([]);
    const [teamid,setTeamId]=React.useState(window.location.pathname.split("/")[2])
  const onChangePaidTo = (e) => {
    setFormData({ ...formData, to: e.target.value });
  };
  const onChangeAmount = (e) => {
    setFormData({ ...formData, amount: e.target.value });
  };
  const onChangeDescription = (e) => {
    setFormData({ ...formData, description: e.target.value });
    
  };
  
    useEffect(() => {
      let temp=props.data.filter(item=>
        {
          return item._id!==window.localStorage.getItem("userId");
        }
        )
        console.log(temp);
        setUser(temp);
    }, []);
  console.log(props.data);
  const add = () => {
    axios
      .post(
        `${url}/api/transactions/addTransactions`,
        { ...formData, id: teamid, from: window.localStorage.getItem("name")},
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
                {/* <TextField 
                id="paid-by" 
                className="at-input" 
                label="Paid By" 
                type="text"
                variant="outlined"
                value={formData.paidby}
                onChange={onChangePaidby}
                /> */}
                <TextField
                    id="paid-to"
                    className="at-input"
                    select
                    onChange={onChangePaidTo}
                    helperText="Select the user to be paid to"
                    >
                    {user.map((option) => (
                        <MenuItem key={option.username} value={option.username}>
                        {option.username}
                        </MenuItem>
                    ))}
                </TextField>
                {/* <TextField 
                id="paid-to" 
                className="at-input" 
                label="Paid To" 
                type="text"
                variant="outlined"
                value={formData.paidto}
                onChange={onChangePaidTo}
                /> */}
                <TextField 
                id="paid-amount" 
                className="at-input" 
                label="Amount" 
                type="text"
                variant="outlined"
                value={formData.amount}
                onChange={onChangeAmount}
                /><br/>
                 <TextField 
                id="description" 
                className="at-input" 
                label="Description..." 
                type="text"
                variant="outlined"
                value={formData.description}
                onChange={onChangeDescription}
                />
                
                {/* {type==="SWIM"||type==="SWEM"?
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