import Link from 'next/link';

function PokemonItem({ pokemon }) {
  return (
    <div className="flex max-h-10">
      <Link href={`/pokemon/${pokemon.name}`}>
        <a>{pokemon.name}</a>
      </Link>
    </div>
  )
};

export default PokemonItem;