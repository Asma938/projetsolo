import { Link } from "react-router-dom";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <h1 className="text-2xl font-bold">Mon Portfolio</h1>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/contact">Contact</Link>
        <a href="/cv.pdf" download="Mon_CV.pdf" className="download-btn">
          📄 Télécharger mon CV
        </a>
        <a
          href="https://github.com/TON-NOM-GITHUB"
          target="_blank"
          rel="noopener noreferrer"
          className="github-icon"
        >
          <FaGithub size={30} />
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 p-2 rounded-full bg-gray-700 text-white"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;