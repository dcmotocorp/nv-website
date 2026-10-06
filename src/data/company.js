// Company narrative content: values, history, people, industries, roles.
// Illustrative sample content for the static build.

export const values = [
  {
    icon: 'ruler',
    title: 'Measure before you quote',
    image: 'img/values/measure.jpg',
    body: 'We instrument the existing system before proposing a new one. Half our engagements change shape after that first fortnight, and the client is better off for it.',
  },
  {
    icon: 'shield',
    title: 'Security is not a phase',
    image: 'img/values/security.jpg',
    body: 'Threat modelling sits in design review and dependency gates sit in CI. Nobody on our teams gets to treat security as somebody else problem at the end.',
  },
  {
    icon: 'handover',
    title: 'Built to be handed over',
    image: 'img/values/handover.jpg',
    body: 'Documentation, runbooks and pairing are deliverables. If your team cannot run it without us, we have not finished, whatever the contract says.',
  },
  {
    icon: 'speak',
    title: 'Say the inconvenient thing',
    image: 'img/values/speak.jpg',
    body: 'We have told clients their project should not proceed, their vendor was right and our own estimate was wrong. It costs us work occasionally and earns us the next three engagements.',
  },
];

export const timeline = [
  {
    year: '2017',
    title: 'Founded in Mohali',
    body: 'Navdeep Sharma starts NV Infotech with four engineers and a single brokerage client, building reconciliation tooling nobody else wanted to touch.',
  },
  {
    year: '2018',
    title: 'First full trading stack',
    body: 'The reconciliation work turns into an order management engagement. Exchange certification on NSE and BSE is completed in-house for the first time.',
  },
  {
    year: '2019',
    title: 'Security practice opens',
    body: 'A penetration-testing team is hired after one client asks us to test the system we had just built. The SOC follows eighteen months later.',
  },
  {
    year: '2021',
    title: 'ISO 27001 and the Mumbai desk',
    body: 'Certification lands alongside an office next to the colocation facility, so latency work stops happening over a VPN.',
  },
  {
    year: '2022',
    title: 'Data and AI practice',
    body: 'The machine-learning work that had been scattered across project teams is consolidated, with evaluation and MLOps as first-class deliverables.',
  },
  {
    year: '2023',
    title: 'CERT-In empanelment',
    body: 'Audit reports become directly filable by clients. The SOC moves to round-the-clock staffing across three shifts.',
  },
  {
    year: '2024',
    title: 'Gulf delivery unit',
    body: 'A Dubai office opens to serve manufacturing and energy clients in the region, with onsite industrial vision work as its first mandate.',
  },
  {
    year: '2026',
    title: 'Where we are now',
    body: '140 people across three offices, 40-plus managed estates, and a trading stack carrying nearly two million orders on a peak session.',
  },
];

export const leadership = [
  {
    name: 'Navdeep Sharma',
    initials: 'NS',
    role: 'Founder & Chief Executive',
    focus: 'Trading systems, client strategy',
    bio: 'Spent nine years building exchange-facing systems before starting NV Infotech in 2017. Still reviews the architecture on every trading engagement and sits in the first client conversation personally.',
  },
  {
    name: 'Ritika Menon',
    initials: 'RM',
    role: 'Chief Technology Officer',
    focus: 'Platform, delivery standards',
    bio: 'Owns engineering standards across the firm — the golden paths, the review bar and the on-call culture. Came from a decade of platform work at scale in payments.',
  },
  {
    name: 'Arjun Kalra',
    initials: 'AK',
    role: 'Head of Cybersecurity',
    focus: 'Offensive testing, SOC',
    bio: 'Built the security practice from a two-person testing team to a 38-person function with a round-the-clock watch floor. Leads the quarterly purple-team programme himself.',
  },
  {
    name: 'Dr Shalini Rao',
    initials: 'SR',
    role: 'Head of AI & Data',
    focus: 'Modelling, evaluation, governance',
    bio: 'Insists that every model ships with the evaluation suite that justified it. Published on calibration in credit-risk models and teaches part-time at a Chandigarh institute.',
  },
  {
    name: 'Faisal Rahman',
    initials: 'FR',
    role: 'Director, Gulf Delivery',
    focus: 'Industrial & energy clients',
    bio: 'Runs the Dubai unit and its industrial vision and OT-security work. Spent most of his career on plant-floor systems, which shows in how he scopes.',
  },
  {
    name: 'Priya Deshmukh',
    initials: 'PD',
    role: 'Head of Client Delivery',
    focus: 'Programme governance',
    bio: 'The person who tells a client when a date is not going to hold, early enough for it to matter. Runs delivery assurance across every active engagement.',
  },
];

