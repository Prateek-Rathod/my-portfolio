import React, { useState } from "react";

const inputClass = (isDarkMode) =>
  `w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 ${
    isDarkMode
      ? "border-white/10 bg-white/[0.04] text-white placeholder:text-gray-600 focus:border-sky-300/50 focus:ring-sky-300/15"
      : "border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/10"
  }`;

const ContactForm = ({ isDarkMode }) => {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "submitting") return;
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xqapwyvw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          "Your message could not be sent. Please email me directly instead."
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "A network error prevented delivery. Please email me directly instead."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-busy={status === "submitting"}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className={`mb-2 block text-sm font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            required
            placeholder="Name"
            className={inputClass(isDarkMode)}
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className={`mb-2 block text-sm font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Email address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            placeholder="you@example.com"
            className={inputClass(isDarkMode)}
          />
        </div>
      </div>

      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-gotcha">Leave this field empty</label>
        <input
          id="contact-gotcha"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className={`mb-2 block text-sm font-medium ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          How can I help?
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          maxLength={4000}
          required
          placeholder="Tell me a little about what you have in mind..."
          className={`${inputClass(isDarkMode)} resize-y`}
        />
      </div>

      {status === "success" && (
        <p
          className={`rounded-xl px-4 py-3 text-sm ${
            isDarkMode
              ? "bg-emerald-400/10 text-emerald-300"
              : "bg-emerald-50 text-emerald-800"
          }`}
          role="status"
          aria-live="polite"
        >
          Thanks — your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p
          className={`rounded-xl px-4 py-3 text-sm ${
            isDarkMode ? "bg-rose-400/10 text-rose-300" : "bg-rose-50 text-rose-800"
          }`}
          role="alert"
        >
          {errorMessage}{" "}
          <a className="font-semibold underline" href="mailto:rathodprateek2004@gmail.com">
            Email me directly.
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={`rounded-full px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60 ${
          isDarkMode
            ? "bg-sky-300 text-slate-950 hover:bg-sky-200"
            : "bg-blue-700 text-white hover:bg-blue-800"
        }`}
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
};

export default ContactForm;
