import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Typography, Grid, Card, CardContent } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const ExpertProfile=()=>{
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const authToken = Cookies.get("authToken");
            const response = await axios.get(
                "https://gharaanah.onrender.com/expert/profile",
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                }
            );
            setProfile(response.data.customer);
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };

    return(
        <>
         <div style={{marginTop:10}}>
        <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12} sm={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            My Profile
                        </Typography>
                        {profile && (
                            <>
                                <Typography variant="subtitle1">
                                    Name: {profile.name}
                                </Typography>
                                <Typography variant="subtitle1">
                                    Email: {profile.email}
                                </Typography>
                                <Typography variant="subtitle1">
                                    Phone Number: {profile.phoneNo}
                                </Typography>
                                <Typography variant="subtitle1">
                                    Location: {profile.location}
                                </Typography>
                            </>
                        )}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        </div>

        </>
    )

}
export default ExpertProfile;