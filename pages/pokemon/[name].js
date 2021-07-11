import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

function Pokemon({ pokemon }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Link href="/pokemon"><a>back</a></Link>
      <h1>{pokemon.name}</h1>
      <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={150} height={150} />
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
  const pokemon = await res.json();

  const paths = pokemon.results.map(p => ({
    params: {
      name: p.name
    }
  }));

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
  const pokemon = await res.json();

  return {
    props: { pokemon },
    revalidate: 1,
  }
}

export default Pokemon;