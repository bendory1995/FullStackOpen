import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Winner = ({ anecdotes, allVotes }) => {
  const highest = Math.max(...allVotes);
  const highestIndex = allVotes.indexOf(highest);
  const winner = anecdotes[highestIndex];

  if (highest === 0) return <p>No votes yet</p>;
  return (
    <div>
      <p>{winner}</p>
      <p>has {highest} votes</p>
    </div>
  );
};
const Anecdote = ({ anecdote, votes }) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  );
};
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [allVotes, setAllVotes] = useState(Array(anecdotes.length).fill(0));
  const setVoteClick = () => {
    const tempVotes = [...allVotes];
    tempVotes[selected] += 1;
    setAllVotes(tempVotes);
  };

  const setNextAnecdote = () => {
    const index = Math.floor(Math.random() * anecdotes.length);
    setSelected(index);
  };
  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} votes={allVotes[selected]} />
      <Button onClick={setVoteClick} text="vote" />
      <Button onClick={setNextAnecdote} text="next anecdote" />
      <Header text="Anecdote with most votes" />
      <Winner anecdotes={anecdotes} allVotes={allVotes} />
    </div>
  );
};

export default App;
