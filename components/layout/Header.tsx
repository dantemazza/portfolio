import Link from 'next/link';

export function Header() {
  return (
    <header className="py-8 text-center">
      <Link href="/">
        <h1 className="text-4xl md:text-5xl font-bold text-[#c9d1d9] hover:text-[#58a6ff] transition-colors">
          Dante Mazza
        </h1>
      </Link>
      <p className="text-[#8b949e] text-base mt-2">
        Software Engineer
      </p>
    </header>
  );
}
