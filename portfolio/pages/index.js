import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import Navbar from '../components/NavBar';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        yoyo: Infinity,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.3,
      color: '#1DA1F2',
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

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
              <motion.div
                whileHover={{ scale: 1.3, color: '#FFD700' }} 
                transition={{ duration: 0.3 }}
              >
                <BsFillMoonStarsFill 
                  className="text-3xl cursor-pointer" 
                  onClick={() => setDarkMode(!darkMode)}
                />
              </motion.div>
              <div className="flex space-x-4">
                <motion.div variants={iconVariants} whileHover="hover">
                  <AiFillTwitterCircle className="text-3xl cursor-pointer" />
                </motion.div>
                <motion.div variants={iconVariants} whileHover="hover">
                  <AiFillLinkedin className="text-3xl cursor-pointer" />
                </motion.div>
              </div>
            </div>
            <h1 className="text-5xl font-extrabold mb-6">Welcome to My Digital Odyssey</h1>
            <p className="text-lg mb-6">
              I&apos;m Irene Gitau, a passionate software engineer with expertise in modern web technologies.
            </p>
            <Link href="/projects" legacyBehavior>
              <motion.a 
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                variants={buttonVariants}
                whileHover="hover"
              >
                View My Work
              </motion.a>
            </Link>
          </motion.div>
        </section>
      </main>
    </div>
  );
}