import TeamCard from '../../components/TeamCard';

export default function Team() {
  const members = [
    { name: "Pietriș Dan", role: "Mentor", image: "", description: "A dedicated mentor who always inspires innovation and teamwork, guiding the team through challenges." },
    { name: "Sorin", role: "Team Leader", image: "/images/absent.png", description: "The visionary Team Leader, orchestrating every project with strategic thinking and unparalleled leadership." },
    { name: "Țucă", role: "Programator", image: "/images/tuca.png", description: "A talented programmer, constantly pushing the limits of coding to create seamless user experiences." },
    { name: "Luca", role: "Designer 3D", image: "/images/luca.luca", description: "A creative mind in 3D design, bringing visual concepts to life with passion and precision." },
    { name: "Măldă", role: "Marketing", image: "/images/coma.png", description: "The marketing genius, making sure our team's work reaches the right audience with impactful campaigns." },
    { name: "Radu", role: "Marketing", image: "/images/malda.png", description: "A creative force in marketing, always brainstorming fresh ideas to keep the team ahead of trends." },
    { name: "Cătălin", role: "Mecanic", image: "/images/samanta.png", description: "The mechanic behind the magic, ensuring everything functions perfectly with expert hands-on knowledge." },
    { name: "Alexia", role: "Marketing", image: "/images/zao.png", description: "A powerhouse in marketing, crafting messages that resonate and connect with people." }
  ];

  return (
    <div className="min-h-screen h-200vh overflow-y-scroll">
      <div className="p-8">
        <h1 className="text-3xl font-bold text-light-cyan text-center">Meet the Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 lg:p-96 lg:pt-0 mt-8">
          {members.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
