import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Sun, Moon, Calendar, PhoneCall, Sparkles, ChevronDown, 
  Award, HeartHandshake, Search, Command, Clock, ArrowRight, 
  Compass, Info, HelpCircle, FileText, CheckCircle2, Star, 
  Layers, Smile, ShieldCheck, Flame, Zap, MapPin, Check, GraduationCap, Laptop, BookOpen
} from 'lucide-react';
import { TREATMENTS_DATA, DOCTORS_DATA, CLINIC_CONTACT } from '../data';

interface HeaderProps {
  darkTheme: boolean;
  toggleTheme: () => void;
  openBookingModal: () => void;
  activePage: string;
  setActivePage: (page: string) => void;
  setSelectedServiceId: (id: string) => void;
}

export default function Header({
  darkTheme,
  toggleTheme,
  openBookingModal,
  activePage,
  setActivePage,
  setSelectedServiceId,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Smart Search Palette state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSelectedIndex, setSearchSelectedIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // Track scroll positions for floating designs
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus input when search overlay triggers
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 80);
      setSearchQuery('');
      setSearchSelectedIndex(0);
    }
  }, [isSearchOpen]);

  // Navigate & scroll to top helper
  const handleNavigate = (pageId: string) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Treatment selecting helper
  const handleServiceSelect = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setActivePage('service-single');
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Organized navigation architecture structures
  const treatmentCategories = [
    { name: 'Aesthetic Orthodontics', category: 'Orthodontics', desc: 'Clear Aligners, Metal, and Ceramic braces.', icon: Smile },
    { name: 'Cosmetic Dentistry', category: 'Cosmetic', desc: 'Laser whitening, premium porcelain veneers.', icon: Sparkles },
    { name: 'Surgical & Maxillofacial', category: 'Surgical', desc: 'Skeletal jaw and corrective surgeries.', icon: Award },
    { name: 'Restorative & Family', category: 'Restorative', desc: 'Pain-free crowns, bridges, and child care.', icon: HeartHandshake }
  ];

  const searchItems = [
    ...TREATMENTS_DATA.map((t) => ({
      title: t.title,
      description: t.shortDesc,
      category: 'Clinical Treatments',
      action: () => handleServiceSelect(t.id),
      icon: Smile,
      badge: t.category,
    })),
    { title: 'Dr. Abdul Jabbar FCPS Profile', description: 'Elite Fellowship qualifications & LUMHS Associate Professorship.', category: 'About Doctors', action: () => handleNavigate('about'), icon: GraduationCap, badge: 'Associate Professor' },
    { title: 'Meet Specialist Dental Team', description: 'Hyderabad’s certified orthodontic and pediatric clinical partners.', category: 'About Doctors', action: () => handleNavigate('doctors'), icon: Award, badge: 'Team Care' },
    { title: '3D Laser Intra-oral Scanning', description: 'Painless computerized dental scanner producing instant virtual aligner outcomes.', category: 'Our Technology', action: () => handleNavigate('services'), icon: Laptop, badge: 'Innovation' },
    { title: 'Case Results & Before/Afters', description: 'Clinical treatment results of severe dental malocclusion cases.', category: 'Patient Portal', action: () => handleNavigate('results'), icon: ShieldCheck, badge: 'Success Cases' },
    { title: 'Verified Video Reviews & Testimonials', description: 'Patient success logs from families across Sindh & Hyderabad.', category: 'Patient Portal', action: () => handleNavigate('testimonials'), icon: Star, badge: 'Patient Trust' },
    { title: 'Interactive Photo Gallery', description: 'View our state-of-the-art sterilization labs and modern surgical suites.', category: 'Patient Portal', action: () => handleNavigate('gallery'), icon: Compass, badge: 'Clinic Tour' },
    { title: 'Dental Installment Calculator & FAQ', description: 'Frequently asked questions regarding braces budgets, pricing, and timelines.', category: 'Billing Guide', action: () => handleNavigate('faq'), icon: HelpCircle, badge: 'Pricing & FAQ' },
    { title: 'Scientific Dental Care Blog', description: 'Clinical articles, alignment guidelines, and post-treatment wisdom.', category: 'Education', action: () => handleNavigate('blog'), icon: BookOpen, badge: 'Oral Health Blog' },
    { title: 'Clinic Address & Directions', description: 'Located opposite State Bank, Saddar, Hyderabad, Sindh.', category: 'Clinic Directions', action: () => handleNavigate('contact'), icon: MapPin, badge: 'Location Map' },
    { title: 'Book 3D Smile Consultation', description: 'Instantly request your customized clinical review with Dr. Jabbar.', category: 'Quick Actions', action: () => { openBookingModal(); setIsSearchOpen(false); }, icon: Calendar, badge: 'Booking', priority: true },
    { title: 'Bilingual Call Center Desk', description: 'Connect with patient care desk for instant Urdu or English help.', category: 'Quick Actions', action: () => { window.location.href = `tel:${CLINIC_CONTACT.phone}`; }, icon: PhoneCall, badge: 'Call Helpline' }
  ];

  const filteredSearchItems = searchItems.filter((item) => {
    if (!searchQuery) return item.priority || item.category === 'Quick Actions';
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.badge.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSearchSelectedIndex((prev) => (prev + 1) % filteredSearchItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSearchSelectedIndex((prev) => (prev - 1 + filteredSearchItems.length) % filteredSearchItems.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredSearchItems[searchSelectedIndex]) {
        filteredSearchItems[searchSelectedIndex].action();
        setIsSearchOpen(false);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      {/* Dynamic Scroll Progress Accent Thread */}
      <div className="fixed top-0 left-0 w-full h-[4px] z-50 bg-slate-100/10 dark:bg-slate-900/10">
        <div
          id="scroll-indicator"
          className="h-full bg-gradient-to-r from-[#0F4C81] via-[#1DA1F2] to-[#00C9A7] transition-all duration-100 shadow-[0_0_10px_rgba(29,161,242,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Clinical Trust bar: Hides smoothly on scroll */}
      <div className={`hidden lg:block bg-slate-900 text-slate-300 py-2 border-b border-slate-800 transition-all duration-300 relative z-40 ${
        isScrolled ? 'h-0 overflow-hidden opacity-0 py-0' : 'h-10 opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between text-xs font-sans">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#1DA1F2]" />
              <span>Saddar, Opp. State Bank, Hyderabad</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#00C9A7]" />
              <span>Mon - Sat: 4:00 PM - 9:00 PM</span>
            </span>
            <span className="hidden xl:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] border border-slate-700">
              <ShieldCheck className="w-3 h-3 text-[#00C9A7]" />
              <span>PMDC Certified Clinical Specialists</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Direct Dialing */}
            <a href="tel:+923001234567" className="hover:text-white flex items-center gap-1 transition-colors">
              <PhoneCall className="w-3.5 h-3.5 text-[#1DA1F2]" />
              <span className="font-mono text-xs">+92 300 1234567</span>
            </a>
            <span className="text-slate-700">|</span>
            {/* Language Local Care Notice */}
            <span className="text-[11px] text-slate-300 font-medium">
              اردو رہنمائی دستیاب ہے <span className="text-[#00C9A7]">•</span> Helpdesk Assistance
            </span>
          </div>
        </div>
      </div>

      {/* Primary Floating Master Navigation Header */}
      <header
        id="site-header"
        className={`fixed left-0 w-full z-45 transition-all duration-500 ${
          isScrolled
            ? 'top-2 pt-2 px-4 sm:px-6 lg:px-8'
            : 'top-10 pt-0 px-0'
        } ${isScrolled ? '' : 'lg:top-10'}`}
      >
        <div
          className={`mx-auto transition-all duration-500 ${
            isScrolled
              ? 'max-w-7xl rounded-2xl bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl shadow-slate-900/10'
              : 'max-w-[1440px] bg-[#F8FBFF]/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/40 dark:border-slate-800/40'
          }`}
        >
          <div className="px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
            
            {/* Logo Brand Frame */}
            <div className="flex items-center gap-3">
              <button
                id="brand-logo"
                onClick={() => handleNavigate('home')}
                className="flex items-center gap-2.5 group focus:outline-none cursor-pointer text-left"
              >
                <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#0F4C81] to-[#1DA1F2] text-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                  <Sparkles className="w-5.5 h-5.5" />
                  <div className="absolute inset-0 rounded-2xl border border-white/20" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black text-xs sm:text-sm tracking-tight text-[#0F4C81] dark:text-white transition-colors leading-tight uppercase">
                    DR. ABDUL JABBAR
                  </span>
                  <span className="text-[9px] tracking-[0.16em] uppercase text-slate-500 dark:text-slate-400 font-bold leading-none mt-0.5">
                    SMILE DESIGN CENTER
                  </span>
                </div>
              </button>

              {/* Dynamic Status Beacon - Widescreen */}
              <div className="hidden xl:flex items-center gap-2 pl-3 ml-3 border-l border-slate-200 dark:border-slate-800/60">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C9A7] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C9A7]"></span>
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                  <strong className="text-[#00C9A7]">Clinical Slot Available</strong> <span className="opacity-60">Saddar, PK</span>
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links - Restructured tab layout for absolute clarity */}
            <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
              
              {/* Home */}
              <button
                onClick={() => handleNavigate('home')}
                className={`relative px-2.5 xl:px-3.5 py-2 text-xs font-extrabold tracking-wide rounded-full transition-all duration-300 cursor-pointer ${
                  activePage === 'home'
                    ? 'text-[#0F4C81] dark:text-[#1DA1F2]'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#0F4C81] dark:hover:text-[#1DA1F2]'
                }`}
              >
                <span>Home</span>
                {activePage === 'home' && (
                  <motion.div
                    layoutId="activeNavBubble"
                    className="absolute inset-0 bg-[#0F4C81]/8 dark:bg-[#1DA1F2]/10 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* Academic Profile */}
              <button
                onClick={() => handleNavigate('about')}
                className={`relative px-2.5 xl:px-3.5 py-2 text-xs font-extrabold tracking-wide rounded-full transition-all duration-300 cursor-pointer ${
                  activePage === 'about'
                    ? 'text-[#0F4C81] dark:text-[#1DA1F2]'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#0F4C81] dark:hover:text-[#1DA1F2]'
                }`}
              >
                <span>Dr. Abdul Jabbar</span>
                {activePage === 'about' && (
                  <motion.div
                    layoutId="activeNavBubble"
                    className="absolute inset-0 bg-[#0F4C81]/8 dark:bg-[#1DA1F2]/10 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* Treatments & Specialist Team - Advanced Dropdown / Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavigate('services')}
                  className={`relative flex items-center gap-1.5 px-2.5 xl:px-3.5 py-2 text-xs font-extrabold tracking-wide rounded-full transition-all duration-300 cursor-pointer ${
                    activePage === 'services' || activePage === 'service-single' || activePage === 'doctors'
                      ? 'text-[#0F4C81] dark:text-[#1DA1F2]'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#0F4C81] dark:hover:text-[#1DA1F2]'
                  }`}
                >
                  <span>Treatments & Care</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform duration-300 group-hover:rotate-180" />
                  {(activePage === 'services' || activePage === 'service-single' || activePage === 'doctors') && (
                    <motion.div
                      layoutId="activeNavBubble"
                      className="absolute inset-0 bg-[#0F4C81]/8 dark:bg-[#1DA1F2]/10 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                {/* Services & Care Directory Mega Menu Dropdown */}
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px] xl:w-[840px] z-50"
                    >
                      <div className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-3xl rounded-3xl overflow-hidden p-6 grid grid-cols-12 gap-6">
                        
                        {/* Column 1: Treatments List Categorized */}
                        <div className="col-span-8 grid grid-cols-2 gap-4">
                          {treatmentCategories.map((cat, idx) => {
                            const CatIcon = cat.icon;
                            const servicesInCategory = TREATMENTS_DATA.filter((s) => s.category === cat.category);
                            
                            return (
                              <div key={idx} className="space-y-2">
                                <div className="flex items-center gap-1.5 text-[#0F4C81] dark:text-[#1DA1F2] border-b border-slate-100 dark:border-slate-800/40 pb-1.5">
                                  <CatIcon className="w-4 h-4 text-[#1DA1F2]" />
                                  <span className="text-[10px] font-extrabold uppercase tracking-wider">{cat.name}</span>
                                </div>
                                <ul className="space-y-1">
                                  {servicesInCategory.slice(0, 3).map((item) => (
                                    <li key={item.id}>
                                      <button
                                        onClick={() => handleServiceSelect(item.id)}
                                        className="text-left text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-[#00C9A7] dark:hover:text-[#1DA1F2] transition-colors py-0.5 block w-full truncate hover:pl-1 transition-all"
                                      >
                                        &bull; {item.title}
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>

                        {/* Column 2: Specialist Team Spotlight */}
                        <div className="col-span-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-4 flex flex-col justify-between border border-slate-200/30 dark:border-slate-800/30">
                          <div className="space-y-2">
                            <span className="text-[10px] font-bold text-[#1DA1F2] uppercase tracking-widest block">Team Specialist</span>
                            <h4 className="text-xs font-extrabold text-slate-800 dark:text-slate-100 leading-snug">
                              Meet Dr. Abdul Jabbar's Board-Certified Partners
                            </h4>
                            <p className="text-[11px] text-slate-500 leading-normal">
                              Collaborating with pediatric dentists, implantologists, and cosmetic specialists in Saddar, Hyderabad.
                            </p>
                          </div>
                          
                          <button
                            onClick={() => handleNavigate('doctors')}
                            className="w-full mt-3 py-2 px-3 bg-[#0F4C81] text-white rounded-xl text-[11px] font-bold text-center flex items-center justify-center gap-1.5 hover:bg-[#1DA1F2] transition-colors cursor-pointer"
                          >
                            <span>Meet Specialist Team</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Footnote bar inside mega-menu */}
                        <div className="col-span-12 border-t border-slate-200/50 dark:border-slate-800/40 pt-3 flex items-center justify-between text-xs text-slate-500">
                          <span className="flex items-center gap-1 text-[#00C9A7] font-bold">
                            <Check className="w-4 h-4" /> Comprehensive Orthodontics with Easy Monthly Installments
                          </span>
                          <button
                            onClick={() => handleNavigate('services')}
                            className="text-[#0F4C81] dark:text-[#1DA1F2] hover:underline font-extrabold flex items-center gap-0.5"
                          >
                            <span>Explore All {TREATMENTS_DATA.length} Treatments</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Patient Hub - cases, testimonials, gallery */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('patient-hub')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`relative flex items-center gap-1 px-2.5 xl:px-3.5 py-2 text-xs font-extrabold tracking-wide rounded-full transition-all duration-300 cursor-pointer ${
                    activePage === 'results' || activePage === 'testimonials' || activePage === 'gallery'
                      ? 'text-[#0F4C81] dark:text-[#1DA1F2]'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#0F4C81] dark:hover:text-[#1DA1F2]'
                  }`}
                >
                  <span>Smile Hub</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  {(activePage === 'results' || activePage === 'testimonials' || activePage === 'gallery') && (
                    <motion.div
                      layoutId="activeNavBubble"
                      className="absolute inset-0 bg-[#0F4C81]/8 dark:bg-[#1DA1F2]/10 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {activeDropdown === 'patient-hub' && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-56 z-50"
                    >
                      <div className="bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60 shadow-xl rounded-2xl overflow-hidden p-2">
                        <button
                          onClick={() => handleNavigate('results')}
                          className="w-full text-left p-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 flex items-center gap-2"
                        >
                          <ShieldCheck className="w-4 h-4 text-[#00C9A7]" />
                          <span>Before & After Cases</span>
                        </button>
                        <button
                          onClick={() => handleNavigate('testimonials')}
                          className="w-full text-left p-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 flex items-center gap-2"
                        >
                          <Star className="w-4 h-4 text-amber-500" />
                          <span>Patient Video Reviews</span>
                        </button>
                        <button
                          onClick={() => handleNavigate('gallery')}
                          className="w-full text-left p-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 flex items-center gap-2"
                        >
                          <Compass className="w-4 h-4 text-[#1DA1F2]" />
                          <span>Clinic Photos & Tour</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Help & Education Directory */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('education')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`relative flex items-center gap-1 px-2.5 xl:px-3.5 py-2 text-xs font-extrabold tracking-wide rounded-full transition-all duration-300 cursor-pointer ${
                    activePage === 'faq' || activePage === 'blog'
                      ? 'text-[#0F4C81] dark:text-[#1DA1F2]'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#0F4C81] dark:hover:text-[#1DA1F2]'
                  }`}
                >
                  <span>Patient Guide</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  {(activePage === 'faq' || activePage === 'blog') && (
                    <motion.div
                      layoutId="activeNavBubble"
                      className="absolute inset-0 bg-[#0F4C81]/8 dark:bg-[#1DA1F2]/10 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {activeDropdown === 'education' && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-56 z-50"
                    >
                      <div className="bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60 shadow-xl rounded-2xl overflow-hidden p-2">
                        <button
                          onClick={() => handleNavigate('faq')}
                          className="w-full text-left p-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 flex items-center gap-2"
                        >
                          <HelpCircle className="w-4 h-4 text-violet-500" />
                          <span>FAQs & Installments</span>
                        </button>
                        <button
                          onClick={() => handleNavigate('blog')}
                          className="w-full text-left p-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 flex items-center gap-2"
                        >
                          <FileText className="w-4 h-4 text-rose-500" />
                          <span>Scientific Health Blog</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Page */}
              <button
                onClick={() => handleNavigate('contact')}
                className={`relative px-2.5 xl:px-3.5 py-2 text-xs font-extrabold tracking-wide rounded-full transition-all duration-300 cursor-pointer ${
                  activePage === 'contact'
                    ? 'text-[#0F4C81] dark:text-[#1DA1F2]'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#0F4C81] dark:hover:text-[#1DA1F2]'
                }`}
              >
                <span>Contact & Maps</span>
                {activePage === 'contact' && (
                  <motion.div
                    layoutId="activeNavBubble"
                    className="absolute inset-0 bg-[#0F4C81]/8 dark:bg-[#1DA1F2]/10 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

            </nav>

            {/* Right Side Header Panel - CTAs */}
            <div className="hidden sm:flex items-center gap-2.5">
              
              {/* Dynamic Interactive Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                title="Search treatments & prices (Cmd+K)"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-slate-100/50 dark:bg-slate-900/30 text-slate-500 hover:text-[#0F4C81] dark:hover:text-[#1DA1F2] hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all duration-300 cursor-pointer"
              >
                <Search className="w-4 h-4 text-slate-400" />
                <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest hidden xl:inline">Search Directory</span>
                <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/30 dark:border-slate-700/30 text-[9px] font-semibold text-slate-500 dark:text-slate-400">
                  <Command className="w-2.5 h-2.5" />
                  <span>K</span>
                </div>
              </button>

              {/* Theme toggle */}
              <button
                id="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-600 dark:text-slate-300 transition-all duration-300 cursor-pointer"
              >
                {darkTheme ? <Sun className="w-4.5 h-4.5 text-[#00C9A7]" /> : <Moon className="w-4.5 h-4.5 text-[#0F4C81]" />}
              </button>

              {/* Appointment Booking Trigger Button */}
              <button
                id="header-book-btn"
                onClick={() => handleNavigate('booking')}
                className="relative overflow-hidden group flex items-center gap-1.5 px-4.5 py-2.5 bg-gradient-to-r from-[#0F4C81] to-[#1DA1F2] text-white rounded-xl text-xs font-extrabold shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Calendar className="w-3.5 h-3.5 text-[#00C9A7]" />
                <span>Book Free Smile Scan</span>
              </button>

            </div>

            {/* Mobile Navigation controls */}
            <div className="flex lg:hidden items-center gap-1.5">
              
              {/* Command Palette Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <Search className="w-4.5 h-4.5" />
              </button>

              {/* Theme Toggle Mobile */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                {darkTheme ? <Sun className="w-4.5 h-4.5 text-[#00C9A7]" /> : <Moon className="w-4.5 h-4.5 text-[#0F4C81]" />}
              </button>

              {/* Drawer Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 animate-spin-once" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile slide-drawer: Categorized & incredibly clean */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-drawer"
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              className="lg:hidden mx-4 mt-2 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800/60 rounded-2xl overflow-hidden shadow-2xl relative z-40"
            >
              <div className="px-4 pt-3 pb-6 space-y-4 max-h-[78vh] overflow-y-auto">
                
                {/* Main links block */}
                <div className="space-y-1">
                  <button
                    onClick={() => handleNavigate('home')}
                    className={`w-full text-left px-4 py-2.5 text-xs font-extrabold rounded-xl transition-colors flex items-center justify-between ${
                      activePage === 'home' ? 'bg-[#0F4C81]/10 text-[#0F4C81]' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-500/5'
                    }`}
                  >
                    <span>Home & Clinic Intro</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                  </button>

                  <button
                    onClick={() => handleNavigate('about')}
                    className={`w-full text-left px-4 py-2.5 text-xs font-extrabold rounded-xl transition-colors flex items-center justify-between ${
                      activePage === 'about' ? 'bg-[#0F4C81]/10 text-[#0F4C81]' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-500/5'
                    }`}
                  >
                    <span>Dr. Abdul Jabbar FCPS Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                  </button>

                  <button
                    onClick={() => handleNavigate('doctors')}
                    className={`w-full text-left px-4 py-2.5 text-xs font-extrabold rounded-xl transition-colors flex items-center justify-between ${
                      activePage === 'doctors' ? 'bg-[#0F4C81]/10 text-[#0F4C81]' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-500/5'
                    }`}
                  >
                    <span>Our Specialist Dental Team</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                  </button>
                </div>

                {/* Services Collapsible Block */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-4 block">Clinical Treatments</span>
                  <div className="grid grid-cols-2 gap-1.5 px-2">
                    {TREATMENTS_DATA.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => handleServiceSelect(t.id)}
                        className="text-left text-[11px] font-bold text-slate-600 dark:text-slate-400 p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 hover:text-[#00C9A7]"
                      >
                        {t.title.replace('Aesthetic ', '').replace('Advanced ', '').replace('Premium ', '').slice(0, 18)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Success Cases & Reviews */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-4 block">Smile Success Hub</span>
                  <div className="grid grid-cols-3 gap-1.5 px-2">
                    <button
                      onClick={() => handleNavigate('results')}
                      className="text-center text-[10px] font-bold text-slate-600 dark:text-slate-300 p-2 rounded-lg bg-slate-50 dark:bg-slate-900 hover:text-[#1DA1F2]"
                    >
                      Before/After
                    </button>
                    <button
                      onClick={() => handleNavigate('testimonials')}
                      className="text-center text-[10px] font-bold text-slate-600 dark:text-slate-300 p-2 rounded-lg bg-slate-50 dark:bg-slate-900 hover:text-[#1DA1F2]"
                    >
                      Reviews
                    </button>
                    <button
                      onClick={() => handleNavigate('gallery')}
                      className="text-center text-[10px] font-bold text-slate-600 dark:text-slate-300 p-2 rounded-lg bg-slate-50 dark:bg-slate-900 hover:text-[#1DA1F2]"
                    >
                      Photos
                    </button>
                  </div>
                </div>

                {/* FAQ, Blog & Guides */}
                <div className="grid grid-cols-2 gap-2 px-2">
                  <button
                    onClick={() => handleNavigate('faq')}
                    className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300"
                  >
                    <HelpCircle className="w-4 h-4 text-violet-500" />
                    <span>FAQ & Installments</span>
                  </button>
                  <button
                    onClick={() => handleNavigate('blog')}
                    className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300"
                  >
                    <FileText className="w-4 h-4 text-rose-500" />
                    <span>Care Articles</span>
                  </button>
                </div>

                {/* Booking & Call Trigger */}
                <div className="pt-4 flex flex-col gap-2 border-t border-slate-200/50 dark:border-slate-800/40">
                  <a
                    href="tel:+923001234567"
                    className="flex items-center justify-center gap-2 py-3 bg-slate-900 dark:bg-slate-900 text-white rounded-xl text-xs font-extrabold"
                  >
                    <PhoneCall className="w-4 h-4 text-[#1DA1F2]" />
                    <span>Call Center Helpline: +92 300 1234567</span>
                  </a>
                  <button
                    onClick={() => handleNavigate('booking')}
                    className="flex items-center justify-center gap-2 py-3 bg-[#0F4C81] text-white rounded-xl text-xs font-extrabold cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#00C9A7]" />
                    <span>Request Free 3D Smile Scan</span>
                  </button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MASTER SMART SEARCH / COMMAND PALETTE CENTER OVERLAY */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-55 flex items-start justify-center pt-20 px-4 sm:pt-28">
            
            {/* Ambient Blurred Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSearchOpen(false)}
              className="absolute inset-0 bg-slate-950/65 backdrop-blur-md"
            />

            {/* Smart Command Palette Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 rounded-3xl shadow-3xl overflow-hidden z-10"
            >
              {/* Search input line */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 dark:border-slate-800">
                <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSearchSelectedIndex(0);
                  }}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Type to search treatments, diagnostics, FAQs, or actions..."
                  className="w-full text-slate-800 dark:text-white bg-transparent outline-none text-sm font-semibold placeholder:text-slate-400 dark:placeholder:text-slate-600"
                />
                
                {/* Close Button */}
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="px-2 py-1 text-[10px] font-bold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:text-slate-700 dark:hover:text-white"
                >
                  ESC
                </button>
              </div>

              {/* Dynamic Live Results Container */}
              <div 
                ref={resultsContainerRef}
                className="max-h-[350px] overflow-y-auto p-2 space-y-1 bg-slate-50/50 dark:bg-slate-950"
              >
                {filteredSearchItems.length > 0 ? (
                  filteredSearchItems.map((item, index) => {
                    const isSelected = index === searchSelectedIndex;
                    const ItemIcon = item.icon || Compass;

                    return (
                      <button
                        key={index}
                        onClick={() => {
                          item.action();
                          setIsSearchOpen(false);
                        }}
                        onMouseEnter={() => setSearchSelectedIndex(index)}
                        className={`w-full text-left flex items-start gap-3.5 p-3 rounded-2xl transition-all duration-150 cursor-pointer ${
                          isSelected
                            ? 'bg-[#0F4C81]/8 dark:bg-[#1DA1F2]/10 border-l-4 border-[#1DA1F2]'
                            : 'hover:bg-slate-100/50 dark:hover:bg-slate-900/30 border-l-4 border-transparent'
                        }`}
                      >
                        {/* Option Icon */}
                        <div className={`p-2 rounded-xl shrink-0 ${
                          isSelected 
                            ? 'bg-[#0F4C81] text-white' 
                            : 'bg-slate-100 dark:bg-slate-900 text-slate-400 dark:text-slate-500'
                        }`}>
                          <ItemIcon className="w-4 h-4" />
                        </div>

                        {/* Option texts */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-black text-slate-800 dark:text-slate-100 block truncate">
                              {item.title}
                            </span>
                            <span className="text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400">
                              {item.badge}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 block truncate mt-0.5 font-medium">
                            {item.description}
                          </span>
                        </div>
                      </button>
                    );
                  })
                ) : (
                  <div className="py-12 text-center text-slate-400 dark:text-slate-600 space-y-2">
                    <HelpCircle className="w-8 h-8 mx-auto stroke-[1.5]" />
                    <p className="text-xs font-bold">No clinic matching results found.</p>
                    <p className="text-[10px]">Try searching "aligners", "ceramic", "doctors", or "installment".</p>
                  </div>
                )}
              </div>

              {/* Spotlight Command Center Footer Actions */}
              <div className="flex items-center justify-between px-5 py-3 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/40 text-[10px] text-slate-400 dark:text-slate-500 font-bold">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <span className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded">&uarr;&darr;</span>
                    <span>to navigate</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded">Enter</span>
                    <span>to select</span>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[#1DA1F2]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Smart Clinical Directory</span>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
