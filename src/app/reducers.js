const initialState = {
  pokemon: {
    name: '',   // Initial state for Pokemon name
    type: '',   // Initial state for Pokemon type
  },
};

export const pokemonReducer = (state = initialState.pokemon, action) => {
  switch (action.type) {
    case 'SET_POKEMON':
      return {
        ...state,
        name: action.payload.name,
        type: action.payload.type,
      };
    case 'CLOSE_INFORMATION':
      return {
        ...state,
      };
    default:
      return state;
  }
};