import React, { useState, useEffect } from "react";
import pokemons from "./pokemons";

const randomPokemon = () => {
  const rpokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
  return rpokemon;
};

export default function PokeNameValidator() {
  const [entry, setEntry] = useState("");
  const [muestraPokemon, setMuestraPokemon] = useState(randomPokemon());

  const entryChange = (e) => {
    setEntry(e.target.value);
  };

  useEffect(() => {
    if (entry === muestraPokemon) {
      alert("Correct! Play again?");
      setEntry("");
      setMuestraPokemon(randomPokemon());
    }
  }, [entry, muestraPokemon]);

  return (
    <div className="app">
      <h2>Mini Challenge 4: Poke Name Validator</h2>
      <p>
        Pokémon name:&nbsp;
        <strong>{muestraPokemon}</strong>
      </p>
      <p className="secondary">Type the Pokémon name correctly:</p>
      <input
        type="text"
        placeholder="Enter the Pokémon name"
        onChange={entryChange}
        value={entry}
      />
    </div>
  );
}
