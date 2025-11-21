export default function Footer() {
return (
<footer className="mt-16 bg-white/80 py-6">
<div className="container mx-auto px-6 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between">
<div>© {new Date().getFullYear()} Walls-Inspired. Semua hak cipta milik pembuat asli.</div>
<div className="flex gap-4 mt-3 md:mt-0">
<a>Instagram</a>
<a>Facebook</a>
<a>Email</a>
</div>
</div>
</footer>
);
}