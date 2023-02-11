import { motion } from "framer-motion";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-Teal p-20"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <span className="font-bold mb-6">Get Started</span>
          <p className="text-sm leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo neque
            saepe cumque. Veritatis sunt commodi
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <Link to="" className="text-sm hover:underline">
              Web Design
            </Link>
            <Link to="" className="text-sm hover:underline">
              Web Development
            </Link>
            <Link to="" className="text-sm hover:underline">
              Science
            </Link>
            <Link to="" className="text-sm hover:underline">
              Digital Marketing
            </Link>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Company</div>
          <div className="flex flex-col gap-4">
            <Link to="" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link to="" className="text-sm hover:underline">
              Sitemap
            </Link>
            <Link to="" className="text-sm hover:underline">
              Careers
            </Link>
            <Link to="" className="text-sm hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Follow us</div>
          <div className="text-sm mb-4">skillexlearning@gmail.com</div>
          <div className="text-sm">+959883271929</div>
          <div className="flex gap-4 mt-4">
            <Link to="" className="hover:scale-110 text-xl">
              <BsFacebook className="cursor-pointer" />
            </Link>
            <Link to="" className="hover:scale-110 text-xl">
              <BsInstagram className="cursor-pointer" />
            </Link>
            <Link to="" className="hover:scale-110 text-xl">
              <BsTwitter className="cursor-pointer" />
            </Link>
            <Link to="" className="hover:scale-110 text-xl">
              <BsPinterest className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
