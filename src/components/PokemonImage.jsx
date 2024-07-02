import React from "react";
import './PokemonImage.css';

function PokemonImage({ pokemon }) {
  // Check if pokemon data is provided
  if (!pokemon) {
    return null;
  }

  // Retrieve the front default sprite URL of the pokemon, or an empty string if not available
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