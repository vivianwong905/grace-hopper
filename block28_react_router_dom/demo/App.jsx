import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Routes, Route, useParams, Link } from "react-router-dom";

import PokemonDetails from "./PokemonDetails";

const AllPokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon"); // after a bit of time, like maybe 1-2 seconds
      // this line of code finishes fetching

      const data = await response.json();

      // after you finished fetching, you're setting the state
      // what happens when you set a state?

      // cool thing about react- whenever you set a state, the component re-renders with the new value of the state
      setPokemon(data.results);
    };

    getData();
  }, []);

  return (
    <ul>
      {pokemon.map((pokemon) => (
        <li key={pokemon.name}>
          <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
        </li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllPokemon />} />
      <Route path="/pokemon/:name" element={<PokemonDetails />} />
    </Routes>
  );
}

export default App;