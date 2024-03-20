import React from "react";
import { Typography, Paper, TextField, Autocomplete, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import bg from "../images/Gray Yellow Illustration Interior And Exterior Magnet (1).png";

const Intro = () => {
  const expertise = [{ label: 'Electrician' }];
  const theme = useTheme(); // Using theme to access breakpoints

  return (
    <>
       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ flex: 1, textAlign: "center", marginRight: "5%" }}>
        <Typography variant="h4" style={{ color: "gold", fontFamily: "Arial", fontSize: "5vw", margin: "0 5%" }}>
          Gharaana
        </Typography>
        <Typography variant="h6" style={{ marginBottom: "20px", fontSize: "3vw", fontFamily: "Arial" }}>
          From Out to In: Where your every need finds its way home.
        </Typography>
      </div>
      <Paper elevation={20} style={{ borderRadius: "20px", overflow: "hidden" }}>
        <img src={bg} alt="Background" style={{ width: "600px", height: "auto", objectFit: "cover" }} />
      </Paper>
    </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5%' }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={expertise.map((option) => option.label)}
        style={{
          width: '90%',
          maxWidth: '800px',
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
                <SearchIcon style={{ cursor: 'pointer', fontSize: '2vw', marginLeft: '-35px' }} />
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
