import { CaseStudy, Capability, WhatIfConcept, Testimonial, ProcessStep, CorePillar, ManifestoPillar } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'omnihealth-ai',
    title: 'OmniHealth AI',
    client: 'OmniHealth Systems',
    tagline: 'Autonomous Clinical Workflow & Mobile Diagnostic Intelligence',
    category: 'ai',
    categoryLabel: 'AI & Mobile Health',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
    videoUrl: '/videos/fantasy-mobile-app.mp4',
    youtubeId: 'J4xNhYeaGkI',
    galleryImages: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80'
    ],
    metrics: [
      { label: 'Triage Acceleration', value: '4.2x', description: 'Faster physician review cycles' },
      { label: 'Diagnostic Precision', value: '99.2%', description: 'Verified clinical accuracy rate' },
      { label: 'Active Clinicians', value: '85,000+', description: 'Across 14 hospital networks' }
    ],
    challenge: 'Healthcare practitioners were losing over 3 hours each shift navigating disjointed EMR interfaces, leading to diagnostic delays and provider burnout.',
    solution: 'Engineered a unified HIPAA-compliant mobile suite with an on-device AI agent capable of synthesizing patient vitals, clinical audio dictations, and EHR telemetry in sub-second intervals.',
    architecture: [
      'Zero-latency edge inference running custom quantized transformer models on iOS and Android',
      'End-to-end encrypted WebSocket telemetry bridge to hospital PACS and HL7/FHIR servers',
      'Rigorous automated test suite with over 4,200 simulated medical sensor streams via Appium and Selenium'
    ],
    techStack: ['Swift', 'Kotlin', 'PyTorch Mobile', 'Node.js', 'AWS HealthLake', 'WebRTC', 'Docker'],
    year: '2025',
    duration: '6 Months',
    accentColor: '#38bdf8',
    testimonial: {
      quote: 'PureTech Innovations transformed our clinical application from a slow utility into an intuitive, life-saving intelligence partner.',
      author: 'Dr. Marcus Vance',
      role: 'Chief Medical Officer, OmniHealth Systems'
    }
  },
  {
    id: 'veloce-capital',
    title: 'Hyperion Mobility OS',
    client: 'Hyperion Automotive Group',
    tagline: 'Next-Gen Autonomous In-Cabin Cockpit OS & Spatial EV Experience',
    category: 'ai',
    categoryLabel: 'Automotive & In-Cabin OS',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    videoUrl: '/videos/fantasy-web-salesforce.mp4',
    youtubeId: 'Fg5HYn5bkm8',
    galleryImages: [
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ],
    metrics: [
      { label: 'Autonomous HUD Latency', value: '< 8ms', description: 'Real-time road path rendering' },
      { label: 'Driver Satisfaction', value: '98.4%', description: 'Driver ergonomics and UX rating' },
      { label: 'Active Connected Fleet', value: '250,000+', description: 'Electric vehicles in production' }
    ],
    challenge: 'Legacy automotive infotainment stacks suffered from sluggish 24fps lag, fragmented multi-screens, and unintuitive nested menus that caused driver distraction.',
    solution: 'Architected an ultra-responsive, unified in-cabin digital cockpit OS running at 120 FPS, combining real-time autonomous path telemetry, spatial Dolby Atmos audio, and zero-latency voice controls.',
    architecture: [
      'Real-time Android Automotive OS HAL integration with sub-8ms GPU rendering pipelines',
      'Spatial audio engine with localized zone beamforming and Dolby Atmos 3D positioning',
      'Offline-first neural voice assistant handling climate, route, and telemetry without cellular lag'
    ],
    techStack: ['C++', 'Rust', 'Android Automotive OS (AAOS)', 'Unreal Engine', 'WebAssembly', 'Metal / Vulkan'],
    year: '2025',
    duration: '8 Months',
    accentColor: '#38bdf8',
    testimonial: {
      quote: 'PureTech didn’t just design a cockpit interface—they created the definitive luxury driving experience for the electric vehicle era.',
      author: 'Elena Rostova',
      role: 'Head of Digital Cockpit Engineering, Hyperion Mobility'
    }
  },
  {
    id: 'aerologix-global',
    title: 'AeroLogix Logistics',
    client: 'AeroLogix International',
    tagline: 'Autonomous Fleet Telematics & Predictive Intermodal Freight OS',
    category: 'enterprise',
    categoryLabel: 'Enterprise & Cloud',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
    videoUrl: '/videos/fantasy-software-build.mp4',
    youtubeId: 'ZK-rNEhJIDs',
    galleryImages: [
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80'
    ],
    metrics: [
      { label: 'Fuel & Route Savings', value: '23.4%', description: 'Average logistical cost reduction' },
      { label: 'Connected Assets', value: '14,200', description: 'Autonomous trucks, vessels & railcars' },
      { label: 'ETA Predictive Accuracy', value: '98.7%', description: 'Within a 15-minute delivery window' }
    ],
    challenge: 'Managing over 14,000 active cross-continental shipping routes with volatile weather disruptions and outdated dispatch systems.',
    solution: 'Delivered an end-to-end IoT platform featuring real-time geospatial tracking, dynamic rerouting powered by predictive machine learning, and native mobile dispatch consoles.',
    architecture: [
      'High-throughput MQTT broker ingestion layer processing 45,000 sensor pings/sec',
      'Spatial routing algorithm factoring live NOAA weather feeds and port berth congestion',
      'Offline-first mobile driver tablet interface with automated synchronization when reconnected'
    ],
    techStack: ['Java Spring Boot', 'Node.js', 'React Native', 'Apache Kafka', 'PostgreSQL / PostGIS', 'AWS IoT Core'],
    year: '2024',
    duration: '9 Months',
    accentColor: '#818cf8',
    testimonial: {
      quote: 'The return on investment was immediate. PureTech eliminated billions in logistical friction across our transport network.',
      author: 'David Sterling',
      role: 'VP of Global Operations, AeroLogix'
    }
  },
  {
    id: 'nexus-commerce',
    title: 'Nexus Omnichannel',
    client: 'Nexus Luxury Retail Group',
    tagline: 'Headless AI Personalization & Immersive Commerce Infrastructure',
    category: 'web',
    categoryLabel: 'Web & AI Commerce',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80',
    videoUrl: '/videos/fantasy-what-is-an-app.mp4',
    youtubeId: 'Fg5HYn5bkm8',
    galleryImages: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
    ],
    metrics: [
      { label: 'Checkout Conversion', value: '+47%', description: 'Lift across mobile web and native apps' },
      { label: 'Sub-second Page Load', value: '0.4s', description: 'Core Web Vitals 100/100 score' },
      { label: 'Annual Gross Merch', value: '$340M', description: 'Processed through custom Shopify Plus API' }
    ],
    challenge: 'A luxury multi-brand retailer needed to break free from monolithic e-commerce constraints and deliver instant, editorialized shopping experiences.',
    solution: 'Engineered a bespoke headless storefront on Next.js paired with a custom AI recommendation engine that learns visual preferences from user browsing gestures.',
    architecture: [
      'Edge-rendered frontend with predictive asset prefetching based on scroll trajectory',
      'Custom vector database clustering customer lifestyle affinity scores in real-time',
      'Enterprise integration with Shopify Plus, Klaviyo, and SAP inventory ERPs'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shopify Storefront API', 'Pinecone Vector DB', 'Vercel Edge'],
    year: '2024',
    duration: '5 Months',
    accentColor: '#f43f5e',
    testimonial: {
      quote: 'PureTech didn’t just rebuild our storefront—they elevated our brand into a digital flagship that sets the standard for modern luxury.',
      author: 'Claire Beaumont',
      role: 'Chief Digital Officer, Nexus Retail'
    }
  },
  {
    id: 'spectras-engine',
    title: 'SpectraOS Industrial',
    client: 'Spectra Robotics & Automation',
    tagline: 'Sub-Millimeter Computer Vision & Automated Quality Control OS',
    category: 'ai',
    categoryLabel: 'AI & Systems',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
    videoUrl: '/videos/fantasy-ai-eliza.mp4',
    youtubeId: 'ZK-rNEhJIDs',
    galleryImages: [
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80'
    ],
    metrics: [
      { label: 'Defect Detection', value: '99.98%', description: 'Catches surface flaws down to 50 microns' },
      { label: 'Inspection Speed', value: '120 pcs/sec', description: 'High-speed assembly line processing' },
      { label: 'Scrap Waste Saved', value: '$18M/yr', description: 'Direct material savings for auto clients' }
    ],
    challenge: 'Automotive microchip and chassis manufacturers suffered multimillion-dollar recalls due to optical inspection failures at line speed.',
    solution: 'Built a specialized C++ / Python desktop runtime paired with custom convolutional neural networks running directly on industrial edge GPUs.',
    architecture: [
      'Direct camera sensor capture over GigE Vision protocol with microsecond synchronization',
      'TensorRT optimized deep neural network inference running at 240 FPS on NVIDIA Jetson / RTX',
      'Touchscreen operator interface with automated defect heatmapping and instant line pause triggers'
    ],
    techStack: ['Python', 'C++', 'PyTorch', 'TensorRT', 'Electron / React', 'OpenCV', 'Docker'],
    year: '2025',
    duration: '7 Months',
    accentColor: '#a855f7',
    testimonial: {
      quote: 'PureTech’s engineering rigor is unmatched. They handled deep hardware integration and computer vision models with flawless precision.',
      author: 'Jonas Lindholm',
      role: 'VP of Manufacturing Automation, Spectra'
    }
  },
  {
    id: 'kinetix-mobile',
    title: 'Kinetix Vision Athlete',
    client: 'Kinetix Sports Science',
    tagline: 'Pose-Estimation Biomechanics & Real-Time Athletic Coaching',
    category: 'mobile',
    categoryLabel: 'Mobile & Computer Vision',
    heroImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=80',
    videoUrl: '/videos/fantasy-master-sizzle.mp4',
    youtubeId: 'J4xNhYeaGkI',
    galleryImages: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80'
    ],
    metrics: [
      { label: 'App Store Rating', value: '4.9 ★', description: 'Over 48,000 verified user reviews' },
      { label: 'Joint Kinematic FPS', value: '60 FPS', description: 'Zero lag on standard iPhone and Galaxy' },
      { label: 'Injury Reduction', value: '-38%', description: 'Reported in collegiate athletic trials' }
    ],
    challenge: 'Elite coaches wanted biomechanical video analysis accessible on an athlete’s smartphone without requiring expensive motion capture suites.',
    solution: 'Created an award-winning iOS and Android app utilizing Apple Neural Engine and Qualcomm NPU for real-time 33-point skeletal landmark detection.',
    architecture: [
      'Custom CoreML / MediaPipe model execution running entirely local on device with 0 cloud upload needed for privacy',
      'Audio haptic feedback providing millisecond posture cues during heavy athletic lifts',
      'Social leaderboards and video scrub timeline with interactive joint angle overlays'
    ],
    techStack: ['Flutter', 'Swift', 'Kotlin', 'CoreML', 'MediaPipe', 'Firebase Auth', 'Node.js'],
    year: '2024',
    duration: '6 Months',
    accentColor: '#06b6d4',
    testimonial: {
      quote: 'They took an academic research paper on human pose estimation and turned it into an App of the Year contender.',
      author: 'Sarah Chen, OLY',
      role: 'Head of Performance, Kinetix Athletic Lab'
    }
  }
];

