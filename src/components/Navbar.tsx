const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto flex h-[52px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="/" className="text-lg font-semibold text-[var(--foreground)]">
          Ken Zou
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            About
          </a>

          <a
            href="/experience"
            className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            Experience
          </a>

          <a
            href="/projects"
            className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            Contact
          </a>

          {/* Temporary theme button */}
          <button
            type="button"
            className="ml-2 rounded-md border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--foreground)]"
          >
            ☾
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
