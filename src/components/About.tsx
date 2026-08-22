const About = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="mb-6 text-3xl font-semibold text-[var(--foreground)]">
        About
      </h2>
      <div className="max-w-3xl space-y-4 text-[var(--muted-foreground)]">
        <p>
          I'm a <strong>software engineer</strong> from Boston, Ma, with
          experience across the stack—from frontend development and backend
          systems to database design. I've worked in collaborative Agile
          environments as well as independently, gaining experience across a
          variety of projects and development workflows.
        </p>

        <p>
          Currently, I'm a{" "}
          <strong className="text-[var(--foreground)]">
            Full-Stack Software Engineer at One Community
          </strong>
          , where I contribute to an open-source project using the MERN stack.
        </p>
      </div>
    </section>
  );
};

export default About;
