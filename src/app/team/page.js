import TeamCard from '../../components/TeamCard';

export default function Team() {
  const members = [
    { name: "Dan Pietriș"
      , role: "Mentor"
      , image: ""
      , description: "A dedicated mentor who inspires innovation and teamwork, guiding the team through challenges with wisdom and experience." },

    { name: "Sorin"
      , role: "Team Leader"
      , image: "/images/absent.png"
      , description: "The visionary leader, orchestrating projects with strategic thinking, ensuring smooth collaboration, and keeping the team motivated.\n\n\n 'Arunc cu robotu pe geam'" },

    { name: "Țucă"
      , role: "Programmer"
      , image: "/images/tuca.png", 
      description: "A talented programmer who pushes coding limits, optimizing performance and crafting efficient algorithms. " },

    { name: "Luca"
      , role: "3D Designer"
      , image: "/images/luca.png"
      , description: "A creative mind in 3D design, turning ideas into detailed models with precision and artistic vision.\n\n\n 'Am otita'." },

    { name: "Lorena"
      , role: "Notebook Coordinator"
      , image: ""
      , description: "The structural expert, ensuring every detail in the engineering notebook aligns with competition standards.\n\n\n 'hei cf?'" },

    { name: "Cătălin"
      , role: "Mechanic"
      , image: "/images/samanta.png"
      , description: "The hands-on expert, ensuring the robot's mechanics function seamlessly through meticulous engineering.\n\n\n 'Seminte enjoyer'" },

    { name: "Măldă"
      , role: "PR & Marketing"
      , image: "/images/malda.png"
      , description: "The marketing mastermind, ensuring the team's achievements reach the right audience with engaging campaigns.\n\n\n 'Sigma + chill guy'" },

    { name: "Radu"
      , role: "Mechanic"
      , image: "/images/coma.png"
      , description: "A skilled builder, assembling and refining mechanical systems with innovation and problem-solving expertise.\n\n\n 'Nu plangem dupa femei cum plangem dupa SHAORMA'" },

    { name: "Alexia"
      , role: "Notebook Coordinator"
      , image: "/images/zao.png"
      , description: "An organized and detail-oriented coordinator, structuring the team's documentation for clarity and competition success." },

    { name: "Dasha"
      , role: "PR & Marketing"
      , image: ""
      , description: "A creative strategist, developing engaging content and fostering connections to enhance the team’s public presence." },

    { name: "Anca"
      , role: "Notebook Redactor"
      , image: ""
      , description: "A meticulous writer, documenting the team’s journey with precision to showcase progress and innovation." },
  
];

  return (
    <div className="min-h-screen h-200vh overflow-y-scroll pb-20">
      <div className="p-8">
        <h1 className="text-3xl font-bold font-playwrite text-light-cyan text-center">👋 Meet the Dream Team! 🌟</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 lg:p-96 lg:pt-0 mt-8">
          {members.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
