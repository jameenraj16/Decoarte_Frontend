import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import "./Navbar.css";
import logo from "../Assets/Logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  /* Handle Logout */
  const handleLogout = () => {
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    navigate("/");
    setMenu("")
  };

  useEffect(() => {
    const user = localStorage.getItem("email");
    setIsLoggedIn(!!user);
    setMenu("sofa")
  }, []);

  return (
    <div className='navbar'>
      <Link style={{ textDecoration: "none" }} to={"/"}>
        <div className='nav-logo'>
          <img src={logo} alt="" />
          <p>Decoarte</p>
        </div>
      </Link>

      <ul className='nav-menu'>
        <li onClick={() => setMenu("sofa")}><Link style={{ textDecoration: "none", color: "white" }} to="/">Sofa</Link>{menu === "sofa" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("bed")}><Link style={{ textDecoration: "none", color: "white" }} to="/bed">Bed</Link> {menu === "bed" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("decors")}><Link style={{ textDecoration: "none", color: "white" }} to="/decors">Decors</Link> {menu === "decors" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("lights")}><Link style={{ textDecoration: "none", color: "white" }} to="/lights">Lights</Link> {menu === "lights" ? <hr /> : <></>}</li>
      </ul>
      <div className='nav-login-cart'>
        {!isLoggedIn ?
          <>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>Signup</button></Link>
          </>
          :
          <>
            <Link to="/" onClick={() => handleLogout()}><button>Logout</button></Link>
            <Link to="/cart">
              <BsCart className='nav-cart-logo' />
            </Link>
            <div className='nav-cart-count'>1</div>
          </>
        }

      </div>
    </div>
  );
};

export default Navbar;
