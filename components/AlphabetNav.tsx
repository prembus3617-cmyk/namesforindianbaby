import Link from 'next/link';

export default function AlphabetNav() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold text-stone-800 mb-4 text-center">Browse Names by Letter</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {alphabet.map((letter) => (
          <Link
            key={letter}
            href={`/names/${letter.toLowerCase()}`}
            className="w-10 h-10 flex items-center justify-center bg-stone-50 hover:bg-amber-600 hover:text-white border border-stone-200 rounded-lg text-stone-700 font-semibold transition shadow-xs"
          >
            {letter}
          </Link>
        ))}
      </div>
    </section>
  );
}