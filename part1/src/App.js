import React, { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Header = (props) => <h1>{props.text}</h1>;
// const Counter = (props) => (
//   <p>
//     {props.text} {props.number}
//   </p>
// );

const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.data}
    </p>
  );
};
const Statistics = (props) => {
  if (props.allCount === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <StatisticLine text={props.good} data={props.goodCount} />
      <StatisticLine text={props.neutral} data={props.neutralCount} />
      <StatisticLine text={props.bad} data={props.badCount} />
      <StatisticLine text={props.all} data={props.allCount} />
      <StatisticLine text={props.average} data={props.averageCount} />
      <StatisticLine text={props.positive} data={props.positiveCount} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // const [count, setCount] = usetState(0);

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header text="statistics" />
      <Statistics
        good="good "
        goodCount={good}
        neutral="neutral "
        neutralCount={neutral}
        bad="bad "
        badCount={bad}
        all="all "
        allCount={good + neutral + bad}
        average="average "
        averageCount={(good + bad * -1) / (good + neutral + bad)}
        positive="positive "
        positiveCount={(good / (good + bad + neutral)) * 100 + "%"}
      />
    </div>
  );
};

export default App;
