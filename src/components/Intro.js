import React from "react";
import { styled, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import bg from "../images/Gray Yellow Illustration Interior And Exterior Magnet (1).png";
const Intro =()=>{

    return(


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
        
        
        </>
    )
}
export default Intro;
