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
        title: 'AI agents & workflow automation',
        body: 'Tool-using agents scoped to a named business process, with permission boundaries, a human approval step on anything consequential, and a transcript of every action taken.',
      },
      {
        title: 'AI pods',
        body: 'A standing cross-functional squad — ML engineers, a data engineer and an evaluation lead — embedded against your roadmap, for organisations with more AI work than one project.',
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
        title: 'Data labelling & enrichment',
        body: 'Annotation for training sets — text, document, image and audio — run by a trained in-house team with written guidelines, inter-annotator agreement measured, and a gold set to audit against. Plus entity resolution and third-party enrichment where the gap is coverage rather than labels.',
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
        title: 'Digital commerce',
        body: 'Storefronts, checkout and order management on composable or packaged platforms, with payment, tax and logistics integration and a performance budget enforced before the festive peak rather than after it.',
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
  {
    slug: 'quality-engineering',
    icon: 'flask',
    name: 'Quality engineering',
    short: 'Test automation, performance and release gates that catch it before your customers do.',
    summary:
      'Test strategy and automation across web, mobile and API, performance and load engineering, accessibility audits, and release gates that make a green pipeline mean something.',
    lede:
      'A test suite nobody trusts gets skipped under deadline pressure, which is exactly when it was needed. We build suites people believe.',
    outcomes: [
      'Regression cycles cut from five days to under ninety minutes',
      'Flake rate held below 1%, because a flaky suite is an ignored suite',
      'WCAG 2.1 AA verified as a release gate rather than a later project',
    ],
    capabilities: [
      {
        title: 'Test strategy & architecture',
        body: 'A test pyramid shaped by where your risk actually sits rather than by a coverage target. We write down what each layer is responsible for, so the same bug is not chased at three levels.',
      },
      {
        title: 'AI-powered test automation',
        body: 'Model-assisted test generation from requirements and production traces, self-healing selectors for brittle UI locators, and failure triage that clusters a run by probable cause instead of listing 200 reds.',
      },
      {
        title: 'API & contract testing',
        body: 'Consumer-driven contracts across service boundaries so an upstream change breaks in CI rather than in production, with schema and backwards-compatibility checks on every merge.',
      },
      {
        title: 'Performance & load engineering',
        body: 'Load models built from real traffic shapes, soak and spike tests before the campaign or the expiry session, and profiling that names the bottleneck rather than reporting that the system is slow.',
      },
      {
        title: 'Accessibility & compliance testing',
        body: 'Automated sweeps in CI plus manual screen-reader and keyboard passes, because the automated tools catch roughly a third of real WCAG failures and the rest need a person.',
      },
      {
        title: 'Test data & environments',
        body: 'Synthetic and masked test data so production records never reach staging, ephemeral environments per pull request, and seeded fixtures that make a failure reproducible.',
      },
    ],
    stack: ['Playwright', 'Cypress', 'Appium', 'REST Assured', 'Pact', 'k6', 'JMeter', 'axe-core', 'Allure', 'GitHub Actions'],
    engagement: [
      { phase: 'Quality audit', detail: 'Two weeks on your current suite: what it covers, what it misses, how long it takes and how often it lies.' },
      { phase: 'Stabilise', detail: 'Kill the flake first. A suite that cries wolf cannot be built on, so this comes before any new coverage.' },
      { phase: 'Automate the risk', detail: 'Coverage added in order of what would hurt most if it broke, not in order of what is easiest to automate.' },
      { phase: 'Gate & hand over', detail: 'Wire the suite into release gates, train your engineers to own it, and leave the triage playbook behind.' },
    ],
    faqs: [
      {
        q: 'Can you work with the test suite we already have?',
        a: 'Usually yes, and we prefer it. Rewriting a suite throws away encoded knowledge about edge cases. We stabilise and restructure in place, and propose a rewrite only when the framework itself is the blocker.',
      },
      {
        q: 'Does AI-generated test code actually hold up?',
        a: 'For scaffolding, selector repair and triage clustering, genuinely yes. For deciding what is worth testing, no — that is judgement about risk, and we do not pretend otherwise.',
      },
    ],
  },
  {
    slug: 'global-capability-centres',
    icon: 'globe',
    name: 'Global capability centres',
    short: 'Your own engineering centre in India — staffed, run, and handed over when you want it.',
    summary:
      'Setting up and operating captive engineering centres: entity and compliance, hiring, delivery leadership and engineering standards, with a build-operate-transfer path when you want it to become yours.',
    lede:
      'A GCC fails for people reasons far more often than technical ones. We staff it, run it to our engineering standards, and transfer it when it can stand on its own.',
    outcomes: [
      'First squad productive inside 10 weeks of signing',
      'Attrition under 12% against a sector norm closer to 20%',
      'Clean build-operate-transfer with no single-person knowledge left behind',
    ],
    capabilities: [
      {
        title: 'Entity, compliance & infrastructure',
        body: 'Company formation or an employer-of-record start, statutory registrations, payroll, GST and transfer-pricing groundwork, office space and the security controls your auditors will ask about.',
      },
      {
        title: 'Hiring & employer brand',
        body: 'Sourcing, structured technical interviews run to your bar, published salary bands, and the employer positioning that makes good engineers answer the call in a competitive market.',
      },
      {
        title: 'Dedicated pods',
        body: 'Cross-functional squads — engineers, QA, a designer, a delivery lead — working to your roadmap in your repositories, with the pod rather than the individual as the unit you contract for.',
      },
      {
        title: 'Engineering standards & enablement',
        body: 'The golden paths, review bar, on-call culture and documentation habits we run across our own practices, installed from day one rather than retrofitted in year two.',
      },
      {
        title: 'Security & data residency',
        body: 'Segregated networks, identity-aware access, device management and data-residency controls, so a centre in India satisfies your home regulator as well as ours.',
      },
      {
        title: 'Build-operate-transfer',
        body: 'An agreed trigger and valuation, a transition plan written at the start rather than negotiated at the end, and leadership continuity through the handover.',
      },
    ],
    stack: ['Dedicated pods', 'Build-operate-transfer', 'Employer of record', 'Managed capacity', 'Co-sourced leadership', 'DPDP & GDPR controls'],
    engagement: [
      { phase: 'Operating model', detail: 'What the centre owns versus the home team, how decisions get made, and an honest cost model including the parts people forget.' },
      { phase: 'Stand up', detail: 'Entity or employer of record, premises, security controls, and the first squad hired against your interview bar with your people in the loop.' },
      { phase: 'Scale', detail: 'Squad by squad, each productive before the next is hired. Growing faster than you can onboard is the usual way these fail.' },
      { phase: 'Operate or transfer', detail: 'We keep running it, or we execute the transfer on the terms agreed at the start. Both are normal endings.' },
    ],
    faqs: [
      {
        q: 'How is this different from hiring a contractor team?',
        a: 'A contractor team is capacity you rent. A GCC is an asset you accumulate — the same people, learning your domain, on a path to becoming your own entity. If you only need capacity, say so and we will quote an embedded squad instead, which is cheaper.',
      },
      {
        q: 'What is the minimum viable size?',
        a: 'Around 12 to 15 people. Below that the compliance and leadership overhead per head is hard to justify, and we will tell you to use an embedded squad until you grow into it.',
      },
    ],
  },
  {
    slug: 'enterprise-platforms',
    icon: 'puzzle',
    name: 'Enterprise platforms',
    short: 'Microsoft, Salesforce, ServiceNow and MuleSoft — implemented so they fit the business.',
    summary:
      'Implementation, extension and integration across the Microsoft stack, Salesforce, ServiceNow and MuleSoft, with the integration layer and the data model treated as the real work.',
    lede:
      'Platform projects rarely fail at configuration. They fail at the integration seams and the data model underneath, which is where we spend our time.',
    outcomes: [
      'Integration built as versioned contracts rather than point-to-point spaghetti',
      'One customer and product definition shared across platforms',
      'Configuration preferred over custom code, and custom code reviewed like product code',
    ],
    capabilities: [
      {
        title: 'Microsoft business applications',
        body: 'Dynamics 365 and the Power Platform — model-driven apps, Power Automate flows and governed low-code, with the line between citizen development and engineering drawn deliberately.',
      },
      {
        title: 'Microsoft data & AI',
        body: 'Fabric and Synapse lakehouses, Power BI semantic models and Azure OpenAI workloads, built on the same data contracts and evaluation discipline as the rest of our data and AI work.',
      },
      {
        title: 'Microsoft infrastructure & app innovation',
        body: 'Azure landing zones, identity and network design, AKS platforms and .NET modernisation — taken as a strangler path rather than a big-bang rebuild.',
      },
      {
        title: 'Salesforce',
        body: 'Sales, Service and Experience Cloud implementation, Apex and Lightning development held to ordinary code-review standards, and the data hygiene that keeps a CRM worth reading.',
      },
      {
        title: 'ServiceNow',
        body: 'ITSM, ITOM and custom workflow applications, a CMDB that reflects reality rather than a one-off import, and service catalogues people use instead of emailing IT.',
      },
      {
        title: 'MuleSoft & integration',
        body: 'API-led connectivity with reusable system and process APIs, versioning that does not break consumers, and idempotency and retry semantics designed in rather than discovered.',
      },
    ],
    stack: ['Dynamics 365', 'Power Platform', 'Microsoft Fabric', 'Azure', '.NET', 'Salesforce', 'Apex', 'ServiceNow', 'MuleSoft', 'Azure DevOps'],
    engagement: [
      { phase: 'Fit assessment', detail: 'What the platform does out of the box, what genuinely needs extending, and what you are about to build that the licence already covers.' },
      { phase: 'Data model & integration design', detail: 'Shared definitions and API contracts first, because retrofitting these is what makes platform programmes overrun.' },
      { phase: 'Implement in slices', detail: 'One business process end to end at a time, in production, rather than a full configuration revealed at the end.' },
      { phase: 'Adopt & support', detail: 'Training for admins and end users, a managed support tier, and a release cadence that keeps pace with vendor updates.' },
    ],
    faqs: [
      {
        q: 'Are you a certified partner on these platforms?',
        a: 'We hold delivery certifications across the Microsoft stack and work alongside licensed partners where a formal partner tier is required for licensing or support. We will be explicit about which applies to your engagement before you sign anything.',
      },
      {
        q: 'Should we customise the platform or change our process?',
        a: 'Change the process, in most cases. Every customisation is a cost you pay on every upgrade for the life of the platform. We push back on custom code and document the ones we agree are genuinely justified.',
      },
    ],
  },
];

export const serviceBySlug = (slug) => services.find((s) => s.slug === slug);
