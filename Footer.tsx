import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4">
        {/* Left - Copyright */}
        <p className="text-sm text-foreground">
          © {new Date().getFullYear()} Semira Bahru. All rights reserved.
        </p>

        {/* Right - Social links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/brave12-3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-blue-500 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/semira-bahru-320t1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com/@Sem86380"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-blue-500 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
