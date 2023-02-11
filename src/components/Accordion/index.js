import { accordions } from "../../constant/Accordion";
import AccordionItems from "./AccordionItems";

const Accordion = () => {
  return (
    <div>
      <h5 className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-Teal">Asked Questions</span>
      </h5>
      <div className="mt-12 max-w-[700px]  mx-auto">
        {accordions.map((item) => (
          <AccordionItems key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
