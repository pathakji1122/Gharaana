import React from 'react';
import { useNavigate } from 'react-router-dom';
import Intro from "../components/Intro";
import ac from "../images/ac.jpeg";
import fridge from "../images/Reffirdge.png";

const CustomerHome = () => {
    const navigate = useNavigate();
    const data = { name: 'AC_REPAIRING', price: '1000' };

    const handleClick = (service) => {
        navigate('/placeorder', { state: { expertise: service.name, price: service.price } });
    }

    const responsiveStyle = {
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        alignItems: 'center', // Center items horizontally
        gap: '20px', // Add space between items
        marginBottom: '20px', // Add some space at the bottom
    };

    const imageStyle = {
        maxWidth: '100%', // Ensure the image is not wider than the screen
        height: 'auto', // Keep the aspect ratio of the image
    };

    const headingStyle = {
        fontSize: '2rem', // Responsive font size
        textAlign: 'center', // Center the heading
        margin: '20px 0', // Add some space around the heading
    };

    return (
        <>
            <Intro />
            <div style={headingStyle}>
                Our Services
            </div>
            <div style={responsiveStyle}>
                <img src={ac} alt="AC" style={imageStyle} />
                <button onClick={() => handleClick(data)}>Order AC</button>
            </div>
        </>
    )
}

export default CustomerHome;
