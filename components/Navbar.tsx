import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-stone-800 tracking-tight">
          NamesForIndianBaby<span className="text-amber-600">.</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <Link href="/names/gender/boy" className="hover:text-amber-600 transition">Boy Names</Link>
          <Link href="/names/gender/girl" className="hover:text-amber-600 transition">Girl Names</Link>
          <Link href="/names/a" className="hover:text-amber-600 transition">A-Z Index</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/shortlist" className="flex items-center gap-1.5 text-stone-700 bg-stone-50 px-3 py-1.5 rounded-full border border-stone-200 text-sm hover:bg-stone-100 transition">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span className="font-semibold">Shortlist</span>
          </Link>
        </div>
      </div>
    </header>
  );
}