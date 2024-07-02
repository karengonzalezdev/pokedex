import React from "react";
import List from "../components/List";
import './Principal.css';
import PokemonImage from "../components/PokemonImage";
import PokemonInformation from "../components/PokemonInformation";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import ReactAudioPlayer from "react-audio-player";
import pokemonSong from '../assets/pokemonSong.mp3';
import useLoading from '../hooks/useLoading';
import usePokeList from '../hooks/usePokeList';
import usePokemonSelection from '../hooks/usePokemonSelection';
import Loading from '../components/Loading';
import useNavigation from '../hooks/useNavigation';
import useListActions from '../hooks/useListActions';
import itemsPerPage from "../components/itemsPerPage"; // Ensure itemsPerPage is properly imported

export function Principal() {

  // Custom hooks
  const { loading, setLoading } = useLoading();
  const { currentPage, nextPage, prevPage } = useNavigation(0, 5);
  const { handlePrevList } = useListActions();
  const { pokeList } = usePokeList(currentPage, itemsPerPage, setLoading);
  const { setPokemonSelected, pokemonSelected, pokeInformation, handleSingleClick, handleDoubleClick, closeInformation } = usePokemonSelection(pokeList, currentPage);

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
          <Loading />
        ) : (
          <>
            {pokeInformation ? (
              <>
                <button className="buttonPrevList" onClick={() => {
                  closeInformation();
                  handlePrevList();
                  setPokemonSelected(null);
                }}><BsArrowLeft /></button>
                <PokemonInformation pokemon={pokeInformation} />
              </>
            ) : (
              <List
                pokemons={pokeList}
                handleSingleClick={(id) => {
                  handleSingleClick(id);
                  const selectedPokemon = pokeList.find((p) => p.id === id);
                  setPokemonSelected(selectedPokemon);
                }}
                handleDoubleClick={handleDoubleClick}
              />
            )}
          </>
        )}
      </div>
      {/* Audio controls for Pokemon theme song */}
      <div className="audio-controls">
        <div className="circle">
          <p className="p-play-music">Play music</p>
          <ReactAudioPlayer
            src={pokemonSong}
            autoPlay
            controls
            loop
            className="audio-player"
          />
        </div>
        {/* Pagination buttons for navigating through Pokemon list */}
        <div className="buttons">
          <div>
            <button className="buttonPrev" onClick={() => {
              prevPage();
              setPokemonSelected(null);
            }} disabled={currentPage === 0 || loading || pokeInformation !== null}><BsArrowLeft /></button>
          </div>
          <div>
            <button className="buttonNext" onClick={() => {
              nextPage();
              setPokemonSelected(null);
            }} disabled={pokeList.length < itemsPerPage || loading || pokeInformation !== null}><BsArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Principal;