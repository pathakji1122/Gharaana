import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import { Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { useEffect } from "react";

const Otp=(orderId)=>{
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        
        setOpen(false);
        navigate('/');
         // Navigate to the home page
      };

    const[otp,setOtp]=useState(false);
    useEffect(() => {
        const acceptOrderUrl = async () => {
          const order={
            orderId:orderId
          }
          try {
            const authToken = Cookies.get("authToken");
            const response = await axios.post(
              'https://gharaanah.onrender.com/customer/getotp',
              orderId,
              {
                headers: {
                  Authorization: `Bearer ${authToken}`,
                  'Content-Type': 'application/json', // Make sure to set Content-Type for JSON payload
                },
              }
            );            
            setOpen(true);
            setOtp(response.data.otp);
          } catch (error) {
            console.error('Error accepting order:', error);
            // Optionally, handle errors (e.g., displaying an error message to the user)
          }
        };
        acceptOrderUrl();    
      },[orderId, navigate]);
    return(
        <>
        <div style={{ pointerEvents: 'auto' }}>
        
        <Dialog open={open} PaperProps={{  }}>
        <DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
         <Typography
            variant="body2"
            sx={{
              textAlign: 'left',
              fontWeight: '600',
              fontSize: '15px', // Adjusted font size
            }}
          >
            
          Otp is :{otp}
          </Typography>
          
        </DialogContent>
      </Dialog>
          
      </div>
        
        </>
    )
}
export default Otp;