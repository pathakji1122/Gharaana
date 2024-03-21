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
import { Typography ,Button} from "@mui/material";
import { useRef } from "react";
const JoinasExpert = () => {
 ;
  const [loading, setLoading] = React.useState(false);
  const [registrationError, setRegistrationError] = React.useState(null);
  const locationInputRef = useRef(null); 
 

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
const expertiseInputRef = useRef(null); 
  const [expert, setExpert] = useState({
    expertName: "",
    email: "",
    phoneNo: "",
    password: "",
    location: "",
    expertise: [],
  });




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
      if (response.status >= 200 && response.status < 300) {
        // Successful response
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
          });  setSelectedLocation(null); 
          setSelectedExpertise([]);
          expertiseInputRef.current.value = "";
        } else if (response.data.accountCreated === false) {
          setSelectedLocation(null); 
          setSelectedExpertise([]);
          setRegistrationError(response.data.response);
          locationInputRef.current.value = "";
          expertiseInputRef.current.value = "";
        }
      } else {
        // Error response
        throw new Error("Received error response from the server");
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
   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card sx={{
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
      <Typography variant="h6" sx={{ fontFamily: 'system-ui' }}>
      Become expert @ Gharaana
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
    disablePortal
  id="combo-box-demo"
    options={locations}
    sx={{ width: '100%', flex: 1 }}
    value={selectedLocation} // Use selectedLocation state instead of expert.location
        onChange={(event, newValue) => setSelectedLocation(newValue)}
    
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
     isablePortal
     id="combo-box-demo"
    
    options={expertise}
    multiple
    sx={{ width: '100%', flex: 1 }}
    value={selectedExpertise} // Use selectedLocation state instead of expert.location
        onChange={(event, newValue) => setSelectedExpertise(newValue)}
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
                  {loading ? "Registering..." : "Register"}     
        </Button>
                  
      
                  {registrationError && (
                    <p style={{ color: "red" }}>{registrationError}</p>
                  )}
                  </Stack>
                   </Card>
                
              
               </div> 
        </>
      );
      };
      
      export default JoinasExpert;