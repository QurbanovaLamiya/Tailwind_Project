import { Link } from "react-scroll";
import PropTypes from "prop-types";

const NavLink = ({ href, link }) => {
  return (
    <li className="list-none cursor-pointer mr-8">
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="font-bold transition-all duration-300"
      >
        {link}
      </Link>
    </li>
  );
};

NavLink.propTypes = {
  href: PropTypes.string,
  link: PropTypes.string,
};

export default NavLink;
