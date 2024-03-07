import React from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import { Typography } from '@mui/material';
import Button from "@mui/material/Button";

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
          location: "",
          expertise: [],
        });
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
            <Typography variant="h5" sx={{ fontFamily: 'system-ui' }}>
        Become an Expert
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
            sx={{ color: '#0d2036', fontSize: '14px', fontWeight: '600' }}
            required
            label="Name"
            value={expert.expertName}
            onChange={handleInputs}
            name="expertName" >
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
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTQzNy4wMiAzMzAuOThjLTI3Ljg4My0yNy44ODItNjEuMDcxLTQ4LjUyMy05Ny4yODEtNjEuMDE4QzM3OC41MjEgMjQzLjI1MSA0MDQgMTk4LjU0OCA0MDQgMTQ4IDQwNCA2Ni4zOTMgMzM3LjYwNyAwIDI1NiAwUzEwOCA2Ni4zOTMgMTA4IDE0OGMwIDUwLjU0OCAyNS40NzkgOTUuMjUxIDY0LjI2MiAxMjEuOTYyLTM2LjIxIDEyLjQ5NS02OS4zOTggMzMuMTM2LTk3LjI4MSA2MS4wMThDMjYuNjI5IDM3OS4zMzMgMCA0NDMuNjIgMCA1MTJoNDBjMC0xMTkuMTAzIDk2Ljg5Ny0yMTYgMjE2LTIxNnMyMTYgOTYuODk3IDIxNiAyMTZoNDBjMC02OC4zOC0yNi42MjktMTMyLjY2Ny03NC45OC0xODEuMDJ6TTI1NiAyNTZjLTU5LjU1MSAwLTEwOC00OC40NDgtMTA4LTEwOFMxOTYuNDQ5IDQwIDI1NiA0MHMxMDggNDguNDQ4IDEwOCAxMDgtNDguNDQ5IDEwOC0xMDggMTA4eiIgZmlsbD0iIzdhN2E3YSIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
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
            sx={{ color: '#0d2036', fontSize: '14px', fontWeight: '600' }}
            required
            label="Email"
            value={expert.email}
            onChange={handleInputs}
            name="email">
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
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTQ2NyA3Nkg0NUMyMC4xMzcgNzYgMCA5Ni4yNjIgMCAxMjF2MjcwYzAgMjQuODg1IDIwLjI4NSA0NSA0NSA0NWg0MjJjMjQuNjU1IDAgNDUtMjAuMDMgNDUtNDVWMTIxYzAtMjQuNjk0LTIwLjA1Ny00NS00NS00NXptLTYuMzAyIDMwTDI4Ny44MiAyNzcuOTY3Yy04LjUgOC41LTE5LjggMTMuMTgtMzEuODIgMTMuMThzLTIzLjMyLTQuNjgxLTMxLjg0OC0xMy4yMDhMNTEuMzAyIDEwNmg0MDkuMzk2ek0zMCAzODQuODk0VjEyNy4xMjVMMTU5LjYzOCAyNTYuMDggMzAgMzg0Ljg5NHpNNTEuMzIxIDQwNmwxMjkuNTg3LTEyOC43NjMgMjIuMDU5IDIxLjk0M2MxNC4xNjYgMTQuMTY2IDMzIDIxLjk2NyA1My4wMzMgMjEuOTY3czM4Ljg2Ny03LjgwMSA1My4wMDUtMjEuOTM5bDIyLjA4Ny0yMS45NzFMNDYwLjY3OSA0MDZINTEuMzIxek00ODIgMzg0Ljg5NCAzNTIuMzYyIDI1Ni4wOCA0ODIgMTI3LjEyNXYyNTcuNzY5eiIgZmlsbD0iIzdhN2E3YSIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
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
            sx={{ color: '#0d2036', fontSize: '14px', fontWeight: '600' }}
            required
            label="Email"
            value={expert.phoneNo}
            onChange={handleInputs}
            name="phoneNo">
            Phone no
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
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTQ2NyA3Nkg0NUMyMC4xMzcgNzYgMCA5Ni4yNjIgMCAxMjF2MjcwYzAgMjQuODg1IDIwLjI4NSA0NSA0NSA0NWg0MjJjMjQuNjU1IDAgNDUtMjAuMDMgNDUtNDVWMTIxYzAtMjQuNjk0LTIwLjA1Ny00NS00NS00NXptLTYuMzAyIDMwTDI4Ny44MiAyNzcuOTY3Yy04LjUgOC41LTE5LjggMTMuMTgtMzEuODIgMTMuMThzLTIzLjMyLTQuNjgxLTMxLjg0OC0xMy4yMDhMNTEuMzAyIDEwNmg0MDkuMzk2ek0zMCAzODQuODk0VjEyNy4xMjVMMTU5LjYzOCAyNTYuMDggMzAgMzg0Ljg5NHpNNTEuMzIxIDQwNmwxMjkuNTg3LTEyOC43NjMgMjIuMDU5IDIxLjk0M2MxNC4xNjYgMTQuMTY2IDMzIDIxLjk2NyA1My4wMzMgMjEuOTY3czM4Ljg2Ny03LjgwMSA1My4wMDUtMjEuOTM5bDIyLjA4Ny0yMS45NzFMNDYwLjY3OSA0MDZINTEuMzIxek00ODIgMzg0Ljg5NCAzNTIuMzYyIDI1Ni4wOCA0ODIgMTI3LjEyNXYyNTcuNzY5eiIgZmlsbD0iIzdhN2E3YSIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
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
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIGRhdGEtbmFtZT0iMTItTG9jayI+PHBhdGggZD0iTTIzIDEyVjguNzFBNi43MiA2LjcyIDAgMCAwIDE2LjI5IDJoLS41OEE2LjcyIDYuNzIgMCAwIDAgOSA4LjcxVjEyYTMgMyAwIDAgMC0zIDN2OS4zYTUuNzEgNS43MSAwIDAgMCA1LjcgNS43aDguNmE1LjcxIDUuNzEgMCAwIDAgNS43LTUuN1YxNWEzIDMgMCAwIDAtMy0zWk0xMSA4LjcxQTQuNzEgNC43MSAwIDAgMSAxNS43MSA0aC41OEE0LjcxIDQuNzEgMCAwIDEgMjEgOC43MVYxMkgxMVpNMjQgMjQuM2EzLjcgMy43IDAgMCAxLTMuNyAzLjdoLTguNkEzLjcgMy43IDAgMCAxIDggMjQuM1YxNWExIDEgMCAwIDEgMS0xaDE0YTEgMSAwIDAgMSAxIDFaIiBmaWxsPSIjN2E3YTdhIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0iTTE3IDIwLjcyVjI0YTEgMSAwIDAgMS0yIDB2LTMuMjhhMiAyIDAgMSAxIDIgMFoiIGZpbGw9IiM3YTdhN2EiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
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
            Choose your Expertise
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
    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIGRhdGEtbmFtZT0iMTItTG9jayI+PHBhdGggZD0iTTIzIDEyVjguNzFBNi43MiA2LjcyIDAgMCAwIDE2LjI5IDJoLS41OEE2LjcyIDYuNzIgMCAwIDAgOSA4LjcxVjEyYTMgMyAwIDAgMC0zIDN2OS4zYTUuNzEgNS43MSAwIDAgMCA1LjcgNS43aDguNmE1LjcxIDUuNzEgMCAwIDAgNS43LTUuN1YxNWEzIDMgMCAwIDAtMy0zWk0xMSA4LjcxQTQuNzEgNC43MSAwIDAgMSAxNS43MSA0aC41OEE0LjcxIDQuNzEgMCAwIDEgMjEgOC43MVYxMkgxMVpNMjQgMjQuM2EzLjcgMy43IDAgMCAxLTMuNyAzLjdoLTguNkEzLjcgMy43IDAgMCAxIDggMjQuM1YxNWExIDEgMCAwIDEgMS0xaDE0YTEgMSAwIDAgMSAxIDFaIiBmaWxsPSIjN2E3YTdhIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0iTTE3IDIwLjcyVjI0YTEgMSAwIDAgMS0yIDB2LTMuMjhhMiAyIDAgMSAxIDIgMFoiIGZpbGw9IiM3YTdhN2EiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
    width="16px"
    height="16px"
  />
  <Autocomplete
    id="expertise"
    options={expertise}
    sx={{ width: '100%', flex: 1 }} // Ensure it expands fully
    onChange={(event, newValue) => {
      setExpert((prevExpert) => ({
        ...prevExpert,
        expertise: newValue,
      }));
    }}
    renderInput={(params) => (
      <TextField
        {...params}
        label=""
        variant="standard"
        InputProps={{ ...params.InputProps, disableUnderline: true }} 
        sx={{ width: '100%' }} 
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
            Enter Location
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
    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIGRhdGEtbmFtZT0iMTItTG9jayI+PHBhdGggZD0iTTIzIDEyVjguNzFBNi43MiA2LjcyIDAgMCAwIDE2LjI5IDJoLS41OEE2LjcyIDYuNzIgMCAwIDAgOSA4LjcxVjEyYTMgMyAwIDAgMC0zIDN2OS4zYTUuNzEgNS43MSAwIDAgMCA1LjcgNS43aDguNmE1LjcxIDUuNzEgMCAwIDAgNS43LTUuN1YxNWEzIDMgMCAwIDAtMy0zWk0xMSA4LjcxQTQuNzEgNC43MSAwIDAgMSAxNS43MSA0aC41OEE0LjcxIDQuNzEgMCAwIDEgMjEgOC43MVYxMkgxMVpNMjQgMjQuM2EzLjcgMy43IDAgMCAxLTMuNyAzLjdoLTguNkEzLjcgMy43IDAgMCAxIDggMjQuM1YxNWExIDEgMCAwIDEgMS0xaDE0YTEgMSAwIDAgMSAxIDFaIiBmaWxsPSIjN2E3YTdhIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0iTTE3IDIwLjcyVjI0YTEgMSAwIDAgMS0yIDB2LTMuMjhhMiAyIDAgMSAxIDIgMFoiIGZpbGw9IiM3YTdhN2EiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
    width="16px"
    height="16px"
  />
  <Autocomplete
    id="location"
    options={locations}
    sx={{ width: '100%', flex: 1 }} // Ensure it expands fully
    onChange={(event, newValue) => {
      setExpert((prevExpert) => ({
        ...prevExpert,
        location: newValue,
      }));
    }}
    renderInput={(params) => (
      <TextField
        {...params}
        label=""
        variant="standard"
        InputProps={{ ...params.InputProps, disableUnderline: true }} 
        sx={{ width: '100%' }} 
      />
    )}
  />
</Stack>
      </Stack>   
        </Stack>
        <Button
          disableElevation
          variant="contained"
          sx={{
            '&:hover': { backgroundColor: '#9ca3af' },
            gap: '8px',
            color: 'rgb(255, 255, 255)',
            textTransform: 'none',
            fontFamily: 'system-ui',
            backgroundColor: 'rgb(123, 104, 238)',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            fontSize: '14px',
          }}
          onClick={handleSubmit} type="submit">
                      Join
        </Button>

          
            <Stack spacing={1} sx={{ width: 300 }}>
  
</Stack>

<Stack spacing={1} sx={{ width: 300 }}>
  
</Stack>
 
      
            
            </Card>   
        </>
      );
      };
      
      export default JoinasExpert;