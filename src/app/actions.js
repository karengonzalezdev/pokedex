export const setPokemon = (pokemon) => ({
  type: 'SET_POKEMON',
  payload: pokemon,
});

export const closeInformation = () => ({
  type: 'CLOSE_INFORMATION',
});

export const fetchPokemonData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://api.example.com/pokemon');  // Fetching Pokemon data from an API
      const data = await response.json();
      dispatch(setPokemon(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
};
