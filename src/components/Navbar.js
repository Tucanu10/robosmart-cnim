"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faTrophy, faInfoCircle } from '@fortawesome/free-solid-svg-icons'; // Import the icons

export default function Navbar() {
  const navbarConstants = {
    background: "bg-slate-300/10",
    padding: "p-4",
    textColor: "text-light-cyan",
    hoverColor: "hover:text-white",
    desktopBorderColor: "border-light-cyan/60",
    borderSize: "border-r",
    backdropBlur: "backdrop-blur-lg",
  };

  return (
    <nav
      className={`${navbarConstants.background} ${navbarConstants.padding} ${navbarConstants.backdropBlur} rounded-b-3xl max-w-screen-lg mx-auto`}
    >
      <div className="container mx-auto flex justify-between items-center">
      <h1 className={`text-lg font-bold ${navbarConstants.textColor} flex items-center`}>
  {/* SVG Logo from file */}
  <div className="mr-2 w-6 h-6 md:w-8 md:h-8">
    <img
      src="/logo.svg"
      alt="Robosmart Logo"
      className="w-full h-full"
    />
  </div>
  <span className="font-playwrite">Robosmart #19110</span>
</h1>

        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-4">
          <Link
            href="/"
            className={`text-light-cyan hover:text-white ${navbarConstants.borderSize} ${navbarConstants.desktopBorderColor} pr-4`}
          >
            Home
          </Link>
          <Link
            href="/team"
            className={`text-light-cyan hover:text-white ${navbarConstants.borderSize} ${navbarConstants.desktopBorderColor} pr-4`}
          >
            Team
          </Link>
          <Link
            href="/awards"
            className={`text-light-cyan hover:text-white ${navbarConstants.borderSize} ${navbarConstants.desktopBorderColor} pr-4`}
          >
            Awards
          </Link>
          <Link
            href="/ftc"
            className={`text-light-cyan hover:text-white pr-4`}
          >
            FTC Info
          </Link>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden sm:block">
          <div className="flex space-x-4">
            <Link href="/" className="text-light-cyan hover:text-white">
              <FontAwesomeIcon icon={faHome} size="lg" />
            </Link>
            <Link href="/team" className="text-light-cyan hover:text-white">
              <FontAwesomeIcon icon={faUsers} size="lg" />
            </Link>
            <Link href="/awards" className="text-light-cyan hover:text-white">
              <FontAwesomeIcon icon={faTrophy} size="lg" />
            </Link>
            <Link href="/ftc" className="text-light-cyan hover:text-white">
              <FontAwesomeIcon icon={faInfoCircle} size="lg" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}