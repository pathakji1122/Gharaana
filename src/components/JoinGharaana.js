import React from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

const Join = () => {
  const [value, setValue] = React.useState(null);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const locations = [
    'Hyderabad',
    'Mumbai',
    'Bangalore',
    'Guntakal',
    'Churu',
    // Add more locations as needed
  ];

  const [expert, setExpert] = useState({
    expertName: "",
    email: "",
    phoneNo: "",
    password: "",
    location: "",
    expertise: [],
  });

  const [selectedDomain, setSelectedDomain] = useState("");

  const handleDomainChange = (event) => {
    const { value } = event.target;
    setSelectedDomain(value); // Update selectedDomain state
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // If the checkbox is checked, add the value to the expertise list
      setExpert((prevExpert) => ({
        ...prevExpert,
        expertise: [...prevExpert.expertise, value],
      }));
    } else {
      // If the checkbox is unchecked, remove the value from the expertise list
      setExpert((prevExpert) => ({
        ...prevExpert,
        expertise: prevExpert.expertise.filter((item) => item !== value),
      }));
    }
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setExpert((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://gharaanah.onrender.com/expert/signup', expert);
      if (response.data.accountCreated === true) {
        console.log('Data sent successfully:', response.data);
        setExpert({
          expertName: "",
          email: "",
          phoneNo: "",
          password: "",
          location: "",
          expertise: [],
        });
        window.alert(`Welcome to Gharaana: ${expert.expertName}`);
      } else if (response.data.accountCreated === false) {
        window.alert(`Error: ${response.data.response}`);
      }
    } catch (error) {
      console.error('Error sending data:', error);
      setExpert({
        expertName: "",
        email: "",
        phoneNo: "",
        password: "",
        location: "",
        expertise: [],
      });
    }
  };

  return (
    <div className="joincontainer">
      <h5 className="topics">Register as Expert</h5>
      <form onSubmit={handleSubmit} className="htmlForums">
        <div className="joinforum">
          <TextField
            required
            label="Name"
            value={expert.expertName}
            onChange={handleInputs}
            name="expertName"
          />
        </div>

        <div className="joinforum">
          <TextField
            required
            label="PhoneNo"
            value={expert.phoneNo}
            onChange={handleInputs}
            name="phoneNo"
          />
        </div>

        <div className="joinforuml2">
          <TextField
            required
            label="Email"
            value={expert.email}
            onChange={handleInputs}
            name="email"
          />
        </div>

        <div className="joinforuml2">
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              value={expert.password}
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

        <Stack spacing={1} sx={{ width: 300 }}>
          <Autocomplete
            id="location"
            options={locations}
            renderInput={(params) => (
              <TextField {...params} label="Location" variant="standard" />
            )}
          />
        </Stack>

        <br></br>
        <button className="button" onClick={handleSubmit} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Join;
