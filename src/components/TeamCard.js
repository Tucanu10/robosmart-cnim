import Image from 'next/image';

export default function TeamCard({ member }) {
  const defaultImage = "/images/default.png";
  const imageUrl = member.image || defaultImage;

  return (
    <div className="bg-slate-300/10 p-4 shadow-md rounded-3xl backdrop-blur-lg border border-white/10 transition-all hover:scale-105 relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden group">

      {/* Image & Role */}
      <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 mx-auto transition-opacity group-hover:opacity-0">
        <Image
          src={imageUrl}
          alt={member.name}
          width={160}
          height={160}
          className="rounded-3xl object-cover p-2"
        />
      </div>

      {/* Name & Role */}
      <div className="text-center transition-opacity group-hover:opacity-0">
        <h2 className="text-lg font-medium text-light-cyan font-playwrite">{member.name}</h2>
        <p className="text-sm text-light-cyan font-mono">{member.role}</p>
      </div>

      {/* Hover Description Panel */}
      <div className="absolute inset-0 flex items-center justify-center text-light-cyan text-center p-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
        <p className="whitespace-pre-line">{member.description}</p>
      </div>
    </div>
  );
}
