import Link from 'next/link';

function SiteLayout({ children }) {
  return (
    <>
      <nav className="flex justify-end">
        <Link href="/"><a className="ml-4">Home</a></Link>
        <Link href="/pokemon"><a className="ml-4">Pokemon</a></Link>
      </nav>
      <section className="container mx-auto px-4">
        {children}
      </section>
    </>
  );
}

export default SiteLayout;