
import Navbar from '../components/NavBar';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaLightbulb, FaRocket } from 'react-icons/fa';
import Image from 'next/image';
import profilePic from '../public/profile-pic.png';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 dark:bg-gray-900 text-white">
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
          I&apos;m a certified software engineer with a strong passion to create visually appealing and functional web applications. With expertise in front-end, back-end development and a strong design foundation, I aim to connect technology and business by developing innovative solutions that drive growth and enhance user experiences.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <div className="bg-blue-600 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out">
            <FaLaptopCode className="text-4xl text-blue-200 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="list-disc pl-5">
              <li>JavaScript</li>
              <li>HTML</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>CSS & Tailwind</li>
              <li>React.js framework</li>
              <li>Next.js framework</li>
              <li>Flask framework</li>
              <li>Django framework</li>
            </ul>
          </div>

          <div className="bg-blue-600 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out">
            <FaLightbulb className="text-4xl text-yellow-300 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Career Aspirations</h2>
            <p>
            My career aspiration is to bridge the gap between technology and business. As a software engineer currently pursuing a degree in Business and Information Technology, I aim to leverage my technical skills to create innovative solutions that drive business growth and enhance user experiences.
            </p>
          </div>

          <div className="bg-blue-600 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out">
            <FaRocket className="text-4xl text-red-300 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Hobbies</h2>
            <p>
              When I&apos;m not coding, I enjoy listening to the Queen Beyonce👑, reading thriller novels, and playing chess.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
