import React, { useState } from "react";

const Button = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <button onClick={() => setShowContent(!showContent)}>
        Modificar valor
      </button>
      {showContent && <p>El valor se ha modificado</p>}
    </div>
  );
};

export default Button;