export default function Skills() {
  return (
    <section id="skills" className="mt-16">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="mt-6 grid sm:grid-cols-3 gap-6">
        <div className="p-4 rounded bg-white/70 dark:bg-gray-900/60">
          <h3 className="font-medium">Frontend</h3>
          <ul className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            <li>React, Next.js, TypeScript</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="p-4 rounded bg-white/70 dark:bg-gray-900/60">
          <h3 className="font-medium">Backend</h3>
          <ul className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            <li>Node.js, Postgres</li>
            <li>APIs, Observability</li>
          </ul>
        </div>
        <div className="p-4 rounded bg-white/70 dark:bg-gray-900/60">
          <h3 className="font-medium">3D & Design</h3>
          <ul className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            <li>Three.js, R3F</li>
            <li>Blender, glTF</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
