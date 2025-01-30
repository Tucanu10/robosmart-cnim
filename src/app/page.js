import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center p-8 lg:p-36 pt-0">
      {/* Flexbox container for image and ABOUT US section */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-8">
        {/* Image on top for small screens */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <Image
            src="/images/banner.png"
            alt="Team Photo"
            layout="responsive"
            width={600}
            height={300}
            className="rounded-3xl object-cover"
          />
        </div>

        {/* Text on the left, always above the image on smaller screens */}
        <section className="w-full lg:w-1/2 text-left flex flex-col justify-start items-start mt-8 lg:mt-0 lg:ml-8">
          <h1 className="text-4xl font-bold text-light-cyan">Welcome to Robosmart!</h1>
          <p className="text-light-cyan mt-4">
            We are Team #19110 from Slatina, Olt, competing in the FIRST Tech Challenge.
          </p>
          <h2 className="text-3xl font-bold text-light-cyan mt-8">ABOUT US</h2>
          <p className="mt-4 text-light-cyan text-lg lg:text-2xl">
            We are a passionate and driven team, dedicated to solving complex problems through innovation and teamwork. Our goal is to showcase the power of collaboration in robotics while learning and growing along the way.
          </p>
        </section>
      </div>
    </div>
  );
}
