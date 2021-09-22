import React from "react";

const ShowPokemon = ({ mockPokemonData: { name, sprites, video } }) => {
  return (
    <>
      <h1>{name}</h1>
      <img src={sprites.front_default} alt="" />
      <img src={sprites.front_shiny} alt="" />
      <p>
        <a href={video}>Video</a>
      </p>
    </>
  );
};

export default ShowPokemon;
