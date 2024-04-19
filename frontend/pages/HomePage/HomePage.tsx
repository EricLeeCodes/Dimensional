import { Link } from "react-router-dom";
import "./homepage.css";
function HomePage() {
  return (
    <>
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
        <li>
          <Link to="/potate">The Potato</Link>
        </li>
      </ul>
    </>
  );
}

export default HomePage;
