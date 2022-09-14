import { useState } from "react";
import "./Students.css";

function Student() {
  const [students, setStudents] = useState([
    { id: 1, name: "Tom", city: "Waco" },
    { id: 2, name: "Thompson", city: "New York" },
    { id: 3, name: "John", city: "Seattle" },
  ]);
  return (
    <div className="students-list">
      <h1>Student List</h1>
      <hr/>
      {students.map((student) => {
        return (
          <div key={student.id}>
            {student.name} - {student.city}
          </div>
        );
      })}
    </div>
  );
}
export default Student;
