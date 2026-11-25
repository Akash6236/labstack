
import React, { useState } from 'react';
import './App.css';

// Main Component
function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [student, setStudent] = useState(null);

  function register() {
    setStudent({ name, email, course });
  }

  return (
    <div className="App">
      <h1>Student Registration Portal</h1>

      <input
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Enter Course"
        onChange={(e) => setCourse(e.target.value)}
      />

      <button onClick={register}>Register</button>

      <StudentDetails data={student} />
    </div>
  );
}

// Props Component
function StudentDetails(props) {
  return (
    <div>
      {props.data && (
        <>
          <h2>Registration Successful!</h2>
          <p>Name: {props.data.name}</p>
          <p>Email: {props.data.email}</p>
          <p>Course: {props.data.course}</p>
        </>
      )}
    </div>
  );
}

export default App;
