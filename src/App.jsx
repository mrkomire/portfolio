import { useEffect, useRef, useState } from "react";
import { PROJECTS, CERTIFICATIONS } from "./constants";
import { initPortfolioMotion } from "./portfolioMotion";
import { initNeuralCore } from "./neuralCore";
import "./App.css";
import "./future.css";

const skills = [
  [
    "AI & machine learning",
    "Python · LLM applications · RAG · Neo4j · scikit-learn",
  ],
  ["Data & cloud", "SQL · GCP · BigQuery · Azure · AWS · Data pipelines"],
  [
    "Analytics & decision science",
    "Statistical modeling · Time series · Optimization · R",
  ],
  [
    "Products & delivery",
    "React · TypeScript · Docker · Git · Power BI · Looker",
  ],
];
const experience = [
  {
    role: "AI Engineer",
    company: "GRIBON & COMPANY",
    date: "Feb 2026 — Present",
    location: "United Kingdom",
    text: "Building AI-powered products, knowledge retrieval systems, and integrations that turn business information into useful workflows.",
  },
  {
    role: "AI & Data Science Consultant",
    company: "GRIBON & COMPANY",
    date: "Mar 2025 — Jan 2026",
    location: "United States",
    text: "Developed conversational AI for meeting transcripts and survey data, with cloud data pipelines and document analytics to support faster synthesis.",
  },
  {
    role: "Business Intelligence Analyst",
    company: "Lonza Biologics",
    date: "Oct 2024 — Feb 2025",
    location: "United States",
    text: "Built predictive models, SQL pipelines, and BI dashboards for manufacturing operations. Applied statistical analysis and automated reporting workflows.",
  },
  {
    role: "Application Development Analyst",
    company: "Accenture",
    date: "Feb 2021 — Jul 2023",
    location: "India",
    text: "Delivered automation, analytics, and reporting solutions using Python, SQL, Tableau, and RPA. Used mathematical optimization to improve transportation planning.",
  },
];
const projects = [
  {
    title: "Conversational document intelligence",
    category: "AI systems",
    type: "Professional work",
    text: "Making meeting transcripts and survey responses searchable and useful through conversational AI and cloud data pipelines.",
    tags: ["LLM applications", "GCP", "Data pipelines"],
    detail: "From unstructured information to actionable insight",
  },
  ...[0, 1, 9, 3].map((index) => ({
    ...PROJECTS[index],
    category: index === 9 ? "AI systems" : "Data science",
    type: "Independent project",
    text: [
      "Predicted booking outcomes with XGBoost and explored booking drivers using causal analysis. Improved AUC from 0.77 to 0.84.",
      "Modeled exchange-rate volatility with Bayesian stochastic volatility methods and evaluated forecasts against a GARCH baseline.",
      "Explored convolutional neural networks for detecting diabetic retinopathy from retinal images.",
      "Built a constrained portfolio optimization model with Python and CVXPY to explore commodity allocation and risk–return trade-offs.",
    ][[0, 1, 9, 3].indexOf(index)],
    tags:
      index === 0
        ? ["XGBoost", "R", "Causal analysis"]
        : index === 1
          ? ["Bayesian modeling", "R", "Time series"]
          : index === 9
            ? ["CNN", "Computer vision", "Python"]
            : ["CVXPY", "Optimization", "Python"],
    detail:
      index === 0
        ? "0.84 AUC · evaluated booking predictions"
        : index === 1
          ? "Bayesian forecasting · uncertainty-aware analysis"
          : index === 9
            ? "Healthcare ML · retinal image classification"
            : "Decision science · constrained optimization",
  })),
];

