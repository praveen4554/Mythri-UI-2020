import React from "react";

function person(props) {
  return (
    <div>
      <p>
        Name: {props.name} <br /> Age: {props.age}
      </p>
      Enter your Name
      <input type="text" value={props.name} onBlur={props.change} />
    </div>
  );
}

export default person;
