import React, { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Header = (props) => <h1>{props.text}</h1>;
const Counter = (props) => (
  <p>
    {props.text} {props.number}
  </p>
);
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header text="statistics" />

      <Counter text="good " number={good} />
      <Counter text="neutral " number={neutral} />
      <Counter text="bad" number={bad} />
    </div>
  );
};

export default App;
