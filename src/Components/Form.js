import React, { useState } from "react";
import SideInfo from "./SideInfo";

function Form({ addStudent }) {
  const [student, setStudent] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    power: "",
    emailAddress: "",
  });
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //if condition for update to implement
    addStudent(student);
    setStudent({
      name: "",
      lastName: "",
      phoneNumber: "",
      power: "",
      emailAddress: "",
    });
  };
  return (
    <div className="form-page">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="name"
          name="name"
          value={student.name}
        />
        <input
          onChange={handleChange}
          placeholder="last name"
          name="lastName"
          value={student.lastName}
        />
        <input
          onChange={handleChange}
          placeholder="phone number"
          name="phoneNumber"
          value={student.phoneNumber}
        />
        <input
          onChange={handleChange}
          placeholder="power"
          name="power"
          value={student.power}
        />
        <input
          onChange={handleChange}
          placeholder="email address"
          name="emailAddress"
          value={student.emailAddress}
        />
        <button type="submit">Submit</button>
      </form>
      <SideInfo />
    </div>
  );
}

export default Form;
