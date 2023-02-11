import { courses } from "../../../constant/Courses";
import CourseItems from "../CourseItems";

const PopularCourse = () => {
  return (
    <div>
      <h4 className="text-xl font-bold mt-32">Most Popular Courses</h4>
      <div className="mt-12 overflow-x-hidden w-full  relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {courses.map((course) => (
            <CourseItems key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourse;
