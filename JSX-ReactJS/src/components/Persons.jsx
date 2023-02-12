import React from "react";


function List() {
  const persons = [
    { name: "Asier", age: 15 },
    { name: "David", age: 36 },
    { name: "India", age: 5 }
  ];

  return (
    <ul>
      {persons.map((person, index) => (
        <li key={index}>
          {person.name} - {person.age}
        </li>
      ))}
    </ul>
  );
}

export default List;
