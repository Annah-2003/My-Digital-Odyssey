// components/Navbar.js
import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
    <div className="text-2xl font-bold">My Portfolio</div>
    <div className="space-x-6">
      <Link href="/" className="hover:text-blue-500">Home</Link>
      <Link href="/about" className="hover:text-blue-500">About</Link>
      <Link href="/projects" className="hover:text-blue-500">Projects</Link>
      <Link href="/contact" className="hover:text-blue-500">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
