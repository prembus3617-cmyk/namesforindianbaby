import { notFound } from 'next/navigation';

// Temporary mock database query function (Replace this later with your MongoDB / JSON lookup)
async function getNameDetails(slug) {
  // Simulating a database lookup using the slug string
  const database = {
    "aarav": {
      name: "Aarav",
      gender: "Boy",
      origin: "Sanskrit",
      meaning: "Peaceful, calm, wise, or musical note.",
      letter: "A",
      popularity: "#12",
    },
    "diya": {
      name: "Diya",
      gender: "Girl",
      origin: "Hindi / Sanskrit",
      meaning: "Light, lamp, or a bright glow that brings radiance.",
      letter: "D",
      popularity: "#5",
    }
  };

  const normalizedSlug = slug.toLowerCase();
  return database[normalizedSlug] || null;
}

// Generate dynamic SEO metadata for Google search indexing
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getNameDetails(slug);

  if (!data) {
    return {
      title: "Name Not Found | Names for Indian Baby",
      description: "The baby name you are looking for does not exist in our directory.",
    };
  }

  return {
    title: `${data.name} - Meaning, Origin & Significance | Names for Indian Baby`,
    description: `Discover the meaning, origin, and cultural background of the Indian baby name ${data.name}. Explore more names on namesforindianbaby.com.`,
  };
}

export default async function NameProfilePage({ params }) {
  // Await params as required by modern Next.js App Router versions
  const { slug } = await params;
  const data = await getNameDetails(slug);

  // Trigger a 404 page if the name doesn't exist in our data source
  if (!data) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-stone-500 mb-6">
        <a href="/" className="hover:underline">Home</a> &gt; 
        <a href={`/names/${data.letter.toLowerCase()}`} className="hover:underline mx-1">
          Letter {data.letter}
        </a> &gt; 
        <span className="text-stone-800 font-medium">{data.name}</span>
      </nav>

      {/* Main Profile Card */}
      <div className="bg-[#FAF7F2] border border-stone-200 rounded-2xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="inline-block bg-stone-200 text-stone-700 text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              {data.gender} • {data.origin}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-2">{data.name}</h1>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="bg-amber-100 hover:bg-amber-200 text-amber-800 px-4 py-2 rounded-xl text-sm font-medium transition">
              ♡ Save to Shortlist
            </button>
          </div>
        </div>

        {/* Meaning Section */}
        <div className="mt-8 border-t border-stone-200 pt-6">
          <h2 className="text-lg font-semibold text-stone-800 mb-2">Meaning & Significance</h2>
          <p className="text-stone-600 text-lg leading-relaxed">{data.meaning}</p>
        </div>

        {/* Quick Attributes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-stone-200 text-sm">
          <div>
            <span className="block text-stone-400">Origin / Culture</span>
            <span className="font-medium text-stone-800 text-base">{data.origin}</span>
          </div>
          <div>
            <span className="block text-stone-400">Starts With</span>
            <span className="font-medium text-stone-800 text-base">Letter {data.letter}</span>
          </div>
          <div>
            <span className="block text-stone-400">Popularity Rank</span>
            <span className="font-medium text-stone-800 text-base">{data.popularity}</span>
          </div>
        </div>
      </div>
    </main>
  );
}