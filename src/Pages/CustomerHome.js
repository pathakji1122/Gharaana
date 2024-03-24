import React from 'react';
import { Typography, Input, Button, Stack, Box } from '@mui/material';
import Intro from "../components/Intro";
import ac from "../images/ac.jpeg";
import fridge from "../images/Reffirdge.png";
import ServiceLists from '../components/ServiceLists';
import FooterG from "../components/FooterG";

const CustomerHome = () => {

    return (
        <>
            <Intro />
            <Typography
      variant="h6" // You can adjust the variant as needed, such as h6, subtitle1, etc.
      sx={{
        fontWeight: 'bold', // Making the font bold for emphasis
        fontSize: '24px', // Adjusting the font size to make it larger and more readable
        color: '#333', // Setting the color to a dark shade for better contrast
        textAlign: 'center',
        marginBottom:5, // Centering the text
        mt: 2, // Adding margin top for better spacing
      }}
    >
  Our Services
</Typography>
            <ServiceLists/>
            <FooterG/>
        </>
    )
}


export default CustomerHome;