export const CAPABILITIES: Capability[] = [
  {
    id: 'mobile-app-development',
    number: '01',
    title: 'Mobile App Development',
    tagline: 'Build Smarter, Scale Faster across iOS and Android.',
    description: 'We build intuitive, high-performance mobile applications designed to deliver seamless experiences across iOS and Android. From concept and UI/UX to development, testing, and deployment, our team creates scalable apps that keep users engaged and help businesses stay connected with their customers.',
    iconName: 'Smartphone',
    subServices: [
      'Native iOS Engineering (Swift / SwiftUI / CoreML)',
      'Native Android Engineering (Kotlin / Jetpack Compose)',
      'Cross-Platform Velocity (Flutter & React Native)',
      'Offline-First Data Architecture & Local Sync',
      'App Store Optimization & Biometric Security'
    ],
    technologies: ['Swift', 'Kotlin', 'Flutter', 'React Native', 'Firebase', 'AWS', 'Appium', 'Room DB'],
    deliverables: [
      'Production iOS App Store & Google Play builds',
      'CI/CD automated deployment pipelines',
      '100% intellectual property & source code transfer'
    ],
    color: '#38bdf8'
  },
  {
    id: 'custom-website-development',
    number: '02',
    title: 'Custom Website Development',
    tagline: 'Web & Mobile Solutions Made For People.',
    description: 'We build custom websites that combine powerful functionality with modern, intuitive designs to meet your unique business needs. From dynamic business websites and customer portals to advanced platforms and fully customized web solutions, we create secure, responsive, and scalable websites tailored to your goals, workflows, and audience.',
    iconName: 'Globe',
    subServices: [
      'Custom Business Websites & Customer Portals',
      'Advanced High-Throughput Web Platforms',
      'Next.js, React & Modern Frontend Architectures',
      'Headless CMS & E-Commerce (Shopify Plus, Magento, WordPress)',
      'Sub-Second Core Web Vitals Optimization'
    ],
    technologies: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'WordPress', 'Magento', 'Shopify', 'AWS'],
    deliverables: [
      'Responsive, high-converting web applications',
      'Tailored customer portals and admin suites',
      'SEO-optimized, accessible digital flagships'
    ],
    color: '#818cf8'
  },
  {
    id: 'corporate-branding-engineering',
    number: '03',
    title: 'Corporate Branding & Software Engineering',
    tagline: 'Custom Software Designed Around Your Business.',
    description: 'We engineer reliable software solutions around your specific business requirements, focusing on performance, scalability, security, and long-term maintainability. Our development approach combines modern technologies, proven engineering practices, and thoughtful architecture to turn complex ideas into dependable digital products.',
    iconName: 'Cpu',
    subServices: [
      'Corporate Visual Identity & Design Systems',
      'Custom Business Software Architecture',
      'Microservices & Distributed Cloud Infrastructure',
      'Enterprise Database Engineering (PostgreSQL, Redis)',
      'Strict NDA & Confidentiality Protocols'
    ],
    technologies: ['Node.js', 'Java Spring Boot', 'Go', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'Azure'],
    deliverables: [
      'Comprehensive brand and design token systems',
      'Scalable backend architectures and APIs',
      'Full technical documentation & architectural blueprints'
    ],
    color: '#10b981'
  },
  {
    id: 'web-desktop-development',
    number: '04',
    title: 'Web Application & Desktop Software',
    tagline: 'Robust Applications Delivering Powerful Operating Performance.',
    description: 'We develop robust desktop and web applications that deliver reliable performance and powerful functionality across operating environments. From internal business tools to specialized enterprise software, we create applications designed around your processes, helping teams work more efficiently while maintaining security and stability.',
    iconName: 'Terminal',
    subServices: [
      'Cross-Platform Desktop Clients (Windows, macOS, Linux)',
      'Specialized Internal Tools & Enterprise Software',
      'Hardware Sensor Integration & Low-Level Drivers',
      'High-Concurrency Desktop Runtimes (Electron, Tauri, C++)',
      'Zero-Downtime Data Ingestion Pipelines'
    ],
    technologies: ['Electron', 'Tauri', 'C++', 'C# .NET', 'Python', 'React', 'Docker'],
    deliverables: [
      'Native compiled desktop installers and utilities',
      'Secure internal operational dashboards',
      'Hardware communication interface modules'
    ],
    color: '#06b6d4'
  },
  {
    id: 'digital-marketing',
    number: '05',
    title: 'Digital Marketing & Growth',
    tagline: 'Connecting Your Brand with the Right Audience for Measurable Growth.',
    description: 'We help businesses strengthen their digital presence through strategic marketing focused on visibility, engagement, and measurable growth. From search engine optimization and content strategies to paid campaigns and social media, our approach connects your brand with the right audience and turns digital attention into meaningful results.',
    iconName: 'LayoutGrid',
    subServices: [
      'Search Engine Optimization (Technical & Organic SEO)',
      'Data-Driven Content Strategies & Brand Inbound',
      'Targeted Paid Media Campaigns (Search, Social, Programmatic)',
      'Conversion Rate Optimization (CRO) & Funnel Audits',
      'Social Media Presence & Brand Acceleration'
    ],
    technologies: ['Google Analytics 4', 'Search Console', 'Semrush', 'Meta Ads', 'LinkedIn Ads', 'HubSpot'],
    deliverables: [
      'Comprehensive growth and attribution dashboards',
      'High-converting campaign landing funnels',
      'Measurable ROI and organic traffic scaling'
    ],
    color: '#f59e0b'
  },
  {
    id: 'ui-ux-design',
    number: '06',
    title: 'UI/UX Design',
    tagline: 'Balancing Visual Impact with Simplicity and Functionality.',
    description: 'We create user experiences that balance visual impact with simplicity and functionality. Our UI/UX process focuses on understanding your users, designing intuitive journeys, and creating polished interfaces that represent your brand while making every interaction clear, engaging, and effortless across digital platforms.',
    iconName: 'LayoutGrid',
    subServices: [
      'User Research, Personas & Journey Mapping',
      'Interactive Wireframing & High-Fidelity Prototyping',
      'Multi-Platform Design Systems & Component Libraries',
      'Accessibility Standards (WCAG AA Compliance)',
      'Tactile Micro-Interactions & Spatial Polish'
    ],
    technologies: ['Figma', 'Motion', 'Tailwind CSS', 'Storybook', 'Design Tokens', 'Spline 3D'],
    deliverables: [
      'Pixel-perfect, tokenized design systems',
      'Clickable mobile and desktop interactive prototypes',
      'Complete production-ready UI asset libraries'
    ],
    color: '#f43f5e'
  },
  {
    id: 'quality-assurance',
    number: '07',
    title: 'Quality Assurance & Automated Testing',
    tagline: 'Quality Built Into Every Stage of Our Development Process.',
    description: 'Quality is built into every stage of our development process. Our QA team combines manual testing, automated testing, peer reviews, and comprehensive validation to identify issues before they reach users. We ensure every product is reliable, secure, consistent, and ready to perform in real-world environments.',
    iconName: 'ShieldCheck',
    subServices: [
      'Independent QA Verification Outside Dev Pods',
      'Automated End-to-End Mobile Testing (Appium)',
      'Cross-Browser Web Automation (Selenium, Playwright)',
      'Performance, Stress & Concurrency Load Testing',
      'Security Penetration & Code Vulnerability Auditing'
    ],
    technologies: ['Appium', 'Selenium', 'Playwright', 'Jenkins', 'Gradle', 'k6', 'SonarQube'],
    deliverables: [
      'Automated regression testing test suites',
      'Comprehensive code health and test coverage reports',
      'Production-ready reliability and zero-regression certification'
    ],
    color: '#a855f7'
  }
];

