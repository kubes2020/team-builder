import React, { useState } from "react";

export default function Form() {
  const [friends, setFriends] = useState({
    fname: "",
  });

  const handleChange = (e) => {
    setFriends({ fname: e.target.value });
    console.log(friends);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="fname">First Name:</label>
      <input onChange={handleChange} id="fname" type="text" />
      <label htmlFor="lname">Last Name:</label>
      <input onChange={handleChange} id="lname" type="text" />
      <button type="submit">Submit!</button>
    </form>
  );
}
