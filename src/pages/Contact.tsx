const Contact = () => {
  return (
    <main className="mx-auto max-w-2xl px-5 py-20 sm:px-8">
      <section>
        <h1 className="text-5xl font-bold text-[var(--foreground)]">Contact</h1>

        <p className="mt-3 text-[var(--muted-foreground)]">
          Have a question or want to get in touch?
        </p>

        <form className="mt-10 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[var(--foreground)]"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              className="mt-2 w-full border border-[var(--border)] bg-[var(--input)] px-3 py-2 text-[var(--foreground)] outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--foreground)]"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              className="mt-2 w-full border border-[var(--border)] bg-[var(--input)] px-3 py-2 text-[var(--foreground)] outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[var(--foreground)]"
            >
              Message
            </label>

            <textarea
              id="message"
              rows={6}
              className="mt-2 w-full resize-none border border-[var(--border)] bg-[var(--input)] px-3 py-2 text-[var(--foreground)] outline-none"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="text-[var(--foreground)] hover:underline"
            >
              Send →
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
