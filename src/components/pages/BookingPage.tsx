import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, ShieldCheck, Phone, Mail, FileText, ChevronRight, ChevronLeft, Sparkles, AlertCircle, CheckCircle, MessageSquare } from 'lucide-react';
import { DOCTORS_DATA, TREATMENTS_DATA, CLINIC_CONTACT } from '../../data';

export default function BookingPage() {
  const [step, setStep] = useState(1);

  // Form Fields
  const [selectedDocId, setSelectedDocId] = useState(DOCTORS_DATA[0].id);
  const [selectedServiceId, setSelectedServiceId] = useState(TREATMENTS_DATA[0].id);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientMsg, setPatientMsg] = useState('');
  const [waConsent, setWaConsent] = useState(true);

  // Loading & success
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Filter time slots
  const timeSlots = [
    '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM'
  ];

  const currentDoctor = DOCTORS_DATA.find((d) => d.id === selectedDocId) || DOCTORS_DATA[0];
  const currentService = TREATMENTS_DATA.find((s) => s.id === selectedServiceId) || TREATMENTS_DATA[0];

  const handleNext = () => {
    if (step === 1 && !selectedDocId) return;
    if (step === 2 && !selectedServiceId) return;
    if (step === 3 && (!selectedDate || !selectedTime)) return;
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleWhatsAppForward = () => {
    const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    const msg = `Assalam-o-Alaikum! I would like to confirm my consultation booking at your Saddar Hyderabad clinic:
- Patient Name: ${patientName}
- Mobile: ${patientPhone}
- Specialist Doctor: ${currentDoctor.name}
- Treatment: ${currentService.title}
- Selected Date: ${formattedDate}
- Preferred Time: ${selectedTime}
- Brief Complaint: ${patientMsg || 'None'}`;

    const encodedMsg = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${CLINIC_CONTACT.whatsapp}?text=${encodedMsg}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      
      {/* Header Banner */}
      <div className="relative py-16 bg-[#0F4C81] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81] via-[#0c3d68] to-[#1DA1F2] opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] bg-[#00C9A7]/20 text-[#00C9A7] px-3 py-1 rounded-full border border-[#00C9A7]/30 inline-block">
            Appointment scheduler
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold">
            Secure Your Specialist Consultation
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mx-auto">
            Book your localized premium dental or braces alignment slot instantly using our medical-grade dynamic scheduling wizard.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Progress Stepper Bar (Only show if not success) */}
        {!isSuccess && (
          <div className="flex items-center justify-between mb-12 max-w-md mx-auto relative px-2">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />
            
            {/* Step 1 Node */}
            <div className="relative z-10 text-center space-y-1.5">
              <span className={`w-8 h-8 rounded-full font-bold font-mono text-xs flex items-center justify-center mx-auto border transition-colors ${
                step >= 1 ? 'bg-[#0F4C81] text-white border-[#0F4C81]' : 'bg-white text-slate-400 border-slate-200'
              }`}>
                1
              </span>
              <p className="text-[10px] font-bold text-slate-500">Doctor</p>
            </div>

            {/* Step 2 Node */}
            <div className="relative z-10 text-center space-y-1.5">
              <span className={`w-8 h-8 rounded-full font-bold font-mono text-xs flex items-center justify-center mx-auto border transition-colors ${
                step >= 2 ? 'bg-[#0F4C81] text-white border-[#0F4C81]' : 'bg-white text-slate-400 border-slate-200'
              }`}>
                2
              </span>
              <p className="text-[10px] font-bold text-slate-500">Treatment</p>
            </div>

            {/* Step 3 Node */}
            <div className="relative z-10 text-center space-y-1.5">
              <span className={`w-8 h-8 rounded-full font-bold font-mono text-xs flex items-center justify-center mx-auto border transition-colors ${
                step >= 3 ? 'bg-[#0F4C81] text-white border-[#0F4C81]' : 'bg-white text-slate-400 border-slate-200'
              }`}>
                3
              </span>
              <p className="text-[10px] font-bold text-slate-500">Schedule</p>
            </div>

            {/* Step 4 Node */}
            <div className="relative z-10 text-center space-y-1.5">
              <span className={`w-8 h-8 rounded-full font-bold font-mono text-xs flex items-center justify-center mx-auto border transition-colors ${
                step >= 4 ? 'bg-[#0F4C81] text-white border-[#0F4C81]' : 'bg-white text-slate-400 border-slate-200'
              }`}>
                4
              </span>
              <p className="text-[10px] font-bold text-slate-500">Contact</p>
            </div>
          </div>
        )}

        {/* Wizard Main Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden p-6 sm:p-10">
          
          {isSuccess ? (
            /* ---------------- CONFIRMATION SCREEN ---------------- */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 max-w-lg mx-auto py-6"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-500 flex items-center justify-center mx-auto border-2 border-emerald-500">
                <CheckCircle className="w-10 h-10" />
              </div>
              
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Booking Provisionally Logged!</span>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">
                  Thank You, {patientName.split(' ')[0]}!
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm font-sans leading-relaxed">
                  Your tentative slot has been recorded in our clinical dashboard. Due to active surgical schedules, we recommend confirming your slot immediately via WhatsApp.
                </p>
              </div>

              {/* Summary Voucher Card */}
              <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 text-left space-y-3 text-xs">
                <h4 className="font-display font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 flex items-center justify-between">
                  <span>Consultation Details</span>
                  <span className="text-[10px] font-mono text-slate-400">STATUS: ACTIVE</span>
                </h4>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                  <p className="text-slate-500">Patient:</p>
                  <p className="font-bold text-slate-800 dark:text-slate-200 text-right">{patientName}</p>

                  <p className="text-slate-500">Doctor:</p>
                  <p className="font-bold text-slate-800 dark:text-slate-200 text-right">{currentDoctor.name}</p>

                  <p className="text-slate-500">Clinical Specialty:</p>
                  <p className="font-bold text-[#0F4C81] dark:text-[#1DA1F2] text-right">{currentService.title.slice(0, 32)}</p>

                  <p className="text-slate-500">Date & Time:</p>
                  <p className="font-bold text-[#00C9A7] text-right font-sans">{selectedDate} &bull; {selectedTime}</p>
                </div>
              </div>

              {/* WhatsApp forwarding action */}
              <div className="space-y-4 pt-4">
                <button
                  onClick={handleWhatsAppForward}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-xs font-bold shadow-lg shadow-emerald-900/10 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current text-white animate-bounce" />
                  <span>Confirm Slot Directly via WhatsApp</span>
                </button>
                <p className="text-[10px] text-slate-400 leading-relaxed font-sans">
                  Clicking this securely packages your appointment data to start a rapid chat with our Saddar Cantonment Hyderabad scheduling desk coordinator.
                </p>
              </div>
            </motion.div>
          ) : (
            /* ---------------- STEPPING WIZARD FLOW ---------------- */
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <AnimatePresence mode="wait">
                
                {/* STEP 1: Select Doctor */}
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                  >
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                        Choose Your Clinical Specialist
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500">Select which Consultant Doctor or specialist is suited for your care.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {DOCTORS_DATA.map((doc) => (
                        <div
                          key={doc.id}
                          onClick={() => setSelectedDocId(doc.id)}
                          className={`p-4 rounded-2xl border text-center space-y-4 cursor-pointer transition-all ${
                            selectedDocId === doc.id
                              ? 'bg-slate-50 dark:bg-slate-950/40 border-[#0F4C81] dark:border-[#1DA1F2] shadow-md shadow-blue-900/5'
                              : 'bg-transparent border-slate-250 dark:border-slate-800 hover:bg-slate-50/50'
                          }`}
                        >
                          <img
                            src={doc.image}
                            alt={doc.name}
                            className="w-16 h-16 rounded-full object-cover mx-auto"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h4 className="font-display font-bold text-xs text-slate-900 dark:text-white leading-tight">
                              {doc.name}
                            </h4>
                            <p className="text-[9px] text-slate-500 mt-1 uppercase tracking-widest font-bold">
                              {doc.title.split('&')[0].split('and')[0]}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Select Service */}
                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                  >
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                        Select Needed Dental Specialty
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500">Our clinic provides 12 world-class aesthetic and clinical treatments.</p>
                    </div>

                    {/* Simple list of services */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[320px] overflow-y-auto pr-2">
                      {TREATMENTS_DATA.map((service) => (
                        <div
                          key={service.id}
                          onClick={() => setSelectedServiceId(service.id)}
                          className={`p-3 rounded-xl border text-left flex items-center gap-3 cursor-pointer transition-all ${
                            selectedServiceId === service.id
                              ? 'bg-[#0F4C81]/5 border-[#0F4C81] dark:border-[#1DA1F2]'
                              : 'bg-transparent border-slate-150 dark:border-slate-850 hover:bg-slate-50/50'
                          }`}
                        >
                          <div className={`p-1.5 rounded-lg text-xs ${selectedServiceId === service.id ? 'bg-[#0F4C81] text-white' : 'bg-slate-100 text-slate-600'}`}>
                            &bull;
                          </div>
                          <div>
                            <h4 className="font-bold text-xs text-slate-900 dark:text-white">
                              {service.title}
                            </h4>
                            <p className="text-[10px] text-slate-500">{service.category}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Date & Time */}
                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                        Preferred Date & Time Slot
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500">Pick a convenient consultation schedule (Monday - Saturday).</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                      
                      {/* Date selection (left) */}
                      <div className="md:col-span-6 space-y-2">
                        <label className="text-[11px] uppercase tracking-widest font-bold text-slate-500">Select Date:</label>
                        <input
                          type="date"
                          required
                          value={selectedDate}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-[#0F4C81]"
                        />
                      </div>

                      {/* Time slot grid (right) */}
                      <div className="md:col-span-6 space-y-2">
                        <label className="text-[11px] uppercase tracking-widest font-bold text-slate-500">Preferred Time Slot:</label>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedTime(slot)}
                              className={`p-2.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
                                selectedTime === slot
                                  ? 'bg-[#00C9A7] text-white shadow-sm'
                                  : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-transparent dark:border-slate-850 hover:bg-slate-200'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Personal Details */}
                {step === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                  >
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                        Enter Patient Contact Credentials
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500">Provide verified contact parameters to secure appointment validation reminders.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Patient Full Name:</label>
                        <input
                          type="text"
                          required
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          placeholder="e.g., Hassan Ali"
                          className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-[#0F4C81]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">WhatsApp or Mobile Phone:</label>
                        <input
                          type="tel"
                          required
                          value={patientPhone}
                          onChange={(e) => setPatientPhone(e.target.value)}
                          placeholder="e.g., +92 300 1234567"
                          className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-[#0F4C81]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Email Address (Optional):</label>
                      <input
                        type="email"
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        placeholder="patient@example.com"
                        className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-[#0F4C81]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Message or Dental Complaint (Optional):</label>
                      <textarea
                        value={patientMsg}
                        onChange={(e) => setPatientMsg(e.target.value)}
                        placeholder="Briefly describe your bite or dental needs..."
                        rows={3}
                        className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-[#0F4C81]"
                      />
                    </div>

                    {/* WhatsApp notification agreement checkbox */}
                    <div className="flex items-start gap-2.5 pt-2">
                      <input
                        type="checkbox"
                        id="waConsent"
                        checked={waConsent}
                        onChange={(e) => setWaConsent(e.target.checked)}
                        className="mt-0.5 rounded border-slate-300 text-[#0F4C81] focus:ring-[#0F4C81]"
                      />
                      <label htmlFor="waConsent" className="text-[10px] text-slate-400 leading-relaxed font-sans">
                        I agree to receive tentative scheduling slots on my provided WhatsApp/Mobile number, complying with clinical ethics protocols.
                      </label>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Navigation Actions Panel */}
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-6">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-1.5 px-4 py-2.5 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-1 px-5 py-3 bg-[#0F4C81] hover:bg-[#0c3d68] text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer ml-auto"
                  >
                    <span>Next Step</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-1 px-6 py-3 bg-[#00C9A7] hover:bg-[#00ab8e] text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer ml-auto disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Processing Slots...' : 'Confirm Provision Slot'}</span>
                  </button>
                )}
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}
