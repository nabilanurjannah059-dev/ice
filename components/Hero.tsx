import Image from 'next/image';


export default function Hero() {
return (
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">Es Krim Enak. Rasa yang Bikin Bahagia.</h1>
<p className="text-lg text-slate-600 mb-6">Pilihan rasa klasik dan spesial, dibuat dengan bahan berkualitas. Nikmati momen manis bersama keluarga & teman.</p>
<div className="flex gap-3">
<a href="#flavors" className="px-5 py-3 bg-rose-600 text-white rounded-lg shadow">Lihat Rasa</a>
<a href="#order" className="px-5 py-3 border border-rose-600 text-rose-600 rounded-lg">Pesan Sekarang</a>
</div>
</div>
<div className="relative w-full h-72 md:h-96">
<Image src="/hero.jpg" alt="Ice cream hero" fill style={{ objectFit: 'cover' }} className="rounded-2xl shadow-lg" />
</div>
</div>
);
}