export const CORE_PILLARS: CorePillar[] = [
  {
    id: 'innovative-products',
    title: 'Innovative Digital Products',
    tagline: 'Solving real-world challenges and creating lasting business value.',
    description: 'At PureTech, we develop innovative digital products designed to solve real-world challenges and create lasting business value. Our management-ready solutions combine modern technology, intuitive functionality, and sustainable practices to help businesses operate smarter, faster, and more efficiently. From concept to deployment, we focus on creating products that are scalable, reliable, and built for long-term success.',
    iconName: 'Cpu',
    videoUrl: '/videos/fantasy-what-is-an-app.mp4',
    badge: 'FLAGSHIP PLATFORMS'
  },
  {
    id: 'sustainability-innovation',
    title: 'Sustainability Meets Innovation',
    tagline: 'Bridging innovation and sustainability for responsible technology.',
    description: 'We believe technology should not only drive growth but also contribute to a more sustainable future. Our solutions are designed to bridge innovation and sustainability by optimizing processes, reducing inefficiencies, and enabling businesses to make smarter use of their resources. By combining forward-thinking strategies with responsible technology, we help organizations create meaningful impact while staying competitive.',
    iconName: 'Globe',
    videoUrl: '/videos/capabilities-bg.mp4',
    badge: 'GREEN ARCHITECTURE'
  },
  {
    id: 'emerging-technologies',
    title: 'Emerging Technologies',
    tagline: 'Leveraging AI, blockchain, and automation for future-ready solutions.',
    description: 'At PureTech, we stay ahead of technological advancements by leveraging emerging technologies such as artificial intelligence, blockchain, automation, and other next-generation solutions. Our expertise allows us to transform complex ideas into practical digital products that are ready to meet today’s demands while remaining adaptable to tomorrow’s opportunities.',
    iconName: 'Terminal',
    videoUrl: '/videos/fantasy-ai-eliza.mp4',
    badge: 'COGNITIVE AI & NEURAL'
  },
  {
    id: 'user-centered-experiences',
    title: 'User-Centered Experiences',
    tagline: 'Technology is only effective when people can use it effortlessly.',
    description: 'That’s why user experience is at the heart of everything we build. Our specialized UI/UX design approach focuses on creating intuitive, engaging, and visually compelling digital experiences. From the first interaction to everyday use, we ensure every product is designed around the needs of its users.',
    iconName: 'LayoutGrid',
    videoUrl: '/videos/fantasy-mobile-app.mp4',
    badge: '60 FPS FLUID MOTION'
  },
  {
    id: 'quality-built-in',
    title: 'Quality Built Into Every Product',
    tagline: 'Rigorously tested for reliability, security, and seamless functionality.',
    description: 'Quality assurance is an essential part of our development process. We rigorously test every solution to ensure reliability, security, performance, and seamless functionality before it reaches your users. Whether you’re a startup looking to turn an idea into reality or an established enterprise seeking digital transformation, PureTech is your trusted technology partner for building impactful products and achieving technological excellence.',
    iconName: 'ShieldCheck',
    videoUrl: '/videos/fantasy-software-build.mp4',
    badge: 'AUTOMATED QA SUITE'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Consultation',
    subtitle: 'Understanding Goals & Target Audience',
    description: 'We begin by understanding your business goals, project requirements, and target audience. Through detailed discussions, we gather insights that help us define the right strategy and create a roadmap tailored to your vision.',
    highlights: ['Stakeholder alignment', 'Requirement gathering', 'Audience profiling', 'Feasibility roadmap']
  },
  {
    number: '02',
    title: 'Planning & Strategy',
    subtitle: 'Structured Plan, Timelines & Architecture',
    description: 'Once the requirements are finalized, our team prepares a structured project plan, including timelines, technology selection, feature prioritization, and development milestones. This ensures transparency and keeps the project on track from day one.',
    highlights: ['Tech stack selection', 'Sprint milestone roadmaps', 'Feature prioritization', 'Resource architecture']
  },
  {
    number: '03',
    title: 'Design & Development',
    subtitle: 'Intuitive Interfaces & Scalable Code',
    description: 'Our designers create intuitive, user-focused interfaces while our developers transform ideas into scalable, high-performance digital solutions. Every feature is built with clean code, modern technologies, and future growth in mind.',
    highlights: ['Figma design systems', 'Clean modular code', 'Microservices & APIs', 'Modern frontend & mobile']
  },
  {
    number: '04',
    title: 'Testing & Quality Assurance',
    subtitle: 'Comprehensive Pre-Launch Verification',
    description: 'Before deployment, every product undergoes comprehensive testing to ensure security, performance, compatibility, and reliability. Our quality assurance process identifies and resolves issues early, delivering a seamless user experience.',
    highlights: ['Independent QA team', 'Automated regression', 'Security audit & pen testing', 'Real device validation']
  },
  {
    number: '05',
    title: 'Launch & Continuous Support',
    subtitle: 'Deployment, Maintenance & Evolution',
    description: 'After successful deployment, we continue to support your business with maintenance, updates, performance optimization, and feature enhancements. We believe long-term partnerships are built through continuous improvement and reliable support.',
    highlights: ['Zero-downtime cutover', 'Post-launch monitoring', 'Continuous feature updates', 'Long-term support SLA']
  }
];

