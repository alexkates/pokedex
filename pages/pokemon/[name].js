import Image from 'next/image'
import Link from 'next/link'

function Pokemon({ pokemon }) {
  return (
    <>
      <Link href="/pokemon"><a>back</a></Link>
      <h1>{pokemon.name}</h1>
      <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={150} height={150} />
    </>
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
  const pokemon = await res.json();

  return {
    props: { pokemon },
  }
}

export default Pokemon;