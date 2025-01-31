import Link from 'next/link';

export default function FTCInfo() {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-light-cyan mb-6">
        🤖🌊 2024-2025 FIRST® DIVE presented by Qualcomm
      </h1>
      
      <div className="max-w-3xl mx-auto">
        <p className="text-light-cyan text-lg mb-6">
          In FIRST® Tech Challenge, students collaborate with mentors to design, build, 
          and program classroom-scale robots that <span className="text-green-400">autonomously complete tasks </span> 
          before competing in thrilling <span className="text-green-400">2v2 driver-controlled matches</span>. 
          Beyond the field, teams develop critical STEM skills through community 
          outreach and engineering innovation.
        </p>

        <div className="bg-cal-poly-green/10 rounded-xl p-6 mb-8 backdrop-blur-md border border-light-cyan/0">
          <h2 className="text-2xl font-bold text-light-cyan mb-4">
            Exploring Ocean Ecosystems 🌐🐠
          </h2>
          <p className="text-light-cyan mb-4">
            &quot;The ocean&apos;s true potential lies beneath the surface - a complex web 
            of life where every organism contributes to a thriving ecosystem.&quot;
          </p>
          <p className="text-light-cyan">
            This season, teams will dive into marine exploration challenges that mirror 
            real-world underwater innovation. Through robotics, we&apos;ll discover how:
          </p>
          <ul className="text-light-cyan text-left list-disc pl-6 mt-4 space-y-3">
            <li>🤖 Robotics can support healthy ocean ecosystems</li>
            <li>🌍 Community collaboration drives environmental solutions</li>
            <li>💡 STEM innovation addresses marine conservation</li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-light-cyan text-lg">
            Join us in developing technologies that could shape the future of 
            ocean exploration and preservation! 🌟
          </p>
          <Link 
            href="https://info.firstinspires.org/first-dive" 
            target="_blank"
            className="text-green-400 underline hover:text-light-cyan text-lg inline-block mt-4"
          >
          Explore Season Details
          </Link>
          <br />
          <Link
            href="https://natieprineducatie.ro/"
            target="_blank"
            className="text-green-400 underline hover:text-light-cyan text-lg"
          >
          FTC Romania Official Site
          </Link>
        </div>
      </div>
    </div>
  );
}