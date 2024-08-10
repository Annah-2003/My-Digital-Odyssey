// pages/about.js
import Navbar from '../components/NavBar';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaLightbulb, FaRocket } from 'react-icons/fa';
import Image from 'next/image';
import profilePic from '../public/profile-pic.png';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 dark:bg-gray-900 text-white">
      <Navbar />
      <section className="p-8">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image 
            src={profilePic} 
            alt="Irene Gitau" 
            className="rounded-full shadow-lg mb-6 md:mb-0 md:mr-8"
            width={150} 
            height={150} 
          />
          <motion.h1
            className="text-4xl font-bold text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            About Me
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-lg mb-8 text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          I&apos;m Irene Gitau, a software engineer with a passion for creating web applications that are visually appealing and highly functional. My expertise lies in front-end and back-end development, and I have a strong foundation in design.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <div className="bg-blue-800 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out">
            <FaLaptopCode className="text-4xl text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="list-disc pl-5">
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Python</li>
            </ul>
          </div>

          <div className="bg-blue-800 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out">
            <FaLightbulb className="text-4xl text-yellow-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Career Aspirations</h2>
            <p>
              My goal is to leverage my skills to build innovative solutions that improve user experiences and contribute to the advancement of technology.
            </p>
          </div>

          <div className="bg-blue-800 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out">
            <FaRocket className="text-4xl text-red-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Hobbies</h2>
            <p>
              When I&apos;m not coding, I enjoy listening to the Queen Beyonce, reading thriller novels, and playing chess.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
