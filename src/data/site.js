// Single source of truth for company facts, navigation and contact details.
// All figures here are illustrative sample content for the static build.

export const site = {
  name: 'NV Infotech',
  legalName: 'NV Infotech Solutions Pvt. Ltd.',
  tagline: 'Trading systems, cyber defence and applied AI',
  promise:
    'We build the systems that move money, guard it, and make sense of it — low-latency trading platforms, defensive security programmes and production AI.',
  founded: 2017,
  founder: {
    name: 'Navdeep Sharma',
    role: 'Founder & Chief Executive',
    initials: 'NS',
  },
  contact: {
    email: 'hello@nvinfotech.in',
    salesEmail: 'newbusiness@nvinfotech.in',
    securityEmail: 'soc@nvinfotech.in',
    careersEmail: 'careers@nvinfotech.in',
    phone: '+91 172 450 2217',
    phoneHref: '+911724502217',
    soc: '+91 172 450 2200',
    socHref: '+911724502200',
  },
  offices: [
    {
      city: 'Mohali',
      label: 'Head office & engineering',
      lines: ['Tower B, Quark Atrium, Phase 8B', 'Industrial Area, Mohali 160059', 'Punjab, India'],
    },
    {
      city: 'Mumbai',
      label: 'Trading desk & colocation',
      lines: ['Level 9, Nirlon Knowledge Park', 'Goregaon East, Mumbai 400063', 'Maharashtra, India'],
    },
    {
      city: 'Dubai',
      label: 'Gulf delivery unit',
      lines: ['Office 1406, One Central', 'Trade Centre District, Dubai', 'United Arab Emirates'],
    },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/nv-infotech' },
    { label: 'GitHub', href: 'https://github.com/nv-infotech' },
    { label: 'X', href: 'https://x.com/nvinfotech' },
  ],
  certifications: [
    'ISO/IEC 27001:2022',
    'SOC 2 Type II',
    'CERT-In empanelled auditor',
    'PCI DSS 4.0 QSA partner',
  ],
};

export const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Industries', to: '/industries' },
  { label: 'About', to: '/about' },
  { label: 'Insights', to: '/insights' },
  { label: 'Careers', to: '/careers' },
];

export const footerColumns = [
  {
    heading: 'Services',
    links: [
      { label: 'Trading technology', to: '/services/trading-technology' },
      { label: 'Cybersecurity', to: '/services/cybersecurity' },
      { label: 'Artificial intelligence', to: '/services/artificial-intelligence' },
      { label: 'Data engineering', to: '/services/data-engineering' },
      { label: 'Cloud & platform', to: '/services/cloud-platform' },
      { label: 'Product engineering', to: '/services/product-engineering' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About us', to: '/about' },
      { label: 'Industries', to: '/industries' },
      { label: 'Case studies', to: '/projects' },
      { label: 'Insights', to: '/insights' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Client access',
    links: [
      { label: 'Client portal', to: '/login' },
      { label: 'SOC escalation', to: '/contact' },
      { label: 'Status page', to: '/contact' },
      { label: 'Report a vulnerability', to: '/contact' },
    ],
  },
];

export const stats = [
  { value: '9 yrs', label: 'Building regulated-market software', note: 'Independent since 2017' },
  { value: '140+', label: 'Engineers, analysts and SOC staff', note: 'Across Mohali, Mumbai, Dubai' },
  { value: '31 ms', label: 'Median order round-trip on our OMS', note: 'NSE colocation, FY25 average' },
  { value: '0', label: 'Reportable client breaches to date', note: 'Across 40+ managed estates' },
];

export const clients = [
  'Aurelia Capital',
  'Karnavati Bank',
  'Vertex Broking',
  'Northline Logistics',
  'Sahaj Finserv',
  'Medivance Labs',
  'Gulf Petrochem Systems',
  'Trinetra Retail',
];
