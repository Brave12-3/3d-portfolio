"use client";

import { motion } from "framer-motion";
import ThreeScene from "./Scene3D";
import { FiGithub, FiMail } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          I build interactive 3D-powered digital experiences.
        </motion.h1>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
          Combining product design, frontend engineering, and 3D visuals to
          create memorable interfaces.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <a href="#" className="flex items-center gap-2">
            <FiGithub /> GitHub
          </a>
          <a href="mailto:hello@example.com" className="flex items-center gap-2">
            <FiMail /> Email
          </a>
        </div>
      </div>

      <div className="w-full h-96 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
        <ThreeScene />
      </div>
    </section>
  );
}
