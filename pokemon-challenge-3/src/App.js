import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  const [pokemonsData, setPokemons] = useState(pokemons);
  const muestraPokemon = (e) => {
    const text = e.target.value || "";
    const workedText = text.toLowerCase().trim();
    const muestraPokemon = pokemons.filter((pokemon) => {
      return pokemon.name.includes(workedText) || workedText === "";
    });
    setPokemons(muestraPokemon);
  };

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <input type="text" onChange={muestraPokemon} />
      <div className="cards">
        {pokemonsData.map((pokemon) => (
          <CardItem name={pokemon.name} sprite={pokemon.sprite} />
        ))}
      </div>
    </div>
  );
}
