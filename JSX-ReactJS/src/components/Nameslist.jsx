import React from "react";

function Names() {
    const names = ["Saray", "Fran", "Pedro"];
  
    return (
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    );
  }
  
  export default Names;
  