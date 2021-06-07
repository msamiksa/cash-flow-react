import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close';
import './SignUp.css'
import illus from '../../assets/illus-2.svg'
import axios from "axios";
import url from '../../constants/url';
const SignUp = (props) =>{
    const [formData, setFormData] = React.useState({
      });
      const [loginSuccess,setLoginSuccess] = React.useState(false)
    const goToSignIn = () =>{
        props.setShowSignUp(false)
        props.setShowSignIn(true)
    }
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
            `${url}/api/users/signup`,
            { ...formData },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('userId', res.data.id);
            localStorage.setItem('emailid', res.data.email);
            localStorage.setItem('name', res.data.name);
            setLoginSuccess(true)
            props.setShowSignIn(false)
            props.setShowSignUp(false)
          })
          .catch((e) => {
            window.alert("Email exists");
          });
        // axios.get(url+'/api/users/logout').then((res)=>{
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