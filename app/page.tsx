export default function Home() {
  const PokeData = [
    {
      id: 1,
      name: "Bulbasaur",
      characteristics: ["Grass", "poison"],
    },
    {
      id: 2,
      name: "Ivysaur",
      characteristics: ["Grass", "poison"],
    },
    {
      id: 3,
      name: "Bulbasaur",
      characteristics: ["Grass", "poison"],
    },
  ];
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
        <div>Card Component</div>
        {PokeData.map((pokemon, idx) => (
          <div key={`${idx}-${pokemon.name}`}>{pokemon.name}</div>
        ))}
      </div>
      {/* <button>Search</button> */}
    </div>
  );
}
