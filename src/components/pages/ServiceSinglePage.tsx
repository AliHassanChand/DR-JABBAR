import { useState, useRef, MouseEvent, TouchEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Check, Calendar, ArrowLeft, Info, HelpCircle, DollarSign, Clock, ShieldAlert, Sparkles, Send } from 'lucide-react';
import { TREATMENTS_DATA, CASE_STUDIES } from '../../data';
import * as Icons from 'lucide-react';

interface ServiceSinglePageProps {
  serviceId: string;
  setActivePage: (page: string) => void;
  setSelectedServiceId: (id: string) => void;
}

export default function ServiceSinglePage({ serviceId, setActivePage, setSelectedServiceId }: ServiceSinglePageProps) {
  const currentService = TREATMENTS_DATA.find((s) => s.id === serviceId) || TREATMENTS_DATA[0];

  // Interactive slider position (percentage 0 to 100)
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isSliding, setIsSliding] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  // Cost inquiry form state
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Dynamic Before/After images mapped loosely from CASE_STUDIES or premium fallbacks
  const caseMatch = CASE_STUDIES.find((c) => c.id === 'case-1') || CASE_STUDIES[0];
  const beforeImg = currentService.category === 'Orthodontics' 
    ? 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600'
    : 'https://images.unsplash.com/photo-1544717297-fa154da09f51?auto=format&fit=crop&q=80&w=600';
  const afterImg = currentService.category === 'Orthodontics'
    ? 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600'
    : 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600';

  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isSliding) return;
    handleSliderMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isSliding) return;
    handleSliderMove(e.touches[0].clientX);
  };

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) return;
    
    // Simulate inquiry logic
    setInquirySubmitted(true);
    setTimeout(() => {
      // Clear form
      setInquiryName('');
      setInquiryPhone('');
      setInquiryEmail('');
      setInquiryMsg('');
    }, 2000);
  };

  const IconComponent = (Icons as any)[currentService.iconName] || Icons.Sparkles;

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen font-sans">
      
      {/* Navigation Breadcrumb back banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => {
            setActivePage('services');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 text-xs font-bold text-[#0F4C81] dark:text-[#1DA1F2] hover:underline cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All 12 Clinic Services
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Extensive clinical details */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Main Title Section */}
          <div className="space-y-4">
            <span className="text-[10px] font-extrabold text-[#00C9A7] uppercase tracking-wider bg-[#00C9A7]/10 px-3 py-1.5 rounded-md inline-block">
              {currentService.category} SPECIALTY
            </span>
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-[#0F4C81]/10 text-[#0F4C81] dark:text-[#1DA1F2] rounded-2xl w-fit">
                <IconComponent className="w-8 h-8" />
              </div>
              <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
                {currentService.title}
              </h1>
            </div>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-sans leading-relaxed pt-2">
              {currentService.longDesc}
            </p>
          </div>

          {/* Key Treatment Benefits */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#00C9A7]" /> Key Treatment Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentService.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="p-1 rounded-full bg-[#00C9A7]/10 text-[#00C9A7] mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Treatment Steps Process Timeline */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              What to Expect: Your Step-by-Step Procedure
            </h3>
            <div className="relative border-l-2 border-slate-200/60 dark:border-slate-800/60 pl-6 sm:pl-8 space-y-8 py-2">
              {currentService.processSteps.map((step, idx) => (
                <div key={idx} className="relative group">
                  {/* Floating index */}
                  <span className="absolute -left-[39px] sm:-left-[47px] top-1 w-8 h-8 rounded-full bg-[#0F4C81] text-white font-mono text-xs font-bold flex items-center justify-center border-4 border-slate-50 dark:border-slate-950 transition-transform group-hover:scale-110 shadow-md">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs section specifically for this service */}
          <div className="p-8 bg-[#0F4C81]/5 rounded-3xl border border-[#0F4C81]/10 space-y-4">
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#1DA1F2]" />
              <span>Specialist Treatment FAQ</span>
            </h3>
            <div className="space-y-2">
              <h4 className="font-bold text-xs sm:text-sm text-slate-800 dark:text-white">
                Q: {currentService.faq.q}
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                A: {currentService.faq.a}
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Before/After slider & cost inquiry */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Interactive Before/After Split Image Slider */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                Interactive Patient Transformation
              </h3>
              <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">Drag slider</span>
            </div>

            {/* Slider frame */}
            <div
              ref={sliderContainerRef}
              className="relative h-64 rounded-2xl overflow-hidden select-none cursor-ew-resize"
              onMouseDown={() => setIsSliding(true)}
              onMouseUp={() => setIsSliding(false)}
              onMouseLeave={() => setIsSliding(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsSliding(true)}
              onTouchEnd={() => setIsSliding(false)}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Background) */}
              <img
                src={afterImg}
                alt="After alignment results"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-3 right-3 bg-slate-950/75 text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-md z-10 select-none">
                After
              </span>

              {/* Before Image (Slices overlay) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={beforeImg}
                  alt="Before alignment complexity"
                  className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none pointer-events-none"
                  style={{ width: sliderContainerRef.current?.getBoundingClientRect().width || 320 }}
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-3 left-3 bg-slate-950/75 text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-md z-10 select-none">
                  Before
                </span>
              </div>

              {/* Slider Handle Divider Line */}
              <div
                className="absolute inset-y-0 w-1 bg-white shadow-xl flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-[#0F4C81] text-white flex items-center justify-center border-2 border-white text-xs shadow-lg font-bold">
                  &harr;
                </div>
              </div>
            </div>
            
            <p className="text-[10px] text-slate-400 leading-relaxed text-center font-sans">
              Clinical photographs of severe overcrowding align and gap diastema corrections handled personally by Dr. Abdul Jabbar.
            </p>
          </div>

          {/* Quick Procedure Summary Widget */}
          <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-4">
            <h4 className="font-display font-bold text-xs text-[#00C9A7] uppercase tracking-wider">
              Procedure Summary
            </h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Time required:</span>
                <span className="font-bold flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#1DA1F2]" /> {currentService.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Recovery downtime:</span>
                <span className="font-bold">{currentService.recovery}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Treatment Plan Timeline:</span>
                <span className="font-bold">{currentService.procedureTimeline}</span>
              </div>
              <div className="flex items-center justify-between border-t border-slate-800 pt-3.5">
                <span className="text-slate-400 font-semibold">Cost Structure:</span>
                <span className="font-bold text-[#00C9A7] font-sans">{currentService.costRange}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setActivePage('booking');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-3 bg-[#0F4C81] hover:bg-[#0c3d68] text-white rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 border border-slate-800 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#00C9A7]" />
              <span>Book Appointment Slot</span>
            </button>
          </div>

          {/* Interactive Cost & Plan Inquiry Box */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-[#00C9A7]" /> Cost & Installment Inquiry
            </h3>
            <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
              Enter your contact details below to receive a personalized installment breakdown for this treatment.
            </p>

            {inquirySubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-[#00C9A7]/10 border border-[#00C9A7]/20 rounded-2xl text-center space-y-2"
              >
                <Info className="w-6 h-6 text-[#00C9A7] mx-auto" />
                <h4 className="font-bold text-xs text-slate-900 dark:text-white">Inquiry Received</h4>
                <p className="text-[10px] text-slate-500">Our senior clinic coordinator will contact you via WhatsApp / Call shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-800 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-[#0F4C81]"
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp or Mobile Phone"
                  value={inquiryPhone}
                  onChange={(e) => setInquiryPhone(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-800 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-[#0F4C81]"
                />
                <textarea
                  placeholder="Ask questions about installment plans..."
                  value={inquiryMsg}
                  onChange={(e) => setInquiryMsg(e.target.value)}
                  rows={2}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-800 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-[#0F4C81]"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-[#00C9A7] hover:bg-[#00ab8e] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
