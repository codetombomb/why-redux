import './App.css';
import Nav from './components/Nav/Nav';
import Student from './components/Students/Students';
import { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Tom", city: "Waco" },
    { id: 2, name: "Thompson", city: "New York" },
    { id: 3, name: "John", city: "Seattle" },
    // { id: 4, name: "Elon", city: "Mars" },
  ]);
  return (
    <div className="App">
      <Nav students={students}/>
      <Student students={students}/>
    </div>
  );
}

export default App;
