/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import "./App.css";
import PokemonListItem from "./PokemonListItem";
import PokemonPage from "./PokemonPage";

// function App() {
// const [count, setCount] = useState(0);

// useEffect(() => {
//   console.log("I run on every render");
// });

// useEffect(() => {
//   console.log("I run whenever count updates");
// }, [count]);

// useEffect(() => {
//   console.log("I run only on first render");
// }, [])

//   return <button onClick={() => setCount(count + 1)}>Count is {count}</button>
// }

function App() {
  const [pokemonList, setPokemonList] = useState(null);
  const [error, setError] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    // GET https://pokeapi.co/api/v2/pokemon
    async function fetchPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        console.log(data);
        setPokemonList(data.results);
      } catch (e) {
        console.error(e);
        setError(e.message);
      }
    }
    fetchPokemon();
  }, []);

  if (error) {
    return (
      <div>
        <h2>Oh no! Something went wrong</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (selectedPokemon) {
    return (
      <PokemonPage
        pokemon={selectedPokemon}
        onBackButtonClick={() => setSelectedPokemon(null)}
      />
    );
  }

  if (pokemonList) {
    return (
      <>
        {pokemonList.map((pokemon) => (
          <PokemonListItem
            key={pokemon.name}
            pokemon={pokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
        ))}
      </>
    );
  }

  return <p>Loading...</p>;
}

export default App;
