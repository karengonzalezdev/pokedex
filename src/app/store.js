import { configureStore, createSlice } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

const initialState = {
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.pokemon = action.payload;
    },
  },
});

export const { setPokemon } = pokemonSlice.actions;

export default configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
  },
});