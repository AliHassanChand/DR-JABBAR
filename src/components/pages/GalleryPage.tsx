import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, Info, LayoutGrid } from 'lucide-react';
import { GALLERY_DATA } from '../../data';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Clinic' | 'Equipment' | 'Team'>('All');
  const [zoomedImgUrl, setZoomedImgUrl] = useState<string | null>(null);

  const categories = ['All', 'Clinic', 'Equipment', 'Team'] as const;

  const filteredGallery = GALLERY_DATA.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      
      {/* Header */}
      <div className="relative py-20 bg-[#0F4C81] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81] via-[#0c3d68] to-[#1DA1F2] opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] bg-[#00C9A7]/20 text-[#00C9A7] px-3 py-1 rounded-full border border-[#00C9A7]/30 inline-block">
            Virtual Tour
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold">
            Explore Our Orthodontic Center
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mx-auto">
            Take a virtual tour of our premium Saddar Cantonment Hyderabad clinic, pristine sterilization autoclaves, and diagnostic 3D imaging suites.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Filtering Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0F4C81] text-white border-[#0F4C81] shadow-md shadow-blue-900/10'
                  : 'bg-white dark:bg-slate-900 text-slate-500 border-slate-200/60 dark:border-slate-800 hover:text-slate-950'
              }`}
            >
              {cat === 'All' ? 'View All Photos' : `${cat} Gallery`}
            </button>
          ))}
        </div>

        {/* Gallery Images Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredGallery.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group relative h-72 rounded-3xl overflow-hidden border border-slate-200/40 dark:border-slate-800 bg-white shadow-sm flex flex-col justify-end"
              >
                {/* Visual Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient vignette hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Info Text Overlay */}
                <div className="relative p-6 space-y-2 text-white transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#00C9A7]">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-sm sm:text-base leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed font-sans">
                    {item.description}
                  </p>
                  
                  {/* Floating Action view zoom */}
                  <button
                    onClick={() => setZoomedImgUrl(item.image)}
                    className="pt-2 text-[10px] font-extrabold text-[#1DA1F2] hover:underline flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" /> Full Resolution Lightbox
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Lightbox Modal overlay for Zooming images */}
        <AnimatePresence>
          {zoomedImgUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setZoomedImgUrl(null)}
              className="fixed inset-0 bg-slate-950/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl border border-white/10"
              >
                <img
                  src={zoomedImgUrl}
                  alt="Full resolution clinical detail view"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setZoomedImgUrl(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-950/80 text-white rounded-full text-xs font-bold font-mono"
                >
                  [Esc / Click to Exit]
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
