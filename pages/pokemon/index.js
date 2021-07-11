import Link from 'next/link';

function Index({ pokemon }) {
  return (
    <>
      <ul>
        {
          pokemon.results.map(p => (
            <li key={p.name}>
              <Link href={`/pokemon/${p.name}`}>
                <a>{p.name}</a>
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1220`)
  const pokemon = await res.json();

  return {
    props: { pokemon },
    revalidate: 1,
  }
}

export default Index;