import service1 from '../assets/service1.webp';
import service2 from '../assets/service2.avif';
import service3 from '../assets/service3.webp';
import project1 from '../assets/project1.webp';
import project2 from '../assets/project2.webp';
import project3 from '../assets/project3.avif';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.avif';
import profile3 from '../assets/profile3.jpg';
import profile4 from '../assets/profile4.avif';
import profile5 from '../assets/profile5.avif';
import profile6 from '../assets/profile6.avif';
import testimonial1 from '../assets/testimonial1.jpg';
import testimonial2 from '../assets/testimonial2.jpg';
import testimonial3 from '../assets/testimonial3.jpg';
// import testimonial4 from '../assets/testimonial4.jpg';

export const LINKS = [
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Projects', id: 'projects' },
  { name: 'Pricing', id: 'pricing' },
  { name: 'Team', id: 'team' },
  { name: 'Reviews', id: 'reviews' },
  { name: 'FAQ', id: 'faq' },
  { name: 'Contact', id: 'contact' },
];

export const ABOUT = {
  profileImages: [
    {
      src: profile1,
      alt: 'Creative Team',
      delay: 0.1,
    },
    {
      src: profile3,
      alt: 'Marketing Strategy',
      delay: 0.2,
    },
    {
      src: profile2,
      alt: 'Digital Campaign',
      delay: 0.3,
    },
  ],
  aboutUsText:
    'We are pioneers in artificial intelligence solutions, dedicated to helping businesses harness the power of AI to achieve their goals and stay ahead in the digital age Our team of experts combines deep technical knowledge with business acumen to deliver tailored AI solutions that drive real results for our clients.',
};

export const SERVICES = [
  {
    id: 1,
    title: 'AI Marketing',
    content: 'Harness AI-driven strategies to elevate your brand impact.',
    description:
      'Our AI Marketing service combines machine learning and predictive analytics to deliver personalized, data-driven marketing solutions, ensuring your brand reaches the right audience at the perfect time.',
    imgSrc: service1,
  },
  {
    id: 2,
    title: 'AI Campaigns',
    content: 'Launch smarter campaigns powered by intelligent automation.',
    description:
      'AI Campaigns leverage automation and deep data insights to design and execute marketing initiatives that maximize engagement, conversion rates, and overall business growth, all with minimal human intervention.',
    imgSrc: service2,
  },
  {
    id: 3,
    title: 'AI Consulting',
    content: 'Strategic guidance to transform your business with AI.',
    description:
      'Our AI Consulting service provides expert analysis and tailored AI strategies, helping businesses integrate advanced technologies to optimize operations, enhance decision-making, and unlock new growth opportunities.',
    imgSrc: service3,
  },
];

export const PROJECTS = [
  {
    year: '2024',
    title: 'NeuroLink AI',
    description: 'Revolutionizing healthcare with AI diagnostics.',
    details:
      'NeuroLink partnered with us to integrate AI-driven diagnostic systems into their healthcare platform. Through advanced machine learning models, we improved diagnostic accuracy, reduced analysis time, and enhanced patient outcomes across multiple departments.',
    imageUrl: project1,
    figures: {
      investment: '$2.5M',
      duration: '14 months',
      outcome: '95% diagnostic accuracy achieved',
    },
  },
  {
    year: '2024',
    title: 'RetailBoost',
    description: 'Boosting sales through AI-driven personalization.',
    details:
      'RetailBoost sought our expertise to transform their customer experience. Using AI recommendation engines and behavior analysis, we helped personalize customer journeys, resulting in a major uplift in sales and customer retention.',
    imageUrl: project2,
    figures: {
      investment: '$1.8M',
      duration: '10 months',
      outcome: '180% increase in sales conversions',
    },
  },
  {
    year: '2024',
    title: 'AutoSense AI',
    description: 'Enhancing automotive safety with predictive AI.',
    details:
      'AutoSense aimed to make their vehicles smarter and safer. We developed predictive AI algorithms that improved real-time decision-making for driver-assistance systems, drastically reducing the risk of road incidents.',
    imageUrl: project3,
    figures: {
      investment: '$1.2M',
      duration: '8 months',
      outcome: '40% reduction in accident rates',
    },
  },
];

