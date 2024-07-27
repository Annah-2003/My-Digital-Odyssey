// components/Navbar.js
import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
    <div className="text-2xl font-bold">CODEDBYANNAH</div>
    <div className="space-x-6">
      <Link href="/" className="hover:text-pink-500">Home</Link>
      <Link href="/about" className="hover:text-pink-500">About</Link>
      <Link href="/projects" className="hover:text-pink-500">Projects</Link>
      <Link href="/contact" className="hover:text-pink-500">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
