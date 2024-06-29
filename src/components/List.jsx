import React, { useState } from "react";
import './List.css';

function List({ pokemons, handleSingleClick, handleDoubleClick, lastClickedId }) {
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);

  const handleClick = (pokemonId) => {
    if (pokemonId === lastClickedId) {
      handleDoubleClick(pokemonId);
    } else {
      handleSingleClick(pokemonId);
      setSelectedPokemonId(pokemonId);
    }
  };

  const drawPokemon = () => {
    return pokemons.map((p, id) => (
      <li
        key={id}
        onClick={() => handleClick(p.id)}
      >
        <p className={`pokeName ${selectedPokemonId === p.id ? "selected" : ""}`}>{p.name}</p>
      </li>
    ));
  };

  return <ul>{pokemons.length > 0 && drawPokemon()}</ul>;
}

export default List;