export const industries = [
  {
    icon: 'chart',
    name: 'Capital markets',
    image: 'img/industries/capital-markets.jpg',
    body: 'Brokers, systematic funds and market-infrastructure firms. Order management, execution, surveillance and the SEBI system-audit evidence that goes with them.',
    points: ['Exchange certification on NSE, BSE, MCX and NSE IFSC', 'SEBI CSCRF and system-audit readiness', 'Colocation and latency engineering'],
  },
  {
    icon: 'bank',
    name: 'Banking & lending',
    image: 'img/industries/banking-lending.jpg',
    body: 'Scheduled banks, NBFCs and fintechs. Detection and response, fraud models, core-adjacent integration and RBI framework compliance.',
    points: ['RBI cyber-security framework mapping', 'Fraud and credit-risk modelling', 'CERT-In empanelled audit reports'],
  },
  {
    icon: 'shield',
    name: 'Insurance',
    image: 'img/industries/insurance.jpg',
    body: 'Claims automation, document understanding, fraud triage and the governance paperwork that lets an automated decision stand up to scrutiny.',
    points: ['Claims document extraction at volume', 'Explainable triage with reason codes', 'IRDAI-aligned audit trails'],
  },
  {
    icon: 'factory',
    name: 'Manufacturing & energy',
    image: 'img/industries/manufacturing-energy.jpg',
    body: 'Edge computer vision, OT network segmentation, predictive maintenance and the plant-floor realities of intermittent connectivity.',
    points: ['On-site inference where uplink is unreliable', 'IEC 62443-informed OT segmentation', 'Condition monitoring and maintenance models'],
  },
  {
    icon: 'truck',
    name: 'Logistics & mobility',
    image: 'img/industries/logistics-mobility.jpg',
    body: 'Telemetry platforms, routing and arrival prediction, control-room tooling and the reconciliation that keeps billing honest.',
    points: ['Streaming telemetry at fleet scale', 'Quantile ETA models with stated uncertainty', 'Exception-first operations consoles'],
  },
  {
    icon: 'health',
    name: 'Healthcare & diagnostics',
    image: 'img/industries/healthcare-diagnostics.jpg',
    body: 'Clinical system integration, consent-gated record access, DPDP readiness and segmentation across distributed collection networks.',
    points: ['DPDP Act 2023 gap work and subject requests', 'Consent-gated access with full audit trail', 'Legacy analyser isolation and monitoring'],
  },
];

export const testimonials = [
  {
    text: 'They refused to quote until they had measured our system for three weeks. That told us more about how they work than the proposal did.',
    author: 'Head of Technology',
    company: 'Vertex Broking',
    project: 'velocity-oms',
  },
  {
    text: 'The difference is that we now know what we would miss. That list is short, written down and shrinking every quarter.',
    author: 'Chief Information Security Officer',
    company: 'Karnavati Bank',
    project: 'sentinel-soc',
  },
  {
    text: 'They spent the first month arguing with us about how to measure success. In hindsight that month is why the thing works.',
    author: 'Head of Claims',
    company: 'Sahaj Finserv',
    project: 'claimsight-ai',
  },
  {
    text: 'Our backtests got worse and our returns got better. That is exactly the trade we wanted.',
    author: 'Chief Investment Officer',
    company: 'Aurelia Capital',
    project: 'aurelia-quant-desk',
  },
];

