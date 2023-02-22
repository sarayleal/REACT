import "./Atracadores.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Atracadores = () => {
  const [atracador, setAtracador] = useState([]);
  const [search, setSearch] = useState("");

  const getAtracadores = async () => {
    const res = await axios.get(
      `https://63ed2741f1ec53805dd9fb22.mockapi.io/atracadores`
    );

    const data = res.data;

    setAtracador(data);
  };

  const filterSearch = (ev) => {
    setSearch(ev.target.value);
  };

  const filterAtracador = !search
    ? atracador
    : atracador.filter((data) =>
        data.name.toLowerCase().includes(search.toLocaleLowerCase())
      );

  useEffect(() => {
    getAtracadores();
  }, []);

  // <div className="divAtracadores">
  //       {atracador.map((atrac) => (
  //         <figure key={atrac.id} className="atracadores">
  //           <img src={atrac.image} alt={atrac.name}></img>
  //           <h2>{atrac.name.toUpperCase()}</h2>
  //         </figure>
  //       ))}
  //     </div>

  return (
    <main className="money-heist-page-atracadores">
      <h2 className="h2Atracadores">ATRACADORES</h2>

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
      {/* 
      <div className="divAtrac">
        {filterAtracador.map((atrac) => (
          <figure className="figureAtracadores">
            <img src={atrac.image} alt={atrac.name} className="imgAtracadores"></img>
            <h2>{atrac.name.toUpperCase()}</h2>
          </figure>
        ))}
      </div> */}
    </main>
  );
};

export default Atracadores;