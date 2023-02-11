import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
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
