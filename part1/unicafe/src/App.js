import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} : {value}
    </p>
  );
};
const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (good + neutral + bad === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="good" value={all} />
      <StatisticLine text="average" value={average} />
      <p>positive: {positive}%</p>
    </div>
  );
};
const Header = () => <h1>give feedback</h1>;
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + neutral + bad}
        average={(good + bad * -1) / (good + neutral + bad)}
        positive={(good * 100) / (good + neutral + bad)}
      />
    </div>
  );
};

export default App;