export const MANIFESTO_PILLARS: ManifestoPillar[] = [
  {
    id: 'top-talent',
    number: '01',
    title: 'Top Talent',
    subtitle: 'Exceptional Engineering Craftsmanship',
    description: 'At Pure Tech, we prioritize recruiting top talent, as we believe in the immense value exceptional programmers bring to our team. Our rigorous selection process ensures that only the most skilled individuals join us, enabling us to deliver high-quality results for our clients.',
    keyPractices: ['Top 2% programmer evaluation', 'Continuous engineering mastery', 'Deep domain specialization']
  },
  {
    id: 'verification',
    number: '02',
    title: 'Verification',
    subtitle: 'Management, Peer Review & Independent QA',
    description: 'The verification process includes management review, peer review, automation, and quality assurance (QA). These practices ensure project oversight, maintain quality standards, promote knowledge sharing, and prevent errors. QA involves comprehensive testing by personnel outside the development team before client review, ensuring robustness and preventing regression errors.',
    keyPractices: ['Four-tier review protocol', 'Automated testing harnesses', 'Testing outside the dev pod']
  },
  {
    id: 'flexibility',
    number: '03',
    title: 'Flexibility',
    subtitle: 'Tailored Methodologies to Project Complexity',
    description: 'We tailor our software development methodologies to suit the unique requirements of each client’s project, recognizing its complexity. Our approach includes adapting coding styles and source management practices accordingly.',
    keyPractices: ['Adaptive Agile/Scrum cycles', 'Bespoke coding style alignment', 'Flexible repository workflows']
  },
  {
    id: 'the-right-balance',
    number: '04',
    title: 'The Right Balance',
    subtitle: 'Strategic Architecture vs. Iterative Velocity',
    description: 'The decision between extensive upfront design and an iterative approach is made at project initiation to ensure alignment with project goals and mitigate the risk of failure.',
    keyPractices: ['Risk mitigation analysis', 'Upfront architecture modeling', 'Iterative sprint delivery']
  }
];

