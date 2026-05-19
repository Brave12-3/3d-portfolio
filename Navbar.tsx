"use client";

import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { FiGithub, FiMail } from "react-icons/fi";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex items-center justify-between py-4 px-6 shadow-md bg-white dark:bg-gray-900 sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
        Portfolio
      </Link>

      <div className="flex items-center gap-4">
        <Link href="#projects" className="hover:underline">
          Projects
        </Link>
        <Link href="#about" className="hover:underline">
          About
        </Link>
        <Link href="#contact" className="hover:underline">
          Contact
        </Link>

        {/* Social icons */}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
        >
          <FiGithub size={20} />
        </a>
        <a
          href="mailto:you@example.com"
          className="text-gray-700 dark:text-gray-200 hover:text-red-500"
        >
          <FiMail size={20} />
        </a>

        {/* Dark mode toggle */}
        <button
          onClick={toggleTheme}
          className="px-2 py-1 rounded border text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {theme === "light" ? "🌞" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
