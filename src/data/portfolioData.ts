export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  client: string;
  role: string;
  impact: string;
  image: string;
  tags: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  shortDescription: string;
  deliverables: string[];
  mockupImage: string;
}

export interface ExperienceEntry {
  id: string;
  organization: string;
  role: string;
  period?: string;
  focus: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'What I Do', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

export const CREDIBILITY_METRICS = [
  {
    value: '5+ Years',
    label: 'Product/UI/UX Experience',
    highlight: 'Experience'
  },
  {
    value: '100+ Learners',
    label: 'Mentored & Facilitated',
    highlight: 'Mentorship'
  },
  {
    value: 'Multiple Products',
    label: 'Designed Across Mobile & Web',
    highlight: 'Shipped Works'
  },
  {
    value: '3+ Areas',
    label: 'Product Design, Mentoring & Ecosystem Building',
    highlight: 'Leadership'
  }
];

export const WHAT_I_DO_SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Product Design',
    shortDescription: 'Research, UX strategy, user flows, wireframes, UI design, prototyping and usability.',
    deliverables: ['User Research & Psychology', 'Interactive Prototyping', 'Usability Audits', 'User Journey Mapping'],
    mockupImage: '/src/assets/images/project_ecommerce_app_1790968775470.jpg'
  },
  {
    number: '02',
    title: 'Mobile App Design',
    shortDescription: 'End-to-end mobile product experiences for modern digital businesses.',
    deliverables: ['iOS & Android Guidelines', 'Haptic & Gesture Interactions', 'Offline-First UX', 'App Store Assets'],
    mockupImage: '/src/assets/images/project_mobile_app_1790968752404.jpg'
  },
  {
    number: '03',
    title: 'Web & SaaS Design',
    shortDescription: 'Responsive websites, dashboards, SaaS products and business platforms.',
    deliverables: ['High-Density Dashboards', 'Data Visualizations', 'Conversion Workflows', 'Multi-Tenant Platforms'],
    mockupImage: '/src/assets/images/project_dashboard_saas_1790968764550.jpg'
  },
  {
    number: '04',
    title: 'Design Systems & UX Strategy',
    shortDescription: 'Reusable components, scalable interfaces and experience strategy.',
    deliverables: ['Design Token Architecture', 'Component Libraries', 'Figma Variables & Modes', 'Engineering Hand-off'],
    mockupImage: '/src/assets/images/project_mobile_app_1790968752404.jpg'
  }
];

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    id: 'exp-1',
    organization: 'Bayelsa Tech Hub',
    role: 'Product Designer / UI/UX Design Lead Facilitator',
    period: '2019 – Present',
    focus: 'Product Design, UI/UX training, mentoring, digital innovation and ecosystem programs.'
  },
  {
    id: 'exp-2',
    organization: 'Olotu Square / 3MTT',
    role: 'Product Design Facilitator',
    period: '2024',
    focus: 'Product Design training, practical projects, portfolio development and learner mentorship.'
  },
  {
    id: 'exp-3',
    organization: 'Bayelsa Tech Hub',
    role: 'Product Design Mentor & Facilitator',
    focus: 'Mentoring aspiring designers, facilitating digital skills programs and supporting learners toward job-ready portfolios.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'careconnect',
    title: 'CareConnect',
    category: 'Healthcare / Mobile App',
    tagline: 'Virtual appointments, provider discovery, and instant patient consultations.',
    description: 'A telemedicine experience connecting patients with doctors through discovery, profiles, appointments and virtual consultations.',
    client: 'CareConnect Telehealth',
    role: 'Lead Product Designer',
    impact: 'Reduced patient wait times by 46% across 12 medical specialties',
    image: '/src/assets/images/careconnect_mockup_1790979927302.jpg',
    tags: ['Healthcare', 'Telemedicine', 'Mobile App', 'Design System']
  },
  {
    id: 'pioneer-airlines',
    title: 'Pioneer Airlines',
    category: 'Travel / Mobile App',
    tagline: 'Frictionless air travel booking, seat selection, and digital boarding pass.',
    description: 'A mobile-first airline experience designed to simplify booking, customer engagement and travel service discovery.',
    client: 'Pioneer Aviation Group',
    role: 'Lead Product Designer',
    impact: '+52% increase in direct mobile flight bookings and ancillaries',
    image: '/src/assets/images/pioneer_airline_mockup_1790979939634.jpg',
    tags: ['Travel', 'Mobile App', 'Booking Flow', 'Aviation']
  },
  {
    id: 'mindful-scrolling',
    title: 'Mindful Scrolling',
    category: 'Digital Wellbeing / Mobile App',
    tagline: 'Gentle, non-judgmental pauses that transform mindless device habits.',
    description: 'A wellbeing-focused experience designed to help users develop healthier digital habits through gentle, non-judgmental interventions.',
    client: 'Mindful Labs',
    role: 'Product Designer & UX Researcher',
    impact: 'Average 38-minute daily reduction in compulsive social feeds',
    image: '/src/assets/images/mindful_scroll_mockup_1790979950384.jpg',
    tags: ['Digital Wellbeing', 'Mobile App', 'Behavioral UX', 'Micro-Interactions']
  },
  {
    id: 'track-it',
    title: 'Track-it',
    category: 'Health / Mobile App',
    tagline: 'Intelligent daily regimen, dosage logs, and adherence streak builder.',
    description: 'A medication and vitamins tracking experience designed to help users manage routines and stay consistent.',
    client: 'Track-it Health',
    role: 'UI/UX Design Lead',
    impact: '92% 30-day user adherence rate for daily supplement regimens',
    image: '/src/assets/images/trackit_health_mockup_1790979960963.jpg',
    tags: ['Health', 'Mobile App', 'Habit Tracker', 'iOS & Android']
  },
  {
    id: 'bayelsa-housing',
    title: 'Bayelsa Housing & Property Development Authority',
    category: 'Government / Web',
    tagline: 'Transparent civic property registries, land records, and citizen allocation.',
    description: 'A modern digital experience designed to improve access to housing and property information.',
    client: 'Bayelsa State Government',
    role: 'Principal UX Consultant',
    impact: 'Over 65,000 citizens accessed verified property records online',
    image: '/src/assets/images/bayelsa_housing_mockup_1790979973820.jpg',
    tags: ['Government', 'Web', 'Civic Tech', 'Accessibility']
  },
  {
    id: 'anydrop',
    title: 'AnyDrop',
    category: 'Mobility / Mobile App',
    tagline: 'Connected commuter carpooling, transparent route matching, and shared transit.',
    description: 'A carpooling and mobility experience focused on convenient and connected transportation.',
    client: 'AnyDrop Mobility Network',
    role: 'Product Designer',
    impact: 'Over 14,000 successful shared commute rides completed per month',
    image: '/src/assets/images/anydrop_mobility_mockup_1790979983533.jpg',
    tags: ['Mobility', 'Mobile App', 'Carpooling', 'Real-Time GPS']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Jayesh Patil',
    role: 'CEO & Co-Founder',
    company: 'Lirante Foods',
    rating: 5,
    content: "Dicxion's exceptional product design ensured our platform's commercial success from day one. He doesn't just design interfaces—he thinks deeply about user retention, developer ergonomics, and measurable business growth."
  },
  {
    id: 'test-2',
    name: 'Sarah Montgomery',
    role: 'VP of Product',
    company: 'Vanguard FinTech',
    rating: 5,
    content: "Working with Dicxion was transformative for our product suite. His ability to distill complicated trading logic into clean, razor-sharp UI is rare. The design system he built saved our engineers months of effort."
  },
  {
    id: 'test-3',
    name: 'Marcus Chen',
    role: 'Chief Technology Officer',
    company: 'Aura Cloud Systems',
    rating: 5,
    content: 'Dicxion brings rare discipline, immaculate craft, and lightning-fast turnaround. His focus on design fidelity and accessibility helped us pass strict institutional security audits on the first pass.'
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-1',
    title: 'Design Unraveled: Behind the Scenes of UI/UX Magic in Modern SaaS',
    category: 'Product Strategy',
    author: 'Dicxion Bolodeoku',
    date: '10 Nov, 2026',
    readTime: '5 min read',
    summary: 'A deep dive into cognitive load reduction, affordance clarity, and how intentional hierarchy creates effortless software experiences.',
    image: '/src/assets/images/project_dashboard_saas_1790968764550.jpg'
  },
  {
    id: 'art-2',
    title: 'Designing for Micro-Finance: Balancing Empathy and Information Density',
    category: 'UX Research',
    author: 'Dicxion Bolodeoku',
    date: '09 Oct, 2026',
    readTime: '7 min read',
    summary: 'Lessons learned building high-stakes financial tools for non-technical field operators under bandwidth constraints.',
    image: '/src/assets/images/project_ecommerce_app_1790968775470.jpg'
  },
  {
    id: 'art-3',
    title: 'Cinetrade: Building Next-Gen Design Tokens for Multi-Platform FinTech',
    category: 'Design Systems',
    author: 'Dicxion Bolodeoku',
    date: '13 Aug, 2026',
    readTime: '6 min read',
    summary: 'How to structure color palettes, typography scales, and motion curves that compile cleanly to React, Swift, and Jetpack Compose.',
    image: '/src/assets/images/project_mobile_app_1790968752404.jpg'
  }
];
