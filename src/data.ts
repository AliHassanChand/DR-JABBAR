import { TreatmentService, TimelineEvent, CaseStudy, Testimonial, FAQItem, DoctorProfile, BlogArticle, GalleryItem } from './types';

export const DOCTOR_INFO = {
  name: 'Dr. Abdul Jabbar',
  title: 'Associate Professor & Consultant Orthodontist',
  degrees: ['BDS', 'FCPS (Orthodontics)', 'FFD (RCSI, Ireland)', 'MPhil'],
  experience: '14+ Years',
  successRate: '99.2%',
  completedCases: '1,200+',
  satisfaction: '100%',
  aboutShort: 'Dr. Abdul Jabbar is a highly distinguished orthodontist, academician, and specialist in advanced braces and digital smile designing. Combining world-class clinical training from the Royal College of Surgeons in Ireland with over 14 years of teaching and practice, he delivers exceptional, long-term smile alignments and facial symmetry for patients of all ages.',
  aboutLong: 'Dr. Abdul Jabbar stands at the forefront of modern orthodontics in Pakistan. As an Associate Professor and Consultant Orthodontist, his dual role in academia and private clinical practice ensures that his treatment plans are backed by the latest peer-reviewed scientific advancements. He specializes in complex malocclusion corrections, digital smile design, and state-of-the-art clear aligner systems. Over the last 14 years, he has transformed over 1,200 smiles, specializing in conservative, non-extraction-first orthodontic solutions that enhance the natural facial profile.',
  clinicName: 'Dr. Abdul Jabbar Orthodontics & Smile Design Center',
  tagline: 'Creating Confident Smiles Through Advanced Orthodontics',
};

