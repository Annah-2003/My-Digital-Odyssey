import { useState } from 'react';
import Link from 'next/link';
import { HomeIcon } from './icons/HomeIcon';
import { AboutIcon } from './icons/AboutIcon';
import { ProjectsIcon } from './icons/ProjectsIcon';
import { ContactIcon } from './icons/ContactIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">CODEDBYANNAH</div>
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-pink-500 flex items-center space-x-2">
          <HomeIcon />
          <span>Home</span>
        </Link>
        <Link href="/about" className="hover:text-pink-500 flex items-center space-x-2">
          <AboutIcon />
          <span>About</span>
        </Link>
        <Link href="/projects" className="hover:text-pink-500 flex items-center space-x-2">
          <ProjectsIcon />
          <span>Projects</span>
        </Link>
        <Link href="/contact" className="hover:text-pink-500 flex items-center space-x-2">
          <ContactIcon />
          <span>Contact</span>
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link href="/" className="hover:text-pink-500 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <HomeIcon />
            <span>Home</span>
          </Link>
          <Link href="/about" className="hover:text-pink-500 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <AboutIcon />
            <span>About</span>
          </Link>
          <Link href="/projects" className="hover:text-pink-500 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <ProjectsIcon />
            <span>Projects</span>
          </Link>
          <Link href="/contact" className="hover:text-pink-500 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <ContactIcon />
            <span>Contact</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
