import React from "react";
import './PokemonInformation.css';

function PokemonInformation({ pokemon }) {
  if (!pokemon) {
    return null;
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getTypeStyle = (type) => {
    let backgroundColor = "";
    switch (type) {
      case "grass":
        backgroundColor = "#9bcc50";
        break;
      case "poison":
        backgroundColor = "#b97fc9";
        break;
      case "fire":
        backgroundColor = "#fd7d24";
        break;
      case "flying":
        backgroundColor = "#3dc7ef";
        break;
      case "water":
        backgroundColor = "#4592c4";
        break;
      case "bug":
        backgroundColor = "#729f3f";
        break;
      case "normal":
        backgroundColor = "#a4acaf";
        break;
      case "electric":
        backgroundColor = "#eed535";
        break;
      case "ground":
        backgroundColor = "#ab9842";
        break;
      case "fairy":
        backgroundColor = "#fdb9e9";
        break;
      case "fighting":
        backgroundColor = "#d56723";
        break;
      case "psychic":
        backgroundColor = "#f366b9";
        break;
      case "rock":
        backgroundColor = "#a38c21";
        break;
      case "steel":
        backgroundColor = "#9eb7b8";
        break;
      case "ghost":
        backgroundColor = "#7b62a3";
        break;
      case "ice":
        backgroundColor = "#51c4e7";
        break;
      case "dragon":
        backgroundColor = "#f16e57";
        break;
      default:
        backgroundColor = "#000";
        break;
    }
    return backgroundColor;
  };

  return (
    <div className="pokemon-info">
      <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
      <div>
      <h2>Type</h2>
        <ul>
          {pokemon.types.length > 0 &&
            pokemon.types.map((t, idx) => (
              <li key={idx} style={{ backgroundColor: getTypeStyle(t.type.name), textShadow: "0 0 2px white", color: "black", fontWeight: "bold" }}>
                {capitalizeFirstLetter(t.type.name)}
              </li>
            ))}
        </ul>
        <div>
          <h2>Abilities</h2>
          <ul>
            {pokemon.abilities.map((ability, idx) => (
              <li className="abilities" key={idx}>{capitalizeFirstLetter(ability.ability.name)}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Stats</h2>
          {pokemon.stats.map((stat, idx) => (
            <div key={idx} className="stat">
              <div className="stat-name">{capitalizeFirstLetter(stat.stat.name)}:</div>
              <div className="stat-bar-container">
                <div className="stat-bar" style={{ width: `${stat.base_stat}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonInformation;
