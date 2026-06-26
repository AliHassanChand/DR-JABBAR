import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, ChevronUp, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';
import { FAQ_DATA } from '../../data';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'General' | 'Orthodontics' | 'Aligners' | 'Installments'>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const categories = ['All', 'General', 'Orthodontics', 'Aligners', 'Installments'] as const;

  const filteredFAQs = FAQ_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      
      {/* Header */}
      <div className="relative py-20 bg-[#0F4C81] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81] via-[#0c3d68] to-[#1DA1F2] opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] bg-[#00C9A7]/20 text-[#00C9A7] px-3 py-1 rounded-full border border-[#00C9A7]/30 inline-block">
            Frequently Asked Questions
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold">
            Medical & Procedural FAQ Center
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mx-auto">
            Find immediate, authoritative clinical explanations regarding clear aligners, orthodontic timelines, sterilizations, and dental payment installments.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        
        {/* Filtering Tabs & Search */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          <div className="md:col-span-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0F4C81] text-white border-[#0F4C81]'
                    : 'bg-white dark:bg-slate-900 text-slate-500 border-slate-250 dark:border-slate-800 hover:text-slate-950'
                }`}
              >
                {cat === 'All' ? 'All FAQs' : `${cat} FAQs`}
              </button>
            ))}
          </div>

          <div className="md:col-span-4 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search FAQs..."
              className="w-full p-3 pl-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-850 dark:text-white focus:outline-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>

        </div>

        {/* Collapsible Accordions Stack */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFAQs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  layout
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm overflow-hidden"
                >
                  {/* Collapsible trigger */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#0F4C81] shrink-0" />
                      <h3 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                        {faq.question}
                      </h3>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {/* Body Content */}
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-slate-100 dark:border-slate-800/60"
                    >
                      <div className="p-5 bg-slate-50/50 dark:bg-slate-950/20 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Floating Help Banner */}
        <div className="bg-[#0F4C81]/5 rounded-3xl p-6 sm:p-8 border border-[#0F4C81]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">Still have clinical questions?</h4>
            <p className="text-xs text-slate-500">Connect directly with Dr. Abdul Jabbar via a rapid 1-on-1 virtual chat.</p>
          </div>
          <a
            href="https://wa.me/923332612660"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-[#00C9A7] hover:bg-[#00ab8e] text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-md cursor-pointer text-center"
          >
            <MessageCircle className="w-4 h-4 fill-current text-white" />
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
