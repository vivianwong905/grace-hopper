import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

const PokemonDetails = () => {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);

  // 1. get the name of the pokemon we want to find more details for
  const pokemonName = params.name;

  useEffect(() => {
    // 2. fetch the details about that pokemon from the api
    const getData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );

      const data = await response.json();

      setPokemon(data);
    };

    getData();
  }, []);

  if (!pokemon) {
    return <h1>loading....</h1>;
  }
  console.log(pokemon);
  // 3. display more details
  // name
  // image
  // types?
  return (
    <>
      <Link to="/">Back</Link>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={`${pokemon.name}_image`} />
    </>
  );
};

export default PokemonDetails;