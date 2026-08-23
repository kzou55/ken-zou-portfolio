import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import { BsMoon, BsSun } from "react-icons/bs";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);


  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto flex h-[52px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="text-lg font-semibold text-[var(--foreground)]">
          Ken Zou
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/about"
            className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            About
          </Link>

          <Link
            to="/experience"
            className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            Experience
          </Link>

          <Link
            to="/projects"
            className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            Contact
          </Link>

          {/* Temporary theme button */}
          <button
            type="button"
            className="ml-2 rounded-md border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--foreground)]"
            onClick={toggleDarkMode}
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
