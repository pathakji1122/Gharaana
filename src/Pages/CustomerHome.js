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
  variant="p"
  sx={{
    marginLeft: 80,
    fontWeight: '600',
    fontSize: '34px', // Adjusted font size
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
