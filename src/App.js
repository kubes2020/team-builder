import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";

// const memberToEdit = (e) => {
//   console.log("event from memberToEdit", e.target);
// };

//this code was in the return statement to pass function to Form
{
  /* <Form memberToEdit={memberToEdit} /> */
}

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
