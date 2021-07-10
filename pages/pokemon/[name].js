// pages/posts/[id].js
import { useRouter } from 'next/router'
import Image from 'next/image'

function Pokemon({ pokemon }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1>{pokemon.name}</h1>
      <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={125} height={125} />
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
  const pokemon = await res.json()

  return {
    props: { pokemon },
    revalidate: 1,
  }
}

export default Pokemon;