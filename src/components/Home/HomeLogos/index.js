import { logos } from "../../../constant/Logos";
import { motion } from "framer-motion";

const HomeLogos = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div>
      <p className="text-center text-xl">
        We collaborate with{" "}
        <span className="text-Teal">
          100+ leading universities and companies
        </span>
      </p>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="flex flex-wrap items-center justify-center gap-8 p-2"
      >
        {logos.map((logo, index) => (
          <motion.div variants={item} className="w-28" key={index}>
            <img src={logo} className="object-cover" alt="logo" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HomeLogos;
