
import React, { useState, useEffect } from "react";

function App() {

  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  const API = "http://localhost:5000/employees";

  // GET
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setEmployees(data));
  }, []);

  // POST
  function addEmployee() {
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, salary })
    })
      .then(res => res.json())
      .then(data => setEmployees([...employees, data]));

    setName("");
    setSalary("");
  }

  // DELETE
  function deleteEmployee(id) {
    fetch(API + "/" + id, {
      method: "DELETE"
    });

    setEmployees(employees.filter(e => e.id !== id));
  }

  return (
    <div>
      <h1>Employee Management System</h1>

      <input
        placeholder="Enter Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Enter Salary"
        value={salary}
        onChange={e => setSalary(e.target.value)}
      />

      <button onClick={addEmployee}>Add Employee</button>

      <h2>Employee List</h2>

      {employees.map(e => (
        <p key={e.id}>
          {e.name} - {e.salary}
          <button onClick={() => deleteEmployee(e.id)}>
            Delete
          </button>
        </p>
      ))}

    </div>
  );
}

export default App;
