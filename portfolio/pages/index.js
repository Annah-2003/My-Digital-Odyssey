import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import Navbar from '../components/NavBar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../public/profile-pic.png';

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
    <div className={darkMode ? 'dark' : ''}>
      <Navbar />
      <main className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen p-6">
        <section className="flex flex-col items-center justify-center min-h-screen text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-3xl px-4 md:px-0"
          >
            <div className="flex flex-col md:flex-row justify-between items-center w-full mb-6">
              <Image 
                src={profilePic} 
                alt="Profile Picture" 
                className="w-40 h-40 rounded-full mb-4 md:mb-0" 
                width={160}
                height={160}
              />
              <div className="flex space-x-4">
                <motion.div variants={iconVariants} whileHover="hover">
                  <BsFillMoonStarsFill 
                    className="text-xl cursor-pointer" 
                    onClick={() => setDarkMode(!darkMode)}
                  />
                </motion.div>
                <motion.div variants={iconVariants} whileHover="hover">
                  <AiFillGithub className="text-xl cursor-pointer" />
                </motion.div>
                <motion.div variants={iconVariants} whileHover="hover">
                  <AiFillLinkedin className="text-xl cursor-pointer" />
                </motion.div>
              </div>
            </div>
            <h1 className="text-5xl font-extrabold mb-6">Welcome to My Digital Odyssey</h1>
            <p className="text-lg mb-6">
              I&apos;m Irene Gitau, a passionate software engineer with expertise in modern web technologies.
            </p>
            <Link href="/projects" legacyBehavior>
              <motion.a
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out"
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
