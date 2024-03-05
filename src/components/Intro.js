import React from "react";
import { Typography, Paper, TextField, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import bg from "../images/Gray Yellow Illustration Interior And Exterior Magnet (1).png";

const Intro = () => {
  const expertise = [
    { label: 'Electrician' },
    // Add more expertise options here as needed
  ];

  return (
    <>
      <div style={{ margin: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Typography variant="h2" style={{ color: 'gold', fontFamily: 'Arial', fontSize: '40px' }}>
            Gharaana
          </Typography>
          <Typography variant="h4" style={{ marginBottom: '20px', fontSize: '25px' }}>
            From Out to In: Where your every need finds its way home.
          </Typography>
        </div>
        <Paper elevation={20} style={{ width: '100%', borderRadius: '20px' }}>
          <img src={bg} alt="Background" style={{
            width: '100%',
            objectFit: 'cover',
            borderRadius: '20px',
          }} />
        </Paper>
      </div>

      <div style={{ color: 'brown', textAlign: 'center', fontSize: '18px', fontFamily: 'Times New Roman, Times, serif', margin: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
  <div style={{ margin: '0 10px', fontSize: '24px', fontFamily: 'Times New Roman, Times, serif' }}>Why Choose Gharaana?</div>
  <div style={{ margin: '0 10px', fontSize: '24px', fontFamily: 'Times New Roman, Times, serif' }}>Free, At Home Consultations</div>
  <div style={{ margin: '0 10px', fontSize: '24px', fontFamily: 'Times New Roman, Times, serif' }}>Reliable Professionals</div>
  <div style={{ margin: '0 10px', fontSize: '24px', fontFamily: 'Times New Roman, Times, serif' }}>24/7 Availability</div>
</div>


      <div style={{ color: 'black', textAlign: 'center', margin: '20px' }}>
        <div>
          We offer easy financing options to help you get the service you need without checking the rate.
        </div>
        <div>
          Our professionals are happy to come to your home and provide a consultation for free.
        </div>
        <div>
          Our professionals are licensed and insured to ensure the highest quality of service.
        </div>
        <div>
          Need a service provider outside of regular business hours? Gharaana is available to book 24/7.
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={expertise.map((option) => option.label)}
          style={{ width: '100%', maxWidth: '300px' }}
          PaperComponent={({ children }) => (
            <Paper elevation={3} style={{ marginTop: '8px', width: 'calc(100% - 20px)', marginLeft: '10px' }}>
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
          <SearchIcon style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </>
  );
}

export default Intro;
