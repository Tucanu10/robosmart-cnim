export default function EventCard({ year, event, award }) {
    return (
      <div className="border border-light-cyan rounded-xl p-4 w-1/2">
        <h2 className="text-2xl font-semibold text-light-cyan">{year}</h2>
        <p className="text-light-cyan">{event}</p>
        {award && <p className="text-green-400">🏆 {award}</p>}
      </div>
    );
  }
  