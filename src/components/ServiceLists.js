import React from "react";
import ac from "../images/ac.jpeg";
import { Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ServiceLists = () => {
    const data = { name: 'AC_REPAIRING', price: '399' };
    const navigate = useNavigate();
    const handleClick = (service) => {
        navigate('/placeorder', { state: { expertise: service.name, price: service.price } });
    }
   
    return (
        <Stack
            direction="column"
            alignItems="center"
            width="100%"
            maxWidth="300px"
            borderRadius="16px"
            boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
            backdropFilter="blur(5.4px)"
            webkitBackdropFilter="blur(5.4px)"
            border="1px solid rgba(247, 246, 246, 0.79)"
            padding="10px"
            marginBottom="20px" // Adjusted margin for spacing between items
        >
            <img
                src={ac}
                alt="AC Repairing"
                style={{
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px',
                    objectFit: 'cover',
                    width: '100%',
                    height: 'auto', // Set height to auto for responsiveness
                }}
            />
            <Stack
                direction="column"
                alignItems="left"
                width="100%"
                padding="10px"
                spacing="8px"
            >
                <Typography
                    variant="body1"
                    fontWeight="600"
                >
                    Ac Repairing
                </Typography>
                <Typography
                    variant="body1"
                    fontWeight="600"
                >
                    ₹399
                </Typography>
                <Button
                    disableElevation
                    variant="contained"
                    onClick={() => handleClick(data)}
                    sx={{
                        textTransform: 'none',
                        width: '100%',
                    }}
                >
                    Order
                </Button>
            </Stack>
        </Stack>
    );
};

export default ServiceLists;
