import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';  
import { Card, CardActionArea, Typography, IconButton } from '@mui/material';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import appliancesrepair from '../images/appliance-repair (1).png';
import home from "../images/home.png";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import appliancesinstall from"../images/outdoor-unit.png";
import fitnesstrack from "../images/supplementary-food.png";
import rennovate from "../images/renovation.png";
import eventplanner from "../images/event-planner.png";
import movers from "../images/mover-truck.png";
import education from "../images/training.png"
const Service = () => {
    return (
       <>
       
       <Box sx={{ width: '100%', backgroundColor: '#baf1f0',marginTop:"25px",marginBottom:"88px" }}>
           <div style={{ marginTop: "100px" }}>
               <Typography variant="h6" align="center" fontWeight="bold" sx={{ marginTop: "20px", color: "#333", margin: "20px" }}>
                   Our Services
               </Typography>
           </div>
       <Grid container spacing={2}  direction="row">
       <Grid  item xs={6} sm={6} md={3}>
            <Card style={{ maxWidth: "128px", borderRadius: "10px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)", margin: "auto", marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CardActionArea style={{ paddingBottom: "1px",width:"174px",paddingLeft:"1px" }}>
                    <img
                        src={appliancesinstall}
                        alt="Appliances Repair"
                        style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto", display: "block", objectFit: "cover", maxWidth: "80%", maxHeight: "100px" }}
                    />
                   <Typography variant="h6" component="div" style={{ fontSize: "0.67rem", color: "#333", textAlign: "center", fontWeight: "bold", marginTop: "10px", lineHeight: "0.8" }}>
    Appliances Installation 
    
</Typography>
<div style={{ display: 'flex', alignItems: 'center',marginLeft:"20px",marginTop:"2px" }}>
    <Typography variant="h6" style={{ fontSize: "0.67rem", color: "#333", textAlign: "center", fontWeight: "bold", lineHeight: "1", marginRight: '5px' }}>
        & Repair
    </Typography>

    <IconButton style={{ height: '24px' }}>
    <ArrowRightAltSharpIcon />
</IconButton>

</div>    
                </CardActionArea>
            </Card>
           </Grid>
           <Grid  item xs={6} sm={6} md={3}>
            <Card style={{ maxWidth: "128px", borderRadius: "10px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)", margin: "auto", marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CardActionArea style={{ paddingBottom: "1px",width:"174px",paddingLeft:"1px" }}>
                    <img
                        src={home}
                        alt=""
                        style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto", display: "block", objectFit: "cover", maxWidth: "80%", maxHeight: "100px" }}
                    />
                   <Typography variant="h6" component="div" style={{ fontSize: "0.67rem", color: "#333", textAlign: "center", fontWeight: "bold", marginTop: "10px", lineHeight: "0.8" }}>
    Home Cleaning
</Typography>
<div style={{ display: 'flex', alignItems: 'center',marginLeft:"20px",marginTop:"2px" }}>
    <Typography variant="h6" style={{ fontSize: "0.67rem", color: "#333", textAlign: "center", fontWeight: "bold", lineHeight: "1", marginRight: '5px' }}>
        & Others
    </Typography>

    <IconButton style={{ height: '24px' }}>
    <ArrowRightAltSharpIcon />
</IconButton>

</div>            
                </CardActionArea>
            </Card>
            </Grid>
            
            <Grid  item xs={6} sm={6} md={3}>
            <Card style={{ maxWidth: "125px", borderRadius: "10px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)", margin: "auto", marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CardActionArea style={{ paddingBottom: "1px",width:"174px",paddingLeft:"1px" }}>
                    <img
                        src={fitnesstrack}
                        alt="Appliances Repair"
                        style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto", display: "block", objectFit: "cover", maxWidth: "80%", maxHeight: "100px" }}
                    />
                   <Typography variant="h6" component="div" style={{ fontSize: "0.67rem", color: "#333", textAlign: "center", fontWeight: "bold", marginTop: "10px", lineHeight: "0.8" }}>
    Health
</Typography>
<div style={{ display: 'flex', alignItems: 'center',marginLeft:"20px",marginTop:"2px" }}>
    <Typography variant="h6" style={{ fontSize: "0.67rem", color: "#333", textAlign: "center", fontWeight: "bold", lineHeight: "1", marginRight: '5px' }}>
    & Fitness
    
    </Typography>

    <IconButton style={{ height: '24px' }}>
    <ArrowRightAltSharpIcon />
</IconButton>

</div>


                   
                    
                </CardActionArea>
            </Card>
            </Grid>
            <Grid  item xs={6} sm={6} md={3}>
            <Card style={{ maxWidth: "125px", borderRadius: "10px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)", margin: "auto", marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CardActionArea style={{ paddingBottom: "1px",width:"174px",paddingLeft:"1px" }}>
                    <img
                        src={rennovate}
                        alt="Appliances Repair"
                        style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto", display: "block", objectFit: "cover", maxWidth: "80%", maxHeight: "100px" }}
                    />
                   <Typography variant="h6" component="div" style={{ fontSize: "0.67rem", color: "#333", textAlign: "center", fontWeight: "bold", marginTop: "10px", lineHeight: "0.8" }}>
    House Repair
</Typography>
<div style={{ display: 'flex', alignItems: 'center',marginLeft:"20px",marginTop:"2px" }}>
    <Typography variant="h6" style={{ fontSize: "0.67rem", color: "#333", textAlign: "center", fontWeight: "bold", lineHeight: "1", marginRight: '5px' }}>
        & Others
    </Typography>

    <IconButton style={{ height: '24px' }}>
    <ArrowRightAltSharpIcon />
</IconButton>

</div>


                   
                    
                </CardActionArea>
            </Card>
            </Grid>
            <Grid  item xs={6} sm={6} md={3}>
            <Card style={{ maxWidth: "125px", borderRadius: "10px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)", margin: "auto", marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CardActionArea style={{ paddingBottom: "1px",width:"174px",paddingLeft:"1px" }}>
                    <img
                        src={eventplanner}
                        alt="Appliances Repair"
                        style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto", display: "block", objectFit: "cover", maxWidth: "80%", maxHeight: "100px" }}
                    />
                   <Typography variant="h6" component="div" style={{ fontSize: "0.67rem", color: "#333", textAlign: "center", fontWeight: "bold", marginTop: "10px", lineHeight: "0.8" }}>
    Event Planning &
    
</Typography>
<div style={{ display: 'flex', alignItems: 'center',marginLeft:"20px",marginTop:"2px" }}>
    <Typography variant="h6" style={{ fontSize: "0.67rem", color: "#333", textAlign: "center", fontWeight: "bold", lineHeight: "1", marginRight: '5px' }}>
        Managing
    </Typography>

    <IconButton style={{ height: '24px' }}>
    <ArrowRightAltSharpIcon />
</IconButton>

</div>


                   
                    
                </CardActionArea>
            </Card>
            </Grid>
            <Grid  item xs={6} sm={6} md={3}>
            <Card style={{ maxWidth: "125px", borderRadius: "10px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)", margin: "auto", marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CardActionArea style={{ paddingBottom: "1px",width:"174px",paddingLeft:"1px" }}>
                    <img
                        src={movers}
                        alt="Appliances Repair"
                        style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto", display: "block", objectFit: "cover", maxWidth: "80%", maxHeight: "100px" }}
                    />
                   <Typography variant="h6" component="div" style={{ fontSize: "0.67rem", color: "#333", textAlign: "center", fontWeight: "bold", marginTop: "10px", lineHeight: "0.8" }}>
    Packers
    
</Typography>
<div style={{ display: 'flex', alignItems: 'center',marginLeft:"20px",marginTop:"2px" }}>
    <Typography variant="h6" style={{ fontSize: "0.67rem", color: "#333", textAlign: "center", fontWeight: "bold", lineHeight: "1", marginRight: '5px' }}>
        & Movers
    </Typography>

    <IconButton style={{ height: '24px' }}>
    <ArrowRightAltSharpIcon />
</IconButton>

</div>


                   
                    
                </CardActionArea>
            </Card>
            </Grid>
            <Grid  item xs={6} sm={6} md={3}>
            <Card style={{ maxWidth: "125px", borderRadius: "10px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)", margin: "auto", marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CardActionArea style={{ paddingBottom: "1px",width:"174px",paddingLeft:"1px" }}>
                    <img
                        src={education}
                        alt="Appliances Repair"
                        style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto", display: "block", objectFit: "cover", maxWidth: "80%", maxHeight: "100px" }}
                    />
                   <Typography variant="h6" component="div" style={{ fontSize: "0.67rem", color: "#333", textAlign: "center", fontWeight: "bold", marginTop: "10px", lineHeight: "0.8" }}>
    Education &
    
</Typography>
<div style={{ display: 'flex', alignItems: 'center',marginLeft:"20px",marginTop:"2px" }}>
    <Typography variant="h6" style={{ fontSize: "0.67rem", color: "#333", textAlign: "center", fontWeight: "bold", lineHeight: "1", marginRight: '5px' }}>
        Skills 
    </Typography>

    <IconButton style={{ height: '24px' }}>
    <ArrowRightAltSharpIcon />
</IconButton>

</div>


                   
                    
                </CardActionArea>
            </Card>
            </Grid>
            </Grid>
            </Box>         
           </>
    );
}

export default Service;
