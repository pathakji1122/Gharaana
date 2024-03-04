import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import UserNavbar from "./components/UserNavbar";
import CustomerNavbar from "./components/CustomerNavbar";
import ExpertNavbar from "./components/ExpertNavbar";
import UserHome from "./Pages/UserHome";
import CustomerHome from "./Pages/CustomerHome";
import JoinasExpert from "./Pages/JoinasExpert";
import About from "./Pages/About";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import PlaceOrder from "./Pages/PlaceOrder";
import Offer from "./components/Offer";
import Logout from "./Pages/Logout";
import ExpertHome from "./Pages/ExpertHome";
import ExpertC from "./Pages/ExpertC";
function App() {
  const [userStage, setUserStage] = useState(0);
  useEffect(() => {
    const storedUserStage = localStorage.getItem('userStage');
    if (storedUserStage) {
      setUserStage(parseInt(storedUserStage));
    }
  }, []);

  const handleLogin = (newUserStage, token) => {
    setUserStage(newUserStage);
  };

  return (
    <>
      {userStage === 0 && <UserNavbar />}
      {userStage === 1 && <CustomerNavbar />}
      {userStage !== 0 && userStage !== 1 && <ExpertNavbar />}

      <Routes>
      <Route
          path="/"
          element={
            userStage === 0 ? <UserHome /> :
            userStage === 1 ? <CustomerHome /> :
            userStage === 2 ? <ExpertHome /> : null
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<JoinasExpert />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/logout" element={<Logout setUserStage={setUserStage} />} />
        <Route path="/offers" element={<Offer />} />
        <Route path="/expertorders" element={<ExpertC />} />
      </Routes>
    </>
  );
}

export default App;
