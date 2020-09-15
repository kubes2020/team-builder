import React, { useState } from "react";

export default function Form() {
  const [oldFriends, setOldFriends] = useState([
    {
      fname: "James",
      lname: "Iliff",
      role: "teacher",
    },
  ]);

  const newFriendsForm = {
    fname: "",
    lname: "",
    role: "",
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
    };
    setOldFriends([...oldFriends, trimNewFriends]);
    setNewFriends(newFriendsForm);
  };

  return (
    <form onSubmit={submit}>
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
      <button type="submit">Submit!</button>
      <h1>Friends List</h1>

      {oldFriends.map((item, index) => {
        return (
          <div key={index}>
            {item.fname} {item.lname} {item.role}
          </div>
        );
      })}
    </form>
  );
}
