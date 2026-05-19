"use client";
import ProjectCard from "./ProjectCard";
import PROJECTS from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Selected Case Studies</h2>
        <div className="text-sm text-gray-500">Quality over quantity</div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}
