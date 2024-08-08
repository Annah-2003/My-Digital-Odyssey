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

  const floatingText = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  };

  const interactiveImage = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
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
              <motion.div whileHover="hover" variants={interactiveImage}>
                <Image 
                  src={profilePic} 
                  alt="Profile Picture" 
                  className="w-48 h-48 rounded-full mb-4 md:mb-0" 
                  width={192}
                  height={192}
                />
              </motion.div>
              <div className="flex space-x-6">
                <motion.div variants={iconVariants} whileHover="hover">
                  <BsFillMoonStarsFill 
                    className="text-3xl cursor-pointer" 
                    onClick={() => setDarkMode(!darkMode)}
                  />
                </motion.div>
                <motion.a
                  href="https://github.com/Annah-2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <AiFillGithub className="text-3xl cursor-pointer" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/irene-gitau-4048a5251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <AiFillLinkedin className="text-3xl cursor-pointer" />
                </motion.a>
              </div>
            </div>
            <motion.h1 
              className="text-5xl font-extrabold mb-6"
              variants={floatingText}
              animate="animate"
            >
              Welcome to My Digital Odyssey
            </motion.h1>
            <p className="text-lg mb-6">
              I&apos;m Irene Gitau, a passionate software engineer with expertise in modern web technologies.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/projects" legacyBehavior>
                <motion.a
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out"
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  View My Work
                </motion.a>
              </Link>
              <Link href="/rating-game" legacyBehavior>
                <motion.a
                  className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 px-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out"
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  Play the Rating Game
                </motion.a>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
