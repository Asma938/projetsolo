import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="centered-content"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold">Bienvenue sur mon Portfolio</h1>
    </motion.div>
  );
};

export default Home;