export const DOCTORS_DATA: DoctorProfile[] = [
  {
    id: 'dr-abdul-jabbar',
    name: 'Dr. Abdul Jabbar',
    title: 'Chief Consultant Orthodontist & Associate Professor',
    degrees: ['BDS', 'FCPS (Orthodontics)', 'FFD (RCSI, Ireland)', 'MPhil'],
    specializations: ['Advanced Orthodontics', 'Invisalign Clear Aligners', 'Digital Smile Design', 'Skeletal Jaw Growth Modification'],
    experience: '14+ Years',
    about: 'Dr. Abdul Jabbar is a highly distinguished orthodontist and clinical academic. Serving as an Associate Professor of Orthodontics, he has spent over a decade teaching the next generation of dental surgeons while running a premium specialist private practice. He is one of the few orthodontists in Pakistan to hold a formal Fellowship from the Faculty of Dentistry at the Royal College of Surgeons in Ireland (RCSI), ensuring his diagnostic and therapeutic techniques meet absolute global gold standards.',
    awards: ['Best Researcher Award 2022', 'Gold Medal in Clinical Orthodontics', 'Distinguished Faculty Honor (LUMHS)'],
    languages: ['English', 'Urdu', 'Sindhi'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
    timeline: [
      { year: '2008', title: 'BDS Graduation & Distinction', institution: 'Liaquat University of Medical & Health Sciences' },
      { year: '2012', title: 'FCPS Residency Graduation', institution: 'College of Physicians and Surgeons Pakistan' },
      { year: '2015', title: 'Elected Fellow (FCPS Orthodontics)', institution: 'College of Physicians and Surgeons Pakistan' },
      { year: '2018', title: 'Elected Fellow (FFD RCSI)', institution: 'Royal College of Surgeons in Ireland (Dublin)' },
      { year: '2021', title: 'Appointed Associate Professor of Orthodontics', institution: 'LUMHS Clinical Division' }
    ]
  },
  {
    id: 'dr-sarah-munir',
    name: 'Dr. Sarah Munir',
    title: 'Consultant Pediatric Dentist & Preventive Specialist',
    degrees: ['BDS', 'MDS (Pediatric Dentistry)', 'Member of IAPD'],
    specializations: ['Pediatric Dental Care', 'Early Intervention Orthodontics', 'Behavioral Guidance', 'Fluoride Therapies & Sealants'],
    experience: '8+ Years',
    about: 'Dr. Sarah Munir is a compassionate specialist dedicated entirely to pediatric oral health. She understands that children require a gentle, welcoming, and fun environment to build lifelong healthy dental habits. She specializes in preventive sealants, space maintainers, early interceptive orthodontic therapies, and painless treatment of cavities in kids and adolescents.',
    awards: ['Outstanding Pediatric Dental Service 2023', 'Young Clinical Innovator Award'],
    languages: ['English', 'Urdu'],
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=600',
    timeline: [
      { year: '2014', title: 'BDS Graduation', institution: 'Dow University of Health Sciences' },
      { year: '2018', title: 'Master of Dental Surgery (Pediatric Dentistry)', institution: 'Armed Forces Medical College' },
      { year: '2020', title: 'Joined Dr. Abdul Jabbar Smile Design Center', institution: 'Pediatric Wing Lead' }
    ]
  },
  {
    id: 'dr-farhan-ali',
    name: 'Dr. Farhan Ali',
    title: 'Consultant Prosthodontist & Dental Implant Specialist',
    degrees: ['BDS', 'FCPS (Prosthodontics)', 'ICOI Fellow (USA)'],
    specializations: ['Dental Implants', 'Zirconia Crowns & Bridges', 'Full Mouth Rehabilitation', 'Digital Prosthetic Planning'],
    experience: '10+ Years',
    about: 'Dr. Farhan Ali is a highly precise dental reconstruction specialist. Utilizing state-of-the-art CAD/CAM engineering and premium bio-compatible dental ceramics, Dr. Farhan specializes in restoring fully natural chewing force and beautiful tooth proportions. He works in seamless synergy with Dr. Abdul Jabbar for complex orthodontic-prosthetic cases.',
    awards: ['Excellence in Restorative Implantology 2021', 'Clinical Board Certification (Prosthodontics)'],
    languages: ['English', 'Urdu', 'Punjabi'],
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600',
    timeline: [
      { year: '2012', title: 'BDS Graduation', institution: 'Khyber College of Dentistry' },
      { year: '2017', title: 'FCPS Prosthodontic Fellowship', institution: 'College of Physicians and Surgeons Pakistan' },
      { year: '2019', title: 'Dental Implant Mastership (ICOI)', institution: 'International Congress of Oral Implantologists, USA' }
    ]
  }
];

export const TREATMENTS_DATA: TreatmentService[] = [
  {
    id: 'orthodontics',
    title: 'Advanced Orthodontics & Jaw Guidance',
    shortDesc: 'Early evaluation, skeletal jaw orthopedic correction, and custom growth modification devices for beautiful facial symmetry.',
    longDesc: 'Our orthodontic care goes far beyond just straightening crooked teeth; we guide the growth of your face and jawbones. Utilizing high-tech orthopedic devices like Palatal Expanders, Twin-Blocks, and Headgears, Dr. Abdul Jabbar interceptively aligns structural facial bones during childhood and adolescence. This establishes proper jaw relationships, preventing the need for complex jaw surgeries or extractions later in life.',
    category: 'Orthodontics',
    iconName: 'Maximize2',
    duration: '3 - 9 months active growth guiding',
    recovery: '2 - 3 days light adaptation',
    benefits: [
      'Corrects skeletal discrepancies (underbites, overbites, crossbites) naturally during growth',
      'Minimizes the future need for permanent tooth extractions',
      'Enhances the overall aesthetic profile of the face, jawline, and nose relationship',
      'Improves chewing functions and relieves early speech impediments'
    ],
    processSteps: [
      { title: 'Skeletal Diagnostic Scan', desc: 'Detailed Panoramic & Cephalometric digital X-rays to assess jaw bone relationships.' },
      { title: 'Custom Appliance Design', desc: '3D digital scanning of the arches to fabricate a bespoke orthopedic expander or growth guider.' },
      { title: 'Fitting & Calibration', desc: 'Secure clinical fitting with meticulous home-care training for gradual, comfortable expansion.' },
      { title: 'Periodic Growth Checks', desc: 'Monthly quick checks to guide tooth eruption and monitor facial skeletal progress.' }
    ],
    procedureTimeline: '1 session fitting, followed by short monthly checks over 6 months',
    costRange: 'Flexible Custom Installments',
    faq: {
      q: 'When is jaw orthopedics most effective?',
      a: 'This specialized therapy is most effective in growing patients, typically between the ages of 7 and 13. By utilizing natural growth spurts, we can safely expand and reshape jawbones non-surgically.'
    }
  },
  {
    id: 'braces',
    title: 'Aesthetic Ceramic & Self-Ligating Braces',
    shortDesc: 'Elite clear ceramic brackets and advanced low-friction brackets for comfortable, reliable, and discreet alignment.',
    longDesc: 'Braces have entered the modern era. We offer premium, semi-translucent, tooth-colored ceramic braces that blend beautifully with your natural enamel, making them almost invisible from conversational distances. We also utilize low-profile, self-ligating metal braces. These state-of-the-art brackets eliminate the need for elastic ties, reducing friction, optimizing clinical alignment speed, and drastically lowering tooth sensitivity.',
    category: 'Orthodontics',
    iconName: 'Sparkles',
    duration: '12 - 20 months',
    recovery: '3 - 5 days initial adjustment',
    benefits: [
      'Blends perfectly with your teeth for highly aesthetic daily confidence',
      'Self-ligating mechanism provides continuous, light forces reducing overall treatment time',
      'Constructed with rounded medical-grade edges for unmatched lip comfort',
      'Provides ultra-precise root and crown position adjustments for the perfect bite'
    ],
    processSteps: [
      { title: 'Digital Smile Setup', desc: 'We take clinical photographs, model impressions, and plan exact brackets coordinates.' },
      { title: 'Precision Bonding', desc: 'Brackets are customized and bonded to your teeth with high-strength, tooth-safe adhesives.' },
      { title: 'Archwire Threading', desc: 'Super-elastic shape memory alloy wires are threaded to initiate gentle, steady movement.' },
      { title: 'Monthly Fine-Tuning', desc: 'Periodic checkups to change archwires and verify perfect alignment trajectory.' }
    ],
    procedureTimeline: 'Approximately 60-minute bonding appointment, with 20-minute monthly alignment checkups',
    costRange: 'Starting from PKR 15,000 / month installments',
    faq: {
      q: 'Do ceramic brackets stain or yellow over time?',
      a: 'The premium polycrystalline ceramic brackets we use are completely resistant to staining. However, the tiny clear elastic bands can absorb pigments from deep foods like turmeric or coffee. These bands are fully replaced at every monthly checkup!'
    }
  },
  {
    id: 'invisalign',
    title: 'Premium Clear Aligners & Invisalign',
    shortDesc: 'Virtually invisible, fully removable custom alignment trays designed for modern professionals and teens.',
    longDesc: 'Enjoy a completely unrestricted lifestyle during your orthodontic treatment. Our premium Clear Aligner systems represent the pinnacle of CAD/CAM digital dental planning. We construct a series of fully transparent, medical-grade polyurethane trays that gradually guide your teeth to their perfect positions. Because they are removable, you can eat your favorite meals, brush and floss with absolute ease, and speak confidently in public.',
    category: 'Orthodontics',
    iconName: 'Layers',
    duration: '6 - 15 months',
    recovery: 'Immediate (zero recovery downtime)',
    benefits: [
      'Virtually invisible to the public, blending seamlessly with any lifestyle',
      'Fully removable for effortless eating, flossing, and professional presentations',
      'Eliminates painful metal brackets, poking wires, and emergency clinic visits',
      'Allows pre-visualization of your complete treatment and final smile before starting'
    ],
    processSteps: [
      { title: '3D Intra-oral Scan', desc: 'A rapid, high-definition digital sweep of your teeth to construct a 3D dental model.' },
      { title: 'AI Simulation Mapping', desc: 'We simulate the complete step-by-step movement using advanced biomechanics software.' },
      { title: 'Trays Fabrication', desc: 'Your complete series of premium medical-polymer alignment trays are custom-printed.' },
      { title: 'Progressive Wear', desc: 'You wear each tray set for 1-2 weeks, switching at home, with checkups only every 6-8 weeks.' }
    ],
    procedureTimeline: 'Simple digital scanning session, followed by brief progress reviews every 2 months',
    costRange: 'Custom plans with flexible downpayment',
    faq: {
      q: 'How many hours a day must I wear my aligners?',
      a: 'To achieve dental bone remodeling, aligners must be worn for 20 to 22 hours daily. They should only be removed for eating, drinking warm/colored liquids, and brushing.'
    }
  },
  {
    id: 'dental-implants',
    title: 'Premium Titanium Dental Implants',
    shortDesc: 'Permanent, medical-grade tooth roots coupled with custom zirconia crowns for fully natural biting force.',
    longDesc: 'Dental implants are the absolute gold standard for replacing missing teeth. Dr. Farhan Ali, our consultant prosthodontist, works in surgical synergy with our team to digitally map and insert a bio-compatible titanium post into the jawbone. This post acts as a synthetic tooth root, undergoing osseointegration (fusing directly to the bone). We then mount a beautifully customized, high-density Zirconia crown, fully restoring your biting force, jawbone density, and natural face structure.',
    category: 'Surgical',
    iconName: 'Anchor',
    duration: '3 - 6 months (including jaw integration)',
    recovery: '3 - 5 days post-placement',
    benefits: [
      'Restores 100% natural chewing force, bite distribution, and vocal articulation',
      'Prevents surrounding healthy teeth from shifting out of position',
      'Stimulates the jawbone, fully preventing the natural bone loss that follows tooth loss',
      'Designed to last a lifetime with standard brushing and flossing routines'
    ],
    processSteps: [
      { title: '3D Cone-Beam CT Scan', desc: 'Assessment of jawbone volume, density, and anatomical structures to locate perfect placement.' },
      { title: 'Precision Placement', desc: 'The bio-compatible implant is placed under gentle local anesthesia with high-tech surgical guides.' },
      { title: 'Osseointegration Period', desc: 'A healing window of 3 to 4 months where the bone fuses securely around the implant.' },
      { title: 'Zirconia Crown Placement', desc: 'Fitting your highly aesthetic, custom-shaded crown to match surrounding teeth perfectly.' }
    ],
    procedureTimeline: '2 primary sessions (placement & crown fitting) separated by a comfortable healing period',
    costRange: 'Premium clinical materials with warranty',
    faq: {
      q: 'Is the dental implant procedure painful?',
      a: 'Not at all. The procedure is performed under profound local anesthesia, and patients feel only minor pressure. Most patients describe it as more comfortable and easier than a routine tooth extraction.'
    }
  },
  {
    id: 'root-canal',
    title: 'Microscopic & Painless Root Canal Therapy',
    shortDesc: 'Advanced microscopic nerve-saving treatments designed to preserve infected teeth painlessly in a single visit.',
    longDesc: 'Say goodbye to severe toothaches and tooth loss. When tooth decay reaches the innermost pulp nerve, it causes severe pain and infection. Our clinic utilizes advanced endodontic therapy. Using digital rotary files and magnification microscopes, we safely remove the infected nerve tissue, sterilize the root canals, and seal them with bio-compatible materials, preserving your original tooth structure with maximum precision.',
    category: 'Restorative',
    iconName: 'Activity',
    duration: '45 - 90 mins (often single session)',
    recovery: '1 - 2 days minor chewing tenderness',
    benefits: [
      'Immediately eliminates throbbing toothaches, pressure pain, and swelling',
      'Preserves your natural biological tooth, maintaining ideal bite dynamics and jawbone health',
      'Microscopic precision ensures all infected accessory micro-canals are sterilized',
      'Far more conservative and cost-effective than tooth extraction and subsequent replacement'
    ],
    processSteps: [
      { title: 'High-Definition Digital X-Ray', desc: 'Mapping the precise length, curvature, and infection boundaries of the root canals.' },
      { title: 'Painless Anesthesia', desc: 'Applying a specialized localized anesthetic to ensure the tooth is completely numb and comfortable.' },
      { title: 'Nerve Cleansing & Shading', desc: 'Using digital rotary tools under high magnification to clean out infected pulp and debris.' },
      { title: 'Bactericidal Sealing', desc: 'Filling the empty canal with gutta-percha and placing a durable composite core protection.' }
    ],
    procedureTimeline: 'Typically completed in 1 highly efficient, single-visit appointment',
    costRange: 'Affordable, pain-relief packages',
    faq: {
      q: 'Is a root canal painful?',
      a: 'This is a common dental myth! A root canal does not cause pain; it *relieves* pain. With modern computerized local anesthetics, the procedure is as comfortable and quiet as a standard cosmetic filling.'
    }
  },
  {
    id: 'teeth-whitening',
    title: 'Cosmetic Laser Teeth Whitening',
    shortDesc: 'Advanced light-activated whitening system brightening teeth up to 8 shades in a single in-office session.',
    longDesc: 'Dramatically brighten your smile in under an hour. Our professional in-office laser whitening uses a premium, pH-balanced hydrogen peroxide gel activated by a safe therapeutic cold-light laser. This system gently penetrates tooth enamel to break down stubborn corporate food, tea, tobacco, and age-related organic stains. We include advanced desensitizing minerals to ensure complete comfort throughout and after the procedure.',
    category: 'Cosmetic',
    iconName: 'Flame',
    duration: '45 - 60 mins',
    recovery: 'Immediate (zero downtime)',
    benefits: [
      'Brightens enamel up to 8 shades in a single clinical hour',
      'Therapeutic cold-laser accelerates results safely, minimizing total chemical exposure',
      'Includes specialized enamel-strengthening fluoride to lock in minerals',
      'Provides consistent, beautifully even results superior to retail whitening kits'
    ],
    processSteps: [
      { title: 'Enamel Cleaning', desc: 'Polishing the teeth to remove superficial plaque and prepare the surface.' },
      { title: 'Gum Guard Protection', desc: 'Applying a specialized barrier gel to protect and soothe the surrounding gums.' },
      { title: 'Gel Application & Activation', desc: 'Applying the whitening gel and activating it with three 15-minute cold-laser light cycles.' },
      { title: 'Post-Whitening Shield', desc: 'Applying a desensitizing and remineralizing agent rich in calcium phosphate.' }
    ],
    procedureTimeline: 'Completed in a single, comfortable, 45-minute appointment',
    costRange: 'Instant Brightening Packages',
    faq: {
      q: 'Will teeth whitening make my teeth sensitive?',
      a: 'We use premium gels with built-in desensitizing agents, which keep sensitivity to an absolute minimum. Any minor post-treatment tingling normally fades completely within 12 to 24 hours.'
    }
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Aesthetic Porcelain Veneers & Composite Bonding',
    shortDesc: 'Ultra-thin custom porcelain shells and artistic composite bonding to correct chips, gaps, and severe stains.',
    longDesc: 'Transform your smile with artistic precision. Porcelain veneers are paper-thin, custom-crafted shells of advanced medical ceramics bonded to the front of your teeth. They are designed to correct structural defects such as chipped edges, severe tetracycline staining, minor overlaps, and awkward tooth proportions. Combined with composite bonding, we artistically reshape your smile while preserving maximum healthy enamel.',
    category: 'Cosmetic',
    iconName: 'ShieldCheck',
    duration: '2 - 3 sessions',
    recovery: '1 - 2 days light sensitivity',
    benefits: [
      'Instantly corrects tooth chips, cracks, spacing, gaps, and severe discoloration',
      'Porcelain is highly stain-resistant, maintaining a glass-like sheen for over 15 years',
      'Requires minimal enamel shaving, keeping the procedure extremely conservative',
      'Bespoke shading and micro-texture to perfectly match your natural teeth'
    ],
    processSteps: [
      { title: 'Aesthetic Mockup Planning', desc: 'We take impressions and create a temporary "test-drive" smile matching your face proportions.' },
      { title: 'Conservative Prep', desc: 'An ultra-conservative preparation of under 0.5mm of surface enamel is performed.' },
      { title: 'Artistic Lab Fabrication', desc: 'Our master ceramist handcrafts each porcelain layer for natural light reflection.' },
      { title: 'Bonding & Polishing', desc: 'The finished veneers are permanently bonded with resin cement and high-intensity curing.' }
    ],
    procedureTimeline: 'Normally completed over 2 detailed, artistic clinical visits',
    costRange: 'Premium aesthetic consultations',
    faq: {
      q: 'How long do porcelain veneers last?',
      a: 'With standard daily brushing, flossing, and twice-yearly professional checkups, premium porcelain veneers regularly last between 10 to 15+ years without losing their luster.'
    }
  },
  {
    id: 'smile-makeover',
    title: 'Digital Smile Design (DSD)',
    shortDesc: 'A revolutionary aesthetic system modeling custom dental architecture to harmonize with your facial golden proportions.',
    longDesc: 'Experience the future of cosmetic dentistry. Digital Smile Design (DSD) is an advanced clinical planning system where art, biology, and computer engineering combine. Using high-definition clinical videography and 3D intra-oral scanning, Dr. Abdul Jabbar analyzes the golden mathematical proportions of your eyes, lips, gums, and teeth. We then create a complete 3D virtual blueprint of your ideal smile and let you "test-drive" it in your mouth before any permanent treatment begins.',
    category: 'Cosmetic',
    iconName: 'Smile',
    duration: '3 - 4 visits complete transformation',
    recovery: '1 - 3 days light adaptation',
    benefits: [
      'Ensures a highly customized smile that mathematically matches your natural facial lines',
      'Removes all diagnostic guesswork, letting you visualize the final outcome before starting',
      'Provides a comprehensive multi-specialty approach (veneers, aligners, gum contouring)',
      'Delivers unmatched predictability, facial balance, and life-changing confidence'
    ],
    processSteps: [
      { title: 'Aesthetic Video Session', desc: 'We record high-definition facial movements, speech patterns, and smile dynamics.' },
      { title: 'Virtual 3D CAD Blueprinting', desc: 'Our clinical software designs custom tooth anatomy aligning with your pupil and lip lines.' },
      { title: 'Intra-oral Clinic Mockup', desc: 'A temporary polymer mockup is placed directly on your teeth so you can see your future smile live.' },
      { title: 'Surgical & Restorative Execution', desc: 'We deliver the final ceramic veneers and alignments with microscopic accuracy.' }
    ],
    procedureTimeline: 'Comprehensive program designed and completed over 3-4 specialized appointments',
    costRange: 'Individualized cosmetic planning',
    faq: {
      q: 'What makes Digital Smile Design different from standard veneers?',
      a: 'Standard cosmetic work only focuses on teeth in isolation. DSD analyzes how your teeth move in relation to your lips, facial expressions, and speech, ensuring the final smile looks fully natural and beautiful from every angle.'
    }
  },
  {
    id: 'pediatric-dentistry',
    title: 'Gentle Pediatric & Preventive Dentistry',
    shortDesc: 'Fun, stress-free clinical care for infants, children, and teens with a heavy focus on long-term prevention.',
    longDesc: 'Led by our compassionate consultant Dr. Sarah Munir, our pediatric clinic is custom-tailored to kids. We focus on building a fun, fear-free relationship with dentistry from an early age. Our specialized treatments include preventive protective sealants, tooth-strengthening fluoride therapies, pediatric space maintainers, and gentle pulpotomies. We specialize in early orthodontic screening at age 7 to guide growing jaws into ideal alignment naturally.',
    category: 'Pediatric',
    iconName: 'Smile',
    duration: '30 - 45 mins',
    recovery: 'Immediate',
    benefits: [
      'Builds happy, fear-free dental habits and confidence from an early age',
      'Protects young permanent molars from painful cavities using durable protective sealants',
      'Intercepts early jaw discrepancies, saving parents time and cost in later years',
      'Compassionate clinical techniques customized for active children and teens'
    ],
    processSteps: [
      { title: 'Friendly Introduction Tour', desc: 'The child gets familiar with the dental chair and clinical toys to relieve anxiety.' },
      { title: 'Gentle Oral Sweep', desc: 'A quick, non-invasive check of gum health, tooth eruption schedules, and bites.' },
      { title: 'Fluoride & Sealant Application', desc: 'Applying a highly effective fruit-flavored cavity-preventive shield.' },
      { title: 'Interactive Care Training', desc: 'Fun brushing exercises and customized nutrition counselling for children and parents.' }
    ],
    procedureTimeline: '30 to 45-minute fun-filled interactive appointments',
    costRange: 'Kid-friendly checkup packages',
    faq: {
      q: 'At what age should a child first visit the dentist?',
      a: 'The American Academy of Pediatric Dentistry recommends scheduling a child’s first dental checkup by their 1st birthday, or within 6 months after their first baby tooth erupts.'
    }
  },
  {
    id: 'oral-surgery',
    title: 'Comfortable Oral Surgery & Wisdom Teeth Removal',
    shortDesc: 'At-traumatic surgical extractions and jaw bone procedures delivered safely under gentle local anesthesia.',
    longDesc: 'Painless relief from impacted wisdom teeth and complex surgical needs. When teeth become trapped (impacted) in bone, or when jaw reconstruction is required for implants, specialized surgery is needed. Our clinic utilizes advanced micro-surgical instruments, computerized anesthesia, and biological healing aids (like PRF) to extract impacted teeth gently, preserve underlying bone socket volume, and ensure ultra-rapid healing with minimal swelling.',
    category: 'Surgical',
    iconName: 'ShieldCheck',
    duration: '30 - 60 mins',
    recovery: '3 - 5 days healing cycle',
    benefits: [
      'Safely extracts impacted wisdom teeth, instantly relieving facial pressure and infection',
      'At-traumatic surgical protocols minimize bone loss and speed up post-op recovery',
      'Prevents damage and crowding to adjacent healthy orthodontic structures',
      'Utilizes advanced biological growth factors for rapid gum healing'
    ],
    processSteps: [
      { title: 'Advanced 3D Imaging', desc: 'Locating the precise proximity of tooth roots to crucial nerve bundles via panoramic scanning.' },
      { title: 'Deep Local Anesthesia', desc: 'Profoundly numbing the area to guarantee a completely pain-free surgical experience.' },
      { title: 'Micro-Surgical Extraction', desc: 'Using gentle instruments to segment and remove the tooth without damaging surrounding bone.' },
      { title: 'Socket Care & Suture', desc: 'Placing sterilization aids and soft, dissolving sutures to encourage rapid gum healing.' }
    ],
    procedureTimeline: 'Typically completed in 45 minutes, backed by detailed post-operative recovery kits',
    costRange: 'Surgical relief plans',
    faq: {
      q: 'What is the recovery period after a wisdom tooth extraction?',
      a: 'With our gentle, bone-preserving surgical techniques, most swelling and tenderness peak within 48 hours and fade completely by day 4 or 5. Most patients comfortably return to work or school after 2 days.'
    }
  },
  {
    id: 'gum-treatments',
    title: 'Laser Periodontal & Gum Therapy',
    shortDesc: 'Gentle laser therapies to cure bleeding gums, reverse bad breath, and reinforce bone support.',
    longDesc: 'Healthy gums are the crucial foundation of a spectacular, long-lasting smile. Periodontal disease, if left untreated, destroys the underlying bone supporting your teeth, leading to loose teeth and bad breath. We utilize advanced soft-tissue lasers to perform deep cleaning and gum sterilization. Laser therapy painlessly vaporizes bacterial colonies, cleans deep periodontal pockets, and stimulates healthy gum re-attachment without surgical incisions.',
    category: 'Surgical',
    iconName: 'Activity',
    duration: '45 - 60 mins',
    recovery: '1 day mild sensitivity',
    benefits: [
      'Stops bleeding gums, resolves chronic bad breath, and cures active gum infections',
      'Laser therapy is completely painless, eliminating the need for surgical cutting or stitching',
      'Saves loose teeth by stimulating fresh healthy bone and gum fibers to re-attach',
      'Significantly lowers systemic inflammation connected to heart health and diabetes'
    ],
    processSteps: [
      { title: 'Periodontal Pocket Sweep', desc: 'Measuring pocket depths with ultra-fine diagnostic gauges to identify infected zones.' },
      { title: 'Ultrasonic Debridement', desc: 'Removing calcified plaque and tartar deposits using precise microscopic soundwaves.' },
      { title: 'Laser Sterilization', desc: 'Directing a gentle laser light into the pockets to destroy pathogens and remove diseased tissue.' },
      { title: 'Enamel Polishing', desc: 'Buffing the tooth root surfaces to ensure a glassy smooth surface that prevents future plaque buildup.' }
    ],
    procedureTimeline: '1 to 2 therapeutic sessions depending on the depth of bone and gum involvement',
    costRange: 'Advanced periodontal care plans',
    faq: {
      q: 'How do I know if I have active gum disease?',
      a: 'The most common signs are gums that bleed when brushing or flossing, swollen or reddish gums, persistent bad breath, receding gum lines making teeth look longer, or slight tooth mobility.'
    }
  },
  {
    id: 'crowns-bridges',
    title: 'Premium Zirconia Crowns & CAD/CAM Bridges',
    shortDesc: 'High-density, metal-free zirconia and ceramic restorations to restore damaged and missing teeth seamlessly.',
    longDesc: 'Restore full chewing performance and beautiful dental aesthetics. When a tooth is heavily broken, decayed, or missing, a dental crown or bridge provides structural reinforcement. We utilize premium, metal-free computerized Zirconia. Utilizing high-resolution CAD/CAM milling machines, we fabricate custom crowns and multi-unit bridges that replicate the precise color translucency, durability, and biting force of your original teeth.',
    category: 'Restorative',
    iconName: 'ShieldCheck',
    duration: '2 visits',
    recovery: '1 day adaptation',
    benefits: [
      'Restores the structural strength, integrity, and biting capacity of heavily damaged teeth',
      '100% metal-free Zirconia prevents dark grey lines from forming at the gum margins',
      'CAD/CAM computer designing guarantees a micrometer-perfect, comfortable bite fit',
      'Bridges seamlessly replace missing teeth, restoring smiling confidence and cheek volume'
    ],
    processSteps: [
      { title: 'Tooth Structuring', desc: 'Removing old decay and shaping the tooth under local anesthesia to receive a protective jacket.' },
      { title: '3D Optical Scan', desc: 'Taking a clean digital impression to transmit to our state-of-the-art milling laboratory.' },
      { title: 'Bespoke Fabrication', desc: 'Computerized robotic milling and hand-shading of high-strength translucent Zirconia.' },
      { title: 'Permanent Cementation', desc: 'Bonding your bespoke crown to the tooth and calibrating the bite mathematically.' }
    ],
    procedureTimeline: 'Normally completed over 2 short, comfortable appointments separated by a few days',
    costRange: 'Elite restorative restorations',
    faq: {
      q: 'What is the difference between a crown and a bridge?',
      a: 'A dental crown is a custom-fitted cap that covers a single heavily damaged tooth. A dental bridge is a multi-unit ceramic restoration used to span the gap created by one or more missing teeth, anchored to healthy adjacent teeth.'
    }
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: '2008',
    title: 'Bachelor of Dental Surgery (BDS)',
    institution: 'Liaquat University of Medical & Health Sciences (LUMHS)',
    description: 'Graduated with multiple academic distinctions, securing top positions in Clinical Dentistry and Maxillofacial Orthopedics.',
    type: 'academic'
  },
  {
    year: '2012',
    title: 'FCPS Residency in Orthodontics',
    institution: 'College of Physicians and Surgeons Pakistan (CPSP)',
    description: 'Completed a rigorous, 4-year structured clinical residency program focused on complex orthodontic treatments, skeletal growth modification, and surgical orthodontics.',
    type: 'academic'
  },
  {
    year: '2013',
    title: 'Senior Clinical Registrar & Lecturer',
    institution: 'Department of Orthodontics, LUMHS',
    description: 'Began teaching undergraduate dental students while managing full-time clinical cases of skeletal jaw malocclusion.',
    type: 'experience'
  },
  {
    year: '2015',
    title: 'FCPS Fellowship in Orthodontics',
    institution: 'College of Physicians and Surgeons Pakistan',
    description: 'Awarded the prestigious fellowship after passing comprehensive clinical, oral, and written boards, establishing consultant status.',
    type: 'credential'
  },
  {
    year: '2018',
    title: 'FFD Fellowship (Royal College of Surgeons in Ireland)',
    institution: 'Royal College of Surgeons in Ireland (RCSI), Dublin',
    description: 'Elected Fellow of the Faculty of Dentistry (FFD RCSI) in Orthodontics, earning international clinical credentials and accreditation.',
    type: 'credential'
  },
  {
    year: '2021',
    title: 'Associate Professor & Consultant Orthodontist',
    institution: 'LUMHS & Smile Design Center',
    description: 'Promoted to Associate Professor in Orthodontics, leading key clinical research papers, publishing over 15 articles, and establishing his state-of-the-art specialist clinic in Hyderabad, Pakistan.',
    type: 'experience'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Severe Crowding and Overbite Correction',
    description: 'Non-extraction treatment utilizing advanced low-friction self-ligating braces.',
    age: 19,
    treatmentType: 'Aesthetic Braces',
    duration: '14 Months',
    beforeImage: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600',
    problem: 'Severe upper and lower dental crowding, narrow maxillary arch, and an overbite of 6mm causing speech articulation issues.',
    solution: 'Arched-wire development and gentle lateral expansion of the upper jaw to create natural space, followed by teeth alignment with translucent ceramic braces without extracting any premolars.'
  },
  {
    id: 'case-2',
    title: 'Diastema (Gap) & Aesthetic Smile Designing',
    description: 'Symmetric gap closure combined with digital tooth contouring.',
    age: 24,
    treatmentType: 'Clear Aligners & Smile Makeover',
    duration: '8 Months',
    beforeImage: 'https://images.unsplash.com/photo-1544717297-fa154da09f51?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600',
    problem: '4mm central diastema (large gap between upper front teeth), causing patient to feel self-conscious and avoid smiling in public.',
    solution: 'Used custom clear aligners for 6 months to close the gap bodily and correct root inclination, followed by ultra-conservative bonding and digital smile design contouring to perfect the tooth widths.'
  },
  {
    id: 'case-3',
    title: 'Adult Class II Malocclusion & Deep Bite',
    description: 'Orthodontic correction of retroclined incisors and mandibular deep bite.',
    age: 31,
    treatmentType: 'Modern Metal Braces',
    duration: '18 Months',
    beforeImage: 'https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    problem: 'Severe deep bite where top teeth completely covered the bottom teeth, causing early enamel wear on lower incisors and chewing dysfunction.',
    solution: 'Bite opening using orthodontic bite turbos, intrusive mechanics of anterior teeth, and leveling of the lower arch with high-tech memory-alloy archwires.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Zainab Ahmed',
    age: 22,
    role: 'Medical Student',
    rating: 5,
    comment: 'I had severe crowding and felt so insecure about my smile. Dr. Abdul Jabbar suggested ceramic braces, and the entire 14-month process was incredibly smooth. Being a medical student, I highly appreciated his scientific approach, precise adjustments, and absolute cleanliness of the clinic. The results are truly miraculous!',
    treatment: 'Ceramic Braces',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    date: '3 weeks ago'
  },
  {
    id: 't-2',
    name: 'Asad Ali Talpur',
    age: 29,
    role: 'Software Engineer',
    rating: 5,
    comment: 'Choosing clear aligners with Dr. Abdul Jabbar was the best decision of my life. I had a huge gap between my front teeth. As my job requires continuous remote video meetings, I wanted something completely invisible. The custom aligners worked perfectly, and nobody even noticed I was wearing them. Professionalism at its peak!',
    treatment: 'Clear Aligners',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    date: '2 months ago'
  },
  {
    id: 't-3',
    name: 'Dr. Maria Qureshi',
    age: 35,
    role: 'Assistant Professor of Pathology',
    rating: 5,
    comment: 'As a fellow medical professional, I am extremely particular about sterilization and clinical protocol. Dr. Abdul Jabbar Orthodontics maintains outstanding, premium standards comparable to international clinics. He explained every detail of my child\'s deep bite treatment on a digital screen. Truly Hyderabad\'s finest specialist.',
    treatment: 'Palatal Expander & Braces',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
    date: '1 month ago'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is the ideal age to see an Orthodontist?',
    answer: 'While orthodontics can align teeth at any age, the American Association of Orthodontists recommends a child’s first orthodontic evaluation at age 7. At this stage, early skeletal jaw discrepancies can be intercepted and corrected non-surgically using growth modification appliances.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'How long does a standard braces treatment take?',
    answer: 'The average treatment duration ranges between 12 to 24 months. Complex skeletal corrections may take longer, while simple spacing or cosmetic corrections can be completed in as little as 6 to 10 months. Dr. Abdul Jabbar will give you a precise timeline during your first diagnostic visit.',
    category: 'Treatment'
  },
  {
    id: 'faq-3',
    question: 'Are dental braces painful?',
    answer: 'Fitting the braces does not hurt at all. However, you will feel a mild pressure, soreness, or aching sensation for 3 to 5 days after brackets are first placed or when archwires are tightened. This is easily managed with soft foods and over-the-counter pain relievers.',
    category: 'Treatment'
  },
  {
    id: 'faq-4',
    question: 'Do you accept health insurance or provide monthly payment plans?',
    answer: 'Orthodontic care is an investment in your child’s or your own health. To accommodate every budget, we offer 100% interest-free clinical installment plans. An initial deposit is paid at the start of bracket bonding or aligner delivery, and the rest is spread out over your monthly progress check visits. We also provide official diagnostic receipt papers to help you claim reimbursement from premium medical insurance policies.',
    category: 'Insurance'
  },
  {
    id: 'faq-5',
    question: 'How often will I need to visit the clinic for adjustments?',
    answer: 'For ceramic or metal braces, clinical checkups are typically scheduled once every 4 to 5 weeks to activate archwires and replace elastics. For Premium Clear Aligners, appointments are much fewer—normally every 6 to 8 weeks since you switch clear trays at home according to your prescribed plan.',
    category: 'Appointments'
  },
  {
    id: 'faq-6',
    question: 'What happens if a braces bracket or wire breaks or becomes loose?',
    answer: 'While loose brackets are not medical emergencies, we recommend contacting the clinic coordinator immediately. We will schedule a quick 10-minute slot to re-bond the bracket or clip the wire to ensure your treatment continues seamlessly without losing timeline progress.',
    category: 'Treatment'
  },
  {
    id: 'faq-7',
    question: 'Do I need to wear retainers after my braces are removed?',
    answer: 'Absolutely. Enamel and tooth roots have a natural cellular memory and will slowly revert to their original crowded positions without stabilization. We provide premium clear removable retainers and custom hidden bonded wire retainers to guarantee your perfect alignment is locked in forever.',
    category: 'Treatment'
  }
];

export const BLOG_DATA: BlogArticle[] = [
  {
    id: 'blog-1',
    title: 'The Ultimate Guide to Choosing Between Clear Aligners and Ceramic Braces',
    summary: 'A detailed medical comparison of visibility, comfort, eating habits, and results speed to help you make an informed choice.',
    content: `When planning a smile transformation, patients often ask: "Should I choose clear aligners or clear ceramic braces?" Both of these modern dental options provide high-efficiency alignment while respecting your daily aesthetics. Let's compare their biological and lifestyle differences to guide your decision.

### 1. Aesthetic Visibility
- **Clear Aligners:** Crafted from paper-thin, transparent polyurethane, aligners fit snugly over your teeth. From a normal speaking distance, they are virtually invisible.
- **Ceramic Braces:** These use translucent ceramic brackets matching your exact enamel shade, connected by a fine silver or white coated titanium wire. They are highly discreet, though closer inspection reveals structural lines.

### 2. Removability and Lifestyle Comfort
- **Clear Aligners:** Fully removable. You can take them out when enjoying tough meats, sticky desserts, and hot coffee, and then brush and floss perfectly before re-insertion. However, they demand strict patient discipline to wear for 22 hours daily.
- **Ceramic Braces:** Fixed to your teeth. There is no risk of losing them or forgetting to wear them. They require avoiding highly sticky or hard foods to prevent brackets debonding.

### 3. Treatment Speed and Case Complexity
While both handle standard crowding and gaps perfectly, ceramic braces can apply heavier, continuous orthodontic forces. This makes ceramic braces slightly more efficient for complex bone-level root rotations and deep structural bites.

Consult with Dr. Abdul Jabbar for a 3D intra-oral scan and digital visualization of how each treatment would align your unique profile!`,
    category: 'Aligners',
    readTime: '5 min read',
    date: 'June 18, 2026',
    author: 'Dr. Abdul Jabbar',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'blog-2',
    title: 'Why the American Association of Orthodontists Recommends Evaluation by Age 7',
    summary: 'Discover how interceptive jaw orthopedics can guide your child\'s facial growth, preventing major surgical corrections in adulthood.',
    content: `Many parents assume that children should only visit an orthodontist once all their permanent teeth have erupted—typically around ages 12 to 14. However, clinical research shows that the ideal age for a child's first orthodontic consultation is age 7.

### What is Interceptive Orthodontics?
By age 7, the first permanent molars have erupted, establishing the back bite. At this stage, a trained consultant orthodontist can evaluate the skeletal relationship between the upper and lower jaws. If the upper jaw is too narrow, or if an underbite is developing, we can intercept the growth of the facial bones using gentle growth-modification devices.

### Key Benefits of Early Intervention:
1. **Palatal Expansion:** Safely widening a narrow upper jaw to eliminate crossbites and create natural space for emerging permanent teeth.
2. **Guiding Jaw Symmetry:** Using functional appliances to encourage or retard jaw development, enhancing the overall profile and chin projection.
3. **Preventing Tooth Impactions:** Creating room for permanent canines, saving them from getting trapped in bone.
4. **Simplifying Future Braces:** Interceptive growth guidance often means that when braces are eventually placed, treatment is shorter, far easier, and completely avoids tooth extractions.

Protect your child’s developing smile and secure a beautiful skeletal foundation with a gentle screening consultation.`,
    category: 'Braces',
    readTime: '4 min read',
    date: 'May 24, 2026',
    author: 'Dr. Sarah Munir',
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'blog-3',
    title: '5 Crucial Secrets to Maintain Sparkling White Teeth Post-Whitening',
    summary: 'Maximize your professional laser whitening results and prevent stain re-absorption with these simple clinical hygiene habits.',
    content: `Professional laser teeth whitening is a fast, safe way to instantly brighten your smile up to 8 shades. However, dental enamel remains slightly porous for the first 48 hours following a clinical whitening session. 

To lock in your brilliant enamel sheen and ensure your results last for years, adhere to these simple, scientifically backed hygiene habits:

### 1. The "White Diet" Rule (First 48 Hours)
Since enamel pores are temporarily open, they readily absorb pigments. Avoid highly colored foods and beverages:
- Avoid black coffee, tea, red wine, and cola.
- Steer clear of colorful sauces (soy sauce, mustard, ketchup, curry).
- Eat light, neutral foods (chicken, rice, pasta, cauliflower, milk).

### 2. Sip Through a Straw
If you cannot resist iced tea or your morning coffee, sip through a high-quality straw. This channels the liquid past your anterior teeth, drastically reducing stain contact.

### 3. Rinse Immediately After Meals
You do not need to brush aggressively after every snack. Simply swishing and rinsing your mouth with plain water after eating neutralizes acids and removes pigment residues before they bond to enamel.

### 4. Upgrade Your Toothbrush Technology
Use a high-quality sonic electric toothbrush paired with a gentle, non-abrasive, mineral-rich whitening toothpaste once a day. This keeps micro-stains from settling on the enamel crystals.

### 5. Schedule Regular Cleanings
Twice-yearly professional dental scaling and polishing removes accumulated extrinsic stains and calcified tartar, instantly refreshing the biological base of your bright smile.`,
    category: 'Hygiene',
    readTime: '3 min read',
    date: 'April 12, 2026',
    author: 'Dr. Farhan Ali',
    image: 'https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&q=80&w=600'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  { id: 'g-1', title: 'Premium Clinic Reception & Lounge', category: 'clinic', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600', description: 'Our welcoming, glass-accented patient check-in lounge designed for comfort.' },
  { id: 'g-2', title: 'State-of-the-Art Treatment Suite', category: 'rooms', image: 'https://images.unsplash.com/photo-1513412527319-f632c61bd048?auto=format&fit=crop&q=80&w=600', description: 'Sterile, modern orthodontic room equipped with ergonomic clinical seats.' },
  { id: 'g-3', title: '3D Intra-oral Scanner & CAD Station', category: 'equipment', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600', description: 'High-speed digital scanning scanner replacing old messy dental pastes.' },
  { id: 'g-4', title: 'Executive consultation Room', category: 'rooms', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600', description: 'Private discussion office with large digital displays to review 3D smile pre-views.' },
  { id: 'g-5', title: 'Dedicated Dental X-Ray Center', category: 'equipment', image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=600', description: 'Ultra-low radiation digital panoramic and cephalometric scanning station.' },
  { id: 'g-6', title: 'Pediatric Interactive Zone', category: 'rooms', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600', description: 'Fun, play-centered environment designed to put children fully at ease.' },
  { id: 'g-7', title: 'Orthodontic Dental Lab', category: 'clinic', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600', description: 'In-house digital laboratory to calibrate expanders, retainers and clear aligners.' },
  { id: 'g-8', title: 'Symmetric Smile Alignment Results', category: 'results', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600', description: 'Transformation results showing tooth overcrowding alignment and bite correction.' },
  { id: 'g-9', title: 'Smile Design Veneers Makeover', category: 'results', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600', description: 'Before & after gap-closure and aesthetic contouring using porcelain veneers.' },
  { id: 'g-10', title: 'Our Dedicated Clinical Team', category: 'team', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600', description: 'Our certified orthodontists, prosthodontists, and assistants.' }
];

export const CLINIC_CONTACT = {
  phone: '+92 300 1234567',
  whatsapp: '923001234567', // international format without spaces/plus for api link
  email: 'appointments@drabduljabbarortho.com',
  address: 'Suite #204, 2nd Floor, Premium Medical Arcade, Saddar Cantonment, Hyderabad, Pakistan',
  workingHours: [
    { days: 'Monday - Friday', hours: '4:00 PM - 9:00 PM' },
    { days: 'Saturday', hours: '2:00 PM - 7:00 PM' },
    { days: 'Sunday', hours: 'Closed (By Emergency Only)' }
  ],
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14408.384594165682!2d68.35824581335449!3d25.39316658428383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70f6d34e6015%3A0x6b45a0b769f70d23!2sSaddar%20Hyderabad%2C%20Sindh%2071000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
};
