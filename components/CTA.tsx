export default function CTA() {
return (
<section id="order" className="mt-14 bg-white/60 rounded-2xl p-8 shadow-inner">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h4 className="text-xl font-bold">Mau pesan sekarang?</h4>
<p className="text-slate-600">Klik tombol pesan untuk menuju form pemesanan atau hubungi kami via WhatsApp.</p>
</div>
<div className="flex gap-3">
<a className="px-6 py-3 bg-rose-600 text-white rounded-md">Form Pesan</a>
<a className="px-6 py-3 border border-rose-600 rounded-md">Hubungi WA</a>
</div>
</div>
</section>
);
}