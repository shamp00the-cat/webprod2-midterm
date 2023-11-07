import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Home
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
