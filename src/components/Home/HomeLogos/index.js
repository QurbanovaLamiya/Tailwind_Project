import { logos } from "../../../constant/Logos";

const HomeLogos = () => {
  return (
    <div>
      <p className="text-center text-xl">
        We collaborate with
        <span className="text-Teal">
          100+ leading universities and companies
        </span>
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 p-2">
        {logos.map((logo, index) => (
          <div className="w-28" key={index}>
            <img src={logo} className="object-cover" alt="logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeLogos;
