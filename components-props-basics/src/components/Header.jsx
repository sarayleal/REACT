import React from "react";
import Title from "./Title";


const Header = (Greeting) => {
  return (
    <header>
      <Title text={props.Title} />
    </header>
  );
};

export default Header;