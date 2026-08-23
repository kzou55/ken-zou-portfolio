import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-5 py-5 sm:px-8">
        {location.pathname !== "/contact" && (
          <div className="text-center">
            <p className="text-sm font-semibold text-[var(--foreground)]">
              Have a project in mind?{" "}
              <Link
                to="/contact"
                className="font-normal text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              >
                Let's get in touch →
              </Link>
              <span className="font-normal text-[var(--muted-foreground)]">
                Let's get in touch →
              </span>
            </p>
          </div>
        )}

        <div className="mt-3 flex justify-center gap-3 text-xs">
          <a
            href="YOUR_GITHUB_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          >
            GitHub
          </a>

          <span className="text-[var(--border)]">·</span>

          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-3 text-center text-xs text-[var(--muted-foreground)]">
          © 2026 Ken Zou
        </p>
      </div>
    </footer>
  );
};

export default Footer;
