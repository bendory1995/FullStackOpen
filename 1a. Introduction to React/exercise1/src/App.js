import React from "react";

const App = () => {
  const course = "HalfStack Application Development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};
export default App;
