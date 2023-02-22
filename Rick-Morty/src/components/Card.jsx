import React from "react";

const Card = (props) => {
  const { character } = props;

  return (
    <div>
      <h2>id: {character.id}</h2>
      <h3>name: {character.name}</h3>
      <p>status: {character.status}</p>
    </div>
  );
};

export default Card;