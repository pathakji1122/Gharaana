import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton } from '@mui/material';
import appplincesrepair from '../images/appliance-repair (1).png';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import {useRef} from 'react';
import home from '../images/home.png'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import fitness from '../images/fitness.png';
import advisors from "../images/quality-service.png";
import "bootstrap/dist/css/bootstrap.min.css";

import { Box, Container } from '@mui/material';

const Service=()=>{
     






    return(


      <>
   
        

        <Card sx={{
            maxWidth: 174,
            borderRadius: 4,
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.5)',
            margin: 'auto',
            marginTop: 20,
            
            display: 'flex',
            justifyContent: 'center', // Center the content horizontally
            alignItems: 'center', // Center the content vertically
        }}>
            <CardActionArea  sx={{ marginLeft:"0px"}}>
                <img
                    src={appplincesrepair} // Assuming 'appplincesrepair' is your image URL
                    alt="AC Repairing"
                    style={{
                        marginTop:20,
                        marginLeft: 'auto', // Center the image horizontally
                        marginRight: 'auto',
                        display: 'block',
                        objectFit: 'cover',
                        maxWidth: '80%', // Limit image size to its container
                        maxHeight: '100px', // Maximum height set to 200px
                    }}
                />
                <CardContent  sx={{ paddingBottom: '1px' ,marginLeft:"0px"}}>
                <Typography gutterBottom variant="h6" component="div" style={{ fontSize: '0.8rem', color: '#333', textAlign: 'left', fontWeight: 'bold', marginBottom: '1px' }}>
                    Appliances Installation
                    <Typography gutterBottom variant="h6" component="div" style={{ fontSize: '0.8rem', color: '#333', fontWeight: 'bold', textAlign: 'center', marginLeft:"20px" }}>
                    & Repair
                    <IconButton color="blue" sx={{ fontSize: 30, textAlign: 'center',}}>
                    <ArrowRightAltSharpIcon />
                </IconButton>
                </Typography>
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{
            maxWidth: 174,
            borderRadius: 4,
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.5)',
            margin: 'auto',
            marginTop: 20,
            display: 'flex',
            justifyContent: 'center', // Center the content horizontally
            alignItems: 'center', // Center the content vertically
        }}>
            <CardActionArea>
                <img
                    src={home} // Assuming 'appplincesrepair' is your image URL
                    alt="AC Repairing"
                    style={{
                        marginTop:20,
                        marginLeft: 'auto', // Center the image horizontally
                        marginRight: 'auto',
                        display: 'block',
                        objectFit: 'cover',
                        maxWidth: '80%', // Limit image size to its container
                        maxHeight: '100px', // Maximum height set to 200px
                    }}
                />
                <CardContent  sx={{ paddingBottom: '1px' }}>
                <Typography gutterBottom variant="h6" component="div" style={{ fontSize: '0.8rem', color: '#333', textAlign: 'center', fontWeight: 'bold',  }}>
                    House Cleaning
                    <Typography gutterBottom variant="h6" component="div" style={{ fontSize: '0.8rem', color: '#333', fontWeight: 'bold', textAlign: 'center', marginLeft:'10px' }}>
                    & Maintainance
                    <IconButton color="blue" sx={{ fontSize: 30, textAlign: 'center',}}>
                    <ArrowRightAltSharpIcon />
                </IconButton>
                </Typography>
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{
            maxWidth: 174,
            borderRadius: 4,
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.5)',
            margin: 'auto',
            marginTop: 20,
        
            display: 'flex',
            justifyContent: 'center', // Center the content horizontally
            alignItems: 'center', // Center the content vertically
        }}>
            <CardActionArea>
                <img
                    src={fitness} // Assuming 'appplincesrepair' is your image URL
                    alt="AC Repairing"
                    style={{
                        marginTop:20,
                        marginLeft: 'auto', // Center the image horizontally
                        marginRight: 'auto',
                        display: 'block',
                        objectFit: 'cover',
                        maxWidth: '80%', // Limit image size to its container
                        maxHeight: '100px', // Maximum height set to 200px
                    }}
                />
                <CardContent  sx={{ paddingBottom: '1px' }}>
                <Typography gutterBottom variant="h6" component="div" style={{ fontSize: '0.8rem', color: '#333', textAlign: 'center', fontWeight: 'bold',  }}>
                    Health
                    <Typography gutterBottom variant="h6" component="div" style={{ fontSize: '0.8rem', color: '#333', fontWeight: 'bold', textAlign: 'center', marginLeft:'10px' }}>
                    & Fitness
                    <IconButton color="blue" sx={{ fontSize: 30, textAlign: 'center',}}>
                    <ArrowRightAltSharpIcon />
                </IconButton>
                </Typography>
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
       
        <Card sx={{
            maxWidth: 174,
            borderRadius: 4,
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.5)',
            margin: 'auto',
            marginTop: 20,
        
            display: 'flex',
            justifyContent: 'center', // Center the content horizontally
            alignItems: 'center', // Center the content vertically
        }}>
            <CardActionArea>
                <img
                    src={advisors} // Assuming 'appplincesrepair' is your image URL
                    alt="AC Repairing"
                    style={{
                        marginTop:20,
                        marginLeft: 'auto', // Center the image horizontally
                        marginRight: 'auto',
                        display: 'block',
                        objectFit: 'cover',
                        maxWidth: '80%', // Limit image size to its container
                        maxHeight: '100px', // Maximum height set to 200px
                    }}
                />
                <CardContent  sx={{ paddingBottom: '1px' }}>
                <Typography gutterBottom variant="h6" component="div" style={{ fontSize: '0.8rem', color: '#333', textAlign: 'center', fontWeight: 'bold',  }}>
                    Advisors
                    <Typography gutterBottom variant="h6" component="div" style={{ fontSize: '0.8rem', color: '#333', fontWeight: 'bold', textAlign: 'center', marginLeft:'10px' }}>
                    & Others
                    <IconButton color="blue" sx={{ fontSize: 30, textAlign: 'center',}}>
                    <ArrowRightAltSharpIcon />
                </IconButton>
                </Typography>
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
       
    
   
        </>
    )
}
export default Service;