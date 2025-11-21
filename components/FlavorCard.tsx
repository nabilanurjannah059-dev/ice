import Image from 'next/image';


type Props = {
name: string;
desc: string;
img: string;
};


export default function FlavorCard({ name, desc, img }: Props) {
return (
<div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition">
<div className="relative h-44 rounded-xl overflow-hidden mb-3">
<Image src={img} alt={name} fill style={{ objectFit: 'cover' }} />
</div>
<div>
<h3 className="font-semibold">{name}</h3>
<p className="text-sm text-slate-500">{desc}</p>
<div className="mt-3 flex items-center justify-between">
<span className="font-bold">Rp 18.000</span>
<button className="px-3 py-1 bg-rose-600 text-white rounded-md text-sm">Tambah</button>
</div>
</div>
</div>
);
}