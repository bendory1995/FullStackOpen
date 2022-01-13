import React from "react";
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = "Alex";
  const age = "26";

  return (
    <>
      <Hello name={name} age={age} />
      <Hello name="Alexx" age="27" />
    </>
  );
};

export default App;
