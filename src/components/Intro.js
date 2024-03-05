import React from "react";
import { Typography, Paper, TextField, Autocomplete, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import bg from "../images/Gray Yellow Illustration Interior And Exterior Magnet (1).png";

const Intro = () => {
  const expertise = [{ label: 'Electrician' }];
  const theme = useTheme(); // Using theme to access breakpoints

  return (
    <>
      <div style={{ margin: '5%' }}>
        <div style={{ textAlign: 'center', marginBottom: '5%' }}>
          <Typography variant="h4" style={{ color: 'gold', fontFamily: 'Arial', fontSize: '5vw', margin: '0 5%' }}>
            Gharaana
          </Typography>
          <Typography variant="h6" style={{ marginBottom: '20px', fontSize: '3vw', fontFamily: 'Arial' }}>
            From Out to In: Where your every need finds its way home.
          </Typography>
        </div>
        <Paper elevation={20} style={{ borderRadius: '20px', overflow: 'hidden' }}>
          <img src={bg} alt="Background" style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }} />
        </Paper>
      </div>

      <div style={{ textAlign: 'center', margin: '5%', fontFamily: 'Times New Roman, Times, serif' }}>
        <div style={{ margin: '2% 0', fontSize: '4vw' }}>Why Choose Gharaana?</div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ margin: '5% 0', fontSize: '3.5vw' }}>Free, At Home Consultations</div>
          <div style={{ margin: '5% 0', fontSize: '3.5vw' }}>Reliable Professionals</div>
          <div style={{ margin: '5% 0', fontSize: '3.5vw' }}>24/7 Availability</div>
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '5%' }}>
        <div style={{ fontSize: '3.5vw' }}>
          We offer easy financing options to help you get the service you need without checking the rate.
        </div>
        <div style={{ fontSize: '3.5vw' }}>
          Our professionals are happy to come to your home and provide a consultation for free.
        </div>
        <div style={{ fontSize: '3.5vw' }}>
          Our professionals are licensed and insured to ensure the highest quality of service.
        </div>
        <div style={{ fontSize: '3.5vw' }}>
          Need a service provider outside of regular business hours? Gharaana is available to book 24/7.
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5%' }}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={expertise.map((option) => option.label)}
          style={{ width: '90%', maxWidth: '300px' }}
          PaperComponent={({ children }) => (
            <Paper elevation={3} style={{ marginTop: '8px', width: 'auto' }}>
              {children}
            </Paper>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Tell us about your need"
              variant="outlined"
            />
          )}
        />
        <div style={{ marginTop: '10px' }}>
          <SearchIcon style={{ cursor: 'pointer', fontSize: '6vw' }} />
        </div>
      </div>
    </>
  );
}

export default Intro;
