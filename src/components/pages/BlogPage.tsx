import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Clock, User, ArrowRight, X, ChevronLeft } from 'lucide-react';
import { BLOG_DATA } from '../../data';
import { BlogArticle } from '../../types';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Tips' | 'Braces' | 'Aligners' | 'Hygiene'>('All');
  const [readingArticle, setReadingArticle] = useState<BlogArticle | null>(null);

  const categories = ['All', 'Aligners', 'Braces', 'Hygiene'] as const;

  const filteredBlogs = BLOG_DATA.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      
      {/* Page Header */}
      <div className="relative py-24 bg-[#0F4C81] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81] via-[#0c3d68] to-[#1DA1F2] opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] bg-[#00C9A7]/20 text-[#00C9A7] px-3 py-1.5 rounded-full border border-[#00C9A7]/30 inline-block">
            SEO Clinical Guides
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">
            Our Dental Health Blog & Articles
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mx-auto font-sans leading-relaxed">
            Professional oral care guides, dental braces timelines, and clear aligner hygiene secrets written directly by our senior consultant dental specialists.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Render Reader View if active, else Render Grid */}
        <AnimatePresence mode="wait">
          {readingArticle ? (
            /* ---------------- ARTICLE READER VIEW ---------------- */
            <motion.div
              key="reader"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden p-6 sm:p-10 max-w-3xl mx-auto space-y-6"
            >
              {/* Back button */}
              <button
                onClick={() => setReadingArticle(null)}
                className="flex items-center gap-2 text-xs font-bold text-[#0F4C81] dark:text-[#1DA1F2] hover:underline cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Back to Articles List
              </button>

              <div className="h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-200/40">
                <img
                  src={readingArticle.image}
                  alt={readingArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Header Info */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-semibold border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="text-[#00C9A7] uppercase tracking-widest">{readingArticle.category}</span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {readingArticle.readTime}</span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> By {readingArticle.author}</span>
                <span>&bull;</span>
                <span>Published {readingArticle.date}</span>
              </div>

              {/* Title & Body content */}
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                {readingArticle.title}
              </h2>

              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed whitespace-pre-line space-y-4">
                {readingArticle.content}
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800/80 pt-6 mt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0F4C81] text-white flex items-center justify-center font-bold text-xs">
                    AJ
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-900 dark:text-white">{readingArticle.author}</h5>
                    <p className="text-[9px] text-slate-500">Chief Medical Advisor</p>
                  </div>
                </div>
                <button
                  onClick={() => setReadingArticle(null)}
                  className="px-4 py-2 bg-[#0F4C81] text-white rounded-xl text-xs font-bold"
                >
                  Return to Blog
                </button>
              </div>

            </motion.div>
          ) : (
            /* ---------------- BLOGS GRID LISTING ---------------- */
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              {/* Filter & Search Panel */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        selectedCategory === cat
                          ? 'bg-[#0F4C81] text-white border-[#0F4C81]'
                          : 'bg-white dark:bg-slate-900 text-slate-500 border-slate-200/60 dark:border-slate-800 hover:text-slate-950'
                      }`}
                    >
                      {cat === 'All' ? 'All Articles' : `${cat} Guides`}
                    </button>
                  ))}
                </div>

                <div className="lg:col-span-4 relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search dental topics..."
                    className="w-full p-3.5 pl-11 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-xs text-slate-800 dark:text-white focus:outline-none"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </div>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((article) => (
                  <div
                    key={article.id}
                    className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      {/* Thumbnail photo */}
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute top-3 left-3 bg-[#0F4C81] text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md">
                          {article.category}
                        </span>
                      </div>

                      {/* Summary */}
                      <div className="p-6 space-y-4">
                        <div className="flex items-center gap-3 text-[10px] text-slate-400 font-semibold font-mono">
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                          <span>&bull;</span>
                          <span>{article.date}</span>
                        </div>
                        
                        <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-sans line-clamp-3">
                          {article.summary}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <button
                        onClick={() => setReadingArticle(article)}
                        className="w-full py-3 bg-slate-50 hover:bg-[#0F4C81] dark:bg-slate-950 dark:hover:bg-[#0F4C81] text-slate-700 dark:text-slate-300 hover:text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
