import React, { useState } from "react";
import { styled, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import Stack from '@mui/system/Stack';
import bg from '../components/images/Gray Yellow Illustration Interior And Exterior Magnet (1).png';
import services from '../components/images/Blue and Yellow Modern Home Appliances Instagram Post.png';
import coachingclass from '../components/images/Professional.png';
import ac from '../components/images/ac.jpeg';
import fridge  from '../components/images/Reffirdge.png';
import yogaclass from '../components/images/Yoga Classes Instagram Story.png';
import science from '../components/images/Blue Orange Modern Study Instagram Post.png';
import PlaceOrder from "./PlaceOrder";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import FormControl from "@mui/material/FormControl";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#262B32' : '#fff',
  padding: theme.spacing(0),
  textAlign: 'center',
  borderRadius: 0,
  color: 'brown',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '350px',
  margin: '-2px',
}));

const imagesData = [
  {
    expertise: "AC",
    price: "100",
    imageUrl: ac,
  },
  {
    expertise: "Fridge",
    price: "120",
    imageUrl: fridge,
  },
  {
    expertise: "Yoga Class",
    price: "50",
    imageUrl: yogaclass,
  },
  {
    expertise: "Science Class",
    price: "80",
    imageUrl: science,
  },
  // Add more images as needed
];

const Home = () => {
  const [showACAndFridge, setShowACAndFridge] = useState(false);
  const [showYogaAndScience, setShowYogaAndScience] = useState(false);
  const [showPlaceOrder, setShowPlaceOrder] = useState(false);

  const handleServicesClick = () => {
    setShowACAndFridge(false);
    setShowYogaAndScience(true);
    
    // Do not show PlaceOrder for "Services" click
    setShowPlaceOrder(false);
  };

  const handleCoachingClassClick = () => {
    setShowYogaAndScience(false);
    setShowACAndFridge(true);
    
    // Do not show PlaceOrder for "Coaching Class" click
    setShowPlaceOrder(false);
  };

  const handleYogaClick = () => {
    // Show PlaceOrder only for "Yoga Class" click
    setShowPlaceOrder(true);
  };

  const handlePlaceOrderClose = () => {
    setShowPlaceOrder(false);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '20px' }}>
        <div style={{ marginRight: '20px', fontWeight: 'bold' }}>
          <Typography variant="h2" component="div" style={{ fontWeight: 'bold', marginBottom: '20px', color: 'gold', fontFamily: 'Arial' ,fontSize:'100px'}}>
            Gharaana
          </Typography>
          <Typography variant="h4" component="div" style={{ fontWeight: 'bold', marginBottom: '20px',fontSize:'25px' }}>
                        From Out to In:
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'center', marginBottom: '20px' }}>
            Where your every need finds its way home.
          </Typography>
        </div>
        <Paper elevation={20}>
          <img src={bg} alt="Background" style={{
            width: '85%',
            maxHeight: '600px',
            objectFit: 'cover',
            borderRadius: '20px',
          }} />
        </Paper>
      </div>

      <div style={{ color: 'brown', display: 'flex', justifyContent: 'space-around', alignItems: 'center', fontSize: '18px', fontFamily: 'Times New Roman, Times, serif' }}>
        <div style={{ fontSize: '24px', fontFamily: 'Times New Roman, Times, serif' }}>Why Choose
          <div style={{ fontSize: '24px', fontFamily: 'Times New Roman, Times, serif' }}> Gharaana?</div>
        </div>
        <div style={{ fontSize: '24px', fontFamily: 'Times New Roman, Times, serif' }}>Free, At Home
          <div style={{ fontSize: '24px', fontFamily: 'Times New Roman, Times, serif' }}>Consultations</div>
        </div>
        <div style={{ fontSize: '24px', fontFamily: 'Times New Roman, Times, serif' }}>Reliable
          <div style={{ fontSize: '24px', fontFamily: 'Times New Roman, Times, serif' }}>Professionals</div>
        </div>
        <div style={{ fontSize: '24px', fontFamily: 'Times New Roman, Times, serif' }}>24/7 Availability</div>
      </div>

      <div style={{ color: 'black', marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
        <div>We offer easy financing options
          <div>
            to help you get the
            <div> service you need without
              <div> checking the rate.</div>
            </div>
          </div>
        </div>
        <div>Our professionals
          <div> are happy to come to your
            <div> home and provide a consultation for free.</div>
          </div>
        </div>
        <div>Our professionals are
          <div> licensed and insured to ensure
            <div> the highest quality of service.</div>
          </div>
        </div>
        <div>Need a service provider
          <div> outside of regular
            <div> business hours? Gharaana is
              <div>available to book 24/7.</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{fontSize:"100px"}}>
        Our Services
      </div>
      <div style={{ color: 'brown', marginRight: '1000px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', fontSize: '18px', fontFamily: 'Times New Roman, Times, serif' }}>
        <div>
          <img
            src={services}
            alt='Services'
            style={{ width: '250px', height: '150px', cursor: 'pointer' }}
            onClick={handleServicesClick}
          />
        </div>
      </div>

      <div style={{ color: 'brown', marginRight: '1000px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', fontSize: '18px', fontFamily: 'Times New Roman, Times, serif' }}>
        <div>
          <img
            src={coachingclass}
            alt='Coaching Class'
            style={{ width: '250px', height: '150px', cursor: 'pointer' }}
            onClick={handleCoachingClassClick}
          />
        </div>
      </div>

      <List style={{ width: '250px', height: '300px', overflowY: 'scroll', position: 'absolute', right: '100px' }}>
        {showACAndFridge && (
          <>
            <ListItem>
              <ListItemText primary="" />
              <img src={ac} alt='AC' style={{ width: '100%', marginBottom: '10px' }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fridge" />
              <img src={fridge} alt='Fridge' style={{ width: '100%', marginBottom: '10px' }} />
            </ListItem>
          </>
        )}
        {showYogaAndScience && (
          <>
            <ListItem>
              <ListItemText primary="" />
              <img src={yogaclass} alt='Yoga Class' style={{ width: '100%', marginBottom: '10px' }} variant="outlined" onClick={handleClickOpen} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Science Class" />
              <img src={science} alt='Science Class' style={{ width: '100%', marginBottom: '10px' }} />
            </ListItem>
          </>
        )}
      </List>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
         <DialogTitle>Order</DialogTitle>
         <DialogContent>
          <DialogContentText>
            Place Your Order
          </DialogContentText>
          <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            required
            id="placedForDate"
            label="Date"
            type="date"
           
          
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            required
            id="placedForTime"
            label="Time"
            type="time"
           
          />
        </FormControl>

            </DialogContent>
            <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
        </Dialog>
     
    
    </>
  )
}

export default Home;
