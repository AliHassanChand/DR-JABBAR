import { motion } from 'motion/react';
import { Star, CheckCircle, Award, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data';

export default function TestimonialsPage() {
  const reviewsCount = 452;
  const ratingAvg = 4.9;

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      
      {/* Header */}
      <div className="relative py-20 bg-[#0F4C81] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81] via-[#0c3d68] to-[#1DA1F2] opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] bg-[#00C9A7]/20 text-[#00C9A7] px-3 py-1 rounded-full border border-[#00C9A7]/30 inline-block">
            Verified Reviews
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold">
            What Our Patients Say About Us
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mx-auto">
            Read certified clinical reviews and experiences from medical students, software engineers, and parents who chose Dr. Abdul Jabbar Orthodontics Center.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Rating Statistics Dashboard Block */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">
          
          <div className="space-y-1">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-[#0F4C81] dark:text-[#1DA1F2]">Google reviews</h4>
            <div className="flex items-center justify-center gap-1.5 py-2">
              <span className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white">{ratingAvg}</span>
              <span className="text-slate-400 text-sm">/ 5.0</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
              ))}
            </div>
            <p className="text-[10px] sm:text-xs text-slate-400 pt-1.5">Based on {reviewsCount} verified patient submissions</p>
          </div>

          <div className="space-y-2 border-y md:border-y-0 md:border-x border-slate-100 dark:border-slate-800 py-6 md:py-2">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-[#00C9A7]">Success Rate</h4>
            <div className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white py-1">
              99.2%
            </div>
            <p className="text-[10px] sm:text-xs text-slate-400">Biological alignment & integration stability</p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-teal-600">Patient Satisfaction</h4>
            <div className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white py-1">
              100%
            </div>
            <p className="text-[10px] sm:text-xs text-slate-400">Post-treatment clinical feedback rating</p>
          </div>

        </div>

        {/* Testimonials Review Cards Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#0F4C81]/10 dark:text-[#1DA1F2]/10 fill-current" />
                
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-amber-500 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed font-sans">
                  "{t.comment}"
                </p>
              </div>

              {/* User Avatar tag */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-xs text-slate-900 dark:text-white flex items-center gap-1">
                    <span>{t.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 fill-current" />
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 font-medium">
                    {t.role} &bull; <strong className="text-[#00C9A7]">{t.treatment}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clinician Ethic Statement */}
        <div className="p-6 bg-[#00C9A7]/5 rounded-3xl border border-[#00C9A7]/10 flex items-center gap-4 max-w-2xl mx-auto">
          <Award className="w-10 h-10 text-[#00C9A7] shrink-0" />
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
            <strong>Patient Privacy Code:</strong> All patient testimonials displayed above are published with direct consent. Review credentials refer to accredited patient histories at our Saddar Hyderabad center.
          </p>
        </div>

      </div>
    </div>
  );
}
