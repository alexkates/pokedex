import PokemonListItem from './pokemonListItem';

function PokemonList({ pokemon }) {
  return (
    <div>
      {
        pokemon.map(p => (<PokemonListItem key={p.name} pokemon={p} />))
      }
    </div>
  );
}

export default PokemonList;