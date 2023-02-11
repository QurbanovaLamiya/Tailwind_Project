import { categories } from "../../constant/Categories";
import Categories from "./Categories";
import PopularCourse from "./PopularCourse";
import { motion } from "framer-motion";

const Courses = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="section" id="courses">
      <div className="text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-5">
          Our Top <span className="text-Teal">Categories</span>
        </h3>
        <p className="text-sm text-gray leading-7 max-w-[70%] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          tempora illo laborum ex cupiditate tenetur doloribus non velit atque
          amet repudiandae ipsa modi numquam quas odit optio, totam voluptate
          sit! Lorem ipsum dolor sit amet.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mt-12"
      >
        {categories.map((category) => (
          <Categories key={category.id} {...category} />
        ))}
      </motion.div>
      <PopularCourse />
    </section>
  );
};

export default Courses;
