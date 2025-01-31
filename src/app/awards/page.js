"use client";
import Link from "next/link";
import EventCard from "@/components/EventCard";

export default function Awards() {
  const awards = [
    { year: 2023, event: "RO #3 TIMISOARA 070000" , award : "Rank 29 / 42"},
    { year: 2022, event: "RO BUCHAREST #2 - FTC Romania Qualifying Tournament" , award : "Rank 77 / 83"},
    { year: 2021, event: "RO #1 Regionala Timisoara & Bucuresti", award: "Rank 36 / 43" },
    { year: 2020, event: "RO FTC TIMISOARA Qualifying Tournament #4 REMOTE", award: "Connect Award 3rd Place" },
  ];

  return (
    <div className="p-8 text-center">
  <h1 className="text-4xl font-bold text-light-cyan font-playwrite">
    🏆 Our Trophy Wall 🏅
  </h1>
  <p className="text-light-cyan mt-4">
    Check out our journey through competitions!
  </p>
  <p className="text-light-cyan mt-2">
    Every challenge makes us stronger! Keep scrolling to see our growth! 📈
  </p>
  <Link
    href="https://ftc-events.firstinspires.org/team/19110"
    className="text-green-400 hover:underline mt-4 inline-block"
    target="_blank"
    rel="noopener noreferrer"
  >
    🌐 Official FTC Events Page
  </Link>

      {/* Centered Grid */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 pb-20">
        {awards.map((award, index) => (
          <EventCard key={index} year={award.year} event={award.event} award={award.award} />
        ))}
      </div>

      
    </div>
  );
}
