import { Link } from "react-router-dom";
import "./homepage.css";
import Navbar from "../../src/components/navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <h1>Home Page!</h1>

      {/* TEMPORARY NAV BUTTONS! DELETE BEFORE PRODUCTION!!!*/}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/phone">Phone</Link>
        </li>
        <li>
          <Link to="/headphones">Headphones</Link>
        </li>
      </ul>
    </>
  );
}

export default HomePage;
