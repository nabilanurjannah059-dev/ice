import FlavorCard from './FlavorCard';


export default function FlavorGrid() {
const flavors = [
{ name: 'Vanilla Classic', desc: 'Lembut dan gurih', img: '/flavor1.jpg' },
{ name: 'Cokelat Belgia', desc: 'Intense chocolate', img: '/flavor2.jpg' },
{ name: 'Strawberry Fresh', desc: 'Buah asli', img: '/flavor3.jpg' },
{ name: 'Caramel Swirl', desc: 'Manis kriuk', img: '/flavor4.jpg' },
];


return (
<section id="flavors" className="mt-14">
<h2 className="text-2xl font-bold mb-6">Pilihan Rasa</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
{flavors.map((f, i) => (
<FlavorCard key={i} {...f} />
))}
</div>
</section>
);
}