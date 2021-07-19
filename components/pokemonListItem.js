import Link from 'next/link';

function PokemonItem({ pokemon }) {
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <a className="flex bg-gray-100 border-2 hover:bg-blue-100 focus:bg-blue-100 px-4 min-w-min w-3/4 h-16 justify-center items-center rounded-md text-xl">{pokemon.name}</a>
    </Link>
  )
};

export default PokemonItem;