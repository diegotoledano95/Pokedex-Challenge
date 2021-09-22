import React from "react";
import PokeCard from "./PokeCard";

const PokeCards = ({ mockPokemonsData }) => {
  return (
    <>
      {mockPokemonsData.map((pokemon) => (
        <PokeCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </>
  );
};

export default PokeCards;
