import React from "react";
import './PokemonImage.css';

function PokemonImage({ pokemon }) {
  if (!pokemon) {
    return null;
  }

  const imageUrl = pokemon.sprites ? pokemon.sprites.front_default : '';

  return (
    <div>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={pokemon.name}
          className="image"
        />
      )}
    </div>
  );
}

export default PokemonImage;