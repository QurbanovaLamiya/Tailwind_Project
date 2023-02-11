import heroImg from "../../image/hero.png";
import HomeLogos from "./HomeLogos";

const Home = () => {
  return (
    <section className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-Teal mb-4">
            your e-learning partner
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            This is <br /> the new way <br /> to learn online
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            officia sit vitae quo, eum similique?
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm cursor-pointer hover:bg-Teal/75">
              Get Started
            </button>
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm cursor-pointer hover:bg-Teal hover:text-white">
              Discover
            </button>
          </div>
        </div>
        <div className="md:w-[60%]">
          <img src={heroImg} alt="hero" />
        </div>
      </div>
      <HomeLogos />
    </section>
  );
};

export default Home;
