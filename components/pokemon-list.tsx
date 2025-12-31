import { Pokemon } from "@/utils/types";

import PokemonCard from "./pokemon-card";

export default function PokemonList({ pokemons }: { pokemons: Pokemon[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {pokemons.map((pokemon: Pokemon, idx: number) => (
        <PokemonCard key={`${idx}-${pokemon.name}`} {...pokemon} />
      ))}
    </div>
  );
}
