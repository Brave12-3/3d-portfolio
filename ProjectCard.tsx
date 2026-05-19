"use client";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project }: any) {
  return (
    <article className="group bg-white/70 dark:bg-gray-900/70 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
      <header className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-500">{project.role}</p>
        </div>
        <div className="flex gap-2 items-center">
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="p-2 rounded-full"><FiExternalLink/></a>}
          {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="p-2 rounded-full"><FiGithub/></a>}
        </div>
      </header>
      <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{project.summary}</p>
      <footer className="mt-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {project.tech?.map((t:string)=> <span key={t} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{t}</span>)}
        </div>
        <div className="text-xs text-gray-500">Case study • {project.id}</div>
      </footer>
    </article>
  );
}
