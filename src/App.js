import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import About  from "./components/About";
import JoinGharaana from "./components/JoinGharaana";
import {Route,Switch} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import { useEffect } from "react";
import Offer from "./components/Offer";
import { Router } from "react-router-dom/cjs/react-router-dom.min";
import Customer from "./components/Customer";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Expert from "./components/Expert";
import MyOrders from "./components/MyOrders";
import Logout from "./components/Logout";
import UpgradeAccount from "./components/UpgradeAccount";
import Cookies from "js-cookie";

import { useHistory } from "react-router-dom";
import Clients from "./components/Clients";
import PlaceOrder from "./components/PlaceOrder";
function App() {
  const[userStage,setUserStage]=useState(0);
  
    
 
  useEffect(() => {
    const storedUserStage = localStorage.getItem('userStage');
    
    if (storedUserStage) {
      setUserStage(parseInt(storedUserStage));
    }
    
   
    
  }, []);
  const handleLogin = (newUserStage,token) => {
    
    setUserStage(newUserStage);
  };
  const handleLogout = () => {
    // Clear token from cookies and local storage
    Cookies.remove('authToken');
    localStorage.setItem('userStage', '0');

    // Set userStage to 0
    setUserStage(0);
  };
  return (
   <>
  


       
  {userStage === 0 && <Navbar />}
      {userStage === 1 && <Customer />}
       {userStage !== 0 && userStage !== 1 && <Expert/>}    
  
   <Switch>
                    <Route path="/register" component={JoinGharaana} />
                    <Route path="/login">
                    <Login onLogin={handleLogin} />
                    </Route>
                    
                    <Route path="/signup" component={SignUp} />
                  
          
           <Route path="/home" component={Home}/>
           <Route path="/offer" component={Offer}/>
            <Route path="/myorders" component={MyOrders} />
              <Route path="/placeorder" component={PlaceOrder}/>
         
          
      
               
      <Route path="/logout" exact>
        <Logout handleLogout={handleLogout} />
      </Route>
                    <Route path="/about" component={About} />
                    <Route path="/premium" component={UpgradeAccount} />
                     <Route path="/clients" component={Clients}/>
                    <Route path="/" component={Home}/>

          
               
                    
                    
                 </Switch>
                
   </>
   
   
  );
}

export default App;
