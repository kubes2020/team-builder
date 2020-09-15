import React, { useState } from "react";

const TeamForm = () => {
  const [friends, setFriends] = useState({
    fname: "",
  });

  const handleChange = (e) => {
    setFriends({ fname: e.target.value });
  };

  return (
    <form>
      <label htmlFor="fname">
        First Name:
        <input onChange={handleChange} id="fname" type="text" />
      </label>
    </form>
  );
};
