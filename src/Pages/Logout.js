import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import { Dialog,DialogContent,DialogTitle } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import CloseIcon from "@mui/icons-material/Close";
const Logout = ({ onLogout }) => {

  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    navigate('/');
    setOpen(false);
  };

  const handleLogout = () => {
    try {
      // Delete the authentication token
      Cookies.remove('authToken');

      // Update the user stage to 0
      onLogout();

      // Navigate back to the home route
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
      window.alert("Try Again");
      // Handle the error or display a message to the user
    }
  };

  return (
    <div>
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
        
          <Button onClick={handleLogout} sx={{ mt: 2 }}> {/* Add margin top for better spacing */}
            Log Out
          </Button>
        </DialogContent>
      </Dialog>
   </div>
    </div>
  );
};

export default Logout;
