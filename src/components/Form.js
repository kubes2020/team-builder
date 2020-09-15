import React, { useState } from "react";
import "../App.css";
export default function Form() {
  const [oldFriends, setOldFriends] = useState([
    {
      fname: "James",
      lname: "Iliff",
      role: "teacher",
      email: "james@hotmail.com",
    },
  ]);

  const newFriendsForm = {
    fname: "",
    lname: "",
    role: "",
    email: "",
  };

  const [newFriends, setNewFriends] = useState(newFriendsForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFriends({ ...newFriends, [name]: value });
    // console.log(e);
  };

  const submit = (e) => {
    e.preventDefault();

    const trimNewFriends = {
      fname: newFriends.fname.trim(),
      lname: newFriends.lname.trim(),
      role: newFriends.role.trim(),
      email: newFriends.email.trim(),
    };
    setOldFriends([...oldFriends, trimNewFriends]);
    setNewFriends(newFriendsForm);
  };

  return (
    <form onSubmit={submit}>
      <h3>Add Yourself To The List!</h3>
      <label htmlFor="fname">First Name:</label>
      <input
        name="fname"
        value={newFriends.fname}
        onChange={handleChange}
        id="fname"
        type="text"
      />
      <label htmlFor="lname">Last Name:</label>
      <input
        name="lname"
        value={newFriends.lname}
        onChange={handleChange}
        id="lname"
        type="text"
      />
      <label htmlFor="role">Role:</label>
      <input
        name="role"
        value={newFriends.role}
        onChange={handleChange}
        id="role"
        type="text"
      />
      <label htmlFor="email">Email:</label>
      <input
        name="email"
        value={newFriends.email}
        onChange={handleChange}
        id="email"
        type="email"
      />
      <button type="submit">Submit!</button>
      <h1>Friends List</h1>

      {oldFriends.map((item, index) => {
        return (
          <>
            <div className="friends-container">
              <div key={index}>{item.fname}</div>
              <div>{item.lname}</div>
              <div>{item.role}</div>
              <div>{item.email}</div>
            </div>
          </>
        );
      })}
    </form>
  );
}
