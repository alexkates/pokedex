import Link from 'next/link';
import { useEffect } from 'react';

function PokemonItem({ pokemon }) {
  useEffect(() => {
    (async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
    })();
  }, []);


  return (
    <div className="flex max-h-10">
      <Link href={`/pokemon/${pokemon.name}`}>
        <a>{pokemon.name}</a>
      </Link>
    </div>
  )
};

export default PokemonItem;