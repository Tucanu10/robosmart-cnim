import Image from 'next/image';

export default function TeamCard({ member }) {
  const defaultImage = "/images/default.png"; // Default image
  const imageUrl = member.image || defaultImage; // Use member image or default

  return (
    <div className="bg-cal-poly-green/20 p-4 shadow-md rounded-3xl backdrop-blur-lg border border-white/0 transition-all hover:scale-105 relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden group">

      {/* Member's image, name, and role */}
      <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 mx-auto opacity-100 group-hover:opacity-0 transition-opacity">
        <Image
          src={imageUrl}
          alt={member.name}
          fill
          className="rounded-3xl object-cover p-2"
        />
      </div>
      <div className="text-center opacity-100 group-hover:opacity-0 transition-opacity">
        <h2 className="text-lg font-semibold text-slate-900">{member.name}</h2>
        <p className="text-sm text-slate-900">{member.role}</p>
      </div>

      {/* Hover panel for description */}
      <div className="absolute inset-0 flex items-center justify-center text-slate-900 text-center p-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
        <p>{member.description}</p>
      </div>
    </div>
  );
}
