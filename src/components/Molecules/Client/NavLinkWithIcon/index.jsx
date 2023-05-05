import { NavLink } from "react-router-dom";
import { BsApple } from "react-icons/bs";
import "./NavLinkWithIconStyle.scss";

const NavLinkWithIcon = ({href, title}) => {
  return (
    <NavLink to={href} className="nav-link">
      <BsApple className="nav-link-icon" />
      <h3 className="nav-link-title">{title}</h3>
    </NavLink>
  );
}

export default NavLinkWithIcon;