export const WHAT_IF_CONCEPTS: WhatIfConcept[] = [
  {
    id: 'concept-1',
    tag: 'EMERGING AI SOLUTIONS',
    question: 'What if autonomous software agents could orchestrate entire enterprise workflows with zero latency and complete privacy?',
    solutionTitle: 'Synapse Core: Edge Multimodal Business Intelligence',
    hypothesis: 'By combining local edge inference with structured agent tool calling, enterprise teams turn manual operations into automated, self-healing digital pipelines.',
    technicalFeasibility: 'Production-ready on custom quantized transformer runtimes with sub-10ms response times.',
    impactPotential: 'Cuts operational processing bottlenecks by up to 74% across enterprise workflows.',
    category: 'AI & Autonomous Systems',
    prototypeMockup: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '/videos/fantasy-ai-eliza.mp4',
    youtubeId: 'Fg5HYn5bkm8'
  },
  {
    id: 'concept-2',
    tag: 'SUSTAINABILITY & INNOVATION',
    question: 'What if intelligent cloud optimization could cut corporate compute energy and cloud bills by 30% automatically?',
    solutionTitle: 'EcoCompute: Green Infrastructure & Resource Governor',
    hypothesis: 'Dynamic workload shifting and algorithmic resource throttling bridge innovation and sustainability, optimizing processes and reducing carbon waste.',
    technicalFeasibility: 'Tested on multi-cloud Kubernetes clusters across AWS, Azure, and Google Cloud.',
    impactPotential: 'Delivers 32% direct cloud cost reduction while reducing corporate digital carbon footprint.',
    category: 'Sustainable Cloud',
    prototypeMockup: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '/videos/fantasy-software-build.mp4',
    youtubeId: 'ZK-rNEhJIDs'
  },
  {
    id: 'concept-3',
    tag: 'USER-CENTERED COMMERCE',
    question: 'What if digital experiences felt as tactile, responsive, and immediate as physical world-class flagships?',
    solutionTitle: 'Aura Commerce: Instant 60FPS Spatial Storefront',
    hypothesis: 'Pairing edge-rendered React architectures with predictive micro-interactions creates intuitive journeys that turn digital attention into loyal customers.',
    technicalFeasibility: 'Tested with 0.3s First Contentful Paint and 100/100 Core Web Vitals scores.',
    impactPotential: 'Drives verified +47% conversion gains across mobile and desktop interfaces.',
    category: 'Digital Experiences',
    prototypeMockup: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80',
    videoUrl: '/videos/fantasy-web-salesforce.mp4',
    youtubeId: 'J4xNhYeaGkI'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'PureTech Innovations transformed the way we manage our digital operations. Their team delivered a reliable, scalable solution that improved efficiency and streamlined our workflow. Their professionalism, communication, and attention to detail made the entire experience exceptional.',
    author: 'James Allen',
    role: 'CEO',
    company: 'Enterprise Digital Operations',
    location: 'Canada',
    projectType: 'Custom Software & Digital Transformation',
    metric: 'Streamlined Operational Workflow'
  },
  {
    id: 'test-2',
    quote: 'Working with PureTech Innovations was an excellent experience from start to finish. They understood our requirements quickly and turned our ideas into a modern, high-performance solution. The team was responsive, flexible, and genuinely committed to achieving the best results.',
    author: 'Mason Brooks',
    role: 'CEO',
    company: 'Technology Solutions',
    location: 'USA',
    projectType: 'High-Performance Web & Mobile Solution',
    metric: 'Fast Delivery & Modern UX'
  },
  {
    id: 'test-3',
    quote: 'PureTech Innovations helped us bring our vision to life with a solution that was both innovative and easy to use. Their technical expertise, creative thinking, and commitment to quality were evident throughout the project. We were extremely impressed with the final outcome.',
    author: 'Ryan Mitchell',
    role: 'COO',
    company: 'Product & Logistics Network',
    location: 'Canada',
    projectType: 'Innovative & Easy-To-Use Platform',
    metric: 'Technical Excellence & Quality'
  },
  {
    id: 'test-4',
    quote: 'PureTech Innovations provided an outstanding digital solution that significantly improved our business processes. Their team combined strong technical knowledge with a clear understanding of our goals. Their proactive communication and willingness to adapt made the collaboration smooth and highly productive.',
    author: 'Jimmy Franzen',
    role: 'Managing Director',
    company: 'Global Ventures',
    location: 'Dubai',
    projectType: 'Process Automation & Enterprise Solution',
    metric: 'Smooth Collaboration & Productive Output'
  },
  {
    id: 'test-5',
    quote: 'PureTech Innovations delivered a future-ready solution that exceeded our expectations. From design and development to testing and deployment, every stage was handled with professionalism and precision. Their team’s innovation, flexibility, and dedication made them a valuable technology partner.',
    author: 'Ethan Tan',
    role: 'Technology Director',
    company: 'Asia-Pacific Tech Hub',
    location: 'Singapore',
    projectType: 'Future-Ready Cloud & Mobile Architecture',
    metric: 'Precision & Technological Excellence'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Vanguard Bio', category: 'HealthTech' },
  { name: 'AeroLogix', category: 'Logistics' },
  { name: 'Veloce Capital', category: 'Fintech' },
  { name: 'OmniHealth', category: 'Healthcare' },
  { name: 'Nexus Luxury', category: 'E-Commerce' },
  { name: 'Spectra Robotics', category: 'Robotics' },
  { name: 'Kinetix Labs', category: 'Computer Vision' },
  { name: 'Hyperion Cloud', category: 'Enterprise' },
  { name: 'Synapse AI', category: 'Deep Learning' }
];

export const COMPANY_FACTS = {
  name: 'PureTech Innovations',
  headline: 'Transform Ideas Into Success',
  subheadline: 'Technology That Moves Your Business Forward',
  missionStatement: 'We help businesses turn ambitious ideas into powerful digital products through innovative technology, smart strategy, and seamless user experiences.',
  quoteProposition: 'Providing you the perfect solution for your business needs. Let’s work together and unlock doors to success.',
  headquarters: '14800 Hopewell Rd, Alpharetta, GA 30004, USA',
  phone: '+1 (972) 325-9561',
  secondaryPhone: '+1 (347) 783-9296',
  email: 'info@puretechinnovations.com',
  deliveryHubs: [
    { city: 'Alpharetta / Atlanta', timeZone: 'America/New_York', label: 'Global HQ · Eastern Time' },
    { city: 'San Francisco', timeZone: 'America/Los_Angeles', label: 'Innovation Lab · PT' },
    { city: 'London', timeZone: 'Europe/London', label: 'EMEA Hub · GMT' }
  ],
  stats: [
    { value: '140+', label: 'Shipped Products', detail: 'From concept and UI/UX to enterprise scale' },
    { value: '99.8%', label: 'QA Verification Rate', detail: 'Management & peer review + automated testing' },
    { value: '100%', label: 'Ownership & NDA', detail: 'Full IP transfer and strict confidentiality' },
    { value: '5★', label: 'Client Satisfaction', detail: 'Endorsed across US, Canada, Dubai & Singapore' }
  ]
};

