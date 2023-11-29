import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";
const UpgradeAccount = () => {
  const [premium, setPremium] = useState(false);
 
  useEffect(() => {
    premiumStatus();
  }, []);  
  const premiumStatus = async () => {
    try {
      const authToken = Cookies.get("authToken");
      const response = await axios.get('http://localhost:8081/customer/premium', {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });

      setPremium(response.data.premium);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  return (<>
   (premium===true && <div>
    You Are premium User
    </div>)
    (premium===false )


  </>
  )
}
export default UpgradeAccount;