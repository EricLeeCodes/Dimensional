import { Link } from "react-router-dom";
import "./navbar.css";
import { ShoppingCartSimple } from "phosphor-react";
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
    <span className="navbar-cart">
    <Link to="/cart">
          <ShoppingCartSimple size={32} />
        </Link>
    </span>
  </div>
  
  </div>
  );
}

export default Navbar;
