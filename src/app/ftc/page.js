import Link from 'next/link';

export default function FTCInfo() {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-light-cyan">FIRST Tech Challenge</h1>
      <p className="text-light-cyan mt-4 max-w-2xl mx-auto">
        FIRST Tech Challenge is a robotics competition that challenges students to design, build, and program robots to complete tasks in an exciting and competitive environment. Teams from across the country collaborate and innovate to advance STEM education while competing in national and international events.
      </p>
      <div className="mt-8">
        <Link href="https://natieprineducatie.ro/" target="_blank" className="text-green-400 underline hover:text-green-300">
          Learn more about FTC Romania
        </Link>
      </div>
    </div>
  );
}