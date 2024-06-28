import React from "react";
import getTypeStyle from './getTypeStyle';
import capitalizeFirstLetter from './capitalizeFirstLetter';
import './PokemonInformation.css';

function PokemonInformation({ pokemon }) {
  if (!pokemon) {
    return null;
  }

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