import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const AccordionItems = ({ title, id }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };

  return (
    <div className="pb-8">
      <div
        className="flex items-center justify-between pr-3 cursor-pointer transition-all duration-300"
        onClick={() => handleClick(id)}
      >
        <h5 className="font-extrabold sm:text-xl">{title}</h5>
        <BsChevronDown
          className={id === activeIndex ? "rotate-180" : "rotate-0"}
        />
      </div>

      <AnimatePresence>
        {id === activeIndex && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
            className="pt-4"
          >
            <p className="text-sm leading-7 text-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum
              beatae porro voluptatum aspernatur, id nesciunt reiciendis maxime
              unde necessitatibus illum accusamus mollitia incidunt qui nisi
              tempora facere magni magnam?
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

AccordionItems.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
};

export default AccordionItems;
