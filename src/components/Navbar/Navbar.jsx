import "./navbar.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="Logo de Kasa écrit en rouge avec une maison à la place du premier A" className="logo" />
      <ul>
        <li>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
         Accueil
        </NavLink>
        </li>
        <li>
        <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          A Propos
        </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;