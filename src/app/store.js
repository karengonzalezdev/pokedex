import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { pokemonReducer } from './reducers';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,  // Assign pokemonReducer to 'pokemon' state in the store
});

// Create Redux store with redux-thunk middleware
export const store = createStore(rootReducer, applyMiddleware(thunk));