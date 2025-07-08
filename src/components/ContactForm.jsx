import React, { useState } from "react";

const ContactForm = ({ isDarkMode }) => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xqapwyvw", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 font-[system-ui]">
      <div className={`rounded-xl shadow-xl overflow-hidden backdrop-blur-lg border ${
        isDarkMode 
          ? 'bg-[#0d1b17] border-[#00ffae] text-gray-100' 
          : 'bg-white border-blue-500 text-gray-900'
      }`}>
        {/* Apple-style top bar */}
        <div className={`flex items-center space-x-2 px-4 py-2 border-b ${
          isDarkMode 
            ? 'bg-[#0f2b24] border-[#00ffae]' 
            : 'bg-gray-100 border-blue-500'
        }`}>
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        {/* Form content */}
        <form
          onSubmit={handleSubmit}
          className="px-6 py-6 space-y-4"
        >
          <h2 className={`text-xl font-semibold text-center mb-2 ${
            isDarkMode ? 'text-[#00ffae]' : 'text-blue-600'
          }`}>
            Contact Me
          </h2>

          <div className="flex flex-col">
            <label htmlFor="name" className={`text-sm font-medium mb-1 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-700'
            }`}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Name"
              required
              className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 resize-none ${
                isDarkMode 
                  ? 'border-[#00ffae] bg-[#122923] text-white placeholder-gray-400 focus:ring-[#00ffae]' 
                  : 'border-blue-500 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-blue-500'
              }`}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className={`text-sm font-medium mb-1 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-700'
            }`}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required
              className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 resize-none ${
                isDarkMode 
                  ? 'border-[#00ffae] bg-[#122923] text-white placeholder-gray-400 focus:ring-[#00ffae]' 
                  : 'border-blue-500 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-blue-500'
              }`}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className={`text-sm font-medium mb-1 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-700'
            }`}>
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              rows={4}
              required
              className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 resize-none ${
                isDarkMode 
                  ? 'border-[#00ffae] bg-[#122923] text-white placeholder-gray-400 focus:ring-[#00ffae]' 
                  : 'border-blue-500 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-blue-500'
              }`}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 px-4 cursor-none font-semibold rounded-md shadow-md transition-all duration-300 ${
              isDarkMode 
                ? 'bg-[#00ffae] hover:shadow-[0_0_10px_rgba(0,255,174,0.30),0_0_10px_rgba(0,255,174,0.30)] text-black hover:bg-[#00e39c]' 
                : 'bg-blue-600 hover:shadow-[0_0_10px_rgba(59,130,246,0.30),0_0_10px_rgba(59,130,246,0.30)] text-white hover:bg-blue-700'
            }`}
          >
            Submit
          </button>

          {submitted && (
            <p className="text-green-400 mt-3 text-center font-medium">
              Thanks! Your message has been sent.
            </p>
          )}

          {error && (
            <p className="text-red-400 mt-3 text-center font-medium">
              Oops! Something went wrong.
            </p>
          )}
        </form>
      </div>

      {/* Hidden current year for accessibility */}
      <p id="current-year" className="hidden">
        {currentYear}
      </p>
    </div>
  );
};

export default ContactForm;
