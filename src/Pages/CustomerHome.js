import React from 'react';
import { useNavigate } from 'react-router-dom';
import Intro from "../components/Intro";
import ac from "../images/ac.jpeg";
import fridge from "../images/Reffirdge.png";
const CustomerHome = () => {
    const navigate = useNavigate();
    const data = { name: 'AC_REPAIRING', price: '1000' };
    const dataf = { name: 'f', price: '1200' };

    const handleClick = (service) => {
        navigate('/placeorder', { state: { expertise: service.name, price: service.price } });
    }
    

    return (
        <>
            <Intro />
            <div style={{ fontSize: "100px" }}>
                Our Services
            </div>
            <img src={ac} alt="AC" />
            <button onClick={() => handleClick(data)}>Order AC</button>

            <img src={fridge} alt="Refrigerator" />
            <button onClick={() => handleClick(dataf)}>Order Fridge</button>
        </>
    )
}

export default CustomerHome;
