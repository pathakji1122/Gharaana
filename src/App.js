import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import About  from "./components/About";
import JoinGharaana from "./components/JoinGharaana";
import {Route,Switch} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Offer from "./components/Offer";
import { Router } from "react-router-dom/cjs/react-router-dom.min";
import Customer from "./components/Customer";
import PlaceOrder from "./components/PlaceOrder";


function App() {
  const[userStage,setUserStage]=useState(1);
  const updateUserStage=(newStage)=>{
    setUserStage(newStage);
  }
 
  return (
   <>
  


       
  {userStage === 0 && <Navbar />}
      {userStage === 1 && <Customer/>}
      {userStage !== 0 && userStage !== 1 && <h1>hiii</h1>}      
  
   <Switch>
                    <Route path="/register" component={JoinGharaana} />
                    <Route path="/login" component={Login} />
                     <Route path="/offer" component={Offer}/>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/order" component={PlaceOrder}/>
                    <Route path="/about" component={About} />
                    <Route path="/" component={Home}/>
                    
                    
                 </Switch>
                
   </>
   
   
  );
}

export default App;
