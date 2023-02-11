import { Link } from "react-scroll";
import PropTypes from "prop-types";

const MobileNavbar = ({ href, link, setToggle }) => {
  return (
    <li className="list-none cursor-pointer mr-8">
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="font-bold transition-all duration-300"
        onClick={(prev) => setToggle(!prev)}
      >
        {link}
      </Link>
    </li>
  );
};

MobileNavbar.propTypes = {
  href: PropTypes.string,
  link: PropTypes.string,
  setToggle: PropTypes.func,
};

export default MobileNavbar;
