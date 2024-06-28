import React, { useEffect, useState } from "react";
import List from "../components/List";
import './Principal.css';
import PokemonImage from "../components/PokemonImage";
import PokemonInformation from "../components/PokemonInformation";
import { getPokemonKantoData } from "../api/PokemonService";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { setPokemon } from '../app/store';

export function Principal() {

  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  const [pokemonSelected, setPokemonSelected] = useState(null);
  const [pokeInformation, setPokeInformation] = useState(null);
  const [pokeList, setPokeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [lastClickedId, setLastClickedId] = useState(null);
  const itemsPerPage = 20;

  useEffect(() => {
    dispatch(setPokemon({ name: 'Pikachu', type: 'Electric' }));
  }, [dispatch]); console.log(pokemon);

  useEffect(() => {
    async function filteredList() {
      setLoading(true);
      let pokemons = await getPokemonKantoData();
      pokemons = pokemons.map(pokemon => ({
        ...pokemon,
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      }));
      setPokeList(pokemons.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
      setLoading(false);
      setPokemonSelected(null);
    }
    filteredList();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleSingleClick = (pokemonId) => {
    setTimeout(() => {
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

  return (
    <div className="container">
      <div className="column-1">
        <div className="card">
          <div className="pokeLogo">
            <img src={require('../assets/pokemonLogo.png')} alt="Pokémon Logo" />
          </div>
          <div className="pokemon">
            {pokemonSelected ? (
              <PokemonImage pokemon={pokemonSelected} />
            ) : (
              <img className="pokeball-image" src={require('../assets/pokeball.jpg')} alt="Pokeball" />
            )}
          </div>
        </div>
      </div>
      <div className="column-2">
        {loading ? (
          <div class="loading">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </div>
        ) : (
          <>
            {pokeInformation ? (
              <>
                <button className="buttonPrevList" onClick={closeInformation}><BsArrowLeft /></button>
                <PokemonInformation pokemon={pokeInformation} />
              </>
            ) : (
              <List
                pokemons={pokeList}
                handleSingleClick={handleSingleClick}
                handleDoubleClick={handleDoubleClick}
              />
            )}
          </>
        )}
      </div>
      <div className="buttons">
        <div>
          <button className="buttonPrev" onClick={prevPage} disabled={currentPage === 0 || loading || pokeInformation !== null}><BsArrowLeft /></button>
        </div>
        <div>
          <button className="buttonNext" onClick={nextPage} disabled={pokeList.length < itemsPerPage || loading || pokeInformation !== null}><BsArrowRight /></button>
        </div>
      </div>
    </div>
  );
}

export default Principal;