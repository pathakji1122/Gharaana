import React from "react";
import ac from "../images/ac.jpeg";
import { Typography, Input, Button, Stack, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const ServiceLists = () => {
    const data = { name: 'AC_REPAIRING', price: '1000' };
    const navigate = useNavigate();
    const handleClick = (service) => {
        navigate('/placeorder', { state: { expertise: service.name, price: service.price } });
    }
   
  return (
    <>
      <Stack
        sx={{
          alignItems: 'center',
          width: '80%',
          borderRadius: '16px',
          maxWidth: '300px', // Adjusted max width
          background: 'rgba(247, 246, 246, 0.51)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(5.4px)',
          webkitBackdropFilter: 'blur(5.4px)',
          border: '1px solid rgba(247, 246, 246, 0.79)',
          padding: '10px', // Reduced padding
        }}
        spacing="0px"
      >
        <img
          src={ac}
          style={{
            borderTopLeftRadius: '16px', // Adjusted border radius
            borderTopRightRadius: '16px', // Adjusted border radius
            objectFit: 'cover',
            width: '100%',
          }}
          height="150px" // Reduced height
          width="100%"
        />
        <Stack
          sx={{
            alignItems: 'left',
            width: '100%',
            padding: '10px', // Reduced padding
          }}
          spacing="10px" // Reduced spacing
        >
          <Typography
            variant="p"
            sx={{
              textAlign: 'left',
              fontWeight: '600',
              fontSize: '14px', // Adjusted font size
            }}
          >
            Ac Repairing
          </Typography>
          <Typography
  variant="p"
  sx={{
    textAlign: 'left',
    fontWeight: '600',
    fontSize: '14px', // Adjusted font size
  }}
>
  &#8377;299
</Typography>

          <Button
            disableElevation
            variant="contained"
            sx={{
              '&:hover': { backgroundColor: '' },
              gap: '8px',
              color: 'white',
              textTransform: 'none',
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              fontWeight: '600',
              width: '100%',
              padding: '8px 12px', // Adjusted padding
              fontSize: '14px', // Adjusted font size
              backgroundColor: 'primary',
            }}
            onClick={() => handleClick(data)}
          >
            Order
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default ServiceLists;
