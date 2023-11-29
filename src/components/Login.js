import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Login = ({ onLogin }) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState(

    {
      email: "",
      password: "",
    }
  );

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('user/login', user);
      if (response.data.status === true) {
        if (response.data.expert === false) {
          Cookies.set('authToken', response.data.token, { expires: 7 });

          window.alert(`Login Success`)

          onLogin(1);
          localStorage.setItem('userStage', '1');
          history.push("/")

        }
        else if (response.data.expert === true) {
          Cookies.set('authToken', response.data.token, { expires: 7 });
          window.alert(`Login Done`)
          onLogin(2);
          localStorage.setItem('userStage', '2');
          history.push("/")
        }

      }
      else if (response.data.status === false) {
        window.alert(`${response.data.response} `);
      }

    } catch (error) {
      console.error('Error sending data:', error);
      window.alert("try again")

      history.push("/")
      setUser({
        email: "",
        password: "",
      });
      // Handle error, like showing an error message
    }
  };

  return <>



    <div className="container">
      <h5 className="topics">
        Login
      </h5>
      <form onSubmit={handleSubmit} className="htmlForums">

        <div>
          <label className="labelform" htmlFor="email">Email</label>
          <input className="inputform" type="text" autoComplete="off"
            value={user.email}
            onChange={handleInputs}
            name="email" id="email" />

        </div>
        <div>
          <label className="labelform" htmlFor="password">Password</label>
          <input className="inputform" type="text" autoComplete="off"
            value={user.password}
            onChange={handleInputs}
            name="password" id="password" />

        </div>










        <br>
        </br>
        <button className="button" onClick={handleSubmit} type="submit">Login</button>

      </form>

    </div>

  </>





}

export default Login;