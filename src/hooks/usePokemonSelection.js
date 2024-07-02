import { useEffect, useState } from 'react';

const usePokemonSelection = (pokeList) => {
  const [pokemonSelected, setPokemonSelected] = useState(null);
  const [pokeInformation, setPokeInformation] = useState(null);
  const [lastClickedId, setLastClickedId] = useState(null);

  const handleSingleClick = (pokemonId) => {
    setTimeout(() => {
      // Check if the click is a double click (within 250ms)
      if (lastClickedId === pokemonId) {
        handleDoubleClick(pokemonId);
      } else {
        const selectedPokemon = pokeList.find((p) => p.id === pokemonId);
        setPokemonSelected(selectedPokemon);
        setPokeInformation(null);
      }
      setLastClickedId(null);
    }, 250);
    setLastClickedId(pokemonId);
  };

  const handleDoubleClick = (pokemonId) => {
    const selectedPokemon = pokeList.find((p) => p.id === pokemonId);
    setPokeInformation(selectedPokemon);
  };

  const closeInformation = () => {
    setPokeInformation(null);
    setPokemonSelected(null);
  };

  // Reset selected Pokémon when component mounts
  useEffect(() => {
    setPokemonSelected(null);
  }, []);

  return {
    pokemonSelected,
    pokeInformation,
    setPokemonSelected,
    handleSingleClick,
    handleDoubleClick,
    closeInformation
  };
};

export default usePokemonSelection;