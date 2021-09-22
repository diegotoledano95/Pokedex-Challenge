import React, { useState } from "react";

const LoopPokemon = ({
  pokemon: {
    name,
    sprites: { front_default, front_shiny, back_default, back_shiny },
    videoLink
  }
}) => {
  const [imgHover, switchImg] = useState(
    front_default ? front_default : back_default
  );

  return (
    <>
      <h1>{name}</h1>
      <img
        src={imgHover}
        onMouseOver={() => switchImg(front_shiny ? front_shiny : back_shiny)}
        onMouseOut={() =>
          switchImg(front_default ? front_default : back_default)
        }
        alt=""
      />
      <p>
        <a href={videoLink}>Video</a>
      </p>
    </>
  );
};

export default LoopPokemon;
