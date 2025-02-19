"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function TeamCard({ member }) {
  const defaultImage = "/images/default.png";
  const imageUrl = member.image || defaultImage;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="
        bg-slate-300/10 p-4 shadow-md rounded-3xl backdrop-blur-lg 
        border border-white/10 transition-all duration-300 
        hover:scale-105 relative overflow-hidden 
        h-56 sm:h-64 md:h-72 lg:h-80
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container grows/shrinks on hover */}
      <div
        className="relative mx-auto transition-all duration-300 ease-in-out w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44"
      >
        <Image
          src={imageUrl}
          alt={member.name}
          width={160}
          height={160}
          className="rounded-3xl object-cover p-2"
        />
      </div>

      {/* Text Section (smaller on hover) */}
      <div className="text-center m-3 transition-all duration-300 h-full">
        {isHovered ? (
          <p
            className="
              text-xs sm:text-sm text-light-cyan font-mono 
              whitespace-pre-line px-2 
              overflow-y-auto max-h-full
            "
          >
            {member.description}
          </p>
        ) : (
          <>
            <h2 className="text-lg font-medium text-light-cyan font-playwrite">
              {member.name}
            </h2>
            <p className="text-sm text-light-cyan font-mono">
              {member.role}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
