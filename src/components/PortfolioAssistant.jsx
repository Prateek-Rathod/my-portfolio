import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

const apiUrl = import.meta.env.VITE_ASSISTANT_API_URL || "/api/chat";

const renderInlineMarkdown = (text) =>
  text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="font-semibold text-current">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index} className="rounded bg-black/10 px-1 py-0.5">{part.slice(1, -1)}</code>;
    }
    return part;
  });

const AssistantAnswer = ({ answer }) => {
  const blocks = [];
  let paragraph = [];
  let list = null;

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: "paragraph", lines: paragraph });
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list) {
      blocks.push(list);
      list = null;
    }
  };

  answer.split(/\r?\n/).forEach((line) => {
    const heading = line.match(/^\s{0,3}(#{1,3})\s+(.+)$/);
    const item = line.match(/^(\s*)[-*+]\s+(.+)$/);
    const numberedItem = line.match(/^(\s*)\d+[.)]\s+(.+)$/);

    if (!line.trim()) {
      flushParagraph();
      flushList();
    } else if (heading) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: heading[1].length, text: heading[2] });
    } else if (item || numberedItem) {
      flushParagraph();
      const match = item || numberedItem;
      const ordered = Boolean(numberedItem);
      if (!list || list.ordered !== ordered) {
        flushList();
        list = { type: "list", ordered, items: [] };
      }
      list.items.push({ indent: match[1].length, text: match[2] });
    } else {
      flushList();
      paragraph.push(line);
    }
  });
  flushParagraph();
  flushList();

  return (
    <div className="space-y-2">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const Heading = block.level === 1 ? "h3" : "h4";
          return (
            <Heading key={index} className="font-semibold leading-5">
              {renderInlineMarkdown(block.text)}
            </Heading>
          );
        }
        if (block.type === "list") {
          const List = block.ordered ? "ol" : "ul";
          return (
            <List key={index} className={`space-y-1 ${block.ordered ? "list-decimal" : "list-disc"} list-inside`}>
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} className={item.indent >= 2 ? "ml-4" : ""}>
                  {renderInlineMarkdown(item.text)}
                </li>
              ))}
            </List>
          );
        }
        return (
          <p key={index}>
            {renderInlineMarkdown(block.lines.join(" "))}
          </p>
        );
      })}
    </div>
  );
};

