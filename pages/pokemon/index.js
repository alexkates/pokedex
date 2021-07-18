import PokemonList from "../../components/pokemonList";
import { useRouter } from 'next/router'

const LIMIT = 20;

function Index({ results, count, previous, next }) {
  const router = useRouter();

  return (
    <div>
      <PokemonList pokemon={results} />
      <div className="flex justify-between mt-4">
        {previous && <button onClick={() => router.push(`/pokemon?page=${previous}`)}>Previous</button>}
        {next && <button onClick={() => router.push(`/pokemon?page=${next}`)}>Next</button>}
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  console.log(query);
  const res = await fetch(query.page || `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=0`)
  const props = await res.json();
  console.log(props);

  return {
    props,
  }
}

export default Index;