import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import { Typography } from '@mui/material';
import { Input } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
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
          localStorage.setItem('userStage', '1');
          window.alert(`Login Success`)
             
          onLogin(1);
         navigate("/");
         
        }
        else if (response.data.expert === true) {
          Cookies.set('authToken', response.data.token, { expires: 7 });
          localStorage.setItem('userStage', '2');
          window.alert(`Login Done`)
          onLogin(2);
          navigate("/") ;  
      
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

  return (
    <Container
    sx={{
      fontFamily: 'Segoe UI,sans-serif,system-ui',
      backgroundColor: 'rgb(255,255,255)',
      marginTop:5,
      width: '25%',
      maxWidth: '450px',
    }}>
    <Stack
      sx={{
        alignItems: 'center',
        width: '100%',
        padding: '10px',
        borderRadius: '6px',
      }}
      spacing="15px">
      <Typography
        variant="h5"
        sx={{
          color: 'rgb(18, 24, 31)',
          ' @media(max-width:991px)': { fontSize: '22px' },
          ' @media(max-width:479px)': { fontSize: '20px' },
        }}>
        Log in to Gharaana
      </Typography>
      <Stack sx={{ alignItems: 'center', width: '100%' }} spacing="10px">
        <Stack sx={{ alignItems: 'center', width: '100%' }} spacing="15px">
          <Stack
            sx={{
              border: '1px solid rgb(208, 215, 222)',
              color: 'rgb(59, 67, 76)',
              fontWeight: '600',
              fontSize: '15px',
              alignItems: 'center',
              width: '100%',
              padding: '5px 10px',
              borderRadius: '6px',
            }}
            spacing="0px"
            direction="row">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ic2NhbGFibGUtaWNvbiB0dy1pbmxpbmUgIXR3LWZpbGwtY3VycmVudCB0dy1hbGlnbi1iYXNlbGluZSIgc3R5bGU9Ii0taWNvbi13aWR0aDogMXJlbTsgLS1pY29uLWhlaWdodDogMXJlbTsiIHdpZHRoPSIyMCIgIGhlaWdodD0iMjAiID48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDMuNzJDMCAzLjA1LjUyIDIuNSAxLjE3IDIuNWgxMy42NmMuNjUgMCAxLjE3LjU1IDEuMTcgMS4yMnY4LjU2YTEuMiAxLjIgMCAwIDEtMS4xNyAxLjIySDEuMTdBMS4yIDEuMiAwIDAgMSAwIDEyLjI4VjMuNzJabTIuNjQuOWEuMzYuMzYgMCAwIDAtLjMtLjEyLjM5LjM5IDAgMCAwLS4zMS4yOWMtLjA1LjE1IDAgLjMzLjEuNDNsMi43NSAyLjgzLTIuNzQgMi43MmMtLjE2LjEzLS4xOS40My0uMDUuNi4xMy4xNy40LjE3LjU0IDBsMi44LTIuNzYgMS41NSAxLjZjLjU3LjYgMS40NS42IDIuMDMgMGwxLjU3LTEuNiAyLjc5IDIuNzdjLjE0LjE2LjQuMTYuNTQgMCAuMTQtLjE4LjExLS40OC0uMDUtLjYxbC0yLjc0LTIuNzIgMi43NC0yLjgzYS40Ni40NiAwIDAgMCAuMDItLjU4LjM1LjM1IDAgMCAwLS41Mi0uMDJsLTQuODUgNWEuNy43IDAgMCAxLTEuMDMgMGwtNC44NC01WiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjNzc4MDg5Ij48L3BhdGg+PC9zdmc+"
              style={{ minWidth: '18px' }}
              width="18px"
              height="18px"
            />
            <Input
              sx={{
                '& .MuiInput-input': { padding: '0' },
                fontFamily: 'Segoe UI,sans-serif,system-ui',
                color: 'rgb(59, 67, 76)',
                fontWeight: '600',
                width: '100%',
                border: 'none',
                marginBottom: '0px',
                fontSize: '15px',
                padding: '8px',
                borderRadius: '4px',
                outline: 'none',
                ' @media(max-width:991px)': {
                  fontSize: '14px',
                  padding: '7px',
                },
                ' @media(max-width:479px)': {
                  fontSize: '13px',
                  padding: '6px',
                },
              }}
              type="email"
              placeholder="Email"
              disableUnderline
              required
              label="Email"
              value={user.email}
              onChange={handleInputs}
              name="email"></Input>
          </Stack>
          <Stack
            sx={{
              border: '1px solid rgb(208, 215, 222)',
              color: 'rgb(59, 67, 76)',
              fontWeight: '600',
              fontSize: '15px',
              alignItems: 'center',
              width: '100%',
              padding: '5px 10px',
              borderRadius: '6px',
            }}
            spacing="0px"
            direction="row">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ic2NhbGFibGUtaWNvbiB0dy1pbmxpbmUgIXR3LWZpbGwtY3VycmVudCB0dy1hbGlnbi1iYXNlbGluZSIgc3R5bGU9Ii0taWNvbi13aWR0aDogMXJlbTsgLS1pY29uLWhlaWdodDogMXJlbTsiIHdpZHRoPSIyMCIgIGhlaWdodD0iMjAiID48cGF0aCBkPSJNNS4wNSA1LjR2LS4yOGMwLS44My4zLTEuNjIuODYtMi4yLjU1LS42IDEuMy0uOTIgMi4wOC0uOTJoLjFjMS42MyAwIDIuOTQgMS40IDIuOTQgMy4xMlY2LjNjLS4zOC0uMTUtLjg0LS4yLTEuMjYtLjE4di0xYzAtLjk4LS43NS0xLjc4LTEuNjctMS43OGgtLjExYy0uOTMgMC0xLjY4LjgtMS42OCAxLjc4di4yN2MwIC4zNC0uMjQuNjMtLjU2LjY2aC0uMDFhLjYuNiAwIDAgMS0uNDktLjE2LjY4LjY4IDAgMCAxLS4yLS41eiIgY2xhc3M9Imljb24tbG9ja2VkX3N2Z19faWNvbi1sb2NrZWQtdG9wIiBmaWxsPSIjNzc4MDg5Ij48L3BhdGg+PHBhdGggZD0iTTEyLjUgMTIuODhWOC4xYS42OS42OSAwIDAgMC0uNTMtLjY5bC0uMDYtLjAxYTE5LjggMTkuOCAwIDAgMC03LjgyIDBsLS4wNS4wMWEuNjkuNjkgMCAwIDAtLjU0LjY5djQuNzhjMCAuMzMuMjIuNjIuNTQuNjlsLjQuMDhhMTguMSAxOC4xIDAgMCAwIDcuMTIgMGwuNC0uMDhhLjY5LjY5IDAgMCAwIC41NC0uN3oiIGNsYXNzPSJpY29uLWxvY2tlZF9zdmdfX2ljb24tbG9ja2VkLWJvdHRvbSIgZmlsbD0iIzc3ODA4OSI+PC9wYXRoPjwvc3ZnPg=="
              style={{ minWidth: '18px' }}
              width="18px"
              height="18px"
            />
            <Input
              sx={{
                '& .MuiInput-input': { padding: '0' },
                fontFamily: 'Segoe UI,sans-serif,system-ui',
                color: 'rgb(59, 67, 76)',
                fontWeight: '600',
                width: '100%',
                border: 'none',
                marginBottom: '0px',
                fontSize: '15px',
                padding: '8px',
                borderRadius: '4px',
                outline: 'none',
                ' @media(max-width:991px)': {
                  fontSize: '14px',
                  padding: '7px',
                },
                ' @media(max-width:479px)': {
                  fontSize: '13px',
                  padding: '6px',
                },
              }}
              type="password"
              placeholder="Password"
              disableUnderline
              value={user.password}
              onChange={handleInputs}
              name="password"></Input>
          </Stack>
          
          <Button
            disableElevation
            variant="contained"
            sx={{
              '&:hover': { backgroundColor: '#9ca3af' },
              gap: '8px',
              color: 'rgb(18, 24, 31)',
              textTransform: 'none',
              fontFamily: 'Segoe UI,sans-serif,system-ui',
              backgroundColor: 'rgb(76,236,232)',
              border: '1px solid rgba(31, 35, 40, 0.15)',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              width: '100%',
              fontSize: '16px',
              padding: '7px 16px',
              whiteSpace: 'nowrap',
              borderRadius: '6px',
              fontWeight: '500',
              ' @media(max-width:991px)': { fontSize: '14px' },
              ' @media(max-width:479px)': { fontSize: '13px' },
            }}
            onClick={handleSubmit} type="submit">
            Log in
          </Button>
        </Stack>
        
      </Stack>
    </Stack>
  </Container>
  );



           

  





}

export default Login;











