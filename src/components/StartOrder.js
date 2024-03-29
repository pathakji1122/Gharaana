import React from "react";
import { useState } from "react";
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
const StartOrder=(orderId)=>{
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);
    const handleClose = () => {
      navigate('/expertsaccepted');
      setOpen(false);
      window.location.reload();
    };

    const startorder = async (orderId) => {
       
        try {
          const authToken = Cookies.get("authToken");
          const response = await axios.post(
            "https://gharaanah.onrender.com/expert/startorder",
            orderId,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );
          setOpen(false);
          navigate('/');

         
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      };


    return(
        <>
<div style={{ pointerEvents: 'auto' }}>
      <Dialog open={open} PaperProps={{ sx: { minWidth: '300px', maxWidth: '80%', borderRadius: '20px' } }}>
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
              fontSize: '18px', // Increased font size for better visibility
            }}
          >
            Start Order
          </Typography>
          <Button onClick={() => startorder(orderId)} sx={{ mt: 2 }}> {/* Add margin top for better spacing */}
            Start
          </Button>
        </DialogContent>
      </Dialog>
    </div>
        
        </>
    )
}
export default StartOrder;