import { Link } from "react-router-dom";
import "./navbar.css";

import { useGSAP } from '@gsap/react'
import gsap from "gsap";

function Navbar() {

  return (
    <div>
  <div className="navbar">
    <span className="navbar-home">
    <Link to="/" >Home</Link>
    </span>
    <span className="navbar-item">
    <Link to="/phone" className="item">Phone</Link>
    <Link to="/headphones" className="item">Headphones</Link>
    <Link to="/potate" className="item">The Potato</Link>
    </span>
    <span className="navbar-cart">Cart</span>
  </div>
  
  </div>
  );
}

export default Navbar;
