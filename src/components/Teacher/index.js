import teacher1 from "../../image/teacher1.png";
import teacher2 from "../../image/teacher2.png";
import Accordion from "../Accordion";

const Teacher = () => {
  return (
    <section className="section" id="teacher">
      <div className="grid md:grid-cols-2 gap-8 place-items-center my-16 sm:my-5">
        <div className="p-8">
          <img src={teacher1} alt="teacherImg" />
        </div>
        <div>
          <h4 className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal">An Instructor</span>
            <br />
            of Our Platform
          </h4>
          <p className="text-sm leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Start Teaching
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 place-items-center  my-16 sm:my-5">
        <div className="order-2 md:order-1">
          <h4 className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal">An Instructor</span>
            <br />
            of Our Platform
          </h4>
          <p className="text-sm leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Get Started
          </button>
        </div>
        <div className="p-8 order-1 md:order-2">
          <img src={teacher2} alt="teacherImg" />
        </div>
      </div>
      <Accordion />
    </section>
  );
};

export default Teacher;
