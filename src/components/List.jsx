import React from "react";
import './List.css';
import usePokemonSelection from '../hooks/usePokemonId';

function List({ pokemons, handleSingleClick, handleDoubleClick, lastClickedId }) {

  // Custom hook
  const { selectedPokemonId, handleClick } = usePokemonSelection(handleSingleClick, handleDoubleClick, lastClickedId);
  // Render list of Pokemons
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