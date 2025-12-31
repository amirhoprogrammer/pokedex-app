"use client";

import React, { useState } from "react";
import PokemonList from "./pokemon-list";
import SearchInput from "./search-input";
import { Pokemon } from "@/utils/types";

export default function PokemonWrapper({
  pokemons: initialPokemons,
}: {
  pokemons: Pokemon[];
}) {
  //filter the data based on the search inputs
  const [filteredPokemons, setfilteredPokemons] = useState(initialPokemons);
  const handleSearch = (search: string) => {
    const filtered = initialPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setfilteredPokemons(filtered);
  };

  return (
    <React.Fragment>
      <SearchInput onSearch={handleSearch} />
      <PokemonList pokemons={filteredPokemons} />
    </React.Fragment>
  );
}
