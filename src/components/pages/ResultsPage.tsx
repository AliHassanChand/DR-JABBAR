import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Flame, Trophy, PlayCircle, Quote, MessageSquare } from 'lucide-react';
import { CASE_STUDIES, TESTIMONIALS_DATA } from '../../data';

interface ResultsPageProps {
  setActivePage: (page: string) => void;
}

export default function ResultsPage({ setActivePage }: ResultsPageProps) {
  // Simple state to simulate interactive play buttons for patient video reviews
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  const videoReviews = [
    {
      patient: 'Hassan Ali Chand',
      age: 26,
      treatment: 'Invisalign Clear Aligners',
      thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
      duration: '10 Months',
      quote: 'My deep bite and gaps made me self-conscious during corporate zoom calls. Aligners completely reshaped my smile in under 10 months. Best decision ever!',
    },
    {
      patient: 'Zainab Ahmed',
      age: 22,
      treatment: 'Ceramic Braces',
      thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600',
      duration: '14 Months',
      quote: 'Being a medical student, clinical hygiene was my priority. Dr. Abdul Jabbar clinic has pristine sterilization standards and is absolutely painless.',
    }
  ];

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      
      {/* Page Header */}
      <div className="relative py-24 bg-[#0F4C81] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81] via-[#0c3d68] to-[#1DA1F2] opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] bg-[#00C9A7]/20 text-[#00C9A7] px-3 py-1.5 rounded-full border border-[#00C9A7]/30 inline-block">
            Verified Case Transformations
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">
            Our Patient Results & Success Stories
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mx-auto">
            Witness the life-altering clinical transformations delivered by Dr. Abdul Jabbar through state-of-the-art diagnostic biomechanics and smile contouring.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Case Studies Detailed Grid Section */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
              Clinical Case File Showcases
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Review real clinical summaries of dental crowding, overbite, and spacing cases treated in our Saddar Hyderabad center.
            </p>
          </div>

          <div className="space-y-12">
            {CASE_STUDIES.map((study, idx) => (
              <div
                key={study.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Images comparison section */}
                <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50 dark:bg-slate-950/40 flex flex-col justify-center space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono block text-center">Before Treatment</span>
                      <div className="h-44 sm:h-52 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                        <img
                          src={study.beforeImage}
                          alt="Before teeth crowding alignment"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#00C9A7] font-mono block text-center">After Alignment</span>
                      <div className="h-44 sm:h-52 rounded-2xl overflow-hidden border-2 border-[#00C9A7]">
                        <img
                          src={study.afterImage}
                          alt="After teeth orthodontic alignment"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-[#0F4C81]/5 rounded-xl text-center">
                    <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">
                      Patient Age: <strong className="text-[#0F4C81] dark:text-[#1DA1F2]">{study.age} Years</strong> &bull; Duration: <strong className="text-[#00C9A7]">{study.duration}</strong>
                    </span>
                  </div>
                </div>

                {/* Case description details */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="text-[10px] font-extrabold text-[#1DA1F2] uppercase tracking-wider bg-[#1DA1F2]/10 px-2.5 py-1 rounded-md">
                      {study.treatmentType}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                      {study.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div>
                        <h4 className="font-bold text-xs uppercase text-rose-500 flex items-center gap-1">
                          <Flame className="w-3.5 h-3.5" /> Diagnostic Problem
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                          {study.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-xs uppercase text-emerald-500 flex items-center gap-1">
                          <Trophy className="w-3.5 h-3.5" /> Orthodontic Solution
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActivePage('booking');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-fit px-5 py-3 bg-[#0F4C81] hover:bg-[#0c3d68] text-white rounded-xl text-xs font-bold shadow-md self-start flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Similar Alignment Consult</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Reviews Layout */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-10">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#00C9A7] uppercase tracking-widest block">Video Testimonials</span>
            <h3 className="text-xl sm:text-3xl font-display font-extrabold mt-2">
              Patients Sharing Their Transformation journeys
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoReviews.map((v, i) => (
              <div
                key={i}
                className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden hover:border-[#1DA1F2]/40 transition-colors"
              >
                {/* Thumbnail video frame */}
                <div className="relative h-56 sm:h-64 overflow-hidden group">
                  <img
                    src={v.thumbnail}
                    alt={v.patient}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

                  {/* Play trigger overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setActiveVideoIndex(i)}
                      className="p-4 rounded-full bg-[#00C9A7] text-white shadow-xl hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                    >
                      <PlayCircle className="w-8 h-8 fill-current text-white" />
                    </button>
                  </div>

                  {activeVideoIndex === i && (
                    <div className="absolute inset-0 bg-slate-950 p-6 text-center flex flex-col justify-center space-y-4 z-10">
                      <Quote className="w-8 h-8 text-[#00C9A7] mx-auto fill-current" />
                      <p className="text-xs sm:text-sm text-slate-300 italic">
                        "{v.quote}"
                      </p>
                      <button
                        onClick={() => setActiveVideoIndex(null)}
                        className="text-[10px] font-bold text-slate-400 hover:text-white"
                      >
                        Close Playback Panel
                      </button>
                    </div>
                  )}

                  {/* Patient tag */}
                  <span className="absolute bottom-3 left-3 bg-[#0F4C81] text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                    {v.treatment}
                  </span>
                </div>

                <div className="p-4 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-white">{v.patient}</h4>
                    <p className="text-[10px] text-slate-500">Software Engineer, age {v.age}</p>
                  </div>
                  <span className="font-mono text-[10px] text-[#00C9A7] font-bold">Duration: {v.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
