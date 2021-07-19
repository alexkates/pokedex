import Link from 'next/link';

function SiteLayout({ children }) {
  return (
    <div className="container mx-auto px-4">
      <nav className="flex justify-between m-4">
        <div>
          <Link href="/"><a className="ml-4">Home</a></Link>
        </div>
        <div>
          <Link href="/pokemon"><a className="ml-4">Pokemon</a></Link>
        </div>
      </nav>
      <section className="my-8">
        {children}
      </section>
    </div>
  );
}

export default SiteLayout;