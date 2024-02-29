import React from "react";
import axios from "axios";
import { useState } from "react";
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
const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [selectedLocation, setSelectedLocation] = React.useState(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const locations = [
    'BANGALORE'
  ];
  const [customer, setCustomer] = useState({
    customerName: "",
    email: "",
    phoneNo: "",
    password: "",
    location: "",
  });
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setCustomer((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://gharaanah.onrender.com/customer/signup', {
        ...customer,
        location:selectedLocation,
      });

      if (response.data.accountCreated === true) {
        console.log('Data sent successfully:', response.data);
        setCustomer({
          customerName: "",
          email: "",
          phoneNo: "",
          password: "",
          location: "",
        });
        window.alert(`Welcome to Gharaana: ${customer.customerName}`);
      } else if (response.data.accountCreated === false) {
        setCustomer({
          customerName: "",
          email: "",
          phoneNo: "",
          password: "",
          location: "",
        });
        window.alert(`Error: ${response.data.response}`);
      }
    } catch (error) {
      console.error('Error sending data:', error);
      setCustomer({
        customerName: "",
        email: "",
        phoneNo: "",
        password: "",
        location: "",
      });
    }
  };
  return (
    <div className="joincontainer">
      <h5 className="topics">SignUp</h5>
      <form onSubmit={handleSubmit} className="htmlForums">
        <div className="joinforum">
          <TextField
            required
            label="Name"
            value={customer.customerName}
            onChange={handleInputs}
            name="customerName"
          />
        </div>

        <div className="joinforum">
          <TextField
            required
            label="PhoneNo"
            value={customer.phoneNo}
            onChange={handleInputs}
            name="phoneNo"
          />
        </div>

        <div className="joinforuml2">
          <TextField
            required
            label="Email"
            value={customer.email}
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
              value={customer.password}
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
          onChange={(event, newValue) => {
            setSelectedLocation(newValue); // Update selectedLocation
          }}
          value={selectedLocation}
          renderInput={(params) => (
            <TextField {...params} label="Location" variant="standard" />
          )}
        />
      </Stack>
        <br />
        <button className="button" onClick={handleSubmit} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
export default SignUp;
