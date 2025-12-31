import PokemonList from "@/components/pokemon-list";
import { Pokemon } from "@/utils/types";
import Image from "next/image";

async function getData() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon: { url: string }) => {
        const res = await fetch(pokemon.url);
        const details = await res.json();
        return {
          id: details.id,
          name: details.name,
          types: details.types.map(
            (type: { type: { name: string } }) => type.type.name
          ),
          imageUrl: details.sprites.other["official-artwork"].front_default,
        };
      })
    );
    return pokemonDetails;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown Error occured");
    }
  }
  return [];
}
export default async function Home() {
  const pokemons = await getData();
  return (
    <div className="min-h-screen bg-linear-to-b from-red-500 to-red-600">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-8">
          Pokedex
        </h1>
        <input
          type="text"
          placeholder="Search Pokemen..."
          className="block w-full pl-10 pr-3 py-2 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-red-500  focus:border-red-500 sm:text-sm"
        />
        <PokemonList pokemons={pokemons} />
      </div>
    </div>
  );
}
