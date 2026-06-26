export interface TreatmentService {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  category: 'Orthodontics' | 'Cosmetic' | 'Surgical' | 'Restorative' | 'Pediatric' | 'General';
  iconName: string; // Refers to Lucide icon
  duration: string;
  recovery: string;
  benefits: string[];
  processSteps: { title: string; desc: string }[];
  procedureTimeline: string;
  costRange: string;
  faq: { q: string; a: string };
}

export interface DoctorProfile {
  id: string;
  name: string;
  title: string;
  degrees: string[];
  specializations: string[];
  experience: string;
  about: string;
  awards: string[];
  languages: string[];
  image: string;
  timeline: { year: string; title: string; institution: string }[];
}

export interface BlogArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: 'Tips' | 'Braces' | 'Aligners' | 'Hygiene';
  readTime: string;
  date: string;
  author: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'clinic' | 'rooms' | 'equipment' | 'results' | 'team';
  image: string;
  description?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  institution: string;
  description: string;
  type: 'academic' | 'experience' | 'credential';
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  age: number;
  treatmentType: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  problem: string;
  solution: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age?: number;
  role: string;
  rating: number;
  comment: string;
  treatment: string;
  image: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Treatment' | 'Insurance' | 'Appointments' | 'General';
}

export interface Appointment {
  id: string;
  name: string;
  phone: string;
  email: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  status: 'Pending' | 'Confirmed';
  createdAt: string;
}
