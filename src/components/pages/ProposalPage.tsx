import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, Play, Pause, Printer, FileText, CheckCircle2, 
  Layers, ShieldCheck, HeartPulse, Sparkles, Laptop, BookOpen, Clock, 
  Phone, Mail, ArrowRight, Award, Server, Check, Users, RefreshCw
} from "lucide-react";

// MetaWave Innovations Logo rendered beautifully in SVG with glowing gradients and circuit nodes
export function MetaWaveLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow and color gradients */}
        <linearGradient id="metaWaveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#059669" /> {/* Emerald 600 */}
          <stop offset="50%" stopColor="#10B981" /> {/* Emerald 500 */}
          <stop offset="100%" stopColor="#34D399" /> {/* Emerald 400 */}
        </linearGradient>
        <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#10B981" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Group with subtle shadow */}
      <g filter="url(#glow)">
        {/* Chevron 1 - Left Peak */}
        <path 
          d="M30 145 L70 95 L110 145 L90 145 L70 120 L50 145 Z" 
          fill="url(#metaWaveGrad)" 
          opacity="0.8"
        />

        {/* Chevron 2 - Right Peak */}
        <path 
          d="M90 145 L130 95 L170 145 L150 145 L130 120 L110 145 Z" 
          fill="url(#metaWaveGrad)" 
          opacity="0.8"
        />

        {/* Chevron 3 - Center Higher Peak */}
        <path 
          d="M60 115 L100 65 L140 115 L120 115 L100 90 L80 115 Z" 
          fill="url(#metaWaveGrad)"
        />

        {/* Outer Tech Circle Node Accent */}
        <circle cx="100" cy="115" r="5" fill="#34D399" />
        
        {/* Circuit board traces stylized inside the SVGs */}
        <path d="M100 115 L100 135" stroke="#A7F3D0" strokeWidth="2" strokeDasharray="2,2" />
        <circle cx="100" cy="135" r="3" fill="#A7F3D0" />

        <path d="M70 120 L70 138" stroke="#A7F3D0" strokeWidth="1.5" strokeDasharray="2,2" />
        <circle cx="70" cy="138" r="2.5" fill="#A7F3D0" />

        <path d="M130 120 L130 138" stroke="#A7F3D0" strokeWidth="1.5" strokeDasharray="2,2" />
        <circle cx="130" cy="138" r="2.5" fill="#A7F3D0" />
      </g>
    </svg>
  );
}

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export default function ProposalPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState<"deck" | "document">("deck");

  const slides: Slide[] = [
    {
      id: 0,
      title: "Proposal Presentation",
      subtitle: "Enhancing Dr. Jabbar's Online Presence",
      icon: <Layers className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="flex flex-col items-center justify-center text-center h-full max-w-3xl mx-auto space-y-6">
          <div className="animate-bounce">
            <MetaWaveLogo className="w-24 h-24 sm:w-28 sm:h-28" />
          </div>
          <div className="space-y-2">
            <h1 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white uppercase tracking-wider">
              METAWAVE INNOVATIONS
            </h1>
            <p className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
              Innovative Digital Solutions for Healthcare Professionals
            </p>
          </div>

          <div className="py-4 border-y border-slate-100 dark:border-slate-800 w-full space-y-2">
            <h2 className="text-lg sm:text-3xl font-black text-slate-900 dark:text-white uppercase leading-tight font-display">
              Enhancing Dr. Jabbar's Online Presence
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
              Digital Transformation for a Premier Medical Practice
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-[11px] text-slate-400 uppercase font-black tracking-widest w-full">
            <div className="bg-slate-50 dark:bg-slate-900/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
              <span className="text-slate-400 block font-normal text-[9px] mb-0.5">Prepared For:</span>
              <span className="text-slate-800 dark:text-white">Dr. Abdul Jabbar</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
              <span className="text-slate-400 block font-normal text-[9px] mb-0.5">Date Submitted:</span>
              <span className="text-slate-800 dark:text-white">June 26, 2026</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
              <span className="text-slate-400 block font-normal text-[9px] mb-0.5">Based on Reference by:</span>
              <span className="text-emerald-600 dark:text-emerald-400">Raheela Chand</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "1. Introduction to MetaWave",
      subtitle: "Visions and Brand Commitment",
      icon: <HeartPulse className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center h-full">
          <div className="space-y-4">
            <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold uppercase tracking-wider">
              About MetaWave Innovations
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-[#0F4C81] dark:text-[#1DA1F2] leading-tight uppercase font-display">
              Pioneering High-Trust Digital Engineering
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              At **MetaWave Innovations**, we specialize in crafting high-conversion medical brand layouts, robust local full-stack systems, and intuitive user experiences optimized for clinicians and patients alike.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Our engineering philosophy focuses on **absolute speed, clinical authority, responsive elegance**, and secure information compliance to turn search traffic into active clinical bookings.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl space-y-4">
            <h4 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">Our Core Commitments</h4>
            <div className="space-y-3">
              {[
                { title: "Patient-Centric Accessibility", desc: "Simplifying navigation for elderly, parents, and mobile users." },
                { title: "Verifiable Trust Signaling", desc: "Strategic embedding of PMDC numbers, academic credentials, and locations." },
                { title: "Active Clinical Presence", desc: "Empowering clinics with real-time updates and direct WhatsApp pathways." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2.5">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h5 className="text-xs font-extrabold text-slate-800 dark:text-white">{item.title}</h5>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "2. Understanding the Client",
      subtitle: "Dr. Jabbar's Professional Stature",
      icon: <Award className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center h-full">
          <div className="space-y-4">
            <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold uppercase tracking-wider">
              Target Audience & Positioning
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-[#0F4C81] dark:text-[#1DA1F2] leading-tight uppercase font-display">
              Preserving Medical Stature & Regional Authority
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Dr. Abdul Jabbar is not just a clinician; he is an **Associate Professor of Orthodontics at LUMHS**, carrying FCPS fellowship and prestigious Irish postgraduate credentials (**FFD RCSI**).
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              The platform must act as an extension of this academic excellence, inspiring confidence in patient families traveling from **Latifabad, Qasimabad, Mirpurkhas**, and other interior Sindh regions to Saddar, Hyderabad.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl space-y-3.5">
            <h4 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">Critical Project Priorities</h4>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              {[
                "Highlight LUMHS affiliation",
                "Visible FCPS & Irish degrees",
                "Simple, clear maps in Saddar",
                "Reassuring pediatric guidance",
                "Clear orthognathic surgery data",
                "Mobile-first fast speed"
              ].map((txt, i) => (
                <div key={i} className="bg-white dark:bg-slate-950 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "3. Website Vision & Goals",
      subtitle: "Strategic Aims and Metrics",
      icon: <Sparkles className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch h-full">
          {[
            {
              title: "Inspire Direct Patient Trust",
              desc: "By removing corporate, generic dental templates and replacing them with high-fidelity actual clinical parameters, PMDC licensure numbers, and realistic patient advisories.",
              metric: "100% Brand Credibility"
            },
            {
              title: "Accelerate Compliant Bookings",
              desc: "Integrating a direct, multi-channel appointment scheduler and immediate WhatsApp hotlinks, allowing patients to book custom 3D jaw-scans inside 3 clicks.",
              metric: "+45% Booking Conversion"
            },
            {
              title: "Patient Education Center",
              desc: "Providing easy-to-digest breakdowns of dental procedures (Clear Aligners, Ceramic Braces, Jaw surgeries) with custom price breakdowns and installment clarity.",
              metric: "2026 Standards-Compliant"
            }
          ].map((goal, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 p-4 rounded-2xl flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 text-xs font-bold shrink-0">
                  0{idx + 1}
                </span>
                <h4 className="text-xs sm:text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">{goal.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{goal.desc}</p>
              </div>
              <div className="text-[10px] font-black tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-500/5 py-1 px-2.5 rounded-lg border border-emerald-500/10 text-center">
                {goal.metric}
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 4,
      title: "4. Key Website Features",
      subtitle: "Comprehensive Digital Elements",
      icon: <Laptop className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 h-full flex flex-col justify-center">
          <h3 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-widest text-center">
            Designed Architecture & Interactive Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Bento Homepage Layout", desc: "A modern visual design showcasing clinic schedules, emergency details, and clinical highlights cleanly." },
              { title: "Clear Aligner Hub", desc: "In-depth guides comparing costs, advantages, and timelines of custom invisible aligners." },
              { title: "PMDC Verification", desc: "Highlighting clinical licensing, Associate Professor status, and hospital attachments." },
              { title: "ActiveUpdates Panel", desc: "An integrated search-grounded expert tips system answering direct user queries on the fly." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/40 p-4 rounded-2xl space-y-2">
                <span className="text-[10px] font-black text-emerald-500 block">MODULE 0{idx + 1}</span>
                <h4 className="text-xs font-extrabold text-slate-800 dark:text-white uppercase">{feature.title}</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "5. Design & UX Philosophy",
      subtitle: "Welcoming Clinical Aesthetics",
      icon: <BookOpen className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center h-full">
          <div className="space-y-4">
            <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold uppercase tracking-wider">
              Aesthetics & Rhythm
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-[#0F4C81] dark:text-[#1DA1F2] leading-tight uppercase font-display">
              Anti-AI-Slop & Human-Centered Design
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We completely avoid generic "AI slop" like mock terminal logging, random pings, and fake server statistics. Instead, the design represents **welcoming, high-credibility clinical truth**.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We leverage an elegant light-slate palette, high contrast reading text, custom micro-animations with Framer Motion, and absolute responsiveness across mobile viewports.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl space-y-4">
            <h4 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">Typography & Styling Pairing</h4>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center border-b border-slate-150 dark:border-slate-800 pb-2">
                <span className="font-bold text-slate-500">Display Headings:</span>
                <span className="font-mono bg-white dark:bg-slate-950 px-2 py-0.5 rounded text-[10px] border border-slate-200 dark:border-slate-800">Space Grotesk</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-150 dark:border-slate-800 pb-2">
                <span className="font-bold text-slate-500">Body Typography:</span>
                <span className="font-sans bg-white dark:bg-slate-950 px-2 py-0.5 rounded text-[10px] border border-slate-200 dark:border-slate-800">Inter Regular & Medium</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-150 dark:border-slate-800 pb-2">
                <span className="font-bold text-slate-500">Micro Tech Data:</span>
                <span className="font-mono bg-white dark:bg-slate-950 px-2 py-0.5 rounded text-[10px] border border-slate-200 dark:border-slate-800">JetBrains Mono</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-500">Primary Colors:</span>
                <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">Slate, Emerald & Cobalt</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "6. Technology Stack",
      subtitle: "Modern and High-Performance",
      icon: <Server className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center h-full">
          <div className="space-y-4">
            <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold uppercase tracking-wider">
              Architecture & Security
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-[#0F4C81] dark:text-[#1DA1F2] leading-tight uppercase font-display">
              Vite, Express & Search-Grounded AI API
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Our backend runs on an optimized **Express and Vite SPA middleware**. Server-side TypeScript compiles cleanly into a bundled standalone CommonJS file using **esbuild** to ensure fast container cold-starts.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              The AI subsystem utilizes the **Gemini-3.5-Flash** model equipped with live Google Search Grounding. If API quotas are exceeded, the server automatically degrades gracefully into pre-cached offline medical advisories.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-[11px]">
            <div className="bg-slate-50 dark:bg-slate-900/40 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
              <h4 className="font-black text-slate-800 dark:text-white uppercase mb-1">Server Bundling</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">esbuild target node platform with standalone CJS compile output.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/40 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
              <h4 className="font-black text-slate-800 dark:text-white uppercase mb-1">Framer Motion</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">Responsive animations using standard hardware acceleration triggers.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/40 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
              <h4 className="font-black text-slate-800 dark:text-white uppercase mb-1">API Resilience</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">Dual-layer offline fallbacks shielding patient experience from network lag.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/40 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
              <h4 className="font-black text-slate-800 dark:text-white uppercase mb-1">Vite Dev Engine</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">Vite SPA middlewaremode routing assets directly with hot refresh.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "7. Content Strategy",
      subtitle: "Empathetic, Readable and Localized",
      icon: <Users className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center h-full">
          <div className="space-y-4">
            <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold uppercase tracking-wider">
              Copywriting & Local Resonance
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-[#0F4C81] dark:text-[#1DA1F2] leading-tight uppercase font-display">
              Speaking the Patient's Native Dialect
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We speak to mothers, fathers, and young professionals. Instead of using intimidating medical terminology like *'skeletal anchorage mini-screws'*, we explain it in gentle terms like *'pain-free micro-supports that guide teeth into position safely'*.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We utilize locally understood English paired with clear bilingual signals (Urdu text snippets and localized landmark coordinates like *'opposite State Bank, Saddar'*) to maximize user confidence.
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl space-y-3">
            <h4 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">Content Pillars</h4>
            <div className="space-y-2.5 text-[11px]">
              <div className="p-2.5 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl">
                <span className="font-black text-[#00C9A7]">01. Pediatric Gentle Guide:</span> Reassuring parents about early orthodontic checkups and teeth alignment.
              </div>
              <div className="p-2.5 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl">
                <span className="font-black text-[#00C9A7]">02. Financial Transparency:</span> Highlighting budget-friendly plans and multi-month installment schedules.
              </div>
              <div className="p-2.5 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl">
                <span className="font-black text-[#00C9A7]">03. Landmark Coordinates:</span> Navigational ease so traveling families locate the clinic with zero friction.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "8. Development Workflow",
      subtitle: "Iterative Engineering Approach",
      icon: <Clock className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="space-y-4 h-full flex flex-col justify-center">
          <h3 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-widest text-center">
            MetaWave Innovations Lifecycle & Milestones
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
              {[
                { phase: "Discover", title: "Needs Assessment", desc: "Understanding Dr. Jabbar's LUMHS schedules and clinical goals." },
                { phase: "Architecture", title: "Information Flow", desc: "Mapping service hierarchies and custom patient booking journeys." },
                { phase: "Build", title: "Full-Stack Dev", desc: "Creating the frontend structures and Gemini API fallbacks." },
                { phase: "Testing", title: "Trust Validation", desc: "Verifying PMDC links, responsive forms, and dark-theme rendering." },
                { phase: "Launch", title: "Custom Go-Live", desc: "Configuring environment keys, servers, and search registry indexing." }
              ].map((step, i) => (
                <div key={i} className="bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 p-4 rounded-2xl space-y-2 text-center shadow-sm">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold uppercase">
                    {i + 1}
                  </span>
                  <div className="text-[9px] font-black text-emerald-500 uppercase tracking-wider">{step.phase}</div>
                  <h4 className="text-xs font-extrabold text-slate-800 dark:text-white">{step.title}</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "9. Maintenance & Support",
      subtitle: "Long-Term Digital Care",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center h-full">
          <div className="space-y-4">
            <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold uppercase tracking-wider">
              Continuous Optimization
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-[#0F4C81] dark:text-[#1DA1F2] leading-tight uppercase font-display">
              Securing Your Digital Clinical Asset
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Websites are dynamic medical directories. We commit to continuous maintenance, securing patient databases, optimizing form submissions, and ensuring 99.9% uptime.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We schedule routine monthly backups, API key security audits, and content refreshes (such as updating associate clinical photographs or timing adjustments during Ramadan or summer holidays).
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl space-y-4">
            <h4 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">Post-Launch Schedule</h4>
            <div className="space-y-3">
              {[
                { title: "Weekly Server Healthchecks", desc: "Checking API gateway latency, form delivery loops, and fallback triggers." },
                { title: "Monthly Content Adjustments", desc: "Direct coordinate revisions, pricing tweaks, or timing alterations." },
                { title: "Annual Security Upgrades", desc: "Renewing SSL certificates, revising clinical domain settings, and SEO scans." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2.5">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h5 className="text-xs font-extrabold text-slate-800 dark:text-white">{item.title}</h5>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 10,
      title: "10. Investment & Package Plans",
      subtitle: "Tailored Web Solutions To Align with Your Growth",
      icon: <Layers className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch h-full">
          {/* Package 1: Basic Launch */}
          <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Option A</span>
                  <h3 className="text-sm sm:text-base font-black text-[#0F4C81] dark:text-[#1DA1F2] uppercase">Essential Clinical Web</h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block font-bold">BUDGET</span>
                  <div className="flex flex-col items-end">
                    <span className="text-[11px] text-slate-400 dark:text-slate-500 line-through">65,000 PKR</span>
                    <span className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400">45,000 PKR</span>
                  </div>
                </div>
              </div>
              
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                An elegant, highly responsive clinical presentation web portfolio tailored to establish rapid search authority for Dr. Jabbar in Saddar and greater Hyderabad.
              </p>

              <div className="border-t border-slate-100 dark:border-slate-800/80 pt-3 space-y-2">
                {[
                  "Max 5 Clean-Engineered Pages",
                  "No Admin Panel (Fast Static Code)",
                  "2 Full Design & Content Revisions",
                  "Direct Patient Contact & Scheduling Form",
                  "Bilingual Sindh Region Landmarks Support",
                  "Full SEO & Mobile-First Loading Speed"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] text-slate-600 dark:text-slate-400">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-150/40 dark:border-slate-800/40 mt-4 flex items-center justify-between">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Timeline: 5-7 Days</span>
              <span className="text-[9px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded font-black uppercase">Standard Tier</span>
            </div>
          </div>

          {/* Package 2: Premium Hub */}
          <div className="bg-[#0b241b] dark:bg-emerald-950/20 border-2 border-emerald-500/40 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden shadow-lg shadow-emerald-500/5">
            {/* Recommended Corner Badge */}
            <div className="absolute top-0 right-0 bg-emerald-500 text-slate-900 text-[8px] font-black uppercase tracking-widest py-1 px-4 rounded-bl-xl">
              Recommended Choice
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Option B</span>
                  <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-tight">Enterprise Clinical Hub</h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-emerald-400 block font-bold">BUDGET</span>
                  <div className="flex flex-col items-end">
                    <span className="text-[11px] text-emerald-500/60 line-through">99,000 PKR</span>
                    <span className="text-base sm:text-lg font-black text-emerald-400">70,000 PKR</span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-300 dark:text-slate-300 leading-relaxed">
                A fully-equipped, scalable medical directory and clinical information management panel for Dr. Jabbar's academic, teaching, and orthodontic practice.
              </p>

              <div className="border-t border-emerald-500/20 pt-3 space-y-2">
                {[
                  "7 or More Pages as per clinical need",
                  "Dedicated Secure Admin Control Panel",
                  "4 Complete Design & Logic Revisions",
                  "Integrated Live-Updates Panel & Content Editor",
                  "Advanced 3D Smile Scan Booking flow",
                  "Custom interactive patient resources and FAQs",
                  "Post-Launch Server Tuning & Security Upgrades",
                  "3-Month Post-Launch Support (50% fee discount due to reference)"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] text-slate-200 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className={`font-medium ${i === 7 ? "text-emerald-300 font-extrabold" : ""}`}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-500/20 mt-4 flex items-center justify-between">
              <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">Timeline: 10-12 Days</span>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded font-black uppercase tracking-widest">High-Trust Tier</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 11,
      title: "11. Action, Next Steps & Closure",
      subtitle: "Moving Forward Boldly",
      icon: <ArrowRight className="w-5 h-5 text-emerald-500" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center h-full">
          {/* Action roadmap steps */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-black text-[#0F4C81] dark:text-[#1DA1F2] uppercase tracking-wider">
              Immediate Deal Execution Roadmap
            </h3>
            <div className="space-y-3">
              {[
                { step: "01", title: "Select Tier & Approve", desc: "Select Option A (45K) or Option B (70K) based on your target operational requirements." },
                { step: "02", title: "Initiate Brand Alignment", desc: "Share Dr. Jabbar's professional high-res photographs, clinical timing specifics, and academic research lists." },
                { step: "03", title: "Domain Routing & Deployment", desc: "Configure domain credentials and host the production engine live on Google Cloud Run container loops." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 bg-slate-50 dark:bg-slate-900/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 text-xs font-black shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-800 dark:text-white uppercase">{item.title}</h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Founder & CEO Signature Block */}
          <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 p-5 rounded-2xl flex flex-col justify-between h-full space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MetaWaveLogo className="w-10 h-10" />
                <div>
                  <span className="text-[8px] font-black text-emerald-500 block">AUTHORIZED SIGNATURE</span>
                  <h4 className="text-[10px] font-black text-slate-800 dark:text-white uppercase tracking-wider">METAWAVE INNOVATIONS</h4>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
                We are fully prepared to elevate Dr. Jabbar's clinical brand into Hyderabad's premier orthodontic digital resource. Let's build a trusted platform together.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/80 space-y-1">
              <div className="font-mono text-xs italic font-black text-emerald-600 dark:text-emerald-400">
                /s/ MetaWave Founder & CEO
              </div>
              <div className="text-[10px] font-black text-slate-800 dark:text-white uppercase">
                MetaWave Innovations
              </div>
              <div className="text-[9px] text-slate-400 uppercase font-bold tracking-widest">
                Founder and CEO
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Autoplay Timer
  useEffect(() => {
    let timer: any;
    if (isPlaying && viewMode === "deck") {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, viewMode, slides.length]);

  // Keyboard navigation listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== "deck") return;
      if (e.key === "ArrowRight") {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewMode, slides.length]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative print:bg-white print:p-0">
      
      {/* 
        Custom styles injected for standard Print Layout. 
        When user triggers Print, we hide everything except the print slides 
        and scale them to fit standard landscape/portrait page margins beautifully.
      */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #print-area, #print-area * {
            visibility: visible;
          }
          #print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            color: black !important;
          }
          .print-card-break {
            page-break-after: always;
            break-after: page;
            border: none !important;
            box-shadow: none !important;
            background: white !important;
            padding: 30px !important;
            margin: 0 !important;
            width: 100% !important;
            height: 100vh !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-6 no-print">
        
        {/* Top bar with Branding, Back Button, and Layout toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-4 rounded-3xl shadow-sm">
          
          <div className="flex items-center gap-3">
            <MetaWaveLogo className="w-11 h-11 shrink-0" />
            <div>
              <span className="text-[10px] uppercase font-black tracking-widest text-emerald-600 dark:text-emerald-400 block">
                MetaWave Proposal
              </span>
              <h2 className="text-xs sm:text-sm font-black text-slate-800 dark:text-white uppercase">
                Proposal Presentation Viewer
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            
            {/* Slide / All Document toggle */}
            <div className="bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200/50 dark:border-slate-800/50 flex gap-1">
              <button
                onClick={() => setViewMode("deck")}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all uppercase cursor-pointer ${
                  viewMode === "deck"
                    ? "bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
              >
                Interactive Deck
              </button>
              <button
                onClick={() => setViewMode("document")}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all uppercase cursor-pointer ${
                  viewMode === "document"
                    ? "bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
              >
                All Slides
              </button>
            </div>

            {/* Print / PDF Trigger */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-[10px] font-bold uppercase transition-all shadow-md cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print PDF</span>
            </button>

          </div>

        </div>

        {viewMode === "deck" ? (
          /* ==================================== */
          /* INTERACTIVE SLIDE DECK DISPLAY MODE  */
          /* ==================================== */
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            
            {/* Sidebar with Navigation index of Slides */}
            <div className="lg:col-span-1 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-4 space-y-2">
              <h3 className="text-[10px] uppercase font-black text-slate-400 tracking-wider px-2 mb-3">
                Presentation Outline
              </h3>
              <div className="space-y-1 max-h-[460px] overflow-y-auto pr-1">
                {slides.map((slide, i) => (
                  <button
                    key={slide.id}
                    onClick={() => {
                      setCurrentSlide(i);
                      setIsPlaying(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2.5 cursor-pointer border ${
                      currentSlide === i
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                        : "bg-transparent border-transparent text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    <span className="shrink-0">{slide.icon}</span>
                    <span className="truncate">{slide.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Center Area: Active Slide Visual Stage */}
            <div className="lg:col-span-3 space-y-4">
              
              <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl shadow-xl overflow-hidden min-h-[480px] flex flex-col justify-between relative">
                
                {/* Honeycomb grid tech pattern background */}
                <div 
                  className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none" 
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0 L30 8.66 L30 26 L15 34.64 L0 26 L0 8.66 Z' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Ambient dynamic glows behind active content */}
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/5 dark:bg-emerald-500/3 blur-3xl rounded-full pointer-events-none" />

                {/* Header bar of the active slide */}
                <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between relative z-10 bg-slate-50/50 dark:bg-slate-900/30">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {slides[currentSlide].icon}
                    </span>
                    <div>
                      <h3 className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">
                        {slides[currentSlide].title}
                      </h3>
                      {slides[currentSlide].subtitle && (
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-extrabold">
                          {slides[currentSlide].subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                    SLIDE {currentSlide + 1} OF {slides.length}
                  </span>
                </div>

                {/* Content area with transitions */}
                <div className="p-6 sm:p-10 flex-1 flex flex-col justify-center relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="h-full"
                    >
                      {slides[currentSlide].content}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Footer status bar of slide */}
                <div className="px-6 py-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[9px] uppercase tracking-wider font-extrabold text-slate-400 relative z-10 bg-slate-50/50 dark:bg-slate-900/10">
                  <span>MetaWave Innovations &copy; 2026</span>
                  <span className="text-emerald-500">Based on reference by Raheela Chand</span>
                  <span>Confidential Proposal</span>
                </div>

              </div>

              {/* Deck Navigation Controls */}
              <div className="flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-4 rounded-2xl shadow-sm">
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
                      setIsPlaying(false);
                    }}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all cursor-pointer"
                    title="Previous slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setCurrentSlide((prev) => (prev + 1) % slides.length);
                      setIsPlaying(false);
                    }}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all cursor-pointer"
                    title="Next slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Play/Pause Autoplay indicator */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all cursor-pointer ${
                      isPlaying 
                        ? "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20" 
                        : "border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                    }`}
                  >
                    {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    <span>{isPlaying ? "Autoplay On" : "Autoplay"}</span>
                  </button>

                  <div className="flex gap-1.5">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentSlide(idx);
                          setIsPlaying(false);
                        }}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          currentSlide === idx ? "w-6 bg-emerald-500" : "w-2 bg-slate-200 dark:bg-slate-800"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        ) : (
          /* ==================================== */
          /* VERTICAL DOCUMENT LIST SCROLL VIEW   */
          /* ==================================== */
          <div className="space-y-8">
            {slides.map((slide, idx) => (
              <div 
                key={slide.id} 
                className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl overflow-hidden p-6 sm:p-10 relative min-h-[420px] flex flex-col justify-between shadow-sm"
              >
                {/* Honeycomb overlay background */}
                <div 
                  className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0 L30 8.66 L30 26 L15 34.64 L0 26 L0 8.66 Z' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '24px 24px'
                  }}
                />

                <div className="border-b border-slate-100 dark:border-slate-800/80 pb-4 mb-6 flex justify-between items-center relative z-10">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {slide.icon}
                    </span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">
                        {slide.title}
                      </h3>
                      {slide.subtitle && (
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-extrabold">
                          {slide.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                    PAGE {idx + 1} OF {slides.length}
                  </span>
                </div>

                <div className="flex-1 flex flex-col justify-center relative z-10 py-4">
                  {slide.content}
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-6 flex justify-between items-center text-[9px] uppercase tracking-wider font-extrabold text-slate-400 relative z-10">
                  <span>MetaWave Innovations &copy; 2026</span>
                  <span className="text-emerald-500">Based on reference by Raheela Chand</span>
                  <span>Confidential Client Proposal</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* ==================================== */
      /* HIDDEN PRINT-ONLY TARGET SECTION     */
      /* ==================================== */}
      <div id="print-area" className="hidden print:block">
        {slides.map((slide, idx) => (
          <div 
            key={slide.id} 
            className="print-card-break border-b border-slate-200 bg-white"
          >
            {/* Header bar of printing slide */}
            <div className="flex justify-between items-center border-b border-slate-250 pb-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="scale-75 shrink-0">
                  <MetaWaveLogo className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                    {slide.title}
                  </h3>
                  {slide.subtitle && (
                    <p className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">
                      {slide.subtitle}
                    </p>
                  )}
                </div>
              </div>
              <span className="text-[9px] font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded">
                SLIDE {idx + 1} OF {slides.length}
              </span>
            </div>

            {/* Main printed content of slide */}
            <div className="flex-1 flex flex-col justify-center py-6 text-black">
              {slide.content}
            </div>

            {/* Footer of printing slide */}
            <div className="flex justify-between items-center text-[8px] uppercase tracking-wider font-bold text-slate-400 pt-4 border-t border-slate-200 mt-8">
              <span>MetaWave Innovations &copy; 2026</span>
              <span className="text-emerald-600 font-black">Based on reference by Raheela Chand</span>
              <span>Client Proposal - Dr. Abdul Jabbar</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
