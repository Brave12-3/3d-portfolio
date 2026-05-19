import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-8">
      <Image
        src="/me.jpg" // put your image in public/me.jpg
        alt="Profile photo"
        width={200}
        height={200}
        className="rounded-full shadow-lg"
      />
      <div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I am a developer passionate about building 3D experiences and modern web applications.
        </p>
      </div>
    </section>
  );
}
