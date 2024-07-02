import { useEffect, useState, useMemo } from 'react';
import { getPokemonKantoData } from '../api/PokemonService';

const usePokeList = (currentPage, itemsPerPage, setLoading) => {
  const [pokeList, setPokeList] = useState([]);

  // Memoize filteredList to optimize performance
  const filteredList = useMemo(async () => {
    setLoading(true);
    let pokemons = await getPokemonKantoData(); // Fetch Pokémon data
    pokemons = pokemons.map(pokemon => ({
      ...pokemon,
      name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    }));
    // Update pokeList with paginated data based on currentPage and itemsPerPage
    setPokeList(pokemons.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
    setLoading(false);
  }, [currentPage, itemsPerPage, setLoading]);

  useEffect(() => {
  }, [filteredList]); // useEffect to track changes in filteredList

  return {
    pokeList,
    setPokeList
  };
};

export default usePokeList;