import { useState, useEffect } from 'react';

const usePokemonSelection = (handleSingleClick, handleDoubleClick, lastClickedId) => {
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);

  useEffect(() => {
    setSelectedPokemonId(null); // Reset selected Pokemon ID when lastClickedId changes
  }, [lastClickedId]);

  const handleClick = (pokemonId) => {
    if (pokemonId === lastClickedId) {
      handleDoubleClick(pokemonId);
    } else {
      handleSingleClick(pokemonId);
      setSelectedPokemonId(pokemonId);
    }
  };

  return {
    selectedPokemonId,
    handleClick,
  };
};

export default usePokemonSelection;