import Navbar from '../components/NavBar';
import { motion } from 'framer-motion';
import AnimatedImage from '../components/AnimatedImage';

export default function Projects() {
  const projects = [
    {
      title: 'CHUO YANGU',
      description: 'Description of project 1...',
      link: 'https://chuo-yangu.vercel.app/',
      image: '/path/to/project1-image.jpg',
    },
    {
      title: 'HER LINK',
      description: 'HerLink aims to create a user-friendly environment where individuals can connect with their girlfriends and chat about anything and everything. The application features a sleek and modern design, making it appealing and easy to navigate for users of all ages.',
      link: 'https://her-link.vercel.app/home',
      image: '/path/to/project2-image.jpg',
    },
    {
      title: 'QUOTE GEMS',
      description: 'HerLink aims to create a user-friendly environment where individuals can connect with their girlfriends and chat about anything and everything. The application features a sleek and modern design, making it appealing and easy to navigate for users of all ages.',
      link: 'https://65c1e9e7ccbef153940f2421--chipper-seahorse-fab0bb.netlify.app/',
      image: '/path/to/project2-image.jpg',
    },
    
    
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <Navbar />
      <section className="p-8">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          My Projects
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <AnimatedImage src={project.image} alt={project.title} />
              <h2 className="text-2xl font-bold mt-4 mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