export const PACKAGES = [
  {
    name: 'Premium',
    price: '$25K',
    description:
      'This premium package offers comprehensive advertising solutions for large-scale campaigns.',
    services: [
      'Brand strategy development',
      'Comprehensive market analysis',
      'Creative campaign design',
      'Multi-channel media planning',
      '24/7 campaign management',
    ],
  },
  {
    name: 'Standard',
    price: '$15K',
    description:
      'This package includes effective market research and strategic campaign development.',
    services: [
      'Brand strategy development',
      'Market research and analysis',
      'Creative campaign design',
      'Multi-channel media planning',
      'Weekly campaign updates',
    ],
  },
  {
    name: 'Basic',
    price: '$10K',
    description:
      'This package offers essential advertising solutions for startups and small businesses.',
    services: [
      'Brand strategy development',
      'Basic market analysis',
      'Creative campaign design',
      'Social media planning',
      'Monthly campaign reviews',
    ],
  },
];

export const TEAM_MEMBERS = [
  {
    name: 'Sophia Allen',
    title: 'Chief AI Scientist',
    image: profile1,
  },
  {
    name: 'Liam Patel',
    title: 'Machine Learning Engineer',
    image: profile2,
  },
  {
    name: 'Olivia Zhang',
    title: 'Data Scientist',
    image: profile3,
  },
  {
    name: 'Ethan Roberts',
    title: 'AI Solutions Architect',
    image: profile4,
  },
  {
    name: 'Ava Kim',
    title: 'NLP Specialist',
    image: profile5,
  },
  {
    name: 'Noah Smith',
    title: 'AI Product Manager',
    image: profile6,
  },
];

export const TESTIMONIALS = [
  {
    text: 'Partnering with AI Solutions revolutionized how we approach technology. Their AI expertise is truly game-changing.',
    author: 'Sarah Johnson',
    title: 'CEO, BrightFuture',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-800',
    image: testimonial1,
  },
  {
    text: 'AI Solutions delivered innovative AI models that have greatly optimized our operations. Highly recommend their team!',
    author: 'David Williams',
    title: 'CTO, TechSavvy',
    bgColor: 'bg-green-100',
    textColor: 'text-green-800',
    image: testimonial2,
  },
  {
    text: 'From predictive analytics to automation, AI Solutions helped us unlock new levels of efficiency and growth.',
    author: 'Emily Davis',
    title: 'Head of Innovation, FinancePro',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-800',
    image: testimonial3,
  },
];

export const FAQS = [
  {
    question: 'What services does AI Solutions offer?',
    answer:
      'AI Solutions offers a range of services including AI marketing, intelligent campaign management, AI consulting, and more. We help businesses leverage AI to drive innovation and growth.',
  },
  {
    question: 'How can AI Solutions help my business grow?',
    answer:
      'AI Solutions specializes in building custom AI strategies tailored to your business goals. From automating workflows to enhancing customer insights, we empower your business to achieve better efficiency and scalability.',
  },
  {
    question: 'Does AI Solutions offer AI consulting?',
    answer:
      'Yes, our team provides expert AI consulting services. We assess your current operations and develop a strategic roadmap for integrating AI technologies effectively into your business model.',
  },
  {
    question: 'How does AI Solutions measure project success?',
    answer:
      'We use advanced analytics, key performance indicators (KPIs), and ROI tracking tools to measure the success of your AI projects, providing transparent reports and actionable insights.',
  },
  {
    question: 'What is the process for getting started with AI Solutions?',
    answer:
      "Starting with AI Solutions is simple. Contact us to schedule a consultation where we'll discuss your needs, propose tailored AI solutions, and set a clear roadmap for implementation.",
  },
  {
    question:
      'Is customer support available for ongoing AI solutions and troubleshooting?',
    answer:
      'Absolutely. AI Solutions offers dedicated customer support to help with implementation, troubleshooting, and optimization of your AI systems, ensuring smooth and effective operations.',
  },
];

export const FAQ_DESCRIPTION =
  'Explore quick answers to common questions about our AI services, processes, and support. Need more details? Reach out to our team for personalized guidance and assistance.';
