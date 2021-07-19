import PokemonListItem from './pokemonListItem';

function PokemonList({ pokemon }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
      {
        pokemon.map(p => (<PokemonListItem key={p.name} pokemon={p} />))
      }
    </div>
  );
}

export default PokemonList;