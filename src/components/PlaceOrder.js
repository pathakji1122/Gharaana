import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const PlaceOrder = () => {
  const [order, setOrder] = useState({
    expertise: "",
    price: "",
    placedForDate: "",
    placedForTime: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;

    if (name === "expertise") {
      // Convert expertise to uppercase if the input name is "expertise"
      setOrder((prevData) => ({
        ...prevData,
        [name]: value.toUpperCase(),
      }));
    } else {
      setOrder((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authToken = Cookies.get("authToken");
      const response = await axios.post(
        "https://gharaanah.onrender.com/customer/placeorder",
        {
          ...order,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.data.status === true) {
        console.log("Data sent successfully:", response.data);
        setOrder({
          expertise: "",
          price: "",
          placedForDate: "",
          placedForTime: "",
        });
        window.alert(`Order Successful`);
      } else {
        setOrder({
          expertise: "",
          price: "",
          placedForDate: "",
          placedForTime: "",
        });
        window.alert(`Order Failed. Please try again later.`);
      }
    } catch (error) {
      console.error("Error sending data:", error);
      setOrder({
        expertise: "",
        price: "",
        placedForDate: "",
        placedForTime: "",
      });
      window.alert(`Error sending order. Please try again later.`);
    }
  };

  const expertiseOptions = [
    "Plumber",
    "Cleaning Services",
    "Electrician",
    "Yoga Instructor",
    "Financial Advisor",
  ];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={
              <InputAdornment position="start">$</InputAdornment>
            }
            label="Amount"
            value={order.price}
            onChange={handleInputs}
            name="price"
          />
        </FormControl>

        <Stack spacing={1} sx={{ width: 300 }}>
          <Autocomplete
            id="expertise"
            options={expertiseOptions}
            value={order.expertise}
            onChange={(event, newValue) => {
              const selectedExpertise = newValue ? newValue.toUpperCase() : "";
              setOrder((prevData) => ({
                ...prevData,
                expertise: selectedExpertise,
              }));
            }}
            renderInput={(params) => (
              <TextField {...params} label="Expertise" variant="standard" />
            )}
          />
        </Stack>

        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            required
            id="placedForDate"
            label="Date"
            type="date"
            value={order.placedForDate}
            onChange={handleInputs}
            name="placedForDate"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            required
            id="placedForTime"
            label="Time"
            type="time"
            value={order.placedForTime}
            onChange={handleInputs}
            name="placedForTime"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>

        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Place Order
        </Button>
      </form>
    </>
  );
};

export default PlaceOrder;
