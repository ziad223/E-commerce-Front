import "./Navbar.css";
import logo from "../../imgs/logo.png";
import { AiOutlineShopping } from "react-icons/ai";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {BiPhoneCall} from 'react-icons/bi';

const Navbar = () => {
  const productsCart = useSelector((state) => state.cart.products);

  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      if (minute < 10) {
        minute = `0${minute}`;
      }
      if (second < 10) {
        second = `0${second}`;
      }
      if (hour < 10) {
        hour = `0${hour}`;
      }
    
      document.querySelector(
        ".middle-nav"
      ).innerHTML = `${hour} : ${minute} : ${second} PM`;
    }, 1000);
  }, []);
  return (
    <div className="navbar">
      <div className="left-nav">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <p>Bravo Online Store</p>
      </div>
      <div className="bravo-call">
        <BiPhoneCall/>
        <p>01064031614</p>
      </div>
      <h2 className="middle-nav"></h2>
      <div className="right-nav">
        <p>Welcome To Bravo</p>
        <Link to="/cart">
          <AiOutlineShopping className="nav-icon" />
        </Link>

        {productsCart.length > 0 ? <span>{productsCart.length}</span> : ""}
      </div>
    </div>
  );
};

export default Navbar;
