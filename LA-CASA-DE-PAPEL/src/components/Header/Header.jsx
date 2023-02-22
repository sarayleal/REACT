import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(UserContext);
  return (
    <header>
      <img src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1676476903/LA-CASA-DE-PAPEL/logo_p0dmfc.png"></img>
      <img
        src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1676478395/LA-CASA-DE-PAPEL/3adcc721ee41554346d6ceb20b2186ba_mumnn9.png"
        className="imgBanner"
      ></img>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>{user == null && <NavLink to="/login">Login</NavLink>}</li>
        <li>{localStorage.getItem("user") && <NavLink to="/gallery">Gallery</NavLink>}</li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          {user !== null && <button onClick={() => logOut()}>Logout</button>}
        </li>
      </ul>
    </header>
  );
};

export default Header;