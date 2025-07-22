"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, X, Smile } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatBot() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("Chatbot");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null); // Nuevo ref

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Detectar clics fuera del chat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Error desconocido");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `❌ Error: ${
            error?.message || JSON.stringify(error)
          }. Intenta de nuevo.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage?.role === "assistant") {
      let index = 0;
      setDisplayedText(""); // reset

      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + lastMessage.content.charAt(index));
        index++;
        if (index >= lastMessage.content.length) {
          clearInterval(interval);
        }
      }, 20); // velocidad de escritura (en ms)

      return () => clearInterval(interval);
    }
  }, [messages]);

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-10 right-10 z-[9999] font-(family-name:--font-barlowCondensed) bg-blue-800 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all flex items-center gap-2 animate-fade-down animate-delay-[1400ms] animate-ease-in-out"
      >
        {isOpen ? <X size={20} /> : <Bot size={20} />}
        {!isOpen && (
          <span className="hidden sm:inline text-sm">{t("needhelp")}</span>
        )}
      </button>

      {/* Ventana del chatbot */}
      {isOpen && (
        <div
          ref={chatRef}
          className={`fixed bottom-20 md:h-max-[32em] right-6 w-80 backdrop-blur-3xl
            ${
              isDark
                ? "bg-zinc-800/10 border-zinc-700"
                : "border-gray-300 bg-white/10"
            } border  rounded-2xl shadow-xl flex flex-col z-[9999] animate-fadeIn`}
        >
          <div
            className={`p-3 border-b 
            ${
              isDark
                ? "border-zinc-600 text-zinc-100"
                : "border-gray-200 text-zinc-800"
            } font-(family-name:--font-barlowCondensed) font-semibold  flex items-center gap-2`}
          >
            <Bot size={18} />
            Jose Navarro&apos;s assistant
          </div>

          <section className="w-full flex flex-col justify-center items-center font-(family-name:--font-barlowCondensed) text-[0.8em] p-4">
            <Smile size={50} />
            <h1>{t("hi")}</h1>
          </section>
          <div className="flex-1 text-start font-(family-name:--font-barlowCondensed) overflow-y-auto p-3 space-y-2 max-h-96">
            {messages.map((msg, idx) => {
              const isLast = idx === messages.length - 1;
              const isAssistant = msg.role === "assistant";

              const contentToShow =
                isAssistant && isLast ? displayedText : msg.content;

              return (
                <div
                  key={idx}
                  className={`text-sm p-2 rounded-2xl animate-fade-up ${
                    msg.role === "user"
                      ? "bg-blue-800 text-white self-end ml-10"
                      : `${
                          isDark
                            ? "bg-zinc-700 text-white"
                            : "bg-gray-200 text-gray-900"
                        } self-start mr-10`
                  }`}
                >
                  {contentToShow}
                </div>
              );
            })}

            {isLoading && (
              <div
                className={`text-sm 
              ${
                isDark ? "text-zinc-400" : "text-gray-500"
              }  font-(family-name:--font-barlowCondensed) animate-fade-down`}
              >
                {t("writing")}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className={`flex p-2 border-t ${
              isDark ? "border-zinc-600" : "border-gray-200"
            }`}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => {
                if (e.target.value.length <= 700) setInput(e.target.value);
              }}
              maxLength={700}
              className="flex-1 px-2 py-1 text-sm border rounded-l-md focus:outline-none font-(family-name:--font-barlowCondensed)"
              placeholder={t("write")}
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded-r-md"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
