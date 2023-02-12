import React from "react";

function Paragraph() {
    const date = new Date();
    const hours = date.getHours();
    let greeting;
  
    if (hours >= 6 && hours <= 12) {
      greeting = "Buenos días";
    } else if (hours >= 13 && hours <= 19) {
      greeting = "Buenas tardes";
    } else {
      greeting = "Buenas noches";
    }
  
    return <h1>{greeting}</h1>;
  }
  

  export default Paragraph