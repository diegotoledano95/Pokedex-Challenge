import React from "react";
import "./styles.css";
import PokeCards from "./components/PokeCards";
import { mockPokemonsData } from "./mock/pokeData";

export default function App() {
  return (
    <div className="App">
      <h1>2o. Challenge: Loops</h1>
      <PokeCards mockPokemonsData={mockPokemonsData} />
    </div>
  );
}
