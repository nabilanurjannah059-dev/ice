import Image from 'next/image';


export default function About() {
return (
<section id="about" className="mt-14 grid md:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-2xl font-bold mb-3">Tentang Kami</h3>
<p className="text-slate-600 mb-4">Kami membuat es krim dengan cinta — memakai bahan pilihan dan resep yang teruji. Mulai dari rasa klasik sampai limited edition, semuanya dibuat segar setiap hari.</p>
<ul className="list-disc pl-5 text-slate-600">
<li>Bahan berkualitas</li>
<li>Proses higienis</li>
<li>Rasa yang konsisten</li>
</ul>
</div>
<div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
<Image src="/about.jpg" alt="about" fill style={{ objectFit: 'cover' }} />
</div>
</section>
);
}