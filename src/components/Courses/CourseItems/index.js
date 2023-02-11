import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import PropTypes from "prop-types";

const CourseItems = ({
  category,
  image,
  participants,
  price,
  rating,
  title,
}) => {
  return (
    <div className="p-2 shadow-lg min-w-[15rem] bg-white rounded-md">
      <img src={image} alt={title} />
      <span className="text-Teal text-xs mt-2">{category}</span>
      <p className="text-sm mt-2 font-bold">{title}</p>
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-Solitude p-1">
            <AiOutlineUser className="text-Teal" />
          </div>
          <div>{participants}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-Solitude p-1">
            <AiOutlineStar className="text-yellow" />
          </div>
          <span className="text-sm font-bold">{rating}</span>
        </div>
        <span className="text-sm font-bold">${price}</span>
      </div>
    </div>
  );
};

CourseItems.propTypes = {
  category: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  participants: PropTypes.number,
  price: PropTypes.number,
  rating: PropTypes.number,
};

export default CourseItems;
