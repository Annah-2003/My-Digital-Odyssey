// pages/index.js
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import Navbar from '../components/NavBar';
import { motion } from 'framer-motion';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar />
      <main className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen p-6">
        <section className="flex flex-col items-center justify-center min-h-screen text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="flex justify-between w-full mb-6">
              <BsFillMoonStarsFill 
                className="text-3xl cursor-pointer" 
                onClick={() => setDarkMode(!darkMode)}
              />
              <div className="flex space-x-4">
                <AiFillTwitterCircle className="text-3xl cursor-pointer hover:text-blue-500" />
                <AiFillLinkedin className="text-3xl cursor-pointer hover:text-blue-500" />
                <AiFillYoutube className="text-3xl cursor-pointer hover:text-red-500" />
              </div>
            </div>
            <h1 className="text-5xl font-extrabold mb-6">Welcome to My Digital Odyssey</h1>
            <p className="text-lg mb-6">
              I'm Irene Gitau, a passionate software engineer with expertise in modern web technologies.
            </p>
            <a
              href="/projects"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              View My Work
            </a>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
