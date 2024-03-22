import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutCart = () => {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");

  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:5000/checkout").then((res) => {
      // console.log(res);
      if (res.data.Status === "Success") {
        setAuth(true);
        setName(res.data.name);
      } else {
        setAuth(false);
        navigate("/login");
        // alert(setMessage(res.data.Message));
      }
    });
  }, []);
  return <div>CheckoutCartsdfasdfsd</div>;
};

export default CheckoutCart;
