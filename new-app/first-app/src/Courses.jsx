import CourseCard from "./CourseCard";

function Courses() {
  const courses = [
    { id: 1, name: "React", description: "This is React course" },
    { id: 2, name: "JavaScript", description: "This is JavaScript course" },
    { id: 3, name: "Node", description: "This is Node course" },
    { id: 4, name: "Next", description: "This is Next course" },
  ];
  return (
    <div>
      <p>Courses</p>
      <ul>
        {courses.map((course) => (
          <CourseCard key={course.id} data={course} />
        ))}
      </ul>
    </div>
  );
}

export default Courses;
