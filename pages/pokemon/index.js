import PokemonList from "../../components/pokemonList";
import { useRouter } from 'next/router'
import ReactPaginate from 'react-paginate';

const LIMIT = 20;

function Index({ results, count }) {
  const router = useRouter();

  return (
    <div>
      <PokemonList pokemon={results} />
      <ReactPaginate
        containerClassName="flex justify-center"
        pageLinkClassName="p-2"
        previousLabel="<"
        nextLabel=">"
        onPageChange={page => router.push(`/pokemon?page=${page.selected}`)}
        pageCount={Math.ceil(count / LIMIT)}
      />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { page } = query;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${LIMIT * page}`)
  const props = await res.json();

  return {
    props
  }
}

export default Index;