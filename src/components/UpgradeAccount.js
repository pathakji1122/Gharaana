import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const UpgradeAccount=()=>{
    const[premium,setPremium]=useState(false);
    useEffect(() => {
        // Perform API call here to check subscription status using the token
        // Replace 'yourTokenHere' with the actual token
        axios.get('http://your-api-url/check-subscription', {
          headers: {
            Authorization: `Bearer yourTokenHere`,
          },
        })
        .then(response => {
          // Assuming response.data contains subscription status (true/false)
          setPremium(response.data.isPremium);
        })
        .catch(error => {
          console.error('Error checking subscription:', error);
        });
      }, []);
    return(<>
    </>
    )
}
export default UpgradeAccount;