'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function HeroSearch() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="bg-gradient-to-b from-amber-50/50 to-white py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
          Discover Meaningful <span className="text-amber-600">Indian Baby Names</span>
        </h1>
        <p className="text-lg text-stone-600">
          Explore thousands of traditional, modern, and unique names with origins and meanings.
        </p>

        <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, meaning, or origin (e.g., Aarav)..."
            className="w-full pl-12 pr-28 py-4 bg-white rounded-full border border-stone-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-stone-800 placeholder-stone-400 text-sm sm:text-base"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-full font-medium text-sm transition shadow-sm"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}