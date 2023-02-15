import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <Link to={"/"}>
            <li className="navbar-item">Temperatura</li>
          </Link>
          <Link to={"/co2"}>
            <li className="navbar-item">Co2</li>
          </Link>
          <Link to={"/methane"}>
            {" "}
            <li className="navbar-item">Metano</li>
          </Link>
          <Link to={"/no2"}>
            <li className="navbar-item">No2</li>
          </Link>
          <Link to={"/polar"}>
            <li className="navbar-item">Ghiaccio Polare</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