const PortfolioAssistant = ({ isDarkMode }) => {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const questionInputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (open && !isLoading && messages.length > 0) {
      questionInputRef.current?.focus();
    }
  }, [isLoading, messages.length, open]);

  const ask = async (value) => {
    const trimmed = value.trim();
    if (!trimmed || isLoading) return;

    const messageId = `${Date.now()}-${Math.random()}`;
    const isSkillsQuestion = /\b(?:tech(?:nology)? stack|skills?)\b/i.test(trimmed);
    const contextSource = isSkillsQuestion
      ? document.getElementById("skills")
      : document.getElementById("main-content");
    const context = contextSource?.innerText.trim();
    const history = messages
      .filter((message) => message.answer && !message.isError)
      .slice(-8)
      .flatMap((message) => [
        { role: "user", content: message.question },
        { role: "assistant", content: message.answer },
      ]);
    setQuestion("");
    setMessages((current) => [
      ...current,
      { id: messageId, question: trimmed, answer: null },
    ]);
    setIsLoading(true);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed, context, history }),
      });
      let result;
      try {
        result = await response.json();
      } catch {
        throw new Error("The assistant returned an invalid response. Please try again.");
      }

      if (!response.ok) {
        throw new Error(result.error || "The assistant could not answer right now.");
      }
      if (typeof result.answer !== "string" || !result.answer.trim()) {
        throw new Error("The assistant returned an empty answer. Please try again.");
      }

      setMessages((current) =>
        current.map((message) =>
          message.id === messageId ? { ...message, answer: result.answer } : message,
        ),
      );
    } catch (error) {
      setMessages((current) =>
        current.map((message) =>
          message.id === messageId
            ? {
                ...message,
                answer: error instanceof Error
                  ? error.message
                  : "Could not reach the assistant. Please try again.",
                isError: true,
              }
            : message,
        ),
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7">
      {open && (
        <section
          aria-label="Portfolio assistant"
          className={`mb-3 flex max-h-[min(70vh,520px)] w-[min(360px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border shadow-2xl ${
            isDarkMode
              ? "border-white/10 bg-[#0c111a] text-white"
              : "border-gray-200 bg-white text-gray-900"
          }`}
        >
          <div className={`flex items-center justify-between border-b px-4 py-3 ${
            isDarkMode ? "border-white/10" : "border-gray-100"
          }`}>
            <div>
              <h2 className="font-semibold">Portfolio assistant</h2>
              <p className="text-xs text-gray-500">
                Portfolio details and general questions
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close portfolio assistant"
              className={`rounded-lg p-2 ${
                isDarkMode ? "text-gray-400 hover:bg-white/10" : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <X size={18} />
            </button>
          </div>

          <div
            className="flex-1 space-y-3 overflow-y-auto p-4"
            role="log"
            aria-live="polite"
            aria-relevant="additions text"
          >
            {messages.map((message) => (
              <div key={message.id} className="space-y-2">
                <p className={`ml-8 rounded-xl px-3 py-2 text-sm ${
                  isDarkMode ? "bg-sky-300/10 text-sky-100" : "bg-blue-50 text-blue-900"
                }`}>
                  {message.question}
                </p>
                {message.answer ? (
                  <div className={`rounded-xl px-3 py-2 text-sm leading-6 ${
                    message.isError
                      ? isDarkMode
                        ? "bg-rose-400/10 text-rose-200"
                        : "bg-rose-50 text-rose-700"
                      : isDarkMode
                        ? "bg-white/[0.04] text-gray-300"
                        : "bg-gray-50 text-gray-700"
                  }`}>
                        {message.isError ? message.answer : <AssistantAnswer answer={message.answer} />}
                  </div>
                ) : (
                  <div
                    className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm ${
                      isDarkMode ? "bg-white/[0.04] text-gray-400" : "bg-gray-50 text-gray-500"
                    }`}
                    role="status"
                  >
                    <span>Typing</span>
                    <span className="flex gap-1" aria-hidden="true">
                      <span className="h-1 w-1 animate-bounce rounded-full bg-current" />
                      <span className="[animation-delay:120ms] h-1 w-1 animate-bounce rounded-full bg-current" />
                      <span className="[animation-delay:240ms] h-1 w-1 animate-bounce rounded-full bg-current" />
                    </span>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form
            autoComplete="off"
            className={`flex gap-2 border-t p-3 ${
              isDarkMode ? "border-white/10" : "border-gray-100"
            }`}
            onSubmit={(event) => {
              event.preventDefault();
              ask(question);
            }}
          >
            <label className="sr-only" htmlFor="assistant-question">Ask a question</label>
            <textarea
              id="assistant-question"
              ref={questionInputRef}
              name="portfolio-assistant-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask about the portfolio…"
              autoComplete="off"
              rows={1}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  event.currentTarget.form?.requestSubmit();
                }
              }}
              disabled={isLoading}
              className={`min-w-0 flex-1 resize-none rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 disabled:opacity-60 ${
                isDarkMode
                  ? "border-white/10 bg-white/[0.04] text-white focus:ring-sky-300/20"
                  : "border-gray-200 bg-gray-50 text-gray-900 focus:ring-blue-500/15"
              }`}
            />
            <button
              type="submit"
              aria-label="Send question"
              disabled={isLoading || !question.trim()}
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl disabled:cursor-not-allowed disabled:opacity-50 ${
                isDarkMode ? "bg-sky-300 text-slate-950" : "bg-blue-700 text-white"
              }`}
            >
              <Send size={16} />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close portfolio assistant" : "Open portfolio assistant"}
        aria-expanded={open}
        className={`ml-auto grid h-12 w-12 place-items-center rounded-full shadow-lg transition-transform hover:scale-105 ${
          isDarkMode ? "bg-sky-300 text-slate-950" : "bg-blue-700 text-white"
        }`}
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>
    </div>
  );
};

export default PortfolioAssistant;
