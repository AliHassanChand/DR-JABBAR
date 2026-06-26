import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, ArrowUp, Facebook, Instagram, Linkedin, ShieldCheck, 
  MapPin, Clock, Phone, Mail, CheckCircle2, Award, HeartHandshake, 
  MessageSquare, Globe
} from 'lucide-react';
import { DOCTOR_INFO, CLINIC_CONTACT, TREATMENTS_DATA } from '../data';

interface FooterProps {
  setActivePage: (page: string) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const quickLinks = [
    { name: 'Home Directory', id: 'home' },
    { name: 'Academic Profile', id: 'about' },
    { name: 'Specialist Partners', id: 'doctors' },
    { name: 'Treatments List', id: 'services' },
    { name: 'Smile Success cases', id: 'results' },
    { name: 'Interactive Gallery', id: 'gallery' },
    { name: 'Patient Testimonials', id: 'testimonials' },
    { name: 'Scientific Health Blog', id: 'blog' },
    { name: 'FAQs & Pricing', id: 'faq' },
    { name: 'Contact & Directions', id: 'contact' },
    { name: 'MetaWave Agency Proposal', id: 'proposal' },
  ];

  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'Academic LinkedIn' },
  ];

  return (
    <footer
      id="site-footer"
      className="bg-slate-950 text-slate-400 border-t border-slate-900 transition-colors duration-300 relative overflow-hidden font-sans"
    >
      {/* Decorative premium clinical light leak effect in background */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[#1DA1F2]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#00C9A7]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-16 pb-12 relative z-10">
        
        {/* Top trust grid: Local credentials & high standards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-slate-900 text-xs text-slate-300">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/40 border border-slate-900/60">
            <Award className="w-5 h-5 text-[#1DA1F2] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold text-white block">FCPS & FFD RCSI (Ireland) Specialist</span>
              <span className="text-slate-500 leading-relaxed block">
                Academically verified Fellow of Orthodontics from Dublin & Pakistan Medical authorities.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/40 border border-slate-900/60">
            <CheckCircle2 className="w-5 h-5 text-[#00C9A7] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold text-white block">3D intra-oral computer scanning</span>
              <span className="text-slate-500 leading-relaxed block">
                Computerized outcome prediction showing your custom straight teeth before aligner manufacturing.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/40 border border-slate-900/60">
            <Globe className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold text-white block">Saddar, Hyderabad Core Clinic</span>
              <span className="text-slate-500 leading-relaxed block">
                Serving patient families across Hyderabad, Latifabad, Qasimabad, Mirpurkhas & interior Sindh.
              </span>
            </div>
          </div>
        </div>

        {/* Primary Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Column 1: Brand & Academic seal */}
          <div className="lg:col-span-4 space-y-6">
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#0F4C81] to-[#1DA1F2] text-white">
                <Sparkles className="w-5.5 h-5.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-sm tracking-tight text-white uppercase leading-tight">
                  DR. ABDUL JABBAR
                </span>
                <span className="text-[9px] tracking-[0.18em] uppercase text-slate-500 font-extrabold leading-none mt-0.5">
                  SMILE DESIGN CENTER
                </span>
              </div>
            </button>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Setting global benchmarks in clinical facial orthodontics and invisible computerized aligner therapies under LUMHS Associate Professor supervision in Hyderabad.
            </p>

            {/* Academic Credential Badges list */}
            <div className="space-y-2 border-l-2 border-[#1DA1F2]/40 pl-3">
              <p className="text-[11px] text-slate-300 font-bold leading-normal">
                Dr. Abdul Jabbar — BDS, FCPS (Orthodontics), FFD RCSI (Dublin, Ireland), MPhil.
              </p>
              <p className="text-[10px] text-slate-500 leading-normal uppercase tracking-wider font-extrabold">
                Associate Professor of Orthodontics
              </p>
            </div>

            {/* Social media connections */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-[#1DA1F2]/20 hover:border-[#1DA1F2]/30 transition-all cursor-pointer"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Advanced Clinic Directory */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest font-display border-b border-slate-900 pb-2">
              Clinic Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.id)}
                  className="hover:text-[#1DA1F2] text-slate-400 text-left py-1 hover:pl-1 transition-all cursor-pointer font-medium"
                >
                  &bull; {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Featured Treatments */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest font-display border-b border-slate-900 pb-2">
              Specialist Treatments
            </h4>
            <ul className="space-y-2.5 text-xs">
              {TREATMENTS_DATA.slice(0, 5).map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => {
                      setActivePage('service-single');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#00C9A7] text-slate-400 text-left hover:pl-1 transition-all cursor-pointer font-medium"
                  >
                    &bull; {t.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Timing Grid */}
          <div className="lg:col-span-2 space-y-4 text-xs">
            <h4 className="text-xs font-black text-white uppercase tracking-widest font-display border-b border-slate-900 pb-2">
              Contact & Hours
            </h4>
            
            <div className="space-y-3 font-sans leading-relaxed text-slate-400">
              
              {/* Timing */}
              <div className="space-y-1">
                <span className="text-slate-500 uppercase tracking-wider text-[9px] font-extrabold block">Timing</span>
                <span className="text-slate-300 font-bold block">4:00 PM - 9:00 PM</span>
                <span className="text-slate-500 block">Monday to Saturday</span>
                <span className="text-rose-500 font-bold block">Sunday: Closed</span>
              </div>

              {/* Bilingual care notice */}
              <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-900 text-[10px] text-slate-300 space-y-1">
                <span className="font-extrabold text-[#00C9A7] block uppercase tracking-wide">Local Assistance</span>
                <p className="leading-relaxed">
                  اردو اور سندھی زبانوں میں معلومات و مدد فراہم کی جاتی ہے۔
                </p>
              </div>

              {/* Helpline info */}
              <div className="space-y-0.5">
                <span className="text-slate-500 uppercase tracking-wider text-[9px] font-extrabold block">Direct Helpline</span>
                <a href={`tel:${CLINIC_CONTACT.phone}`} className="text-[#1DA1F2] font-mono font-bold block hover:underline">
                  {CLINIC_CONTACT.phone}
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & disclaimers */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-sans">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-slate-400 font-bold">
              &copy; {currentYear} Dr. Abdul Jabbar Orthodontics & Smile Design Center.
            </p>
            <p className="text-[10px] text-slate-600 max-w-xl leading-normal">
              Disclaimer: Clinical cases represent real patients treated under Dr. Abdul Jabbar's supervision. Treatment duration & alignments vary depending on dental anatomy and patient cooperation. PMDC Registration No: Certified.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2">
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-slate-400 hover:text-white underline cursor-pointer font-bold"
            >
              Privacy & Medical Ethics Policy
            </button>
            <span className="text-slate-800">|</span>
            <span className="text-slate-400 font-medium bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-rose-500" /> Saddar, Hyderabad, Pakistan
            </span>
          </div>
        </div>

      </div>

      {/* Back to Top floating button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-24 z-30 p-3 rounded-full bg-[#0F4C81] text-white hover:bg-[#1DA1F2] shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
        aria-label="Scroll back to top"
      >
        <ArrowUp className="w-4.5 h-4.5" />
      </button>

      {/* Privacy Policy & Disclaimer Popup Modal */}
      <AnimatePresence>
        {showPrivacy && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPrivacy(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-3xl p-6 sm:p-8 max-w-lg shadow-3xl border border-slate-200 dark:border-slate-800 z-10 max-h-[80vh] overflow-y-auto"
            >
              <h3 className="font-display font-black text-base sm:text-lg text-slate-900 dark:text-white flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                <ShieldCheck className="w-5.5 h-5.5 text-[#00C9A7]" />
                <span>Clinical Ethics & Privacy Disclaimer</span>
              </h3>
              
              <div className="mt-4 space-y-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                <p>
                  <strong>Patient Data Safety:</strong> Any contact info, phone details, and names logged on this consultation website are strictly preserved in local offline cache environments (such as client browser local storage).
                </p>
                <p>
                  <strong>Clinical Guarantee:</strong> Orthodontic treatments, aligners, and braces depend heavily on biological bone-remodeling dynamics, hygiene cooperation, and periodic clinical reviews. Thus, treatment estimates are standard clinical guidelines and not absolute guarantees.
                </p>
                <p>
                  <strong>Academic Reference:</strong> References to academic lectures, publications, and positions refer to accredited affiliations of Dr. Abdul Jabbar in accordance with PMDC (Pakistan Medical & Dental Council) ethical frameworks.
                </p>
                <p>
                  <strong>Multilingual Hospitality:</strong> To make high-end orthodontic care accessible for all socioeconomic backgrounds across interior Sindh and Hyderabad, our diagnostic consultation processes can be fully guided in Urdu, English, or Sindhi.
                </p>
              </div>

              <button
                onClick={() => setShowPrivacy(false)}
                className="mt-6 w-full py-3 bg-[#0F4C81] text-white rounded-xl text-xs sm:text-sm font-extrabold hover:bg-[#1DA1F2] transition-colors cursor-pointer shadow-md"
              >
                Acknowledge and Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
