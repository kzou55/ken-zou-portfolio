import profile from "../data/profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Header = () => {
  return (
    <header className="flex flex-col items-center px-5 pt-24 pb-8 text-center sm:px-8">
      <h1 className="text-6xl font-bold tracking-tight text-[var(--foreground)]">
        Ken Zou
      </h1>
      <p className="mt-4 text-lg text-[var(--muted-foreground)]">
        Software Engineer<span className="mx-2">•</span>
        <span>Boston, MA</span>
      </p>
        <div className="mt-4 flex gap-3">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] px-4 py-2 text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>

          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] px-4 py-2 text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </a>
        </div>
    </header>
  );
};

export default Header;
