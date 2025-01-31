"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

const carouselImages = [
  "/images/banner1.png",
  "/images/banner2.png",
  "/images/banner3.png",
  //"/images/banner4.png",
  //"/images/banner5.png",
  //"/images/banner6.png",
  // Add more images as needed
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredSegment, setHoveredSegment] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center p-8 lg:p-36 pt-0">
  <div className="flex flex-col lg:flex-row items-center justify-center mt-8">
    {/* Carousel Container */}
    <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] relative overflow-hidden rounded-3xl backdrop-blur-lg">
      {carouselImages.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image with edge fade */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <Image
              src={src}
              alt={`Team photo ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-3xl brightness-80"
              priority={index === 0}
            />
            {/* Edge fade overlay */}
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(10,10,10,0.5)_100%)] mix-blend-multiply" />
          </div>
        </div>
      ))}

      {/* Segmented Scroll Bar */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-full p-2">
          <div className="flex gap-1 h-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                onMouseEnter={() => setHoveredSegment(index)}
                onMouseLeave={() => setHoveredSegment(-1)}
                className={`relative flex-1 transition-all ease-in-out duration-300 rounded-full ${
                  index === currentSlide
                    ? "bg-light-cyan/90"
                    : hoveredSegment === index
                    ? "bg-light-cyan/50"
                    : "bg-light-cyan/20"
                }`}
                style={{
                  width: `${100 / carouselImages.length}%`,
                }}
              >
                <div className="absolute inset-0 bg-white/10 transition-opacity opacity-0 hover:opacity-20 rounded-full" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Text Content */}
    <section className="w-full lg:w-1/2 text-left flex flex-col justify-start items-start mt-8 lg:mt-0 lg:ml-8">
      <h1 className="text-4xl font-bold text-light-cyan font-playwrite">
        🤖 Welcome to Robosmart! 🚀
      </h1>
      <p className="text-light-cyan mt-4 text-lg lg:text-2xl">
        ✨ We&apos;re Team #19110 from Slatina, Olt, rocking the FIRST Tech Challenge scene! 🇷🇴
      </p>
      <p className="mt-4 text-light-cyan text-lg lg:text-2xl">
        💡 A squad of passionate innovators solving complex problems through robotics magic! 
        Together we learn, build, and grow while creating awesome tech wonders! 🤩
      </p>
    </section>
  </div>
</div>
  );
}