import { motion } from 'motion/react';
import { ShieldCheck, Heart, Sparkles, Award, Star, Eye } from 'lucide-react';
import { DOCTOR_INFO } from '../../data';
import TechnologyShowcase from '../TechnologyShowcase';

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Hospital-Grade Sterilization',
      desc: 'We follow rigorous international CDC and WHO autoclave protocols. Every instrument is individually sealed, biological indicator tested, and tracked for complete patient safety.',
      color: 'text-[#00C9A7] bg-[#00C9A7]/10',
    },
    {
      icon: Heart,
      title: 'Patient-First Compassion',
      desc: 'We understand dental anxiety. Our clinical team is specifically trained in pain-free anesthesia delivery and supportive behavior guidance for kids and adults alike.',
      color: 'text-[#1DA1F2] bg-[#1DA1F2]/10',
    },
    {
      icon: Sparkles,
      title: 'Digital Smile Pre-Visualization',
      desc: 'No diagnostic guessing. We utilize advanced CAD/CAM systems to render and preview your finished aligned smile on a high-definition monitor before treatment ever begins.',
      color: 'text-amber-500 bg-amber-500/10',
    },
    {
      icon: Award,
      title: 'Academic & Evidence-Based',
      desc: 'Led by an active Associate Professor. All treatments are designed based on the latest peer-reviewed clinical orthodontic research and orthodontic consensus.',
      color: 'text-[#0F4C81] bg-[#0F4C81]/10',
    },
  ];

  const achievements = [
    { value: '14+ Years', label: 'Consultant Clinical Experience' },
    { value: '1,200+', label: 'Successfully Aligned Smiles' },
    { value: '15+', label: 'Published Scientific Research Papers' },
    { value: '99.2%', label: 'Osseointegration & Alignment Success Rate' },
  ];

  const memberships = [
    'Fellow of Royal College of Surgeons in Ireland (FFD RCSI)',
    'Life Member of Pakistan Association of Orthodontists (PAO)',
    'Active International Member of World Federation of Orthodontists (WFO, USA)',
    'Registered Specialist Orthodontist, Pakistan Medical & Dental Council (PMDC)',
  ];

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950">
      
      {/* Hero Banner */}
      <div className="relative py-24 bg-[#0F4C81] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81] via-[#0c3d68] to-[#1DA1F2] opacity-95" />
        <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-[#00C9A7]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-[#1DA1F2]/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] bg-[#00C9A7]/20 text-[#00C9A7] px-3 py-1.5 rounded-full border border-[#00C9A7]/30 inline-block mb-4"
          >
            Academic & Clinical Excellence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight"
          >
            About Our Elite Dental Clinic
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mt-4 font-sans leading-relaxed"
          >
            Guided by academic research and utilizing international standard technologies, we bring pain-free, specialized orthodontics and smile design to Hyderabad.
          </motion.p>
        </div>
      </div>

      {/* Story & History Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#0F4C81] to-[#00C9A7] rounded-3xl blur-2xl opacity-10" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
              alt="Dr. Abdul Jabbar Orthodontics Environment"
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-extrabold text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-wider">
            Our Foundation Story
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Setting the Gold Standard in Orthodontics Since 2012
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            {DOCTOR_INFO.aboutLong}
          </p>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Our state-of-the-art center was established with a singular mission: to make world-class, European-accredited orthodontic and restorative treatments accessible locally. We believe that orthodontic alignment is a powerful medical intervention that reshapes your skeletal symmetry, boosts respiratory airways, corrects speech, and instills a lifetime of public confidence.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <Eye className="w-5 h-5 text-[#00C9A7] mb-2" />
              <h4 className="font-bold text-xs uppercase text-slate-900 dark:text-white">Our Vision</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">To bridge academic dental research with computerized clinical execution for lifetime alignments.</p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <Star className="w-5 h-5 text-[#1DA1F2] mb-2" />
              <h4 className="font-bold text-xs uppercase text-slate-900 dark:text-white">Our Mission</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Delivering highly aesthetic, non-extraction-first clinical results through gentle, premium dental care.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Counter section */}
      <div className="bg-[#0F4C81]/5 py-16 border-y border-slate-200/40 dark:border-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {achievements.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0F4C81] dark:text-[#1DA1F2]">
                  {item.value}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#00C9A7] uppercase tracking-widest block mb-3">Our Core Values</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
            Pillars of Dr. Abdul Jabbar’s Practice
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">Every clinical move we make is guided by four immutable medical principles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className={`p-3.5 rounded-xl w-fit ${v.color} mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-3">
                    {v.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Technology Showcasing */}
      <TechnologyShowcase />

      {/* Accreditations, Certifications & Memberships */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
              Global Accreditations & Boards
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Dr. Abdul Jabbar Orthodontics holds verified qualifications and registrations with national and international medical boards, ensuring safe clinical governance.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <span className="text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-md uppercase">PMDC Specialist Registered</span>
              <span className="text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-md uppercase">RCSI Ireland Fellow</span>
              <span className="text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-md uppercase">CPSP Fellow</span>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-3.5">
            {memberships.map((m, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800/50">
                <div className="w-2 h-2 rounded-full bg-[#00C9A7]" />
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
