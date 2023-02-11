import aboutImg from "../../image/About.jpg";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-Teal rounded-lg">
          <img src={aboutImg} alt="..." className="p-4" />
        </div>
        <div>
          <h2 className="font-bold text-[1.5rem] sm:text-[1.875rem] mb-5">
            We provide the <br /> best {" "}
            <span className="text-Teal">online courses</span>
          </h2>
          <p className="text-sm text-gray leading-7 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, totam earum. Minus deleniti repellat id! Ratione quia
            eum, explicabo quos eos magni vel corporis voluptatibus, inventore
            doloremque aliquam pariatur recusandae.
          </p>
          <button className="py-3 px-6 text-sm border border-gray rounded-lg font-bold hover:bg-Teal transition-colors">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
