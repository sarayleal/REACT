import "./Rehenes.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Rehenes = () => {
  const [atracador, setAtracador] = useState([]);
  const [search, setSearch] = useState("");

  const getAtracadores = async () => {
    const res = await axios.get(
      `https://63f119b05703e063fa52c282.mockapi.io/rehenes`
    );

    const data = res.data;

    setAtracador(data);
  };

  const filterSearch = (ev) => {
    setSearch(ev.target.value);
  }

  const filterAtracador = !search ? atracador : atracador.filter((data) => data.name.toLowerCase().includes(search.toLocaleLowerCase()));

  

  useEffect(() => {
    getAtracadores();
  }, []);



  return (
    <main className="money-heist-page-gallery">
      <h2 className="h2Atracadores">REHENES</h2>

      <input className="butonAtracadores"
        value={search}
        onChange={filterSearch}
        type="text"
        placeholder="Buscar..."
      />

<div className="chara">

{filterAtracador.map((atrac) => (
  <div className="card">
    <div className="front">
      <img
        src={atrac.image}
        alt={atrac.name}
        className="imgAtracadores"
      ></img>
      <h2>{atrac.name.toUpperCase()}</h2>
    </div>
    <div className="back">
      <h2>{atrac.name.toUpperCase()}</h2>
      <p>{atrac.description}</p>
      <p>{atrac.status} </p>
    </div>
  </div>
))}
</div>
    </main>
  );
};

export default Rehenes;