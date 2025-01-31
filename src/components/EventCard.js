export default function EventCard({ year, event, award }) {
    return (
      <div className="bg-slate-300/10 border border-light-cyan/0 rounded-xl p-4 w-1/2">
        <h2 className="text-2xl font-bold text-light-cyan font-">{year}</h2>
        <p className="text-light-cyan ">{event}</p>
        {award && <p className="text-light-cyan font-bold">🏆 {award}</p>}
      </div>
    );
  }
  