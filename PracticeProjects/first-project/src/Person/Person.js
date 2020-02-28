  import React from 'react';

  function person(props){
      return (
      <div>
      <p> Name: { props.name }   <br/> Age: { props.age }</p>
      </div>
      )
  };

  

  export default person;