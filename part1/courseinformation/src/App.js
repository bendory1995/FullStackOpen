import "./App.css";

const Header = (props) => {
  return <h1>{props.title}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <Part
        part={props.content[0].name}
        exercise={props.content[0].exercises}
      />
      <Part
        part={props.content[1].name}
        exercise={props.content[1].exercises}
      />
      <Part
        part={props.content[2].name}
        exercise={props.content[2].exercises}
      />
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Total = (props) => {
  return (
    <p>
      Total number of exercises:
      {props.content[0].exercises +
        props.content[1].exercises +
        props.content[2].exercises}
    </p>
  );
};
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header title={course.name} />
      <Content content={course.parts} />
      <Total content={course.parts} />
    </div>
  );
};

export default App;
