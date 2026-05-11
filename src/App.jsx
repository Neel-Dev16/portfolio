import React, { useEffect, useState } from "react";

const resumePath = "/assets/Neel_Resume_CI.pdf";
const githubUrl = "https://github.com/Neel-Dev16";
const linkedInUrl = "https://www.linkedin.com/in/neel-harip/";
const primaryEmail = "nhari7@illinois.edu";

const devicon = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}`;

const marqueeSkills = [
  ["Python", devicon("python/python-original.svg")],
  ["JavaScript", devicon("javascript/javascript-original.svg")],
  ["C++", devicon("cplusplus/cplusplus-original.svg")],
  ["TypeScript", devicon("typescript/typescript-original.svg")],
  ["React", devicon("react/react-original.svg")],
  ["Angular", devicon("angularjs/angularjs-original.svg")],
  ["Next.js", devicon("nextjs/nextjs-original.svg")],
  ["Node.js", devicon("nodejs/nodejs-original.svg")],
  ["FastAPI", devicon("fastapi/fastapi-original.svg")],
  ["Flask", devicon("flask/flask-original.svg")],
  ["PostgreSQL", devicon("postgresql/postgresql-original.svg")],
  ["MySQL", devicon("mysql/mysql-original.svg")],
  ["MongoDB", devicon("mongodb/mongodb-original.svg")],
  ["AWS", devicon("amazonwebservices/amazonwebservices-original-wordmark.svg")],
  ["Docker", devicon("docker/docker-original.svg")],
  ["GCP", devicon("googlecloud/googlecloud-original.svg")],
  ["Jenkins", devicon("jenkins/jenkins-original.svg")],
  ["Claude", "https://cdn.simpleicons.org/claude/FFFFFF"],
  ["HTML5", devicon("html5/html5-original.svg")],
  ["CSS3", devicon("css3/css3-original.svg")],
];

const skillGroups = [
  {
    icon: "psychology",
    title: "AI Engineering",
    skills: [
      "LangChain",
      "RAG",
      "OpenAI API",
      "Claude Code",
      "Vector Databases",
      "Semantic Search",
      "AI Agents",
    ],
  },
  {
    icon: "code",
    title: "Languages",
    skills: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "C++", "C#"],
  },
  {
    icon: "web",
    title: "Frontend",
    skills: ["React", "Next.js", "Angular", "HTML", "CSS", "Tailwind"],
  },
  {
    icon: "api",
    title: "Backend & APIs",
    skills: ["Node.js", "FastAPI", "Flask", "Express.js", "REST APIs"],
  },
  {
    icon: "cloud",
    title: "Cloud, Databases & DevOps",
    skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "CI/CD"],
  },
  {
    icon: "construction",
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Postman", "Linux", "Jira"],
  },
];

const timeline = [
  {
    title: "Full Stack Developer",
    date: "Jan 2025 - May 2025",
    company: "University of Illinois Urbana-Champaign",
    copy:
      "Built a 0 to 1 research platform for 300+ projects using React, Node.js, and PostgreSQL, then added semantic search with Hugging Face Transformers and vector embeddings.",
  },
  {
    title: "Software Development Engineer",
    date: "Aug 2021 - Jul 2024",
    company: "Tata Consultancy Services",
    copy:
      "Developed C#/.NET services, REST APIs, SQL workflows, Jenkins pipelines, and Splunk monitoring for a 500+ user knowledge platform, reducing manual effort and incident resolution time.",
  },
  {
    title: "Full Stack Intern",
    date: "Nov 2019 - Jun 2020",
    company: "Wisdom Sprouts",
    copy:
      "Improved Angular application performance with lazy loading and optimized Node.js, Express.js, MongoDB, and PHP services to reduce payload size and page load time.",
  },
];

const projects = [
  {
    title: "AI Ops Automation System",
    previewAlt: "AI Ops Automation System preview",
    tags: ["Python", "FastAPI", "OpenAI API", "Docker"],
    description:
      "AI-driven automation platform that ingests logs and events, performs LLM analysis, and generates actionable operational insights with structured outputs.",
  },
  {
    title: "Real-Time Financial Data Pipeline",
    previewAlt: "Real-Time Financial Data Pipeline preview",
    tags: ["Python", "Spark", "Kafka", "Grafana"],
    description:
      "High-throughput streaming pipeline processing 10,000+ events per second with Kafka, Spark, InfluxDB, and Grafana observability.",
  },
  {
    title: "Cloud-Based Data Processing Platform",
    previewAlt: "Cloud-Based Data Processing Platform preview",
    tags: ["AWS Kinesis", "Lambda", "DynamoDB", "S3"],
    description:
      "Serverless, event-driven platform for high-volume streaming ingestion, transformation, historical querying, and automated workload monitoring.",
  },
  {
    title: "Research Project Discovery Platform",
    previewAlt: "Research Project Discovery Platform preview",
    tags: ["React", "Node.js", "PostgreSQL", "Embeddings"],
    description:
      "Full-stack platform for managing and exploring 300+ research projects with semantic search across structured and unstructured project data.",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="logo" href="#home" aria-label="Neel Harip home">
          NH
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href={resumePath} target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>
        <a className="header-contact" href={`mailto:${primaryEmail}`}>
          Contact Me
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span></span>
          <span></span>
        </button>
      </header>

      <nav className={`drawer${menuOpen ? " open" : ""}`} aria-label="Menu">
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href={resumePath} target="_blank" rel="noreferrer" onClick={closeMenu}>
          Resume
        </a>
      </nav>
    </>
  );
}

function Hero() {
  const loopedSkills = [...marqueeSkills, ...marqueeSkills];

  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <span className="availability">Available for hire</span>
        <h1>Neel | Portfolio</h1>
        <h2>Full Stack Developer.</h2>
        <p>
          I build production-ready web platforms, backend services, and applied AI systems that turn
          complex data into fast, useful digital products.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#projects">
            View My Work <span className="material-symbol">arrow_forward</span>
          </a>
          <a className="secondary-button" href={resumePath} target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>
        <p className="tech-label">Working with modern technologies</p>
        <a className="tech-marquee" href="#skills" aria-label="View skills section">
          <div className="marquee-track">
            {loopedSkills.map(([name, src], index) => (
              <span className="marquee-item" key={`${name}-${index}`}>
                <img src={src} alt={name} />
                <span className="marquee-name">{name}</span>
              </span>
            ))}
          </div>
        </a>
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="statement section">
      <div className="statement-copy">
        <h2>
          Thoughtful engineering <span>Built with precision</span>
        </h2>
        <p>
          I create reliable software across frontend, backend, cloud, and AI workflows. My work
          focuses on clean architecture, measurable impact, and interfaces that make complex systems
          easier to use.
        </p>
      </div>
      <div className="quick-links" aria-label="Profile links">
        <a href={resumePath} target="_blank" rel="noreferrer">
          <span className="material-symbol">download</span> Download Resume
        </a>
        <a href={`mailto:${primaryEmail}`} aria-label="Email Neel">
          <span className="material-symbol">alternate_email</span>
        </a>
        <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
          <span className="material-symbol">code</span>
        </a>
        <a href={linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <span className="material-symbol">work</span>
        </a>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section-heading">
        <h2>Skills</h2>
      </div>
      <p className="skills-intro">
        Tools and platforms I use across full-stack engineering, applied AI, cloud systems, and data
        workflows.
      </p>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="expertise-card" key={group.title}>
            <h3>
              <span className="material-symbol">{group.icon}</span> {group.title}
            </h3>
            <div className="skill-pills">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="timeline-section section">
      <div className="section-heading">
        <h2>Work History</h2>
      </div>
      <div className="timeline">
        {timeline.map((item) => (
          <article className="timeline-item" key={`${item.title}-${item.date}`}>
            <div className="timeline-dot"></div>
            <div>
              <h3>{item.title}</h3>
              <span className="date">{item.date}</span>
              <strong>{item.company}</strong>
              <p>{item.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [preview, setPreview] = useState("");

  function handlePreviewChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setPreview(URL.createObjectURL(file));
  }

  useEffect(() => () => preview && URL.revokeObjectURL(preview), [preview]);

  return (
    <article className="project-card">
      <div className={`project-preview${preview ? " has-image" : ""}`}>
        <img src={preview || undefined} alt={project.previewAlt} />
        <span className="material-symbol">image</span>
        <label>
          Upload screenshot
          <input type="file" accept="image/*" onChange={handlePreviewChange} />
        </label>
      </div>
      <div className="project-body">
        <div className="card-top">
          <h3>{project.title}</h3>
          <a href={githubUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
            <span className="material-symbol">open_in_new</span>
          </a>
        </div>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p>{project.description}</p>
        <div className="project-actions">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <span className="material-symbol">visibility</span> View Project
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <span className="material-symbol">code</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="projects-heading">
        <h2>My Projects</h2>
        <p>
          Building data-rich, AI-enabled, and cloud-native software with modern engineering tools.
          Here is a curated selection of my recent work.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-bar" aria-label="Footer details">
        <a href={`mailto:${primaryEmail}`}>{primaryEmail}</a>
        <a href="mailto:neel.harip@gmail.com">neel.harip@gmail.com</a>
        <a href="tel:+12173906429">+1 (217) 390-6429</a>
        <span>Champaign, Illinois</span>
        <span>© 2026 Neel Harip. All rights reserved.</span>
      </div>
    </footer>
  );
}

function FloatingNav() {
  return (
    <nav className="bottom-nav" aria-label="Floating navigation">
      <a href="#home">
        <span>Home</span>
        <span className="material-symbol">home</span>
      </a>
      <a href="#skills">
        <span>Skills</span>
        <span className="material-symbol">person</span>
      </a>
      <a href="#projects">
        <span>Projects</span>
        <span className="material-symbol">work</span>
      </a>
      <a href={`mailto:${primaryEmail}`}>
        <span>Email</span>
        <span className="material-symbol">mail</span>
      </a>
      <span className="nav-divider" aria-hidden="true"></span>
      <a href={githubUrl} target="_blank" rel="noreferrer">
        <span>GitHub</span>
        <img
          className="social-icon"
          src="https://cdn.simpleicons.org/github/AAB3C1"
          alt=""
          aria-hidden="true"
        />
      </a>
      <a href={linkedInUrl} target="_blank" rel="noreferrer">
        <span>LinkedIn</span>
        <img
          className="social-icon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          alt=""
          aria-hidden="true"
        />
      </a>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <div className="page-noise" aria-hidden="true"></div>
      <Header />
      <main>
        <Hero />
        <Statement />
        <Skills />
        <Timeline />
        <Projects />
      </main>
      <Footer />
      <FloatingNav />
    </>
  );
}
