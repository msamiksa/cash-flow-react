import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close';
// import { useHistory } from "react-router-dom";
import './SignUp.css'
import illus from '../../assets/illus-2.svg'
import axios from "axios";
import {
  Redirect,
} from "react-router-dom";
const SignUp = (props) =>{
    // let history = useHistory();
    const [formData, setFormData] = React.useState({
        // username: "Samiksa",
        // email: "samiksa@gmail.com",
        // password: "samiksa@1",
      });
      const [loginSuccess,setLoginSuccess] = React.useState(false)
    const goToSignIn = () =>{
        props.setShowSignUp(false)
        props.setShowSignIn(true)
    }

    // const signUp = () =>{
    //     // history.push('/signup')
    // }
      const onChangeEmail = (e) => {
        setFormData({ ...formData, email: e.target.value });
      };
      const onChangePassword = (e) => {
        setFormData({ ...formData, password: e.target.value });
      };
      const onChangeUsername = (e) => {
        setFormData({ ...formData, username: e.target.value });
      };
      const signUpClick = () => {
        axios
          .post(
            "http://localhost:3001/api/users/signup",
            { ...formData },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
            localStorage.setItem('loggedIn', true);
            setLoginSuccess(true)
            props.setShowSignIn(false)
            props.setShowSignUp(false)
          })
          .catch((e) => {
            // console.log(e);
            window.alert("Email exists");
          });
        // axios.get('http://localhost:3000/api/users/logout').then((res)=>{
        //     console.log(res.data)
        // }).catch(e=>{
        //     console.log(e)
        // })
      };

    return(
        <div className="sign-up">
            <div className="sign-up-inner">
                <div className="sign-up-illustration">
                    <img src={illus} alt="sign up illustration" width="80%"/>
                </div>
                <div className="sign-up-form">
                    <div className="close-sign-up" onClick={()=>props.setShowSignUp(false)}>
                        <CloseIcon></CloseIcon>
                    </div>
                    <div className="signup-form-container">
                        <h1>SignUp</h1>
                        <div className="signup-form-main">
                            <TextField id="signup-username" label="Username" variant="outlined" fullWidth  value={formData.username}
                onChange={onChangeUsername}/><br/><br/>
                            <TextField id="signup-email" label="Email" variant="outlined" fullWidth  value={formData.email}
                onChange={onChangeEmail}/><br/><br/>
                            <TextField id="signup-password" label="Password" type="password" variant="outlined" fullWidth  value={formData.password}
                onChange={onChangePassword}/><br/>
                            <Button variant="contained" color="primary" style={{marginTop:"40px"}} onClick={signUpClick}>SignUp</Button>
                            <p onClick={goToSignIn}>Already have an acount!</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SignUp