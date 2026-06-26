import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, AlertTriangle, Send, ShieldAlert, Sparkles } from 'lucide-react';
import { CLINIC_CONTACT } from '../../data';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMsg('');
      setSubmitted(false);
    }, 2500);
  };

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      
      {/* Page Header */}
      <div className="relative py-16 bg-[#0F4C81] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81] via-[#0c3d68] to-[#1DA1F2] opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] bg-[#00C9A7]/20 text-[#00C9A7] px-3 py-1 rounded-full border border-[#00C9A7]/30 inline-block">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold">
            Contact Our Saddar Hyderabad Center
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mx-auto">
            Have questions about orthodontic installments, clear aligners, or braces checkups? Connect directly with our clinical desk.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Coordinates & Operating Hours */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Quick Info Grid */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#00C9A7]" /> Clinic Coordinates
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#1DA1F2] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">Location Address:</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {CLINIC_CONTACT.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#1DA1F2] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">Mobile Desk & WhatsApp:</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                    {CLINIC_CONTACT.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#1DA1F2] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">Email Correspondence:</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                    {CLINIC_CONTACT.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours Table */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#00C9A7]" /> Operating Consultation Hours
            </h3>
            <div className="space-y-2.5 text-xs">
              {CLINIC_CONTACT.workingHours.map((wh, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="font-bold text-slate-600 dark:text-slate-300">{wh.days}</span>
                  <span className="text-slate-500 font-semibold">{wh.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency alert banner */}
          <div className="p-5 bg-rose-500/5 dark:bg-rose-950/10 border border-rose-500/25 rounded-2xl flex gap-4">
            <AlertTriangle className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-xs text-rose-500 uppercase">Emergency Clinical Support</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                Patients suffering severe brace adjustments trauma or lost aligner guides can request immediate triage appointments by calling our direct desk.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Inquiry Form & Map */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Advanced Contact Inquiry Form */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-1">
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                Submit an Online Inquiry
              </h3>
              <p className="text-[11px] text-slate-500">Our senior coordinator will reach out via call or WhatsApp within 2 hours.</p>
            </div>

            {submitted ? (
              <div className="p-6 bg-[#00C9A7]/10 border border-[#00C9A7]/20 rounded-2xl text-center space-y-2">
                <ShieldAlert className="w-8 h-8 text-[#00C9A7] mx-auto" />
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Message Dispatched!</h4>
                <p className="text-xs text-slate-500">Thank you for writing. Our desk team has received your query and will reply shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-400">Your Full Name:</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Hassan Ali"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-xs text-slate-800 dark:text-white focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-400">Mobile Phone / WhatsApp:</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g., +92 300 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-xs text-slate-800 dark:text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-400">Email Address:</label>
                  <input
                    type="email"
                    placeholder="patient@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-xs text-slate-800 dark:text-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-400">Describe Your Dental Question:</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="State any dental problems or request specialized installment details..."
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-xs text-slate-800 dark:text-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0F4C81] hover:bg-[#0c3d68] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Clinical Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Interactive embedded google map frame */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden h-72">
            <iframe
              src={CLINIC_CONTACT.mapsEmbedUrl}
              className="w-full h-full rounded-2xl border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Abdul Jabbar Orthodontics Google Maps Location"
            />
          </div>

        </div>

      </div>
    </div>
  );
}
