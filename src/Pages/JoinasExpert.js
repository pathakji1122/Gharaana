import React from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { Box, Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { useRef } from "react";
const JoinasExpert = () => {
  const [value, setValue] = React.useState(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [registrationError, setRegistrationError] = React.useState(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const locations = [
  
    "BANGALORE",
  ,
    // Add more locations as needed
  ];
  const expertise = [
      "AC_REPAIRING"
    // Add more locations as needed
  ];
  const [selectedLocation, setSelectedLocation] = useState(null);
const [selectedExpertise, setSelectedExpertise] = useState([]);

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
    setLoading(true);
    setRegistrationError(null);

    try {
      const response = await axios.post("https://gharaanah.onrender.com/expert/signup", expert);

      if (response.data.accountCreated === true) {
        console.log("Data sent successfully:", response.data);
        window.alert(`Welcome to Gharaana: ${expert.expertName}`);
        setExpert({
          expertName: "",
          email: "",
          phoneNo: "",
          password: "",
          location: " ",
          expertise: [],
        });
        const locationInput = document.querySelector('#location input');
      const expertiseInput = document.querySelector('#expertise input');
      
      locationInput.value = '';
      expertiseInput.value = '';

      // Dispatch blur event to trigger Autocomplete clearing
      locationInput.dispatchEvent(new Event('blur'));
      expertiseInput.dispatchEvent(new Event('blur'));
      } else if (response.data.accountCreated === false) {
        setRegistrationError(response.data.response);
      }
    } catch (error) {
      console.error("Error sending data:", error);
      setRegistrationError("An error occurred during registration. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Card
      sx={{
        backgroundColor: 'inherit',
        width: '100%',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '10px',
        alignItems: 'center',
        border: 'none',
        maxWidth: '450px',
      }}>
      <Typography variant="h2" sx={{ fontFamily: 'system-ui' }}>
      Become expert for @ Gharaana
    </Typography>
    <Stack sx={{ alignItems: 'center', width: '100%' }} spacing="20px">
    <Stack
          sx={{
            alignItems: 'flex-start',
            width: '100%',
            fontFamily: 'system-ui',
          }}
          spacing=" 5px">
          <InputLabel
            sx={{ color: '#0d2036', fontSize: '14px', fontWeight: '600' }}>
            Full Name
          </InputLabel>
          <Stack
            sx={{
              borderRadius: '0.25rem',
              alignItems: 'center',
              border: '1px solid rgb(207,210,217)',
              width: '100%',
              paddingLeft: '10px',
              columnGap: '3px',
              cursor: 'pointer',
            }}
            spacing="0px"
            direction="row">
            <img
              src="https://purecodestorageprod.blob.core.windows.net/images-svg/Signup_d191e46b-4085-447e-8a41-4770706ed697.svg"
              width="16px"
              height="16px"
            />
            <Input
              sx={{
                '& .MuiInput-input': { padding: '0' },
                border: 'none',
                width: '94%',
                fontSize: '14px',
                padding: '8px',
                borderRadius: '4px',
                outline: 'none',
              }}
              type="text"
              placeholder="Enter Full name"
              label="Name"
                  value={expert.expertName}
                  onChange={handleInputs}
                  name="expertName"
              disableUnderline></Input>
          </Stack>
        </Stack>
        <Stack
          sx={{
            alignItems: 'flex-start',
            width: '100%',
            fontFamily: 'system-ui',
          }}
          spacing="10px">
          <InputLabel
            sx={{ color: '#0d2036', fontSize: '14px', fontWeight: '600' }}>
            Email
          </InputLabel>
          <Stack
            sx={{
              borderRadius: '0.25rem',
              alignItems: 'center',
              border: '1px solid rgb(207,210,217)',
              width: '100%',
              paddingLeft: '10px',
              columnGap: '3px',
              cursor: 'pointer',
            }}
            spacing="0px"
            direction="row">
            <img
              src="https://purecodestorageprod.blob.core.windows.net/images-svg/Signup_955d3808-a1d8-46e8-8d7c-acd500810739.svg"
              width="16px"
              height="16px"
            />
            <Input
              sx={{
                '& .MuiInput-input': { padding: '0' },
                border: 'none',
                width: '94%',
                fontSize: '14px',
                padding: '8px',
                borderRadius: '4px',
                outline: 'none',
              }}
              type="text"
              placeholder="Enter email"
              required
              label="Email"
              value={expert.email}
              onChange={handleInputs}
              name="email"
              disableUnderline></Input>
          </Stack>
        </Stack>
        <Stack
          sx={{
            alignItems: 'flex-start',
            width: '100%',
            fontFamily: 'system-ui',
          }}
          spacing="10px">
          <InputLabel
            sx={{ color: '#0d2036', fontSize: '14px', fontWeight: '600' }}>
            Phoneno
          </InputLabel>
          <Stack
            sx={{
              borderRadius: '0.25rem',
              alignItems: 'center',
              border: '1px solid rgb(207,210,217)',
              width: '100%',
              paddingLeft: '10px',
              columnGap: '3px',
              cursor: 'pointer',
            }}
            spacing="0px"
            direction="row">
            <img
              src="https://purecodestorageprod.blob.core.windows.net/images-svg/Signup_955d3808-a1d8-46e8-8d7c-acd500810739.svg"
              width="16px"
              height="16px"
            />
            <Input
              sx={{
                '& .MuiInput-input': { padding: '0' },
                border: 'none',
                width: '94%',
                fontSize: '14px',
                padding: '8px',
                borderRadius: '4px',
                outline: 'none',
              }}
              type="text"
              placeholder="Enter Phoneno"
              required
              label="PhoneNo"
              value={expert.phoneNo}
              onChange={handleInputs}
              name="phoneNo"
              disableUnderline></Input>
          </Stack>
        </Stack>
        <Stack
          sx={{
            alignItems: 'flex-start',
            width: '100%',
            fontFamily: 'system-ui',
          }}
          spacing="10px">
          <InputLabel
            sx={{ color: '#0d2036', fontSize: '14px', fontWeight: '600' }}>
            Choose Password
          </InputLabel>
          <Stack
            sx={{
              borderRadius: '0.25rem',
              alignItems: 'center',
              border: '1px solid rgb(207,210,217)',
              width: '100%',
              paddingLeft: '10px',
              columnGap: '3px',
              cursor: 'pointer',
            }}
            spacing="0px"
            direction="row">
            <img
              src="https://purecodestorageprod.blob.core.windows.net/images-svg/Signup_29b147af-6be2-4f1b-a9e8-3a7441f8adca.svg"
              width="16px"
              height="16px"
            />
            <Input
              sx={{
                '& .MuiInput-input': { padding: '0' },
                border: 'none',
                width: '94%',
                fontSize: '14px',
                padding: '8px',
                borderRadius: '4px',
                outline: 'none',
              }}
              type="text"
              placeholder="Enter password"
              required
              value={expert.password}
                  onChange={handleInputs}
                  name="password"
              disableUnderline></Input>
          </Stack>
        </Stack>
        <Stack
          sx={{
            alignItems: 'flex-start',
            width: '100%',
            fontFamily: 'system-ui',
          }}
          spacing="10px">
          <InputLabel
            sx={{ color: '#0d2036', fontSize: '14px', fontWeight: '600' }}>
            Choose Location
          </InputLabel>
          <Stack
            sx={{
              borderRadius: '0.25rem',
              alignItems: 'center',
              border: '1px solid rgb(207,210,217)',
              width: '100%',
              paddingLeft: '10px',
              columnGap: '3px',
              cursor: 'pointer',
            }}
            spacing="0px"
            direction="row">
            <img
              src="https://purecodestorageprod.blob.core.windows.net/images-svg/Signup_29b147af-6be2-4f1b-a9e8-3a7441f8adca.svg"
              width="16px"
              height="16px"
            />
            <Autocomplete
   
    freeSolo
    id="free-solo-2-demo"
    options={locations}
    sx={{ width: '100%', flex: 1 }}
    onChange={(event, newValue) => {
      setExpert((prevExpert) => ({
        ...prevExpert,
        location: newValue,
      }));
      setSelectedLocation(newValue);
    }}
    renderInput={(params) => (
      <TextField
        {...params}
        label=""
        variant="standard"
      />
    )}
   
  />
          </Stack>
        </Stack>
        <Stack
          sx={{
            alignItems: 'flex-start',
            width: '100%',
            fontFamily: 'system-ui',
          }}
          spacing="10px">
          <InputLabel
            sx={{ color: '#0d2036', fontSize: '14px', fontWeight: '600' }}>
            Enter Expertise
          </InputLabel>
          <Stack
            sx={{
              borderRadius: '0.25rem',
              alignItems: 'center',
              border: '1px solid rgb(207,210,217)',
              width: '100%',
              paddingLeft: '10px',
              columnGap: '3px',
              cursor: 'pointer',
            }}
            spacing="0px"
            direction="row">
            <img
              src="https://purecodestorageprod.blob.core.windows.net/images-svg/Signup_29b147af-6be2-4f1b-a9e8-3a7441f8adca.svg"
              width="16px"
              height="16px"
            />
        <Autocomplete
   
    freeSolo
    id="free-solo-2-demo"
    sx={{ width: '100%', flex: 1 }}
    options={expertise}
    multiple
    onChange={(event, newValue) => {
      setExpert((prevExpert) => ({
        ...prevExpert,
        expertise: newValue,
      }));
      setSelectedExpertise(newValue);
    }}
    renderInput={(params) => (
      <TextField
        {...params}
        label=""
        variant="standard"
      />
    )}
   
  />
            
          </Stack>
        </Stack>      
                  <br></br>
                  <button className="button" onClick={handleSubmit} type="submit" disabled={loading}>
                    {loading ? "Registering..." : "Register"}
                  </button>
      
                  {registrationError && (
                    <p style={{ color: "red" }}>{registrationError}</p>
                  )}
                  </Stack>
                   </Card>
                
              
                
        </>
      );
      };
      
      export default JoinasExpert;