// Case studies. Drives /projects, the home-page feature strip and
// /projects/:slug detail pages. Illustrative sample content.

export const projectCategories = [
  { key: 'all', label: 'All work' },
  { key: 'trading', label: 'Trading' },
  { key: 'security', label: 'Cybersecurity' },
  { key: 'ai', label: 'AI & data' },
  { key: 'platform', label: 'Cloud & product' },
  { key: 'enterprise', label: 'Enterprise & GCC' },
];

export const projects = [
  // ---------------------------------------------------------------------
  // Real engagements, listed first. Written from the supplied project briefs:
  // the delivered scope is factual, and no performance or business-outcome
  // figures are claimed because the briefs do not contain any.
  // ---------------------------------------------------------------------
  {
    slug: 'prism-client-portal-ticketing',
    category: 'trading',
    categoryLabel: 'Trading',
    client: 'Shoonya by Finvasia',
    sector: 'Retail brokerage',
    year: '2025',
    title: 'PRISM Client Portal Ticketing',
    subtitle: 'Full-stack ticketing for reKYC, DDPI and account operations across PRISM 2.0 and 2.1',
    teaser:
      'Automated the client-service requests a broker handles most — reKYC, DDPI activation, reactivation and segment enablement — end to end.',
    featured: true,
    accent: '#C96442',
    metrics: [
      { value: '6', label: 'Automated reKYC states' },
      { value: '5', label: 'Service flows delivered' },
      { value: '4', label: 'Integrations wired' },
    ],
    challenge:
      'Client-service requests at a retail broker are regulatory as much as operational. A reKYC modification has to be validated against the KRA, a DDPI authorisation needs payment and a signature before it can be acted on, and a dormant account cannot be reactivated without the right checks first. Run through manual queues, the status is opaque to the client and the audit trail has to be assembled after the fact.',
    approach:
      'We built the module full-stack across PRISM 2.0 and 2.1 so ticket state is driven by the systems of record rather than by an operator. The CVL KRA webhook moves a reKYC ticket through its states directly, so submitted, under process, validated, auto-approved, auto-declined and user-cancelled all resolve without anyone re-keying an outcome from an email. Payment for DDPI activation was integrated with Razorpay and taken through sandbox and then production, and the e-sign and verification vendors were wired into the flows that legally require them.',
    work: [
      'reKYC ticketing with CVL KRA webhook integration driving status in real time',
      'Six automated reKYC states — submitted, under process, validated, auto-approved, auto-declined, user-cancelled',
      'DDPI activation flow with Razorpay payment, taken through sandbox and production rollout',
      'Trading account reactivation for dormant accounts',
      'Open Demat flow for existing users, including DP ID generation',
      'Segment activation for NSE Commodity and Mutual Funds, gated on KRA validation',
      'Secure PDF upload for verification documents, with e-sign through Digio and Hyperverge',
      'Merge requests and version control managed on the client internal Git environment',
    ],
    stack: ['Full-stack', 'REST APIs', 'Webhooks', 'CVL KRA', 'Razorpay', 'Digio', 'Hyperverge', 'Git'],
    outcome:
      'The module shipped across both PRISM 2.0 and 2.1. reKYC tickets resolve from the KRA response rather than from an operator reading a mailbox, DDPI activation collects payment before the authorisation is raised, and the account operations that previously needed a support conversation are self-service with their documents attached to the ticket.',
    services: ['product-engineering', 'trading-technology', 'quality-engineering'],
  },
  {
    slug: 'health-insurance-mobile-app',
    category: 'platform',
    categoryLabel: 'Cloud & product',
    client: 'Undisclosed insurer',
    sector: 'Health insurance',
    year: '2025',
    title: 'Health Insurance Mobile App',
    subtitle: 'An IRDAI-aligned purchase journey for exploring, comparing and buying health cover',
    teaser:
      'A digital-first insurance app where a half-finished application survives the app being closed.',
    featured: true,
    accent: '#5F7A6B',
    metrics: [
      { value: '2', label: 'Issuance journeys' },
      { value: '5', label: 'Journey stages built' },
      { value: '2', label: 'E-KYC modes' },
    ],
    challenge:
      'Buying health cover on a phone is a long form interrupted by life. A user picks members, adjusts the sum assured, compares plans across providers, enters proposer and nominee details, completes KYC and pays — and any one of those steps can be cut short by a call, a dead battery or a session timeout. Losing the partly filled application at that point loses the sale.',
    approach:
      'The journey was built to survive interruption. State auto-saves locally at each step, so a user returning after the app closes resumes where they stopped instead of starting again. Both straight-through and non-straight-through issuance paths are handled, because a declared pre-existing condition changes what happens after payment. Payment operations are idempotent so a retry on a weak connection cannot charge twice, and the policy dashboard renders from the issued state rather than assuming success. Sensitive fields are masked in the interface, the client was built against the AES-256 backend encryption standard, and the whole thing implemented to the supplied Figma design system.',
    work: [
      'Member selection for adults and children, including pre-existing condition declaration',
      'Sum assured customisation and cross-provider plan comparison',
      'Proposer and nominee capture with E-KYC — Aadhaar and PAN, digital verification and manual upload',
      'Third-party payment gateway integration with idempotent operations to prevent duplicate charges',
      'Policy dashboard rendering active, expired and rejected policies',
      'Local auto-save so a journey resumes after app closure or session timeout',
      'UI masking for PAN and Aadhaar, built against AES-256 backend encryption',
      'Implementation to the supplied Figma design system',
    ],
    stack: ['Mobile', 'E-KYC', 'Payment gateway', 'Offline state persistence', 'Figma design system', 'AES-256'],
    outcome:
      'The app covers the full path from plan exploration to issued policy, with both STP and NSTP outcomes handled and the dashboard reflecting active, expired and rejected states. The local auto-save means an interrupted application is resumed rather than abandoned, and PAN and Aadhaar stay masked throughout the interface.',
    services: ['product-engineering', 'cybersecurity'],
  },
  {
    slug: 'tradingview-ikf-module',
    category: 'trading',
    categoryLabel: 'Trading',
    client: 'Shoonya by Finvasia',
    sector: 'Retail brokerage',
    year: '2025',
    title: 'TradingView & IKF Mobile Module',
    subtitle: 'A plug-and-play native charting module embedded into the PRISM 2.0 mobile apps',
    teaser:
      'Advanced charting and the proprietary IKF module dropped into an existing iOS and Android app without entangling the two.',
    featured: true,
    accent: '#4F6A82',
    metrics: [
      { value: '2', label: 'Native platforms' },
      { value: '2', label: 'Libraries embedded' },
      { value: '1', label: 'Drop-in boundary' },
    ],
    challenge:
      'Charting is the screen traders live on, so it has to be native, fast and current. Bolting a third-party charting library and a proprietary module straight into an existing app usually leaves the three inseparable afterwards. The client needed both embedded into PRISM 2.0 on either platform, built to specific toolchain versions, and structured so the module could be revised without reopening the host app.',
    approach:
      'We built it as a module with an explicit boundary rather than as a feature inside the app. Dynamic market data and user state pass through defined injection points, which is what keeps the module separable from the core application. Live prices arrive over a token-authenticated WebSocket connection and stream straight into the TradingView chart UI. Both platforms were built strictly to the versions the client specified — SwiftUI on Swift 5/6 under Xcode 16.2 for iOS, and Jetpack Compose with Dagger Hilt targeting SDK 34 for Android.',
    work: [
      'Native iOS module in SwiftUI (Swift 5/6, Xcode 16.2)',
      'Native Android module in Jetpack Compose (Android Studio Ladybug, targetSdk 34, Dagger Hilt)',
      'TradingView advanced charting libraries embedded on both platforms',
      'Proprietary IKF module integrated alongside the charting stack',
      'Token-authenticated WebSocket connections streaming live market data into the chart UI',
      'Defined injection points for dynamic market data and user state, keeping the module separate from the core app',
    ],
    stack: ['SwiftUI', 'Swift 5/6', 'Jetpack Compose', 'Dagger Hilt', 'TradingView', 'WebSocket', 'Xcode 16.2'],
    outcome:
      'PRISM 2.0 carries TradingView charting and the IKF module natively on both platforms, fed by an authenticated live data connection. Because the module keeps its own boundary and takes everything through injection points, it can be revised without unpicking the host application.',
    services: ['trading-technology', 'product-engineering'],
  },
  {
    slug: 'sensai-sentiment-fundamentals',
    category: 'ai',
    categoryLabel: 'AI & data',
    client: 'Shoonya by Finvasia',
    sector: 'Retail brokerage',
    year: '2025',
    title: 'SensAI Sentiment & Fundamentals',
    subtitle: 'AI sentiment, technical indicators and company financials on the stock details page',
    teaser:
      'Put fundamentals, multi-year ratios and live sentiment in front of retail investors where they actually decide — the stock page.',
    featured: false,
    accent: '#7A5C8A',
    metrics: [
      { value: '4', label: 'Fundamental domains' },
      { value: '2', label: 'Live feeds integrated' },
      { value: '2', label: 'User contexts synced' },
    ],
    challenge:
      'A retail investor on a broking app gets a price and a chart, then has to leave to find out whether the company behind the ticker is any good. The research exists — technical indicators, financial statements, ratio history, sentiment — but it lives in other products, which is where the user goes instead.',
    approach:
      'We integrated the SensAI module into the stock details page so research sits beside the trade rather than in a separate destination. Fundamentals render dynamically from the APIs — technical indicators, consolidated and standalone P&L, and balance sheets — and the multi-year CMIE ratio arrays were mapped onto the UI so a user reads a trend rather than a single year. Sentiment scores and the linked news feed are pulled live, and the view synchronises with the user watchlists and holdings so comparison starts from what they already follow.',
    work: [
      'Company portfolio and fundamentals APIs rendered dynamically on the stock details page',
      'Technical indicators, consolidated and standalone P&L, and balance sheet mapping',
      'Multi-year CMIE financial ratio arrays (FY 2024, FY 2025) mapped to the frontend',
      'Real-time sentiment scores from the SensAI analysis endpoints',
      'Linked news feed integrated alongside the sentiment score',
      'Synchronisation with active watchlists and portfolio holdings for cross-referencing',
    ],
    stack: ['Mobile', 'REST APIs', 'CMIE data', 'Sentiment analysis', 'Watchlist sync'],
    outcome:
      'Fundamentals, multi-year ratios, technical indicators and AI sentiment now render on the stock details page alongside price, and the data follows the user watchlist and holdings — so comparing two stocks no longer means leaving the app.',
    services: ['artificial-intelligence', 'product-engineering', 'data-engineering'],
  },
  {
    slug: 'velocity-oms',
    category: 'trading',
    categoryLabel: 'Trading',
    client: 'Vertex Broking',
    sector: 'Retail brokerage',
    year: '2024—2025',
    title: 'Velocity OMS',
    subtitle: 'A colocated order management system for a 400,000-client retail broker',
    teaser:
      'Replaced a vendor OMS that fell over on expiry day with an in-house stack running at 31 ms median round-trip.',
    featured: false,
    accent: '#C96442',
    metrics: [
      { value: '31 ms', label: 'Median order round-trip' },
      { value: '1.9 M', label: 'Peak orders per session' },
      { value: '0', label: 'Expiry-day outages since cutover' },
    ],
    challenge:
      'Vertex had outgrown a licensed OMS that was never designed for their order mix. On monthly expiry the platform queued orders behind a single-threaded risk check, and clients saw rejections at exactly the moment they cared most. The vendor roadmap had no answer, the licence renewal was due, and SEBI had just tightened its system-audit expectations.',
    approach:
      'We spent three weeks instrumenting the existing path before proposing anything, which showed that two-thirds of the latency sat in risk and position lookup rather than in the network. The new system keeps positions, margin and limits in a lock-free in-memory structure rebuilt from an event log at session start, so a risk check never touches the database. Market data moved to kernel-bypass handlers writing into a shared ring buffer. We ran the whole thing in shadow mode against live tape for eleven weeks, matching every fill against the incumbent before a single client order was routed through it.',
    work: [
      'Event-sourced core in C++20 with a single-writer ring-buffer design',
      'Pre-trade risk engine with per-client, per-symbol and aggregate limits',
      'FIX 4.4 and native gateways for NSE, BSE and MCX, with conformance certification',
      'Tick capture into ClickHouse with a replay harness for regression testing',
      'Grafana latency boards with per-hop histograms and automated expiry-day capacity reports',
      'SEBI system-audit evidence pack and a tamper-evident risk-decision log',
    ],
    stack: ['C++20', 'Rust', 'ClickHouse', 'Kafka', 'FIX 4.4', 'Solarflare', 'Prometheus', 'Terraform'],
    outcome:
      'Velocity has carried every expiry session since the March 2025 cutover without an order-entry incident. Median round-trip is 31 ms against 210 ms on the old platform, and the broker retired a licence line that had been growing faster than its client base.',
    quote: {
      text: 'They refused to quote until they had measured our system for three weeks. That told us more about how they work than the proposal did.',
      author: 'Head of Technology, Vertex Broking',
    },
    services: ['trading-technology', 'cloud-platform', 'quality-engineering'],
  },
  {
    slug: 'sentinel-soc',
    category: 'security',
    categoryLabel: 'Cybersecurity',
    client: 'Karnavati Bank',
    sector: 'Scheduled commercial bank',
    year: '2023—present',
    title: 'Sentinel SOC',
    subtitle: 'A 24×7 detection and response programme across 11,000 endpoints',
    teaser:
      'Stood up detection-as-code for a bank operating under the RBI cyber-security framework, cutting detection time from hours to minutes.',
    featured: false,
    accent: '#8A6A4F',
    metrics: [
      { value: '6 min', label: 'Mean time to detect' },
      { value: '94%', label: 'ATT&CK technique coverage' },
      { value: '71%', label: 'Fewer false-positive escalations' },
    ],
    challenge:
      'Karnavati had a SIEM, a managed provider and almost no confidence. Alerts arrived in volume and without context, the night shift escalated by severity label rather than by judgement, and an RBI inspection had flagged that detection coverage was undocumented. Nobody could answer the simple question of which attack techniques the bank would actually notice.',
    approach:
      'We treated detections as software. Every rule lives in a repository with a stated hypothesis, the data source it depends on, a test case built from replayed attack traffic, and a named owner. Coverage is mapped to MITRE ATT&CK and published as a living document, so gaps are visible rather than assumed. Our Mohali SOC took over the watch floor in stages — first in parallel, then as the primary — with triage playbooks tied to each detection instead of a generic runbook.',
    work: [
      'Detection-as-code repository with 480 rules under version control and CI testing',
      'Log pipeline normalisation across core banking, AD, EDR, firewalls and ATM switch',
      'Purple-team validation each quarter with findings fed straight back into rules',
      'Automated containment for 14 scenarios, gated on analyst approval',
      'RBI cyber-security framework evidence mapping and board-level reporting pack',
      'Tabletop exercises with the IT, legal, comms and treasury teams',
    ],
    stack: ['Microsoft Sentinel', 'Wazuh', 'Suricata', 'Velociraptor', 'Sigma', 'Python', 'Terraform', 'Atomic Red Team'],
    outcome:
      'Mean time to detect dropped from just over four hours to six minutes, and escalations fell by 71% as context replaced severity labels. The bank cleared its subsequent RBI inspection on cyber resilience with no adverse observation on detection coverage.',
    quote: {
      text: 'The difference is that we now know what we would miss. That list is short, written down and shrinking every quarter.',
      author: 'Chief Information Security Officer, Karnavati Bank',
    },
    services: ['cybersecurity'],
  },
  {
    slug: 'claimsight-ai',
    category: 'ai',
    categoryLabel: 'AI & data',
    client: 'Sahaj Finserv',
    sector: 'Insurance & lending',
    year: '2025',
    title: 'ClaimSight',
    subtitle: 'Document understanding and fraud triage for health-claim processing',
    teaser:
      'A layout-aware extraction and triage pipeline that handles 40,000 pages a day and sends only the genuinely doubtful claims to a human.',
    featured: false,
    accent: '#5F7A6B',
    metrics: [
      { value: '97.3%', label: 'Field-level extraction accuracy' },
      { value: '92.4%', label: 'Fraud-flag recall' },
      { value: '61%', label: 'Reduction in manual review' },
    ],
    challenge:
      'Sahaj processed health claims from a long tail of hospitals, each with its own discharge-summary format, much of it scanned at an angle on a flatbed. Assessors keyed figures by hand, turnaround averaged six days, and the fraud team sampled at random because there was no better way to choose. Regulatory pressure on claim settlement time was rising.',
    approach:
      'Extraction and adjudication were built as separate, separately evaluated stages. The extraction model is layout-aware and returns a confidence per field; anything below threshold routes to a review queue that is designed for speed rather than hidden as an exception path. Triage scores the assembled claim with reason codes, because an assessor declining a claim has to be able to explain why. We ran shadow mode for nine weeks against assessor decisions, and the offline bar was agreed with the claims head before any model work started.',
    work: [
      'Layout-aware extraction fine-tuned on 62,000 annotated pages across 40 hospital formats',
      'Per-field confidence thresholds with a purpose-built human review interface',
      'Gradient-boosted triage model with SHAP reason codes surfaced to assessors',
      'Feature store serving both training and inference from one definition',
      'Drift, bias and cost dashboards with automated retraining triggers',
      'Model cards and DPDP-aligned consent and retention handling',
    ],
    stack: ['PyTorch', 'Hugging Face', 'XGBoost', 'Feast', 'MLflow', 'Triton', 'FastAPI', 'Postgres'],
    outcome:
      'Average turnaround fell from six days to under eleven hours, manual review dropped 61%, and the fraud team moved from random sampling to a ranked queue. Recovered amounts on flagged claims covered the build cost inside the first two quarters.',
    quote: {
      text: 'They spent the first month arguing with us about how to measure success. In hindsight that month is why the thing works.',
      author: 'Head of Claims, Sahaj Finserv',
    },
    services: ['artificial-intelligence', 'data-engineering'],
  },
  {
    slug: 'northline-telemetry',
    category: 'ai',
    categoryLabel: 'AI & data',
    client: 'Northline Logistics',
    sector: 'Freight & logistics',
    year: '2024',
    title: 'Northline Telemetry',
    subtitle: 'Fleet telemetry lakehouse and arrival-time prediction for 2,800 vehicles',
    teaser:
      'Streaming ingestion from vehicle units feeding ETA models that customers can actually plan around.',
    featured: false,
    accent: '#4F6A82',
    metrics: [
      { value: '4 min', label: 'Data freshness, from 9 hours' },
      { value: '±18 min', label: 'ETA error on long haul' },
      { value: '12%', label: 'Drop in idle fuel burn' },
    ],
    challenge:
      'Telemetry from 2,800 trucks landed in a nightly batch, which meant every operational dashboard described yesterday. Customer-facing ETAs were calculated from static route tables and were wrong often enough that the call centre ignored them. Three teams each maintained their own extract, and their numbers disagreed.',
    approach:
      'We moved ingestion to a streaming path and modelled one governed telemetry domain on Iceberg, with quality contracts on the columns that operations and billing both depend on. The ETA model layers live traffic, historical segment speeds by time of day, loading-bay dwell patterns and driver-hours constraints. Crucially, the predicted window is published with its uncertainty, so the call centre can tell a customer how much to trust it.',
    work: [
      'Kafka ingestion from vehicle units with device-clock reconciliation and gap handling',
      'Medallion lakehouse on Iceberg with dbt models and 190 tested columns',
      'Segment-level speed model and a quantile ETA model giving a prediction interval',
      'Operations console with geofence alerting and exception-first triage',
      'One semantic definition of utilisation, trip and fuel feeding Power BI',
      'Edge buffering so a vehicle out of coverage backfills on reconnect',
    ],
    stack: ['Kafka', 'Spark Structured Streaming', 'Apache Iceberg', 'dbt', 'Dagster', 'LightGBM', 'Power BI', 'AWS'],
    outcome:
      'Freshness went from nine hours to four minutes and the three competing extracts were retired. Long-haul ETA error narrowed to ±18 minutes, and idle fuel burn fell 12% once dwell outliers became visible the same day.',
    services: ['data-engineering', 'artificial-intelligence'],
  },
  {
    slug: 'aurelia-quant-desk',
    category: 'trading',
    categoryLabel: 'Trading',
    client: 'Aurelia Capital',
    sector: 'Systematic fund',
    year: '2023—2024',
    title: 'Aurelia Quant Desk',
    subtitle: 'Research-to-production platform for a systematic equity and F&O fund',
    teaser:
      'One codebase for backtest and live trading, so a strategy that passes research runs unchanged in production.',
    featured: false,
    accent: '#7A5C8A',
    metrics: [
      { value: '1 codebase', label: 'Research and live execution' },
      { value: '14 yrs', label: 'Tick history, replayable' },
      { value: '3 days', label: 'Idea to paper trading, from 6 weeks' },
    ],
    challenge:
      'Aurelia researched in pandas and traded through a separate Java execution stack. Every promoted strategy was a manual translation, and the discrepancies only surfaced as unexplained slippage weeks later. Nobody fully trusted a backtest, so position sizing stayed conservative and good ideas sat in the queue.',
    approach:
      'We built one strategy API with two drivers behind it — a replay driver for research and a live driver for production. The same strategy object receives the same event types in both, so there is no translation step to get wrong. Fills in research come from a queue-position model calibrated against the fund own historical fills rather than from an optimistic mid-price assumption, which made backtests less flattering and far more useful.',
    work: [
      'Unified strategy API with replay and live drivers over an identical event interface',
      'Tick store of 14 years of Indian equity and F&O data with corporate-action adjustment',
      'Queue-position fill model calibrated on the fund own execution history',
      'Walk-forward validation harness with multiple-testing correction',
      'Paper-trading environment wired to live data and the production risk engine',
      'Portfolio risk service with intraday VaR, exposure limits and a desk kill switch',
    ],
    stack: ['Python', 'Rust', 'Polars', 'kdb+', 'Redis', 'Docker', 'Kubernetes', 'Grafana'],
    outcome:
      'Time from research idea to paper trading fell from around six weeks to three days. The gap between backtest and live Sharpe narrowed to within the fund stated tolerance, and sizing policy was revised upward once the desk trusted the numbers.',
    quote: {
      text: 'Our backtests got worse and our returns got better. That is exactly the trade we wanted.',
      author: 'Chief Investment Officer, Aurelia Capital',
    },
    services: ['trading-technology', 'artificial-intelligence'],
  },
  {
    slug: 'medivance-zero-trust',
    category: 'security',
    categoryLabel: 'Cybersecurity',
    client: 'Medivance Labs',
    sector: 'Diagnostics',
    year: '2024—2025',
    title: 'Medivance Zero Trust',
    subtitle: 'Segmentation, identity and DPDP readiness across 190 collection centres',
    teaser:
      'A flat network carrying patient data across 190 sites, rebuilt into segmented zones with identity-aware access.',
    featured: false,
    accent: '#8A6A4F',
    metrics: [
      { value: '190', label: 'Sites segmented' },
      { value: '100%', label: 'Privileged access brokered' },
      { value: '4 hrs', label: 'IR engagement SLA' },
    ],
    challenge:
      'Medivance had grown by acquisition, and each acquired lab arrived with its own flat network, its own shared logins and its own analyser software that the vendor insisted required local administrator rights. Patient records moved across that estate with nothing between them, and the DPDP Act 2023 made the arrangement untenable.',
    approach:
      'We started from the data rather than the network diagram, mapping where reports were created, read and retained. Segmentation followed that map: analysers and imaging devices into constrained zones with explicit egress rules, clinical applications behind identity-aware proxying, and administrative access brokered through a session-recorded jump path. Legacy analysers that genuinely could not be patched were isolated and monitored rather than pretended about.',
    work: [
      'Data-flow mapping across 190 sites and 38 clinical applications',
      'Network segmentation into eight zones with documented egress policy',
      'Identity-aware access proxy replacing site-level VPN and shared credentials',
      'Privileged access management with session recording for vendor support',
      'DPDP gap assessment, consent records and subject-request workflow',
      'Incident-response retainer with a four-hour engagement SLA and annual tabletop',
    ],
    stack: ['Palo Alto', 'Cloudflare Access', 'Teleport', 'Wazuh', 'Ansible', 'Azure AD', 'Nessus'],
    outcome:
      'Lateral movement in the annual red-team exercise was contained to the originating zone, against full-estate compromise the year before. Privileged access is now fully brokered and recorded, and the DPDP subject-request workflow has handled 1,400 requests inside the statutory window.',
    services: ['cybersecurity', 'cloud-platform'],
  },
  {
    slug: 'trinetra-commerce',
    category: 'platform',
    categoryLabel: 'Cloud & product',
    client: 'Trinetra Retail',
    sector: 'Omnichannel retail',
    year: '2024',
    title: 'Trinetra Commerce',
    subtitle: 'Replatforming a 1,100-store retailer onto a composable commerce stack',
    teaser:
      'A monolith that could not survive a festive sale, rebuilt into services that scaled through it comfortably.',
    featured: false,
    accent: '#4F6A82',
    metrics: [
      { value: '8.4×', label: 'Peak traffic handled' },
      { value: '0.9 s', label: 'Largest contentful paint' },
      { value: '38%', label: 'Infrastructure cost reduction' },
    ],
    challenge:
      'Trinetra ran a decade-old monolith that the business had stopped asking to change, because every change took a quarter. It had failed during two consecutive festive sales, store inventory and online stock drifted apart during the day, and the mobile site was slow enough to be losing sessions measurably.',
    approach:
      'We did not attempt a rewrite. Catalogue, inventory, cart and checkout were strangled out one at a time behind a routing layer, each with its own contract tests and its own rollback, while the monolith kept serving everything else. Inventory became event-driven so store and online views converge within seconds instead of at the nightly sync. The storefront was rebuilt server-rendered with a performance budget enforced in CI.',
    work: [
      'Strangler-pattern extraction of four domains behind an edge routing layer',
      'Event-driven inventory with store POS integration and reconciliation reporting',
      'Server-rendered Next.js storefront with a CI-enforced performance budget',
      'Checkout with three payment providers, idempotent retries and saga-based order flow',
      'Kubernetes platform with GitOps delivery and load-tested autoscaling',
      'Festive-sale game day rehearsed twice before the season',
    ],
    stack: ['Next.js', 'TypeScript', 'Go', 'Postgres', 'Kafka', 'Redis', 'Kubernetes', 'Argo CD', 'Cloudflare'],
    outcome:
      'The platform carried 8.4× its previous peak through the festive season with no degradation, on 38% less infrastructure spend. Largest contentful paint on mobile came down to 0.9 s, and the business ships catalogue changes weekly instead of quarterly.',
    quote: {
      text: 'The first festive sale where nobody from the board called me at midnight.',
      author: 'Chief Digital Officer, Trinetra Retail',
    },
    services: ['product-engineering', 'cloud-platform', 'quality-engineering'],
  },
  {
    slug: 'gulf-petrochem-vision',
    category: 'ai',
    categoryLabel: 'AI & data',
    client: 'Gulf Petrochem Systems',
    sector: 'Industrial manufacturing',
    year: '2025',
    title: 'Gulf Petrochem Vision',
    subtitle: 'Edge computer vision for safety compliance and valve-leak detection',
    teaser:
      'Vision models running on-site where the uplink is unreliable, flagging PPE breaches and weeping valves in real time.',
    featured: false,
    accent: '#5F7A6B',
    metrics: [
      { value: '340 ms', label: 'End-to-end edge inference' },
      { value: '96.1%', label: 'PPE detection precision' },
      { value: '27', label: 'Early leak detections in six months' },
    ],
    challenge:
      'Safety walkarounds at a petrochemical site were manual, scheduled and therefore predictable. Valve weeping was caught when somebody happened to pass, and PPE compliance was audited by sampling. Sending camera feeds to the cloud was not an option: the site uplink was both metered and intermittent, and the plant safety team would not accept a dependency on it.',
    approach:
      'Everything inference-side runs on-site. Eleven edge nodes handle 94 camera streams locally, publishing events rather than video, with only thumbnails of flagged frames leaving the plant. Thermal and visible-light streams are fused for leak detection, since a weeping valve shows up more reliably in the thermal signature. Alerting was tuned with the plant safety officers over six weeks, because a vision system that cries wolf gets switched off in a fortnight.',
    work: [
      'Eleven edge inference nodes serving 94 camera streams with local buffering',
      'PPE and restricted-zone detection models trained on site-specific footage',
      'Thermal and visible-light fusion for valve-leak and hot-spot detection',
      'Event-only uplink with thumbnail evidence and offline store-and-forward',
      'Alert routing to control-room displays and handheld devices with acknowledgement tracking',
      'Fleet management for model rollout and rollback across edge nodes',
    ],
    stack: ['PyTorch', 'ONNX Runtime', 'NVIDIA Jetson', 'DeepStream', 'MQTT', 'K3s', 'Grafana'],
    outcome:
      'Twenty-seven valve leaks were caught early in the first six months, three of them on lines where a failure would have forced a unit shutdown. PPE compliance moved from sampled to continuous, and the safety team now runs walkarounds against a ranked list instead of a schedule.',
    services: ['artificial-intelligence', 'cloud-platform'],
  },
  {
    slug: 'meridian-engineering-centre',
    category: 'enterprise',
    categoryLabel: 'Enterprise & GCC',
    client: 'Meridian Insurance Group',
    sector: 'Insurance',
    year: '2023—2026',
    title: 'Meridian Engineering Centre',
    subtitle: 'A 58-person captive engineering centre stood up in Mohali and transferred in 30 months',
    teaser:
      'Built, staffed and ran a UK insurer own engineering centre, then handed it over as their legal entity on the date agreed at the start.',
    featured: false,
    accent: '#7A5C8A',
    metrics: [
      { value: '10 wks', label: 'Signing to first productive squad' },
      { value: '58', label: 'Engineers at transfer' },
      { value: '9%', label: 'Annual attrition' },
    ],
    challenge:
      'Meridian had tried offshoring twice through staffing vendors and unwound both. The teams never acquired domain knowledge because the people rotated, decisions still needed someone in London, and the cost saving evaporated into rework. They wanted a centre that behaved like part of the company rather than a supplier, and they wanted the option to own it outright.',
    approach:
      'We started with the operating model rather than the hiring plan, because the previous attempts failed on decision rights and not on headcount. Each squad was given end-to-end ownership of a domain, including its on-call, and the London team gave up the approval steps that had made the offshore teams passive. Hiring ran against Meridian own interview bar with their engineers on every panel, which slowed us down and is the main reason attrition stayed single-digit. The transfer terms, valuation and date were written into the original contract, so the endgame was never a negotiation conducted from a position of dependency.',
    work: [
      'Operating model and decision-rights design agreed before any hiring',
      'Employer-of-record start, converted to a Meridian subsidiary in month 14',
      'Six cross-functional squads hired against the client interview bar',
      'Engineering standards, golden paths and on-call culture installed from day one',
      'Segregated network, identity-aware access and UK data-residency controls for GDPR',
      'Build-operate-transfer executed on the contracted date with leadership continuity',
    ],
    stack: ['Dedicated pods', 'Build-operate-transfer', 'Azure', '.NET', 'React', 'Terraform', 'Playwright'],
    outcome:
      'The centre reached 58 engineers across six squads and transferred to Meridian ownership in month 30, on the date and valuation set at signing. Attrition held at 9% against a sector norm near 20%, and four of the original squad leads are still running those teams under Meridian employment.',
    quote: {
      text: 'The third attempt worked because they argued with us about decision rights before they talked about rates.',
      author: 'Group CTO, Meridian Insurance Group',
    },
    services: ['global-capability-centres', 'quality-engineering', 'product-engineering'],
  },
  {
    slug: 'karnavati-service-platform',
    category: 'enterprise',
    categoryLabel: 'Enterprise & GCC',
    client: 'Karnavati Bank',
    sector: 'Scheduled commercial bank',
    year: '2025—2026',
    title: 'Karnavati Service Platform',
    subtitle: 'ServiceNow and MuleSoft replacing forty internal request inboxes',
    teaser:
      'Consolidated a bank internal service estate onto one workflow platform, with an integration layer that made the CMDB reflect reality.',
    featured: false,
    accent: '#4F6A82',
    metrics: [
      { value: '40 → 1', label: 'Request channels consolidated' },
      { value: '71%', label: 'Requests now self-service' },
      { value: '3.2 days', label: 'Mean fulfilment, from 11' },
    ],
    challenge:
      'Internal requests at Karnavati arrived through roughly forty shared mailboxes, a ticketing tool used by two departments, and a great deal of walking across the floor. Nothing had an SLA anyone could report on, the configuration database had been imported once in 2019 and never reconciled, and branch staff had learned to escalate by phoning whoever they knew. An operational-resilience review had flagged all of it.',
    approach:
      'We treated the integration layer and the CMDB as the actual project and the workflow configuration as the easy part, which inverted the vendor proposal they had been given. System APIs were built in MuleSoft over core banking, HR and identity so the platform read from systems of record rather than keeping its own copy. CMDB population was automated from discovery and reconciled continuously, because a configuration database maintained by hand is wrong within a quarter. We shipped one process end to end — new-joiner access provisioning — and let it run for six weeks before configuring anything else.',
    work: [
      'ServiceNow ITSM and ITOM with a service catalogue designed with branch staff, not for them',
      'MuleSoft system and process APIs over core banking, HR and Active Directory',
      'Automated CMDB discovery with continuous reconciliation and drift reporting',
      'Twenty-two request workflows migrated from mailboxes, in order of volume',
      'Access provisioning and deprovisioning automated against the HR joiner-mover-leaver feed',
      'SLA reporting and an operational-resilience evidence pack for the regulator',
    ],
    stack: ['ServiceNow', 'MuleSoft', 'Active Directory', 'Azure', 'Terraform', 'Power BI'],
    outcome:
      'Forty request channels became one catalogue, 71% of requests are now self-service, and mean fulfilment fell from eleven days to 3.2. Deprovisioning is automatic on the leaver feed, which closed the orphaned-account finding that the resilience review had raised twice.',
    services: ['enterprise-platforms', 'cloud-platform', 'cybersecurity'],
  },
];

export const projectBySlug = (slug) => projects.find((p) => p.slug === slug);
export const featuredProjects = projects.filter((p) => p.featured);
