import React from "react";

const charactersMock = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
  },
];

const App = () => {
  const myState = React.useState(charactersMock);
  
const [characters, setCharacters] = useState(charactersMock);



  return 
    <h1>
       Hello React!
    </h1>;
  
};

export default App;