function App() {
  const portfolioRef = useRef(null);
  const [filter, setFilter] = useState("All work");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const stopMotion = initPortfolioMotion(portfolioRef.current);
    const stopCore = initNeuralCore(
      portfolioRef.current.querySelector(".core-stage"),
    );
    return () => {
      stopCore();
      stopMotion();
    };
  }, []);
  const visibleProjects = projects.filter(
    (p) => filter === "All work" || p.category === filter,
  );
  return (
    <div className="portfolio" ref={portfolioRef}>
      <div className="reading-progress" aria-hidden="true" />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Sathish Komire home">
          sk<span>.</span>
        </a>
        <nav
          id="navigation"
          className={menuOpen ? "is-open" : ""}
          aria-label="Main navigation"
        >
          {["Work", "About", "Experience"].map((name) => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="motion-toggle"
            type="button"
            aria-label="Pause animations"
          >
            <span className="motion-indicator" aria-hidden="true" />
            <span className="motion-label">Pause motion</span>
          </button>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
        </div>
      </header>
      <main id="main">
        <section id="home" className="hero section-wrap">
          <div className="ambient-light" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> SATHISH KOMIRE / AI ENGINEER &
              DATA SCIENTIST
            </p>
            <h1>
              <span className="title-line">
                <span>Intelligence,</span>
              </span>
              <span className="title-line">
                <em>engineered.</em>
              </span>
            </h1>
            <p className="hero-intro">
              I’m Sathish Komire. I build AI applications, data systems, and
              analytical tools that help people make better decisions.
            </p>
            <div className="actions">
              <a className="button primary" href="#work">
                Explore my work <span aria-hidden="true">↘</span>
              </a>
              <a
                className="text-link"
                href="https://github.com/mrkomire"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-footnote">
              BASED IN THE UNITED KINGDOM · BUILDING WITH PURPOSE
            </div>
          </div>
          <figure
            className="core-display"
            aria-label="An artistic visualization of connected data and intelligence"
          >
            <div className="core-topline">
              <span>INTELLIGENCE / IN MOTION</span>
              <span className="core-cross" aria-hidden="true">
                +
              </span>
            </div>
            <div className="core-stage">
              <div className="core-grid" aria-hidden="true" />
              <div className="core-fallback" aria-hidden="true">
                <span />
                <span />
                <span />
                <b />
              </div>
              <canvas className="neural-canvas" aria-hidden="true" />
              <span className="core-tag tag-one">KNOWLEDGE GRAPHS</span>
              <span className="core-tag tag-two">APPLIED AI</span>
              <div className="core-center" aria-hidden="true">
                <span>SK</span>
                <small>CONNECTED THINKING</small>
              </div>
            </div>
            <figcaption className="core-caption">
              <span className="core-hint">Move your cursor to explore</span>
              <span>DATA → INTELLIGENCE → IMPACT</span>
            </figcaption>
          </figure>
        </section>
        <div className="company-strip section-wrap">
          <span>EXPERIENCE ACROSS</span>
          <strong>GRIBON & COMPANY</strong>
          <strong>Lonza</strong>
          <strong>Accenture</strong>
        </div>
        <section id="work" className="section-wrap content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Proof of possibility.</h2>
            </div>
            <p>
              Selected explorations in AI, predictive modeling, and decision
              science.
            </p>
          </div>
          <div className="project-filters" aria-label="Filter projects">
            {["All work", "AI systems", "Data science"].map((name) => (
              <button
                key={name}
                aria-pressed={filter === name}
                onClick={() => setFilter(name)}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="project-grid" aria-live="polite">
            {visibleProjects.map((project) => (
              <article
                className={`project-card ${project.image ? "" : "featured-project"}`}
                key={project.title}
                data-category={project.category}
              >
                {project.image ? (
                  <div className="project-image">
                    <img src={project.image} alt="" loading="lazy" />
                  </div>
                ) : (
                  <div className="project-graphic" aria-hidden="true">
                    <span>DOCUMENTS</span>
                    <span>RETRIEVAL</span>
                    <span>INSIGHT</span>
                  </div>
                )}
                <div className="project-body">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span>{project.type}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-bottom">
                    <span>{project.detail}</span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        View project ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          id="about"
          className="section-wrap content-section about-section"
        >
          <div>
            <p className="eyebrow">ABOUT ME</p>
            <h2>
              A builder’s mindset.
              <br />
              <em>A statistician’s perspective.</em>
            </h2>
            <p className="about-copy">
              My work sits at the intersection of software engineering, AI, and
              business analytics. I enjoy connecting the whole journey:
              understanding the problem, working with the data, building the
              system, and making the result useful.
            </p>
            <p className="about-copy">
              From enterprise automation at Accenture to manufacturing analytics
              at Lonza and AI product development at GRIBON & COMPANY, I bring
              both technical depth and a practical understanding of business
              workflows.
            </p>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/sathish-komire-b5980b160/"
              target="_blank"
              rel="noreferrer"
            >
              More about me on LinkedIn ↗
            </a>
          </div>
          <div className="skills-grid">
            {skills.map(([title, text]) => (
              <div className="skill-block" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="experience" className="section-wrap content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE JOURNEY</p>
              <h2>Experience that connects the dots.</h2>
            </div>
          </div>
          <div className="experience-list">
            {experience.map((job) => (
              <article className="experience-row" key={job.role + job.company}>
                <div className="experience-date">
                  {job.date}
                  <span>{job.location}</span>
                </div>
                <div>
                  <h3>{job.role}</h3>
                  <p className="company-name">{job.company}</p>
                  <p>{job.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="education-grid">
            <div>
              <p className="eyebrow">EDUCATION</p>
              <h3>MS, Business Statistics</h3>
              <p>University of New Hampshire · 2023–2024</p>
              <span className="education-detail">
                GPA 3.8/4 · Statistical learning, time series & optimization
              </span>
            </div>
            <div>
              <p className="eyebrow">FOUNDATION</p>
              <h3>BE, Electronics & Communication</h3>
              <p>CBIT, Hyderabad · 2016–2020</p>
            </div>
          </div>
        </section>
        <section className="section-wrap content-section certifications">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CONTINUOUS LEARNING</p>
              <h2>Credentials & certifications.</h2>
            </div>
          </div>
          <div className="cert-grid">
            {CERTIFICATIONS.map((cert) => (
              <div className="cert-card" key={cert.name}>
                <span>
                  {cert.issuingOrganization} · {cert.issueDate}
                </span>
                <h3>{cert.name}</h3>
                {cert.issuingOrganization !== "PagerDuty" && (
                  <a href={cert.link} target="_blank" rel="noreferrer">
                    View credential ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="section-wrap contact-section">
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>
            Have a problem
            <br />
            worth <em>solving?</em>
          </h2>
          <p>
            Let’s talk about AI products, data science, and turning an idea into
            something useful.
          </p>
          <div className="actions">
            <a className="button primary" href="mailto:mr.komire@gmail.com">
              Say hello ↗
            </a>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/sathish-komire-b5980b160/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </section>
      </main>
      <footer className="section-wrap site-footer">
        <a className="wordmark" href="#home">
          sk<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Sathish Komire</span>
        <a href="https://github.com/mrkomire" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}
export default App;
