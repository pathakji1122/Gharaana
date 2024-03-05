import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { Redirect } from "react-router-dom";

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { ControlPointDuplicateTwoTone, EditNoteSharp, OtherHousesSharp, SpatialTrackingTwoTone } from "@mui/icons-material";
const Login = ({ onLogin }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [selectedLocation, setSelectedLocation] = React.useState(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState(

    {
      email: "",
      password: "",
    }
  );

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('https://gharaanah.onrender.com/user/login', user);
      if (response.data.status === true) {
        if (response.data.expert === false) {
          Cookies.set('authToken', response.data.token,{ expires: 7 });
          window.alert(`Login Success`)
             
          onLogin(1);
          localStorage.setItem('userStage', '1');
         
        }
        else if (response.data.expert === true) {
          Cookies.set('authToken', response.data.token, { expires: 7 });
          window.alert(`Login Done`)
          onLogin(2);
          localStorage.setItem('userStage', '2');
      
        }

      }
      else if (response.data.status === false) {
        window.alert(`${response.data.response} `);
      }

    } catch (error) {
      console.error('Error sending data:', error);
      window.alert("try again")

     
      setUser({
        email: "",
        password: "",
      });
      // Handle error, like showing an error message
    }
  };

  return <>

<div className="joincontainer">
      <h5 className="topics">Login</h5>
      <form onSubmit={handleSubmit} className="htmlForums">
        <div className="joinforuml2">
          <TextField
            required
            label="Email"
            value={user.email}
            onChange={handleInputs}
            name="email"
          />
        </div>

        <div className="joinforuml2">
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              value={user.password}
              onChange={handleInputs}
              name="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        <br />
        <button className="button" onClick={handleSubmit} type="submit">
          Login
        </button>
      </form>
    </div>

  </>





}

export default Login;











