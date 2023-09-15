import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({ courseName, setCourseName, handleCreditHour }) => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])




  const handleSelectCourse = (course) => {
    const newCourseName = [...courseName, course];
    setCourseName(newCourseName);
  }


  return (
    <div className="md:w-3/4 m-4 p-4 border-1  rounded-xl">
      <div className="grid grid-cols-3 gap-3 ">
        {
          courses.map(course => <Course key={course.name} tanim={course} handleSelectCourse={handleSelectCourse} handleCreditHour={handleCreditHour} > </Course>)
        }
      </div>

    </div>
  );
};

export default Courses;

