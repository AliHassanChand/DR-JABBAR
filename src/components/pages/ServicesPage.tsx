import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, ChevronRight, Clock, HeartHandshake, ShieldCheck, Award } from 'lucide-react';
import { TREATMENTS_DATA } from '../../data';
import * as Icons from 'lucide-react';

interface ServicesPageProps {
  setActivePage: (page: string) => void;
  setSelectedServiceId: (id: string) => void;
}

export default function ServicesPage({ setActivePage, setSelectedServiceId }: ServicesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | 'Orthodontics' | 'Cosmetic' | 'Surgical' | 'Restorative' | 'Pediatric'>('All');

  const categories = ['All', 'Orthodontics', 'Cosmetic', 'Surgical', 'Restorative', 'Pediatric'] as const;

  // Filter services by category and search query
  const filteredServices = TREATMENTS_DATA.filter((s) => {
    const matchesCategory = activeCategory === 'All' || s.category === activeCategory;
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleServiceClick = (id: string) => {
    setSelectedServiceId(id);
    setActivePage('service-single');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      
      {/* Page Header */}
      <div className="relative py-24 bg-[#0F4C81] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81] via-[#0c3d68] to-[#1DA1F2] opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] bg-[#00C9A7]/20 text-[#00C9A7] px-3 py-1.5 rounded-full border border-[#00C9A7]/30 inline-block">
            12 Specialized Treatments
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">
            Comprehensive Dental & Orthodontic Care
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mx-auto">
            From pediatric prevention to complex computer-guided smile makeovers and adult skeletal orthodontics, explore our advanced clinical specialties.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Search & Filter Bar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-12">
          
          {/* Category Tabs */}
          <div className="lg:col-span-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0F4C81] text-white border-[#0F4C81] shadow-md shadow-blue-900/10'
                    : 'bg-white dark:bg-slate-900 text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white border-slate-200/60 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="lg:col-span-4 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments..."
              className="w-full p-3.5 pl-11 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-[#0F4C81] dark:focus:border-[#1DA1F2] transition-colors"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>

        </div>

        {/* Dynamic Services Grid */}
        <AnimatePresence mode="popLayout">
          {filteredServices.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service) => {
                // Safely load icon component dynamically
                const IconComponent = (Icons as any)[service.iconName] || Icons.Sparkles;

                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
                  >
                    <div className="p-6 sm:p-8 space-y-5">
                      {/* Category Label */}
                      <span className="text-[10px] font-extrabold text-[#00C9A7] uppercase tracking-wider bg-[#00C9A7]/10 px-2.5 py-1 rounded-md inline-block">
                        {service.category}
                      </span>

                      {/* Icon & Title */}
                      <div className="flex items-center gap-4">
                        <div className="p-3 w-fit rounded-xl bg-[#0F4C81]/5 text-[#0F4C81] dark:text-[#1DA1F2] group-hover:bg-[#0F4C81] group-hover:text-white transition-colors duration-300">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h3 className="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-[#0F4C81] dark:group-hover:text-[#1DA1F2] transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      {/* Short Description */}
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans line-clamp-3">
                        {service.shortDesc}
                      </p>

                      <div className="w-full border-t border-slate-100 dark:border-slate-800/40" />

                      {/* Quick Info (Duration) */}
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>Approx. Duration: <strong className="text-slate-700 dark:text-slate-200">{service.duration}</strong></span>
                      </div>
                    </div>

                    {/* Bottom Link Action */}
                    <button
                      onClick={() => handleServiceClick(service.id)}
                      className="w-full py-4 px-6 sm:px-8 bg-slate-50 hover:bg-[#0F4C81] dark:bg-slate-950 dark:hover:bg-[#0F4C81] text-slate-700 dark:text-slate-300 hover:text-white font-bold text-xs flex items-center justify-between border-t border-slate-100 dark:border-slate-800/40 transition-colors duration-300 cursor-pointer"
                    >
                      <span>Explore Procedure & Costs</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
              <p className="text-slate-500 text-sm">No treatments matched your search criteria. Please try another search term.</p>
            </div>
          )}
        </AnimatePresence>

        {/* Quality Badges */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200/50 dark:border-slate-800/40 pt-16">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#00C9A7]/10 text-[#00C9A7] rounded-xl shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">Autoclaved Sterility</h4>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed">Absolute clinical decontamination obeying local PMDC & international health regulatory controls.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#1DA1F2]/10 text-[#1DA1F2] rounded-xl shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">Painless Interventions</h4>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed">Micro-fine needles, localized desensitizing gels, and computerized comfort adjustments at every session.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#0F4C81]/10 text-[#0F4C81] rounded-xl shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">Installment-Friendly Rates</h4>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed">100% interest-free structured dental payment options for premium braces and aligners.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
