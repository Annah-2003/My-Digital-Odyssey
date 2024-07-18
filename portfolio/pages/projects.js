// pages/projects.js
import Navbar from '../components/NavBar';
import { motion } from 'framer-motion';
import AnimatedImage from '../components/AnimatedImage';

export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1...',
      link: '',
      image: '/path/to/project1-image.jpg'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2...',
      link: 'https://github.com/username/project2',
      image: '/path/to/project2-image.jpg'
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <Navbar />
      <section className="p-8 bg-white">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          My Projects
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="border p-4 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <AnimatedImage src={project.image} alt={project.title} />
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} className="text-blue-500">GitHub</a>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
