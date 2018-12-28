import React from 'react';
const person = (props) => {
   return(
   <div>
   <h1 onClick = {props.click}>Hello this is a {props.name} and {props.age} years old</h1>
  
</div>
   );
}

export default person;