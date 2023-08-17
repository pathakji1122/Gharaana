import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import About  from "./components/About";
import JoinGharaana from "./components/JoinGharaana";
import {Route,Switch} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Signup";

function App() {
  return (
   <>
  
   <Navbar/>
   <Switch>
                    <Route path="/register" component={JoinGharaana} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/about" component={About} />
                    <Route path="/" component={Home}/>
                    
                    
                 </Switch>
                
   </>
   
   
  );
}

export default App;
