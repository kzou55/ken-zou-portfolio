const Header = () => {
  return (
    <header className="flex flex-col items-center px-5 pt-24 pb-16 text-center sm:px-8">
      <h1 className="text-6xl font-bold tracking-tight text-[var(--foreground)]">
        Ken Zou
      </h1>
      <p className="mt-4 text-lg text-[var(--muted-foreground)]">
        Software Engineer<span className="mx-2">•</span><span>Boston, MA</span>
      </p>
      <div className="mt-6 flex gap-6">
        <a
          href="#"
          className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--accent)]"
        >
          LinkedIn
        </a>

        <a
          href="#"
          className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--accent)]"
        >
          GitHub
        </a>

        <a
          href="#"
          className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--accent)]"
        >
          Email
        </a>
      </div>
    </header>
  );
};

export default Header;
