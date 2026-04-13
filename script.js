const profile = {
  name: "Hang Liu",
  headline:
    "MSc Data Science candidate targeting data analyst and project operations roles—using metrics, dashboards, and structured delivery to run programs and improve business outcomes.",
  tags: [
    "Data Analyst",
    "Project Operations",
    "Python",
    "SQL",
    "Tableau",
    "KPI & Reporting"
  ],
  bioParagraphs: [
    "I am an MSc Data Science student at Lingnan University (Hong Kong), where all instruction is delivered in English, with a BSc in Mathematics and Applied Mathematics from Gannan Normal University. My academic foundation spans statistical modeling, machine learning, deep learning, data mining, and database management—giving me both the quantitative rigor and the technical toolkit to move between exploratory analysis and production-ready deliverables.",
    "My core working style is analytics-to-action: I build SQL and Python pipelines (Pandas, NumPy, Scikit-learn), design segmentation and scoring frameworks, run hypothesis tests and A/B experiments, and surface findings through Tableau dashboards—always with an eye on how insights translate into concrete operational decisions rather than staying on a slide.",
    "My project experience spans several domains. In credit risk and pricing, I built a three-layer decision architecture for 302 unrated SMEs—moving from a WOE-Logistic scoring model through a dual-objective nonlinear optimization that directly output differentiated interest rates and credit limits, achieving a 6.64% yield with dynamic risk adjustment for external shocks. In quantitative investing, I combined a multi-factor fundamental model with an LSTM timing layer, back-tested across a full decade of bull and bear cycles, and delivered an annualized excess return of 0.61% with a maximum drawdown of just 2.53%. In customer and booking analytics, I built an interactive Tableau dashboard over 100,000+ hotel reservation records, identifying channel-level pricing anomalies and high-value customer segments across Contract, Group, and Transient cohorts. I also conducted a rigorous database performance comparison between MySQL and MongoDB on 100,000+ e-commerce transactions, quantifying read/write trade-offs across CRUD scenarios—results that directly inform architectural recommendations.",
    "Beyond structured datasets, I independently designed and shipped an AI dungeon-escape game using Q-Learning, which I used as a live product experiment: I tracked win rate, completion steps, and training convergence across multiple A/B iterations, lifting the AI win rate from 32% to 96.3% and cutting average completion steps from 80 to 20—a 4× efficiency gain. The project also gave me hands-on experience thinking about user segmentation, difficulty curves, and retention mechanics for different user tiers.",
    "At Huawei's STEM education program, I supported the full analytics cycle for a 200+ student rollout: survey design and data collection, Python and SQL cleaning and cohort segmentation by grade and subject background, and structured reporting that fed directly into curriculum iteration—ultimately contributing to a 15% improvement in measured learning outcomes and 92% classroom satisfaction. This mirrors the kind of ongoing program analytics support where insights need to stay embedded in operating rhythms rather than produced as one-off reports.",
    "In competitions, I led my team to a provincial first prize in the 2022 National Mathematical Modeling Contest and a second prize in 2023, both requiring end-to-end problem framing, modeling, and written communication of results under time pressure.",
    "I am fluent in both English and Mandarin Chinese and can interpret user behavior and market context across Mainland China and international environments. I'm comfortable aligning cross-functional stakeholders—translating between technical findings, business priorities, and measurable outcomes—and I move naturally between independent analytical work and collaborative project cycles."
  ],
  educationLines: [
    "MSc in Data Science, Lingnan University (Sep 2025 – Nov 2026, expected).",
    "BSc in Mathematics and Applied Mathematics, Gannan Normal University (Sep 2021 – Jun 2025)."
  ],
  strengths: [
    "Proficient in using various AI tools.",
    "Turn vague business goals into KPIs, dashboards, and repeatable reporting for data analyst workflows",
    "Support project and program operations: track milestones, surface risks early, and feed decisions with SQL/Python analysis",
    "Deliver end-to-end analytics in Python and SQL—from cleaning and EDA to Tableau views and concise readouts for stakeholders",
    "Collaborate across roles in English or Chinese, translating technical results into operational next steps"
  ],
  technicalSkills: [
    "Python (Pandas, NumPy, scikit-learn, PyTorch ecosystem)",
    "SQL (joins, aggregation, query optimization)",
    "R",
    "Machine learning & deep learning, feature engineering, model evaluation",
    "Statistical analysis, clustering, logistic regression",
    "Reinforcement learning (Q-learning) and sequential / Transformer models",
    "Signal processing for ECG: denoising, R-peak detection, segmentation",
    "Data cleaning, EDA, experimental design for benchmarking"
  ],
  businessSkills: [
    "Project / program operations: milestone tracking, cadence and status reporting, stakeholder coordination",
    "Problem framing and objective definition",
    "KPI design, funnel, cohort, and retention analysis",
    "User segmentation and behavioral interpretation",
    "A/B testing mindset and metric interpretation",
    "Reporting, data storytelling, and executive-ready summaries",
    "Cross-functional collaboration and requirements translation"
  ],
  tools: [
    "Tableau",
    "Excel",
    "SPSS",
    "Jupyter Notebook",
    "Git",
    "MySQL & MongoDB"
  ],
  projects: [
    {
      title: "Hotel Booking Analytics & Interactive Dashboard",
      time: "Oct 2025 – Nov 2025",
      problem:
        "Booking data was fragmented across channels; the business needed a clearer view of customer types, lead times, pricing, and conversion drivers to improve pricing and channel strategy.",
      data:
        "More than 100,000 hotel booking records; engineered features such as customer type, lead time, room rate, and arrival patterns after handling missing and abnormal values in Python.",
      approach:
        "Segmented users and markets (e.g., eight market slices), analyzed booking and price distributions, identified high-value segments and anomalies such as price inversions, and built an interactive Tableau dashboard with multi-dimensional filters (e.g., channel, time, customer type).",
      outcome:
        "Surfaced actionable issues including pricing inconsistencies and channel performance gaps; enabled monitoring and exploration for revenue and operations teams through dashboard views tied to business questions.",
      contribution:
        "Owned data processing, analytics, visualization design, and synthesis of insights into product- and pricing-oriented recommendations.",
      links: []
    },
    {
      title: "SME Credit Risk Segmentation & Pricing Strategy",
      time: "Mar 2024 – Apr 2024 (extended modeling); coursework variant Mar 2026",
      problem:
        "Many small and medium enterprises lack traditional credit ratings, making it hard to price loans fairly and manage portfolio risk.",
      data:
        "Invoice and loan-relevant firm-level records for hundreds of SMEs (e.g., 302-priority cohorts in extended analyses); constructed features for default risk and business health after Python-based cleaning.",
      approach:
        "Applied K-means style clustering for risk tiers, WOE–logistic modeling and dual-objective optimization to link risk segments to interest-rate strategy, and statistical checks on portfolio outcomes.",
      outcome:
        "Documented portfolio lifts such as roughly 6% improvement in return, about 4.7% gain in customer retention, and differentiated outcomes across enterprise subsets—supporting data-driven credit and pricing decisions.",
      contribution:
        "Built the analytical pipeline, risk segmentation, and optimization narrative end to end; iterated metrics for business interpretation.",
      links: []
    },
    {
      title: "Q-learning AI Agent for Dungeon Escape",
      time: "Feb 2026 – Mar 2026",
      problem:
        "A grid-world dungeon task required multi-step planning under uncertainty; a fixed heuristic fails when the environment rewards long-horizon trade-offs.",
      data:
        "Simulated states, actions, and rewards from the game environment; logged win rate, average steps per episode, and training stability across hyperparameter settings.",
      approach:
        "Defined state and action spaces and reward shaping for long-term objectives; implemented Q-learning with iterative policy updates, tuning, and convergence diagnostics.",
      outcome:
        "Raised success rate from about 32% to 96.3% and cut average steps from roughly 80 to 20 (about fourfold efficiency), with stable learning curves suitable for reporting.",
      contribution:
        "Independent implementation of the RL loop, experiments, and analysis of exploration versus exploitation behavior.",
      links: []
    },
    {
      title: "Transformer-based Sequential Recommendation (SASRec)",
      time: "Feb 2026 – Mar 2026",
      problem:
        "Matrix-factorization-style recommenders miss temporal patterns in user–item sequences (e.g., gaming or content platforms).",
      data:
        "Constructed sequential interaction histories (e.g., 200+ Steam users in an extended study); used leave-one-out evaluation with negative sampling for ranking metrics.",
      approach:
        "Implemented a SASRec-style Transformer with embeddings, positional encoding, self-attention blocks, and training/evaluation code; compared against simpler baselines.",
      outcome:
        "Achieved strong ranking performance—for example Hit Rate@10 around 0.79 in one configuration—demonstrating that self-attention improves modeling of short- and long-term preferences.",
      contribution:
        "Built model components, data pipeline, training loop, and metric reporting independently.",
      links: []
    },
    {
      title: "ECG Multi-label Classification (PTB-XL)",
      time: "Feb 2026 – Mar 2026",
      problem:
        "Multi-lead ECG signals are noisy and structurally complex; automated diagnosis needs robust preprocessing and validated performance.",
      data:
        "PTB-XL public ECG records with multi-label targets; pipeline included denoising, R-peak detection, heartbeat segmentation, and normalization.",
      approach:
        "Engineered multi-domain features (e.g., morphology descriptors and RR intervals), trained Random Forest classifiers, and compared feature combinations with AUC-focused evaluation.",
      outcome:
        "Reached up to about 0.986 AUC on held-out evaluation for strong feature fusion settings, with analysis of which feature families drive performance—relevant to healthcare AI product thinking.",
      contribution:
        "Led signal processing, feature design, modeling, and interpretation under class imbalance.",
      links: []
    },
    {
      title: "Database Performance Benchmark: MySQL vs MongoDB",
      time: "Sep 2025 – Oct 2025",
      problem:
        "E-commerce-style workloads differ in read/write mix; teams need evidence to choose between relational and document stores.",
      data:
        "Benchmark datasets on the order of millions of transaction-style rows modeling orders, products, and inventory-style operations.",
      approach:
        "Designed CRUD and analytics-style workloads; optimized SQL and MongoDB aggregation pipelines; compared latency and throughput across scenarios.",
      outcome:
        "Found MongoDB substantially stronger on write-heavy patterns (on the order of ~283% relative improvement in reported write scenarios) while MySQL led on structured analytical queries (on the order of ~95% relative edge in reported read/analytics scenarios)—documented as selection guidance, not universal rules.",
      contribution:
        "Designed experiments, implemented queries in both systems, and summarized trade-offs for stakeholders.",
      links: []
    }
  ],
  resumeText: "Full CV (PDF) via the link below.",
  resumeLink: "./LIUHang.pdf",
  contact: {
    email: "hangliu@ln.hk",
    emailAlt: "liuhang2512@163.com",
    github: "https://github.com/LHHHailey",
    phone: "(+86) 152-1627-9020 | (+852) 6676-1981"
  }
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value || "";
  }
}

