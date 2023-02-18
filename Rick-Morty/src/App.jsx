import React from "react";
import styles from "./App.modules.css";

const App = () => {
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  return (
    <div className={styles.container}>
      {characterList.map((character) => (
        character.status === "Alive" && (
          <div key={character.id} className={styles.character}>
            <h2 className={styles.name}>name: {character.name}</h2>
            <img src={character.image} alt={character.name} className={styles.image} />
            <p className={styles.status}>status: {character.status}</p>
            <p className={styles.origin}>origin: {character.origin.name}</p>
          </div>
        )
      ))}
    </div>
  );
};

export default App;
