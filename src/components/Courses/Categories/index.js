import React from "react";

const Categories = ({ icon, category }) => {
  return (
    <div className="bg-white flex flex-col items-center justify-center gap-4 p-8">
      <div className="text-Teal text-4xl hover:scale-110 hover:cursor-pointer">
        {icon}
      </div>
      <p>{category}</p>
      <button className="text-sm text-gray hover:tracking-wide">
        View More
      </button>
    </div>
  );
};

export default Categories;
