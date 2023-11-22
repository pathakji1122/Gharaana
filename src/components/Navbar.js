import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
    return (


        <>

            <div className="Nav">
                <NavLink id="links" to="/">Home</NavLink>

                <NavLink id="links" to="/about" >Aboutus </NavLink>

                <NavLink id="links" to="/register"> Join@Expert</NavLink>
                <NavLink id="links" to="/signup"> SignUp</NavLink>
                <NavLink id="links" to="/login"> Login</NavLink>
            </div>

        </>
    );
}
export default Navbar;