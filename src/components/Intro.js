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
      <div style={{ color: 'brown', display: 'flex', justifyContent: 'space-around', alignItems: 'center', fontSize: '18px', fontFamily: 'Times New Roman, Times, serif' }}>
        <div style={{ fontSize: '24px', fontFamily: 'Times New Roman, Times, serif' }}>Why Choose
          <div style={{ fontSize: '24px', fontFamily: 'Times New Roman, Times, serif' }}> Gharaana?</div>
        </div>
        <div style={{ fontSize: '24px', fontFamily: 'Times New Roman, Times, serif' }}>Free, At Home
          <div style={{ fontSize: '24px', fontFamily: 'Times New Roman, Times, serif' }}>Consultations</div>
        </div>
        <div style={{ fontSize: '24px', fontFamily: 'Times New Roman, Times, serif' }}>Reliable
          <div style={{ fontSize: '24px', fontFamily: 'Times New Roman, Times, serif' }}>Professionals</div>
        </div>
        <div style={{ fontSize: '24px', fontFamily: 'Times New Roman, Times, serif' }}>24/7 Availability</div>
      </div>

      <div style={{ color: 'black', marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
        <div>We offer easy financing options
          <div>
            to help you get the
            <div> service you need without
              <div> checking the rate.</div>
            </div>
          </div>
        </div>
        <div>Our professionals
          <div> are happy to come to your
            <div> home and provide a consultation for free.</div>
          </div>
        </div>
        <div>Our professionals are
          <div> licensed and insured to ensure
            <div> the highest quality of service.</div>
          </div>
        </div>
        <div>Need a service provider
          <div> outside of regular
            <div> business hours? Gharaana is
              <div>available to book 24/7.</div>
            </div>
          </div>
        </div>
      </div>

      

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5%' }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={expertise.map((option) => option.label)}
        style={{
          width: '90%',
          maxWidth: '2000px',
          borderRadius: '12px', // Adjust the border radius
        }}
        PaperComponent={({ children }) => (
          <Paper elevation={3} style={{ marginTop: '8px', width: 'auto', borderRadius: '12px' }}>
            {children}
          </Paper>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Tell us about your need"
            variant="outlined"
            style={{
              borderRadius: '12px', // Adjust the border radius
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
            InputProps={{
              style: { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
              endAdornment: (
                <SearchIcon style={{ cursor: 'pointer', fontSize: '6vw', marginLeft: '-35px' }} />
              ),
            }}
          />
        )}
      />
    </div>
    </>
  );
}

export default Intro;
