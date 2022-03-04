import React from "react";

const Header = (props) => {
  return <h1>{props.courseName}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part
        part={props.courseContent[0].name}
        exercise={props.courseContent[0].exercises}
      />
      <Part
        part={props.courseContent[1].name}
        exercise={props.courseContent[1].exercises}
      />
      <Part
        part={props.courseContent[2].name}
        exercise={props.courseContent[2].exercises}
      />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      {props.courseContent[0].exercises +
        props.courseContent[1].exercises +
        props.courseContent[2].exercises}
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
      <Header courseName={course.name}></Header>
      <Content courseContent={course.parts}></Content>
      <Total courseContent={course.parts}></Total>
    </div>
  );
};

export default App;
