import Logo from "../images/logo.svg";
import Close from "../images/icon-menu.svg";
import Open from "../images/icon-menu-close.svg";
import { useState } from "react";
import "../css/Navbar.css";

const Navbar = ({ HandleOnClick }) => {
  const [menu, setMenu] = useState(false);

  const handleOnClick = () => {
    setMenu(!menu);
    HandleOnClick();
  };

  return (
    <div className="nav">
      <img className="nav-logo" src={Logo} alt="logo" />
      <div className="nav-links">
        <img
          className="nav-links__btn"
          src={menu ? Open : Close}
          alt="menu"
          onClick={handleOnClick}
        />
        <ul className="nav-links__list">
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
