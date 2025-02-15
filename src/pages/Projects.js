import { motion } from "framer-motion";

const projects = [
  {
    title: "To-Do List",
    description: "Une application React pour gérer des tâches.",
    link: "https://github.com/mon-github/todo-list",
  },
  {
    title: "Calculatrice",
    description: "Une calculatrice en JavaScript pur.",
    link: "https://github.com/mon-github/calculatrice",
  },
  {
    title: "Galerie d'images",
    description: "Affichage dynamique d'images avec React.",
    link: "https://github.com/mon-github/galerie-images",
  },
];

const Projects = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Mes Projets</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-400">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Voir le projet →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;