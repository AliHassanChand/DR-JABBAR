import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, GraduationCap, Clock, Languages, ArrowRight, Star, Sparkles, BookOpen } from 'lucide-react';
import { DOCTORS_DATA } from '../../data';

interface DoctorsPageProps {
  setActivePage: (page: string) => void;
}

export default function DoctorsPage({ setActivePage }: DoctorsPageProps) {
  const [selectedDocId, setSelectedDocId] = useState<string>(DOCTORS_DATA[0].id);

  const selectedDoctor = DOCTORS_DATA.find((d) => d.id === selectedDocId) || DOCTORS_DATA[0];

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      
      {/* Page Header */}
      <div className="relative py-20 bg-[#0F4C81] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81] via-[#0c3d68] to-[#1DA1F2] opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] bg-[#00C9A7]/20 text-[#00C9A7] px-3 py-1 rounded-full border border-[#00C9A7]/30 inline-block">
            Accredited Medical Team
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold">
            Meet Our Consultant Dental Specialists
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mx-auto">
            Led by Associate Professor Dr. Abdul Jabbar, our clinic houses board-certified specialists in Orthodontics, Pediatric Dentistry, and Prosthetic Implantology.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Doctors Quick Selection Tab Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {DOCTORS_DATA.map((doc) => (
            <button
              key={doc.id}
              onClick={() => setSelectedDocId(doc.id)}
              className={`flex items-center gap-3 p-3.5 pr-6 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedDocId === doc.id
                  ? 'bg-white dark:bg-slate-900 border-[#0F4C81] dark:border-[#1DA1F2] shadow-lg shadow-blue-900/5'
                  : 'bg-transparent border-slate-200 dark:border-slate-800 hover:bg-white/50 dark:hover:bg-slate-900/30'
              }`}
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-10 h-10 rounded-xl object-cover shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="font-display font-bold text-xs text-slate-900 dark:text-white leading-tight">
                  {doc.name}
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  {doc.title.split('&')[0].split('and')[0].trim()}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Detailed Profile Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDoctor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden"
          >
            {/* Left Col: Photo & Main Info */}
            <div className="lg:col-span-4 p-8 bg-slate-50/50 dark:bg-slate-950/20 border-r border-slate-100 dark:border-slate-800/60 flex flex-col items-center text-center">
              <div className="relative group w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-md border-4 border-white dark:border-slate-900">
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mt-6">
                {selectedDoctor.name}
              </h2>
              <p className="text-xs font-semibold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-wider mt-1.5 px-3 py-1 rounded-full bg-[#0F4C81]/5">
                {selectedDoctor.title}
              </p>

              {/* Degrees Badge Block */}
              <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                {selectedDoctor.degrees.map((deg, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md"
                  >
                    {deg}
                  </span>
                ))}
              </div>

              <div className="w-full border-t border-slate-100 dark:border-slate-800/80 my-6" />

              {/* Languages Spoken */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <Languages className="w-4 h-4 text-[#1DA1F2]" />
                <span>Spoken Languages:</span>
                <span className="text-[#00C9A7] font-bold">{selectedDoctor.languages.join(', ')}</span>
              </div>

              {/* Experience Info */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 mt-3">
                <Clock className="w-4 h-4 text-[#1DA1F2]" />
                <span>Clinical Practice:</span>
                <span className="text-[#00C9A7] font-bold">{selectedDoctor.experience}</span>
              </div>

              {/* Call-to-Action */}
              <button
                onClick={() => {
                  setActivePage('booking');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-8 w-full py-3.5 bg-[#0F4C81] hover:bg-[#0c3d68] text-white rounded-2xl text-xs font-bold shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book Consult with {selectedDoctor.name.split(' ')[1] || selectedDoctor.name}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Col: Biography, Specialties, and Timeline */}
            <div className="lg:col-span-8 p-8 sm:p-10 space-y-8">
              
              {/* Profile Biography */}
              <div className="space-y-3">
                <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#00C9A7] flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Professional Biography
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {selectedDoctor.about}
                </p>
              </div>

              {/* Specializations / Expertise */}
              <div className="space-y-4">
                <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#00C9A7] flex items-center gap-2">
                  <Star className="w-4 h-4" /> Core Clinical Specialties
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedDoctor.specializations.map((spec, i) => (
                    <div
                      key={i}
                      className="p-3 bg-slate-50 dark:bg-slate-950/40 rounded-xl border border-slate-100 dark:border-slate-800/40 flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#1DA1F2]" />
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards & Honors */}
              <div className="space-y-4">
                <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#00C9A7] flex items-center gap-2">
                  <Award className="w-4 h-4" /> Board Recognitions & Awards
                </h3>
                <div className="space-y-2.5">
                  {selectedDoctor.awards.map((award, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <Award className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="font-semibold">{award}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience & Academic Timeline */}
              <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#00C9A7] flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" /> Academic & Board Timeline
                </h3>
                <div className="relative border-l-2 border-slate-100 dark:border-slate-800 pl-6 space-y-6">
                  {selectedDoctor.timeline.map((event, i) => (
                    <div key={i} className="relative">
                      <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0F4C81] dark:bg-[#1DA1F2] border-4 border-white dark:border-slate-900" />
                      <div>
                        <span className="text-[10px] font-bold text-[#00C9A7] font-mono bg-[#00C9A7]/10 px-2 py-0.5 rounded-md">
                          {event.year}
                        </span>
                        <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mt-1">
                          {event.title}
                        </h5>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1.5 font-sans">
                          <BookOpen className="w-3.5 h-3.5 text-[#1DA1F2]" />
                          <span>{event.institution}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
