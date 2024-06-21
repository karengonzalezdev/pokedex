import React from "react";
import './PokemonImage.css';

function PokemonImage({ pokemon }) {
  // Verificar si pokemon está definido antes de intentar acceder a sus propiedades
  if (!pokemon) {
    return null; // Retorna null o algún indicador de carga mientras pokemon se carga
  }

  // Verificar si pokemon.sprites está definido antes de intentar acceder a front_default
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
