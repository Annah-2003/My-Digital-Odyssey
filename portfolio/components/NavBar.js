import { useState } from 'react';
import Link from 'next/link';
import { HomeIcon } from '../components/icons/HomeIcon';
import { AboutIcon } from '../components/icons/AboutIcon';
import { ProjectsIcon } from '../components/icons/ProjectsIcon';
import { ContactIcon } from '../components/icons/ContactIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">CODEDBYANNAH</div>
      <div className="hidden md:flex space-x-3">
        <Link href="/" className="hover:text-pink-500 flex items-center space-x-1">
          <HomeIcon />
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/about" className="hover:text-pink-500 flex items-center space-x-1">
          <AboutIcon />
          <span className="text-xs">About</span>
        </Link>
        <Link href="/projects" className="hover:text-pink-500 flex items-center space-x-1">
          <ProjectsIcon />
          <span className="text-xs">Projects</span>
        </Link>
        <Link href="/contact" className="hover:text-pink-500 flex items-center space-x-1">
          <ContactIcon />
          <span className="text-xs">Contact</span>
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
          <Link href="/" className="hover:text-pink-500 flex items-center space-x-1" onClick={() => setIsOpen(false)}>
            <HomeIcon />
            <span className="text-xs">Home</span>
          </Link>
          <Link href="/about" className="hover:text-pink-500 flex items-center space-x-1" onClick={() => setIsOpen(false)}>
            <AboutIcon />
            <span className="text-xs">About</span>
          </Link>
          <Link href="/projects" className="hover:text-pink-500 flex items-center space-x-1" onClick={() => setIsOpen(false)}>
            <ProjectsIcon />
            <span className="text-xs">Projects</span>
          </Link>
          <Link href="/contact" className="hover:text-pink-500 flex items-center space-x-1" onClick={() => setIsOpen(false)}>
            <ContactIcon />
            <span className="text-xs">Contact</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