function setBio(paragraphs) {
  const el = document.getElementById("bio");
  if (!el) return;
  el.innerHTML = (paragraphs || [])
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join("");
}

function setEducationLines(lines) {
  const el = document.getElementById("education");
  if (!el) return;
  el.innerHTML = (lines || [])
    .map((line) => escapeHtml(line))
    .join("<br>");
}

function setList(id, items) {
  const element = document.getElementById(id);
  if (!element) return;
  element.innerHTML = "";
  (items || []).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    element.appendChild(li);
  });
}

function setLink(id, href, text) {
  const element = document.getElementById(id);
  if (!element) return;
  if (!href || href === "#") {
    element.href = "#";
    element.textContent = text || "Not provided";
    element.removeAttribute("target");
    return;
  }
  element.href = href;
  element.textContent = text || href;
  if (href.startsWith("http")) {
    element.target = "_blank";
    element.rel = "noopener";
  }
}

function renderProjects(projects) {
  const container = document.getElementById("projectCards");
  if (!container) return;
  container.innerHTML = "";

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const linksHtml = (project.links || [])
      .map(
        (link) =>
          `<a href="${link.url}" target="_blank" rel="noopener">${escapeHtml(link.label)}</a>`
      )
      .join(" | ");

    card.innerHTML = `
      <h3>${escapeHtml(project.title)}</h3>
      <p class="project-meta">${escapeHtml(project.time)}</p>
      <p><strong>Problem:</strong> ${escapeHtml(project.problem)}</p>
      <p><strong>Data:</strong> ${escapeHtml(project.data)}</p>
      <p><strong>Approach:</strong> ${escapeHtml(project.approach)}</p>
      <p><strong>Outcome / Impact:</strong> ${escapeHtml(project.outcome)}</p>
      <p><strong>Contribution:</strong> ${escapeHtml(project.contribution)}</p>
      ${linksHtml ? `<p><strong>Links:</strong> ${linksHtml}</p>` : ""}
    `;

    container.appendChild(card);
  });
}

function renderProfile(data) {
  setText("name", data.name);
  setText("headline", data.headline);
  setBio(data.bioParagraphs);
  setEducationLines(data.educationLines);
  setText("resumeText", data.resumeText);
  setText("phoneText", data.contact.phone || "Not provided");

  setList("tags", data.tags);
  setList("strengths", data.strengths);
  setList("technicalSkills", data.technicalSkills);
  setList("businessSkills", data.businessSkills);
  setList("tools", data.tools);

  setLink("resumeLink", data.resumeLink, "Download CV (PDF)");
  setLink("emailLink", `mailto:${data.contact.email}`, data.contact.email);
  setLink(
    "emailLinkAlt",
    `mailto:${data.contact.emailAlt}`,
    data.contact.emailAlt
  );
  setLink("githubLink", data.contact.github, "LHHHailey");

  renderProjects(data.projects);
  setText(
    "footerText",
    `© ${new Date().getFullYear()} ${data.name}. All rights reserved.`
  );
}

renderProfile(profile);
