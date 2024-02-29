import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import axios from "axios";

const PlaceOrder = (props) => {
  const data = props.location?.state;
  const expertise = data?.state?.expertise;
const price = data?.state?.price;
  const [orderData, setOrderData] = useState({
    expertise: expertise,
    price: price,
    placedForDate: "",
    placedForTime: "",
  });

  const handleOrderDataChange = (event, field) => {
    const { value } = event.target;
    setOrderData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://gharaanah.onrender.com/customer/order', orderData);
      if (response.data.status === true) {
        window.alert("Order Successful");
      } else {
        window.alert("Try again");
      }
    } catch (error) {
      console.error('Error sending data:', error);
      window.alert("Try again");
    }
  };

  return (
    <>
  
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Place Order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide details for your order.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="placedForDate"
            label="Placed For Date"
            type="date"
            fullWidth
            variant="standard"
            onChange={(e) => handleOrderDataChange(e, "placedForDate")}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="placedForTime"
            label="Placed For Time"
            type="time"
            fullWidth
            variant="standard"
            onChange={(e) => handleOrderDataChange(e, "placedForTime")}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Place Order</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default PlaceOrder;
