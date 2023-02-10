import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [expanded, setExpanded] = useState(true);

  const toggle = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <nav className="navbar">
        <button className="toggle-button" onClick={toggle}>
          Toggle
        </button>
        <ul className={`navbar-list ${expanded ? "expanded" : "collapsed"}`}>
          <li className="navbar-item">
            <a href="#temperature">Temperatura</a>
          </li>
          <li className="navbar-item">
            <a href="#co2">Co2</a>
          </li>
          <li className="navbar-item">
            <a href="#methane">Metano</a>
          </li>
          <li className="navbar-item">No2</li>
          <li className="navbar-item">Ghiaccio Polare</li>
        </ul>
      </nav>
    </div>
  );
}
