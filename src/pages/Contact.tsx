import { useState } from "react";
import type { ChangeEvent, SubmitEventHandler } from "react";
import * as emailjs from "@emailjs/browser";

type EmailData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [emailData, setEmailData] = useState<EmailData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEmailData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!emailData.name || !emailData.email || !emailData.message) {
      alert("Please complete all fields!");
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      alert("Message sent!");

      setEmailData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="mx-auto max-w-xl">
      <h1 className="text-5xl font-bold text-[var(--foreground)]">
        Contact
      </h1>

      <p className="mt-3 text-[var(--muted-foreground)]">
        Have a question or want to get in touch?
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[var(--foreground)]"
          >
            Name*
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={emailData.name}
            onChange={handleChange}
            required
            className="mt-2 w-full border border-[var(--border)] bg-[var(--input)] px-3 py-2 text-[var(--foreground)] outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[var(--foreground)]"
          >
            Email*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={emailData.email}
            onChange={handleChange}
            required
            className="mt-2 w-full border border-[var(--border)] bg-[var(--input)] px-3 py-2 text-[var(--foreground)] outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[var(--foreground)]"
          >
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            value={emailData.message}
            onChange={handleChange}
            required
            rows={8}
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
  );
};

export default Contact;