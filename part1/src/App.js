import React from "react";

const Header = () => {
  return <h1>Half Stack application development</h1>;
};

const Content = () => {
  return (
    <>
      <p>Fundamentals of React: 10</p>
      <p>Using props to pass data: 7</p>
      <p>State of a component: 14</p>
    </>
  );
};

const Total = () => {
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  return <p>{exercises1 + exercises2 + exercises3}</p>;
};
const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  );
};

export default App;
