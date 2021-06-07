import React from "react";
import "./AddTeamPopup.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import url from "../../../../constants/url";

const AddTeamPopup = (props) => {
  const [addTeam, setAddTeam] = React.useState(true);
  const [formData, setFormData] = React.useState({});
  const [joinSuccess,setJoinSuccess] = React.useState(false)
  const [createSuccess,setCreateSuccess] = React.useState(false)
  const onChangeTeamId = (e) => {
    setFormData({ ...formData, teamid: e.target.value });
  };
  const onChangePassword = (e) => {
    setFormData({ ...formData, secret: e.target.value });
  };
  const onChangeTeamName = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };
  const joinClick = () => {
    axios
      .post(
        `${url}/api/teams/joinTeam`,
        { ...formData, userid: window.localStorage.getItem("userId")},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        localStorage.setItem('joinedIn', true);
        setJoinSuccess(true)
        props.setShowCard(false)
        window.location.reload();
      })
      .catch((e) => {
        window.alert("Wrong teamid/password combination");
      });
  }
  const createClick = () => {
    axios
      .post(
        `${url}/api/teams/create`,
        { ...formData, userid: window.localStorage.getItem("userId") },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        localStorage.setItem('created', true);
        // window.alert("Created successfully");
        setCreateSuccess(true)
        props.setShowCard(false)
        window.location.reload();
        // props.setShowSignUp(false)
      })
      .catch((e) => {
        window.alert("Error in creation");
      });
  }
  if (addTeam) {
    return (
      <div className="my-team-add-card">
        <div className="add-team-switch">
          <div>
            <button
              className="button-switch button-switch-add"
              style={{ backgroundColor: addTeam ? "#2a75ff" : "" }}
            >
              <p className="button-name">Add Team</p>
            </button>
          </div>
          <div>
            <button
              className="button-switch button-switch-join"
              style={{
                backgroundColor: addTeam ? "" : "#2a75ff",
              }}
              onClick={() => setAddTeam(false)}
            >
              <p className="button-name">Join Team</p>
            </button>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <TextField
            id="outlined-password-input"
            label="Team Name"
            type="text"
            autoComplete="current-password"
            variant="outlined"
            value={formData.teamname}
            onChange={onChangeTeamName}
          />
        </div>
        <Button
          variant="contained"
          style={{ backgroundColor: "#2a75ff", marginTop: "20px" }}
          onClick={createClick}
        >
          Create Team
        </Button>
        <div className="close-popup" onClick={() => props.setShowCard(false)}>
          <CloseIcon></CloseIcon>
        </div>
      </div>
    );
  } else {
    return (
      <div className="my-team-add-card">
        <div className="add-team-switch">
          <div>
            <button
              className="button-switch button-switch-add"
              style={{ backgroundColor: addTeam ? "#2a75ff" : "" }}
              onClick={() => setAddTeam(true)}
            >
              <p className="button-name">Add Team</p>
            </button>
          </div>
          <div>
            <button
              className="button-switch button-switch-join"
              style={{
                backgroundColor: addTeam ? "" : "#2a75ff",
              }}
            >
              <p className="button-name">Join Team</p>
            </button>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <TextField
            id="outlined-password-input"
            label="Team ID"
            type="text"
            autoComplete="current-password"
            variant="outlined"
            value={formData.teamid}
            onChange={onChangeTeamId}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <TextField
            id="outlined-password-input"
            label="Code"
            type="text"
            variant="outlined"
            value={formData.password}
            onChange={onChangePassword}
          />
        </div>
        <Button
          variant="contained"
          style={{ backgroundColor: "#2a75ff", marginTop: "20px" }}
          onClick={joinClick}
        >
          Join Team
        </Button>
        <div
          className="close-popup-join"
          onClick={() => props.setShowCard(false)}
        >
          <CloseIcon></CloseIcon>
        </div>
      </div>
    );
  }
};
export default AddTeamPopup;
