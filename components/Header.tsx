export default function Header() {
return (
<header className="bg-white/60 backdrop-blur sticky top-0 z-40">
<div className="container mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold">W</div>
<div className="font-semibold">Walls Inspired</div>
</div>
<nav className="hidden md:flex gap-6 items-center text-sm">
<a href="#flavors" className="hover:text-rose-600">Rasa</a>
<a href="#about" className="hover:text-rose-600">Tentang</a>
<a href="#order" className="px-4 py-2 bg-rose-600 text-white rounded-md shadow-sm hover:opacity-95">Pesan</a>
</nav>
<button className="md:hidden p-2">☰</button>
</div>
</header>
);
}