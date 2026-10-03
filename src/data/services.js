// Service catalogue. Each entry drives both the /services grid and its own
// detail page at /services/:slug. Sample content.

export const services = [
  {
    slug: 'trading-technology',
    icon: 'chart',
    name: 'Trading technology',
    short: 'Order management, execution algos and risk — built for the latency and the auditor.',
    summary:
      'We build and run the full trading stack: market-data handlers, order and execution management, strategy engines, pre-trade risk and the back-office reconciliation that keeps the regulator satisfied.',
    lede:
      'A trading platform is judged twice — once by the microsecond and once by the audit. We build for both, and we stay on the pager after go-live.',
    outcomes: [
      'Median order round-trip of 31 ms from colocation, p99 under 80 ms',
      'Pre-trade risk checks that cannot be bypassed, with a tamper-evident log',
      'Exchange certification handled end to end — NSE, BSE, MCX and NSE IFSC',
    ],
    capabilities: [
      {
        title: 'Order & execution management',
        body: 'Multi-leg OMS with smart order routing, basket and algo desks, FIX 4.2/4.4/5.0 and native exchange APIs. Position, margin and payoff computed in-process rather than in a nightly batch.',
      },
      {
        title: 'Market data infrastructure',
        body: 'Tick capture and normalisation across equities, F&O, currency and commodities. Kernel-bypass handlers, lossless archival to columnar storage, and a replay harness so strategies are tested against the exact tape.',
      },
      {
        title: 'Strategy & quant tooling',
        body: 'Backtesting with realistic slippage and impact models, walk-forward validation, and a research-to-production path where the same strategy code runs in both places.',
      },
      {
        title: 'Risk & surveillance',
        body: 'Pre-trade limit engines, kill switches, intraday VaR, and trade surveillance patterns for spoofing, layering and wash trades mapped to SEBI circulars.',
      },
      {
        title: 'Clearing & back office',
        body: 'Contract notes, obligation files, margin reporting, corporate actions and T+1 reconciliation against depository and clearing-corp feeds.',
      },
      {
        title: 'Investor-facing apps',
        body: 'Web and mobile terminals, watchlists, charting, onboarding with eKYC, and the accessibility and resilience work that a retail base demands.',
      },
    ],
    stack: ['C++20', 'Rust', 'Java 21 / LMAX', 'Python', 'kdb+', 'ClickHouse', 'Kafka', 'FIX', 'Solarflare', 'Linux tuning'],
    engagement: [
      { phase: 'Latency & gap audit', detail: 'Two weeks instrumenting the existing path, naming where the milliseconds and the control gaps actually sit.' },
      { phase: 'Reference build', detail: 'A thin vertical slice in production shadow mode — real tape, real risk checks, no client orders yet.' },
      { phase: 'Certification & cutover', detail: 'Exchange conformance, mock trading sessions, parallel run and a rehearsed rollback.' },
      { phase: 'Run & tune', detail: 'Shared on-call with your desk, monthly latency reviews, and capacity planning ahead of expiry weeks.' },
    ],
    faqs: [
      {
        q: 'Do you work on proprietary strategies?',
        a: 'We build the infrastructure and the tooling; the alpha stays yours. Where we are asked to implement a strategy, it is under a narrow licence with source escrow and no reuse rights for us.',
      },
      {
        q: 'Can you take over an existing platform?',
        a: 'Yes — roughly half of this practice is inherited systems. We start with the latency and gap audit so the handover is based on measurements, not on the previous team notes.',
      },
    ],
  },
  {
    slug: 'cybersecurity',
    icon: 'shield',
    name: 'Cybersecurity',
    short: 'Offensive testing, a 24×7 SOC, and the compliance paperwork that follows.',
    summary:
      'Red-team and application testing, managed detection and response from our own SOC, cloud-posture hardening, and audit support for ISO 27001, SOC 2, PCI DSS, RBI and SEBI mandates.',
    lede:
      'We would rather find it than read about it. Our testers break the thing, our SOC watches the thing, and our auditors write the thing down in the form your regulator expects.',
    outcomes: [
      'Mean time to detect of 6 minutes, mean time to contain under 30',
      'CERT-In empanelled audits accepted without rework',
      'No reportable breach across the estates we have run since 2019',
    ],
    capabilities: [
      {
        title: 'Offensive security',
        body: 'Web, mobile, API and thick-client penetration testing; red-team exercises with assumed-breach scenarios; internal and external network testing; and social-engineering campaigns run with HR sign-off.',
      },
      {
        title: 'Managed detection & response',
        body: 'Our Mohali SOC runs 24×7 on your choice of SIEM. Detections are written as code, version controlled and tested against replayed attack traffic rather than left as vendor defaults.',
      },
      {
        title: 'Cloud & Kubernetes posture',
        body: 'Identity and permission-boundary review, network segmentation, secret hygiene, admission control, runtime policy and drift detection across AWS, Azure and GCP.',
      },
      {
        title: 'Application security programme',
        body: 'Threat modelling in design review, SAST and dependency gates in CI, secure-coding clinics for your developers, and a triage queue that engineers actually clear.',
      },
      {
        title: 'Incident response & forensics',
        body: 'Retainer-based IR with a four-hour engagement SLA, host and cloud forensics, ransomware negotiation advisory, and the CERT-In six-hour notification drafted for you.',
      },
      {
        title: 'Compliance & audit',
        body: 'Gap assessment through to certification for ISO 27001:2022, SOC 2, PCI DSS 4.0, RBI cyber-security framework, SEBI CSCRF and the DPDP Act 2023.',
      },
    ],
    stack: ['Wazuh', 'Elastic Security', 'Microsoft Sentinel', 'Suricata', 'Velociraptor', 'Burp Suite', 'Cobalt Strike', 'Semgrep', 'Trivy', 'OPA / Gatekeeper'],
    engagement: [
      { phase: 'Baseline', detail: 'Asset discovery, external exposure scan and a control gap map against the framework you are held to.' },
      { phase: 'Prove it', detail: 'A targeted test or red-team exercise so the risk register is based on what we actually got to, not on severity guesses.' },
      { phase: 'Remediate', detail: 'Fix work sequenced by exploitability, delivered with your engineers rather than thrown over the wall as a PDF.' },
      { phase: 'Watch', detail: 'SOC onboarding, detection coverage mapped to MITRE ATT&CK, quarterly purple-team validation.' },
    ],
    faqs: [
      {
        q: 'Will a test take production down?',
        a: 'Destructive classes are agreed in writing before we start and usually run against a mirrored environment. Production tests are rate-limited, windowed, and we stay on a live bridge with your team throughout.',
      },
      {
        q: 'Do you provide the CERT-In audit certificate?',
        a: 'Yes. We are empanelled, so the report is issued directly by us and is accepted for regulatory filings without a third party re-signing it.',
      },
    ],
  },
  {
    slug: 'artificial-intelligence',
    icon: 'spark',
    name: 'Artificial intelligence',
    short: 'Models that reach production, with evaluation and monitoring attached.',
    summary:
      'Forecasting and risk models, document and speech understanding, computer vision on the line, and retrieval-augmented assistants — each shipped with an evaluation harness and a monitored serving path.',
    lede:
      'Most AI work dies between the notebook and the release. We treat the model as the easy part and spend our effort on data, evaluation, latency and the day it starts drifting.',
    outcomes: [
      '92.4% recall on fraud triage with a 61% drop in analyst review load',
      'Document pipelines holding above 97% field accuracy at 40k pages a day',
      'Every model shipped with a versioned eval suite and drift alerting',
    ],
    capabilities: [
      {
        title: 'Forecasting & risk models',
        body: 'Demand, price, churn, credit and fraud models with calibrated probabilities, honest backtests on out-of-time folds, and reason codes for the cases where somebody will have to justify the decision.',
      },
      {
        title: 'Document & language understanding',
        body: 'Classification, extraction and summarisation across contracts, KYC packets, claims and statements. Layout-aware extraction, confidence thresholds and a human-review queue for the tail.',
      },
      {
        title: 'Retrieval-augmented assistants',
        body: 'Internal copilots grounded in your own corpus, with permission-aware retrieval, citation-backed answers, prompt-injection defences and a transcript trail for review.',
      },
      {
        title: 'Computer vision',
        body: 'Defect detection, counting, PPE and safety compliance, and OCR in difficult conditions — deployed to edge devices where the shop floor has no reliable uplink.',
      },
      {
        title: 'MLOps & evaluation',
        body: 'Feature stores, reproducible training, model registry, shadow and canary rollout, and the drift, bias and cost dashboards that tell you when to retrain.',
      },
      {
        title: 'AI governance',
        body: 'Model cards, data lineage, DPDP-aligned consent handling, human-in-the-loop design and the documentation an internal risk committee will ask for.',
      },
    ],
    stack: ['PyTorch', 'scikit-learn', 'XGBoost', 'Hugging Face', 'vLLM', 'LangGraph', 'MLflow', 'Feast', 'Triton', 'ONNX Runtime'],
    engagement: [
      { phase: 'Feasibility sprint', detail: 'Three weeks on your real data to establish whether the signal exists and what the honest ceiling looks like.' },
      { phase: 'Offline bar', detail: 'An evaluation suite agreed with the business owner — the number the model must beat before anyone talks about shipping.' },
      { phase: 'Shadow deploy', detail: 'The model runs beside the current process, scored against it, with no decision authority yet.' },
      { phase: 'Ship & monitor', detail: 'Staged rollout, drift and cost alerting, and a scheduled retraining path with rollback.' },
    ],
    faqs: [
      {
        q: 'Can our data stay in our own environment?',
        a: 'Yes. We run open-weight models in your VPC or on-premise where data cannot leave. Where a hosted API is the better trade, we say so and scope what it would and would not see.',
      },
      {
        q: 'What if the feasibility sprint says no?',
        a: 'Then it says no, and you have spent three weeks instead of three quarters. We have closed six engagements that way and consider each one a good outcome.',
      },
    ],
  },
  {
    slug: 'data-engineering',
    icon: 'layers',
    name: 'Data engineering',
    short: 'Pipelines, warehouses and contracts that make the numbers agree.',
    summary:
      'Streaming and batch ingestion, dimensional and lakehouse modelling, data quality contracts, and the semantic layer that stops two dashboards from disagreeing about revenue.',
    lede:
      'Nobody asks for a data platform. They ask why the finance number and the ops number are different, and that is the same question.',
    outcomes: [
      'Reporting cut from a 9-hour nightly batch to 4-minute freshness',
      'Quality contracts on 340 critical columns, breakage caught before the dashboard',
      'One definition of revenue, enforced in the semantic layer',
    ],
    capabilities: [
      {
        title: 'Ingestion & CDC',
        body: 'Change data capture from transactional stores, event streams, SFTP drops, partner APIs and the spreadsheet somebody emails on the third of the month.',
      },
      {
        title: 'Lakehouse & warehouse modelling',
        body: 'Medallion layering on Iceberg or Delta, dimensional marts where they help, and partitioning and clustering chosen against your actual query shapes.',
      },
      {
        title: 'Transformation & orchestration',
        body: 'dbt projects with tests and documentation, Airflow or Dagster orchestration, backfill strategies and lineage you can click through during an audit.',
      },
      {
        title: 'Data quality & contracts',
        body: 'Freshness, volume, schema and distribution checks on the columns that matter, with producer-side contracts so breakage fails in CI rather than in the boardroom.',
      },
      {
        title: 'Semantic & BI layer',
        body: 'Metric definitions in one governed place, feeding Power BI, Looker, Metabase or Superset, so the number is the number wherever it is read.',
      },
      {
        title: 'Governance & privacy',
        body: 'Catalogue, classification, column-level access, masking, retention schedules and DPDP-aligned subject-request tooling.',
      },
    ],
    stack: ['Apache Spark', 'Apache Iceberg', 'Kafka / Debezium', 'dbt', 'Dagster', 'Snowflake', 'BigQuery', 'ClickHouse', 'Postgres', 'Great Expectations'],
    engagement: [
      { phase: 'Trace the number', detail: 'We pick a disputed metric and follow it from source to dashboard. It usually explains the whole platform problem.' },
      { phase: 'Thin slice', detail: 'One domain, modelled properly end to end, with tests and a semantic definition — the pattern the rest will copy.' },
      { phase: 'Migrate by domain', detail: 'Domain-by-domain cutover with parallel running and a reconciliation report, never a big-bang switch.' },
      { phase: 'Hand over', detail: 'Runbooks, on-call rotation and enablement so your analysts own the models afterwards.' },
    ],
    faqs: [
      {
        q: 'Do we need to replace our warehouse?',
        a: 'Usually not. Most of the pain is modelling, contracts and orchestration, all of which we fix in place. We recommend a migration only when the cost or capability ceiling is genuinely the blocker.',
      },
      {
        q: 'Who owns it after you leave?',
        a: 'Your team. Enablement is a deliverable, not a gesture — we pair through the last domain and sign off only once your analysts have run a release without us.',
      },
    ],
  },
  {
    slug: 'cloud-platform',
    icon: 'cloud',
    name: 'Cloud & platform',
    short: 'Infrastructure as code, Kubernetes, and a cost line that stops climbing.',
    summary:
      'Landing zones, Kubernetes platforms, CI/CD, observability and FinOps — delivered as reviewable code with guardrails built in rather than bolted on after the audit.',
    lede:
      'A platform should make the safe path the easy path. If your developers are routing around it, we have built the wrong thing.',
    outcomes: [
      'Deploy lead time from 11 days to under 40 minutes',
      '38% cloud spend reduction without touching headroom',
      'Change failure rate under 4% across 90 services',
    ],
    capabilities: [
      {
        title: 'Landing zones',
        body: 'Multi-account structure, network topology, identity federation, logging and guardrails as Terraform modules your team can read and extend.',
      },
      {
        title: 'Kubernetes platform',
        body: 'Cluster build and upgrade paths, GitOps delivery with Argo CD, progressive rollout, autoscaling, service mesh where it earns its complexity.',
      },
      {
        title: 'CI/CD & developer experience',
        body: 'Pipeline templates, ephemeral preview environments, artefact signing and provenance, and a service catalogue so a new service starts with the right defaults.',
      },
      {
        title: 'Observability',
        body: 'OpenTelemetry instrumentation, SLOs with error budgets that drive real decisions, and alerting that pages a human only when a human is needed.',
      },
      {
        title: 'Resilience & DR',
        body: 'Failure-mode review, backup and restore that is actually tested, multi-AZ and multi-region patterns, and quarterly game days.',
      },
      {
        title: 'FinOps',
        body: 'Cost allocation by team and service, commitment planning, rightsizing, storage tiering and a monthly review that keeps the gains from eroding.',
      },
    ],
    stack: ['Terraform', 'Kubernetes', 'Argo CD', 'Helm', 'AWS', 'Azure', 'GCP', 'OpenTelemetry', 'Prometheus', 'Grafana'],
    engagement: [
      { phase: 'Platform review', detail: 'Delivery metrics, reliability history and the cost breakdown, set against where your roadmap is heading.' },
      { phase: 'Golden path', detail: 'One real service taken through the new path end to end, so the pattern is proven before it is mandated.' },
      { phase: 'Roll out', detail: 'Team-by-team migration with office hours, documentation and the old path kept alive until nobody needs it.' },
      { phase: 'Operate or hand over', detail: 'We run it as a managed platform, or train your SRE function and step back. Both are fine.' },
    ],
    faqs: [
      {
        q: 'Is Kubernetes always the answer?',
        a: 'No. For a handful of services, managed container runtimes are cheaper to own and we will say so. We bring Kubernetes when the service count, scaling shape or tenancy model genuinely calls for it.',
      },
      {
        q: 'Can you work inside our existing Terraform?',
        a: 'Yes, and we prefer it. We refactor towards modules and a tested change path rather than starting a parallel estate that nobody reconciles.',
      },
    ],
  },
  {
    slug: 'product-engineering',
    icon: 'code',
    name: 'Product engineering',
    short: 'Full-stack teams that ship the product, not a prototype.',
    summary:
      'Discovery, design and delivery for web, mobile and API products — embedded squads that own a roadmap, carry the pager and leave behind a codebase your team can run.',
    lede:
      'We take products from a whiteboard to something with real users and an on-call rotation. The handover is the point, not an afterthought.',
    outcomes: [
      'First production release inside 10 weeks on a typical engagement',
      'Accessibility to WCAG 2.1 AA as a release gate, not a later project',
      'Documented handover with no single-person knowledge left behind',
    ],
    capabilities: [
      {
        title: 'Discovery & definition',
        body: 'User research, service blueprints, a prioritised slice of scope and an honest estimate range — delivered in weeks, not a quarter of workshops.',
      },
      {
        title: 'Design systems',
        body: 'Tokenised component libraries, responsive layouts, dark mode where it matters and a Figma-to-code path that does not drift after the first sprint.',
      },
      {
        title: 'Web & mobile build',
        body: 'React and Next.js on the front, React Native or native where the hardware demands it, server-rendered where SEO and first paint pay for it.',
      },
      {
        title: 'APIs & integration',
        body: 'REST and GraphQL design, versioning that does not break consumers, idempotency and retry semantics, and integration with the payment, KYC and logistics providers you already use.',
      },
      {
        title: 'Quality engineering',
        body: 'Test pyramids that reflect real risk, contract tests across service boundaries, load testing before the campaign, and release gates that block on the things that matter.',
      },
      {
        title: 'Support & evolution',
        body: 'Shared on-call, SLA-backed support tiers, quarterly roadmap reviews and a dependency-upgrade cadence so the codebase does not rot.',
      },
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'React Native', 'Node.js', 'Go', 'Python / FastAPI', 'Postgres', 'Redis', 'Playwright'],
    engagement: [
      { phase: 'Shape', detail: 'Two to three weeks of discovery ending in a scoped first release and a decision on whether to proceed.' },
      { phase: 'Build in the open', detail: 'Two-week increments, demoed to real stakeholders, deployed to a staging URL from day one.' },
      { phase: 'Launch', detail: 'Load test, security review, accessibility audit, support runbook and a go-live you have rehearsed.' },
      { phase: 'Evolve', detail: 'Continuous delivery against a living roadmap, with capacity set aside for defects and dependency work.' },
    ],
    faqs: [
      {
        q: 'Fixed price or time and materials?',
        a: 'Discovery is fixed price. Delivery is usually capacity-based with a scoped release commitment, because fixed-price delivery tends to be paid for in quality where nobody is looking.',
      },
      {
        q: 'Can you work alongside our in-house team?',
        a: 'Most of our engagements are mixed squads. Shared repository, shared standards, shared retro — we do not run a parallel team behind a contract boundary.',
      },
    ],
  },
];

export const serviceBySlug = (slug) => services.find((s) => s.slug === slug);
