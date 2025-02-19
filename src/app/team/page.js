import TeamCard from '../../components/TeamCard';

export default function Team() {
  const members = [
    { name: "Dan Pietriș"
      , role: "Team Mentor"
      , image: "/images/pietris.png"
      , description: "A dedicated mentor who inspires innovation and teamwork, guiding the team through challenges with wisdom and experience." },

    { name: "Sorin"
      , role: "Team Leader"
      , image: "/images/absent.png"
      , description: "Arunc cu robotu pe geam 🤖🔥 \n\n@sorin.snk" },

    { name: "Țucă"
      , role: "Chief-Programmer"
      , image: "/images/tuca.png", 
      description: "🗣️Ba am o idee foarte BUNĂ🙅 \n\n@alex.tucanu" },

    { name: "Luca"
      , role: "Mechanic"
      , image: "/images/luca.png"
      , description: "Am otita🧏🏻‍♂️ \n\n@luca.ene" },

    { name: "Lorena"
      , role: "Notebook Redactor"
      , image: "/images/lorena.png"
      , description: "hei cf? \n\n@capsunata" },

    { name: "Cătălin"
      , role: "Web Designer"
      , image: "/images/samanta.png"
      , description: "Seminte enjoyer \n\n@catalin_993" },

    { name: "Măldă"
      , role: "Chief-Mechanic"
      , image: "/images/malda.png"
      , description: "Sigma + chill guy" },

    { name: "Radu"
      , role: "Mechanic"
      , image: "/images/coma.png"
      , description: "Nu plangem dupa femei cum plangem dupa SHAORMA 🌯\n\n@_andreikom_" },

    { name: "Alexia"
      , role: "Notebook Coordinator"
      , image: "/images/zao.png"
      , description: "An organized and detail-oriented coordinator. \n\n@alexia.zao" },

    { name: "Dasha"
      , role: "Notebook Designer"
      , image: "/images/dasha.png"
      , description: "A creative strategist, developing engaging content and fostering connections to enhance the team’s public presence." },

    { name: "Ancuța"
      , role: "3D Designer"
      , image: "/images/ancuta.png"
      , description: "A great creative mind, bringing ideas to reality with the help of 3D printing." },
    { name: "Andrei"
      , role: "Merchandiser"
      , image: "/images/bisbal.png"        
      , description: "Brawl Stars\nClash Royale\nTikTok \n\n@andrei__martinescu" },
];

  return (
    <div className="min-h-screen h-200vh overflow-y-scroll pb-20">
      <div className="p-8">
        <h1 className="text-2xl md:text-3xl font-bold font-playwrite text-light-cyan text-center">👋 Meet the Dream Team! 🌟</h1>
        <h6 className="font-bold font-playwrite text-light-cyan text-center"> Click each of us for a surprise</h6>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 lg:p-96 lg:pt-0 mt-8">
          {members.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
