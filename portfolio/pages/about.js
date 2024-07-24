// pages/about.js
import Navbar from '../components/NavBar';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <Navbar />
      <section className="p-8 bg-white">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          I&apos;m Irene Gitau, a software engineer specializing in front-end and back-end development. With a keen eye for design and a strong foundation in coding, I aim to create web applications that are both visually appealing and highly functional.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">Skills</h2>
            <ul className="list-disc pl-5">
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Python</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Career Aspirations</h2>
            <p>
              My goal is to leverage my skills to build innovative solutions that improve user experiences and contribute to the advancement of technology.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
