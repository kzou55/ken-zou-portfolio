import profile from "../data/profile";

const About = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <h2 className="mb-6 text-4xl font-semibold text-[var(--foreground)]">
        About
      </h2>
      <div className="space-y-4 text-[var(--muted-foreground)]">
        <p>
          I'm a <strong className="text-[var(--foreground)]">software engineer</strong> from Boston, Ma, with
          experience across the stack—from frontend development and backend
          systems to database design. I've worked in collaborative Agile
          environments as well as independently, gaining experience across a
          variety of projects and development workflows.
        </p>

        <p>
          {profile.status.intro}{" "}
          <strong className="text-[var(--foreground)]">
            {profile.status.position}
          </strong>{" "}
          at{" "}
          <strong className="text-[var(--foreground)]">
            {profile.status.company}
          </strong>
          , where I contribute to an open-source project using the MERN stack.
        </p>
      </div>
    </section>
  );
};

export default About;
