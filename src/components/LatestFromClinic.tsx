import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, Search, Newspaper, ShieldCheck, ArrowRight, 
  BookOpen, Heart, Activity, ExternalLink, RefreshCw 
} from "lucide-react";

interface Source {
  title: string;
  uri: string;
}

export default function LatestFromClinic() {
  const [topic, setTopic] = useState("Orthodontic Aligners");
  const [loading, setLoading] = useState(false);
  const [bulletin, setBulletin] = useState("");
  const [sources, setSources] = useState<Source[]>([]);
  const [error, setError] = useState("");

  const topicsList = [
    { label: "Clear Aligners", query: "orthodontic clear aligners cost in Pakistan vs braces" },
    { label: "Braces Care", query: "how to clean metal ceramic braces orthodontic hygiene" },
    { label: "LUMHS & Academia", query: "Dr. Abdul Jabbar FCPS LUMHS Hyderabad dental research" },
    { label: "Dentistry Timings", query: "Dr. Abdul Jabbar clinic Saddar Hyderabad timings phone" }
  ];

  const fetchUpdates = async (searchTopic: string) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/clinic-updates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: searchTopic }),
      });
      if (!response.ok) {
        throw new Error("Failed to retrieve live bulletin");
      }
      const data = await response.json();
      setBulletin(data.text);
      setSources(data.sources || []);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred while fetching updates.");
    } finally {
      setLoading(false);
    }
  };

  // Run on mount with default topic
  useEffect(() => {
    fetchUpdates(topic);
  }, []);

  const handleTopicClick = (selectedLabel: string, query: string) => {
    setTopic(selectedLabel);
    fetchUpdates(query);
  };

  const handleCustomSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const customQuery = formData.get("customQuery") as string;
    if (customQuery.trim()) {
      setTopic(customQuery);
      fetchUpdates(customQuery);
    }
  };

  // A very lightweight, secure Markdown-to-HTML formatter to render bullet points, lists and bold sections elegantly
  const formatMarkdown = (text: string) => {
    if (!text) return null;
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      // Heading level 3
      if (line.startsWith("### ")) {
        return (
          <h4 key={idx} className="text-sm sm:text-base font-black text-[#0F4C81] dark:text-[#1DA1F2] mt-5 mb-2 leading-tight">
            {line.replace("### ", "").replace(/\*\*/g, "")}
          </h4>
        );
      }
      // Heading level 2
      if (line.startsWith("## ")) {
        return (
          <h3 key={idx} className="text-base sm:text-lg font-black text-[#0F4C81] dark:text-[#1DA1F2] mt-6 mb-3 leading-tight border-b border-slate-100 dark:border-slate-800 pb-1">
            {line.replace("## ", "").replace(/\*\*/g, "")}
          </h3>
        );
      }
      // Bullet items
      if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
        const cleanText = line.trim().substring(2).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        return (
          <li key={idx} className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed ml-4 list-disc my-1"
              dangerouslySetInnerHTML={{ __html: cleanText }} />
        );
      }
      // Numbered items
      if (/^\d+\.\s/.test(line.trim())) {
        const cleanText = line.trim().replace(/^\d+\.\s/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        const num = line.trim().match(/^\d+/)?.[0] || "1";
        return (
          <div key={idx} className="flex gap-2.5 items-start my-3">
            <span className="flex items-center justify-center w-5 h-5 rounded bg-[#0F4C81]/10 text-[#0F4C81] dark:bg-[#1DA1F2]/10 dark:text-[#1DA1F2] text-[10px] font-bold shrink-0 mt-0.5">
              {num}
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
               dangerouslySetInnerHTML={{ __html: cleanText }} />
          </div>
        );
      }
      // Normal paragraphs
      if (line.trim().length > 0) {
        const boldedText = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        return (
          <p key={idx} className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed my-2"
             dangerouslySetInnerHTML={{ __html: boldedText }} />
        );
      }
      return <div key={idx} className="h-2" />;
    });
  };

  return (
    <section id="latest-clinic-section" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden transition-colors duration-300">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-[#1DA1F2]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-[#00C9A7]/4 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0F4C81]/15 text-[#0F4C81] dark:bg-[#1DA1F2]/15 dark:text-[#1DA1F2] text-[10px] sm:text-xs font-bold uppercase tracking-widest">
            <Activity className="w-3.5 h-3.5 text-[#1DA1F2]" />
            <span>Active Operations Bulletin</span>
          </span>
          <h2 className="text-xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white uppercase font-display leading-tight">
            Latest from Dr. Abdul Jabbar's Clinic
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Search our clinical directory or click topics below to generate search-grounded dental advisories and timing schedules backed by real-time clinical authority.
          </p>
        </div>

        {/* Quick Topic Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {topicsList.map((item) => (
            <button
              key={item.label}
              disabled={loading}
              onClick={() => handleTopicClick(item.label, item.query)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-1.5 border cursor-pointer ${
                topic === item.label
                  ? "bg-[#0F4C81] border-[#0F4C81] text-white shadow-md"
                  : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-[#1DA1F2] hover:text-[#1DA1F2]"
              }`}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Custom Quick Query Box */}
        <form onSubmit={handleCustomSearchSubmit} className="max-w-md mx-auto mb-10 relative flex items-center">
          <input
            type="text"
            name="customQuery"
            placeholder="Ask anything (e.g., 'Do aligners hurt?', 'Braces for children')"
            className="w-full text-xs sm:text-sm bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl py-3 pl-4 pr-12 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-[#1DA1F2]"
          />
          <button
            type="submit"
            disabled={loading}
            aria-label="Submit search query"
            className="absolute right-2 p-2 bg-[#0F4C81] text-white hover:bg-[#1DA1F2] rounded-xl transition-colors duration-200 cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>

        {/* Live Terminal Bulletin */}
        <div className="bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl overflow-hidden shadow-xl">
          {/* Header Bar of the Bulletin Terminal */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-[#00C9A7]" />
              <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                Topic: <span className="text-slate-800 dark:text-white font-extrabold">{topic}</span>
              </span>
            </div>
            
            <button
              disabled={loading}
              onClick={() => fetchUpdates(topic)}
              title="Refresh clinic bulletin"
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-500 hover:text-[#1DA1F2] transition-all cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>

          {/* Bulletin content view */}
          <div className="p-6 sm:p-8 min-h-[220px] relative flex flex-col justify-between">
            
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 dark:bg-slate-950/90 z-10 gap-3"
                >
                  <RefreshCw className="w-8 h-8 text-[#1DA1F2] animate-spin" />
                  <p className="text-xs font-extrabold text-slate-500 dark:text-slate-400 animate-pulse">
                    Generating search-grounded dental updates...
                  </p>
                </motion.div>
              ) : null}

              {error ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8 text-rose-500"
                >
                  <p className="text-xs font-bold">{error}</p>
                  <button
                    onClick={() => fetchUpdates(topic)}
                    className="mt-3 px-4 py-2 bg-rose-50 dark:bg-rose-950/20 text-rose-500 border border-rose-100 dark:border-rose-800 rounded-xl text-xs font-bold"
                  >
                    Retry Query
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-1 text-left"
                >
                  {bulletin ? (
                    formatMarkdown(bulletin)
                  ) : (
                    <div className="py-8 text-center text-slate-400">
                      No updates loaded yet.
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Verifiable Reference Sources */}
            {!loading && sources.length > 0 && (
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                <span className="text-[9px] uppercase tracking-wider font-extrabold text-slate-400 block mb-3">
                  Verifiable Grounded Reference Authorities
                </span>
                <div className="flex flex-wrap gap-2">
                  {sources.map((src, i) => (
                    <a
                      key={i}
                      href={src.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-[10px] font-bold text-[#0F4C81] dark:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-all"
                    >
                      <span>{src.title.replace(/<\/?[^>]+(>|$)/g, "") || "Clinical Resource"}</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Bulletin Footer bar */}
          <div className="px-6 py-3.5 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-slate-400 font-bold">
            <span className="flex items-center gap-1.5 text-[#00C9A7]">
              <ShieldCheck className="w-4 h-4 text-[#00C9A7]" /> PMDC Certified Clinical Guidelines
            </span>
            <span className="text-slate-400 font-medium">
              Supervised under Associate Professor Dr. Abdul Jabbar
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