export const process = [
  {
    step: '01',
    title: 'Listen, then measure',
    body: 'A short paid discovery where we instrument what exists and talk to the people who use it. The output is a scoped first release and an honest estimate range.',
  },
  {
    step: '02',
    title: 'Prove the risky part first',
    body: 'Whatever could sink the project — the latency budget, the model ceiling, the integration nobody has documented — gets built first, as a thin vertical slice.',
  },
  {
    step: '03',
    title: 'Ship in increments',
    body: 'Two-week cycles, demoed to real stakeholders, deployed to a live environment from the first week. No big reveal at the end.',
  },
  {
    step: '04',
    title: 'Run it together',
    body: 'Shared on-call through stabilisation, with SLOs, runbooks and dashboards in place before we reduce our presence.',
  },
  {
    step: '05',
    title: 'Hand over properly',
    body: 'Your engineers run a release without us before we sign off. Documentation, architecture decision records and enablement sessions come as standard.',
  },
];

export const openings = [
  {
    title: 'Senior C++ Engineer, Trading Systems',
    location: 'Mumbai or Mohali',
    type: 'Full time',
    team: 'Trading technology',
    about: 'Low-latency order path work on systems carrying real money. You will own a component end to end, including its latency budget and its pager.',
    looking: ['5+ years of modern C++ in a latency-sensitive context', 'Comfortable with lock-free structures and the Linux performance toolchain', 'Exchange protocol experience welcome but not required'],
  },
  {
    title: 'Security Analyst, SOC (Night Shift)',
    location: 'Mohali',
    type: 'Full time',
    team: 'Cybersecurity',
    about: 'Triage and respond on the watch floor, and write the detection that stops the next one. Analysts here author rules; they do not just close tickets.',
    looking: ['2+ years in a SOC or IR role', 'Scripting ability in Python or PowerShell', 'Familiarity with MITRE ATT&CK and at least one SIEM'],
  },
  {
    title: 'Machine Learning Engineer',
    location: 'Mohali or remote (India)',
    type: 'Full time',
    team: 'AI & data',
    about: 'Take models from a feasibility sprint into a monitored production path. Evaluation design is a core part of the job, not an afterthought.',
    looking: ['3+ years shipping models to production', 'Strong Python, PyTorch and data-pipeline fundamentals', 'Opinions about calibration and evaluation we can argue with'],
  },
  {
    title: 'Penetration Tester',
    location: 'Mohali',
    type: 'Full time',
    team: 'Cybersecurity',
    about: 'Web, API, mobile and internal network testing across banking, broking and healthcare clients, with time budgeted for research and tooling.',
    looking: ['Demonstrable testing experience or strong CTF and disclosure record', 'Able to write a report an engineer will act on', 'OSCP, CRTP or equivalent is a plus'],
  },
  {
    title: 'Senior Platform Engineer',
    location: 'Mohali or remote (India)',
    type: 'Full time',
    team: 'Cloud & platform',
    about: 'Build the golden paths — Terraform modules, Kubernetes platform, CI templates — that other teams actually choose to use.',
    looking: ['4+ years with Terraform and Kubernetes in production', 'GitOps and progressive delivery experience', 'A bias towards making the safe path the easy path'],
  },
  {
    title: 'Product Designer',
    location: 'Mohali or remote (India)',
    type: 'Full time',
    team: 'Product engineering',
    about: 'Design dense, data-heavy interfaces for trading desks, control rooms and claims teams — where clarity matters more than decoration.',
    looking: ['Portfolio with complex, information-dense product work', 'Comfortable building and maintaining a design system', 'WCAG 2.1 AA as a working habit'],
  },
];

export const perks = [
  { title: 'Four-day learning budget', body: 'Four paid days a quarter and a ₹80,000 annual budget for courses, conferences and certifications.' },
  { title: 'Real on-call compensation', body: 'On-call is paid, rotated fairly and capped. If a rotation is burning people, we change the system rather than the roster.' },
  { title: 'Research Fridays', body: 'Every other Friday afternoon is yours — tooling, a paper, a proof of concept. Several of our internal products started there.' },
  { title: 'Hybrid by default', body: 'Two days in office for most roles, fully remote for some. Trading and SOC work has site requirements we are upfront about.' },
  { title: 'Health cover for the family', body: 'Cover for partner, children and parents, with an annual check-up and a counselling allowance.' },
  { title: 'Promotion on a published ladder', body: 'Levels, expectations and salary bands are written down and reviewed twice a year, with no separate negotiation track.' },
];
