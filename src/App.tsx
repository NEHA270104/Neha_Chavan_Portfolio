import { ReactNode, useEffect, useState } from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import resumeUrl from "./assets/Neha-Suresh-Chavan-Resume.pdf?url"

type IconName = "arrow" | "briefcase" | "code" | "database" | "download" | "external" | "github" | "linkedin" | "mail" | "map" | "menu" | "phone" | "send" | "spark" | "user" | "x"

const navItems = [
  ["home", "Home", "fa-solid fa-house"],
  ["about", "About", "fa-solid fa-user-astronaut"],
  ["skills", "Skills", "fa-solid fa-code"],
  ["experience", "Experience", "fa-solid fa-briefcase"],
  ["projects", "Projects", "fa-solid fa-layer-group"],
  ["education", "Education", "fa-solid fa-graduation-cap"],
  ["contact", "Contact", "fa-solid fa-paper-plane"],
]

const skillGroups = [
  {
    title: "Programming Languages",
    icon: "01",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend Development",
    icon: "02",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap 5"],
  },
  {
    title: "Backend Development",
    icon: "03",
    skills: [
      "Node.js",
      "Express.js",
      "Python FastAPI",
      "Flask",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    title: "Databases",
    icon: "04",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Supabase",
      "ChromaDB",
      "SQLAlchemy",
    ],
  },
  {
    title: "AI & Data",
    icon: "05",
    skills: [
      "Gemini API",
      "Pandas",
      "NumPy",
      "AI Integration",
      "Vector Search",
      "RAG",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "06",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Docker Compose",
      "Netlify",
      "Deployment Workflows",
    ],
  },
]

const projects = [
  {
    number: "01",
    title: "EventReg Platform",
    category: "AI-Powered Event Management",
    description:
      "A multi-tenant event registration and management platform designed to simplify event creation, registrations, and operational workflows.",
    features: [
      "Multi-tenant architecture",
      "REST API integration",
      "Authentication & security",
      "AI-powered features",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
    ],
    theme: "event",
  },
  {
    number: "02",
    title: "ExamAgent",
    category: "AI-Powered Examination Platform",
    description:
      "An intelligent examination and assessment platform that automates exam workflows and improves assessment management.",
    features: [
      "AI question generation",
      "AI grading & feedback",
      "Performance analytics",
      "Examination proctoring",
    ],
    stack: ["React.js", "Node.js", "TypeScript", "Python", "AI APIs"],
    theme: "exam",
  },
  {
    number: "03",
    title: "Vrishabhanvi Ventures",
    category: "Full Stack E-Commerce",
    description:
      "A production e-commerce platform with secure authentication, product management, shopping cart, and database integration.",
    features: [
      "JWT via HttpOnly cookies",
      "Admin-only routes",
      "Rate limiting",
      "Transaction management",
    ],
    stack: ["TypeScript", "Vite", "Netlify Functions", "MongoDB Atlas", "JWT"],
    theme: "commerce",
    url: "https://www.vrishabhanvi.com/",
  },
  {
    number: "04",
    title: "Real-Time Chat",
    category: "Real-Time Web Application",
    description:
      "A responsive messaging application supporting live communication, WebSocket events, and dynamic message updates.",
    features: [
      "Real-time messaging",
      "WebSocket integration",
      "Responsive interface",
      "Dynamic updates",
    ],
    stack: ["React.js", "JavaScript", "WebSockets"],
    theme: "chat",
  },
]

const smallerProjects = [
  {
    title: "Anaadhi Construction",
    description:
      "Responsive business website showcasing construction services, completed projects, and company information.",
    url: "https://anaadhiconstruuction.in/",
    tag: "Construction",
    logo: "/anaadhi-logo.webp",
  },
  {
    title: "Avadhut Construction",
    description:
      "Responsive corporate website with structured layouts, mobile navigation, and clear business information.",
    url: "https://avadhutconstruction.in/",
    tag: "Corporate",
    logo: "/avadhut-logo.webp",
  },
]

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
      </>
    ),
    external: (
      <>
        <path d="M14 4h6v6M20 4l-9 9" />
        <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
      </>
    ),
    github: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.9a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.3 3.5 6.5 6.8 6.9A4.8 4.8 0 0 0 8 18v4" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="9" width="4" height="12" />
        <path d="M5 3.5v.01M11 21v-7a4 4 0 0 1 8 0v7M11 9v12" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    map: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    phone: (
      <>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
      </>
    ),
    send: (
      <>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5ZM5 16l.7 2.3L8 19l-2.3.7L5 22l-.7-2.3L2 19l2.3-.7Z" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
  }
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function SectionTitle({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string
  title: string
  copy?: string
}) {
  return (
    <div className="section-title reveal">
      <div className="eyebrow">
        <span />
        {eyebrow}
      </div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const sections = navItems
        .map(([id]) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[]
      const current = [...sections]
        .reverse()
        .find((section) => section.getBoundingClientRect().top <= 160)
      if (current) setActive(current.id)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("visible"),
        ),
      { threshold: 0.12 },
    )
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element))
    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app-shell">
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <nav className="nav-wrap" aria-label="Main navigation">
          <div className="nav-brand">
            <span>
              <b>Neha Suresh Chavan</b>
            </span>
          </div>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <div className="mobile-nav-head">
              <a className="mobile-brand" href="#home" onClick={closeMenu}>
                Neha Suresh Chavan
              </a>
              <button
                className="icon-button"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <Icon name="x" />
              </button>
            </div>
            {navItems.map(([id, label, icon]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={closeMenu}
                className={active === id ? "active" : ""}
              >
                <i className={icon} aria-hidden="true" />
                <span className="nav-label">{label}</span>
              </a>
            ))}
            <a
              className="button primary mobile-resume"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Neha-Suresh-Chavan-Resume.pdf"
            >
              <Icon name="download" /> Download Resume
            </a>
          </div>
          <div className="nav-actions">
            <a
              className="button compact secondary nav-resume"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Neha-Suresh-Chavan-Resume.pdf"
            >
              <Icon name="download" size={16} /> Download Resume
            </a>
            <button
              className="icon-button menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Icon name="menu" />
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid container">
            <div className="hero-copy reveal visible">
              <div className="availability-badge">
                <span className="status-dot" />
                Open to Opportunities
              </div>
              <div className="eyebrow">
                <span />
                Hello, I'm
              </div>
              <h1>
                Neha Suresh
                <br />
                <em>Chavan</em>
              </h1>
              <div className="role-line">
                <span>AI & Full Stack Developer</span>
                <i />
              </div>
              <p className="hero-lead">
                I build intelligent, scalable and secure web applications that
                solve real-world problems.
              </p>
              <p className="hero-sub">
                With experience in full-stack development, AI integration,
                backend engineering and database management, I enjoy
                transforming ideas into practical digital solutions.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  Explore My Work <Icon name="arrow" />
                </a>
                <a
                  className="button secondary"
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Neha-Suresh-Chavan-Resume.pdf"
                >
                  <Icon name="download" /> Download Resume
                </a>
                <a className="text-link" href="#contact">
                  Let's Connect <Icon name="arrow" />
                </a>
              </div>
            </div>
            <div
              className="hero-console reveal visible"
              aria-label="Developer profile interface"
            >
              <div className="console-orbit" aria-hidden="true">
                <i />
                <i />
              </div>
              <div className="terminal-card">
                <div className="terminal-top">
                  <div className="terminal-dots">
                    <i />
                    <i />
                    <i />
                  </div>
                  <span>nsc.dev / profile.ts</span>
                  <i className="fa-solid fa-code" aria-hidden="true" />
                </div>
                <div className="terminal-body">
                  <div className="code-line">
                    <span className="line-number">01</span>
                    <code>
                      <em>const</em> developer = {"{"}
                    </code>
                  </div>
                  <div className="code-line">
                    <span className="line-number">02</span>
                    <code>
                      &nbsp;&nbsp;name: <strong>'Neha Suresh Chavan'</strong>,
                    </code>
                  </div>
                  <div className="code-line">
                    <span className="line-number">03</span>
                    <code>
                      &nbsp;&nbsp;role: <strong>'AI + Full Stack'</strong>,
                    </code>
                  </div>
                  <div className="code-line">
                    <span className="line-number">04</span>
                    <code>&nbsp;&nbsp;focus: [</code>
                  </div>
                  <div className="code-line">
                    <span className="line-number">05</span>
                    <code>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <strong>'scalable systems'</strong>,
                    </code>
                  </div>
                  <div className="code-line">
                    <span className="line-number">06</span>
                    <code>
                      &nbsp;&nbsp;&nbsp;&nbsp;<strong>'AI integration'</strong>,
                    </code>
                  </div>
                  <div className="code-line">
                    <span className="line-number">07</span>
                    <code>
                      &nbsp;&nbsp;&nbsp;&nbsp;<strong>'secure products'</strong>
                    </code>
                  </div>
                  <div className="code-line">
                    <span className="line-number">08</span>
                    <code>&nbsp;&nbsp;]</code>
                  </div>
                  <div className="code-line">
                    <span className="line-number">09</span>
                    <code>
                      {"}"} <span className="cursor" />
                    </code>
                  </div>
                </div>
                <div className="terminal-status">
                  <span>
                    <i /> System ready
                  </span>
                  <span>Pune / India</span>
                </div>
              </div>
              <div className="console-chip chip-ai">
                <i className="fa-solid fa-wand-magic-sparkles" />
                <span>
                  <b>AI Integration</b>
                  Gemini · RAG
                </span>
              </div>
              <div className="console-chip chip-api">
                <i className="fa-solid fa-diagram-project" />
                <span>
                  <b>API Systems</b>
                  Node.js · FastAPI
                </span>
              </div>
              <div className="console-stack">
                <span>React</span>
                <span>TypeScript</span>
                <span>Python</span>
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>
          <svg
            className="hero-wave"
            viewBox="0 0 1536 180"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="waveFill" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#2d1459" stopOpacity=".65" />
                <stop offset=".5" stopColor="#7c22ba" stopOpacity=".55" />
                <stop offset="1" stopColor="#351066" stopOpacity=".75" />
              </linearGradient>
              <linearGradient id="waveLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#8b5cf6" stopOpacity=".2" />
                <stop offset=".55" stopColor="#d946ef" stopOpacity=".78" />
                <stop offset="1" stopColor="#8b5cf6" stopOpacity=".3" />
              </linearGradient>
            </defs>
            <path
              d="M0 88 C140 38 260 154 430 113 S700 52 900 126 1190 153 1536 34 V180 H0Z"
              fill="url(#waveFill)"
              opacity=".42"
            />
            <path
              d="M0 91 C140 41 260 157 430 116 S700 55 900 129 1190 156 1536 37"
              fill="none"
              stroke="url(#waveLine)"
              strokeWidth="2"
            />
            <path
              d="M0 120 C165 70 300 170 485 134 S735 84 940 148 1235 172 1536 73"
              fill="none"
              stroke="#8b5cf6"
              strokeOpacity=".22"
            />
            <path
              d="M0 145 C170 98 310 184 500 155 S770 114 960 164 1245 185 1536 111"
              fill="none"
              stroke="#c084fc"
              strokeOpacity=".12"
            />
          </svg>
          <a className="scroll-cue" href="#about">
            <span>Scroll to discover</span>
            <i />
          </a>
        </section>

        <section id="about" className="section about">
          <div className="container">
            <SectionTitle
              eyebrow="A Little About Me"
              title="Building technology. Solving problems. Creating impact."
            />
            <div className="about-grid">
              <div className="about-content reveal">
                <p className="large-copy">
                  I am <strong>Neha Suresh Chavan</strong>, an AI & Full Stack
                  Developer and MSc Computer Applications student with practical
                  industry experience at BRTNeura Technologies.
                </p>
                <p>
                  My experience spans modern web applications, REST APIs,
                  databases, authentication, application security, and AI
                  capabilities in real-world products. I enjoy working across
                  the stack, exploring emerging AI tools, and designing software
                  for performance and scale.
                </p>
                <p>
                  My goal is to create meaningful digital products that balance
                  functionality, security, performance, and an excellent user
                  experience.
                </p>
                <div className="highlight-grid">
                  {[
                    ["01", "Full Stack Development", "End-to-end products"],
                    ["02", "AI Integration", "Practical intelligence"],
                    ["03", "Backend Engineering", "Secure, scalable systems"],
                    ["04", "Problem Solving", "Clarity through complexity"],
                  ].map(([n, title, copy]) => (
                    <div className="highlight-card" key={title}>
                      <span>{n}</span>
                      <div>
                        <b>{title}</b>
                        <small>{copy}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <SectionTitle
              eyebrow="My Technology Stack"
              title="Tools I use to turn ideas into products."
              copy="A versatile toolkit spanning interfaces, intelligent systems, backend architecture, databases, and production workflows."
            />
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-card reveal" key={group.title}>
                  <div className="skill-card-head">
                    <span>{group.icon}</span>
                    <h3>{group.title}</h3>
                  </div>
                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>
                        <i />
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="container">
            <SectionTitle
              eyebrow="My Professional Journey"
              title="Experience built in real product environments."
            />
            <div className="timeline reveal">
              <div className="timeline-rail">
                <span />
              </div>
              <article className="experience-card">
                <div className="experience-top">
                  <div className="company-mark">BN</div>
                  <div>
                    <p className="company">BRTNeura Technologies</p>
                    <h3>AI Full Stack Developer Intern</h3>
                    <div className="job-meta">
                      <span>Sep 2025 — Present</span>
                      <i>Remote Internship</i>
                    </div>
                  </div>
                  <span className="current-pill">
                    <i />
                    Current role
                  </span>
                </div>
                <p className="experience-summary">
                  Developing and enhancing AI-powered web applications across
                  frontend, backend, APIs, databases, security, testing, and
                  production deployment.
                </p>
                <div className="responsibility-grid">
                  {[
                    "Build React, TypeScript, Node.js and Python functionality",
                    "Design REST APIs with Express.js and FastAPI",
                    "Work with PostgreSQL, MongoDB and database management",
                    "Implement JWT authentication and security controls",
                    "Integrate Gemini APIs into AI-powered applications",
                    "Develop EventReg and contribute to ExamAgent",
                    "Test, debug, deploy and troubleshoot production issues",
                    "Collaborate in GitHub-based development workflows",
                  ].map((item) => (
                    <div key={item}>
                      <Icon name="arrow" size={15} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="experience-tags">
                  <span>Product Engineering</span>
                  <span>AI Integration</span>
                  <span>Security</span>
                  <span>Production Support</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <SectionTitle
              eyebrow="Selected Work"
              title="Products designed for real-world use."
              copy="A collection of applications and digital products I've contributed to building."
            />
            <div className="projects-marquee">
              <div className="projects-list">
                {[...projects, ...projects].map((project, index) => {
                  const isDuplicate = index >= projects.length
                  return (
                    <article
                      className="project-card"
                      key={`${project.title}-${index}`}
                      aria-hidden={isDuplicate || undefined}
                    >
                      <div className="project-content">
                        <div className="project-number">
                          PROJECT / {project.number}
                        </div>
                        <p className="project-category">{project.category}</p>
                        <h3>{project.title}</h3>
                        <p className="project-description">
                          {project.description}
                        </p>
                        <ul>
                          {project.features.map((feature) => (
                            <li key={feature}>
                              <span />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="stack-list">
                          {project.stack.map((tech) => (
                            <span key={tech}>{tech}</span>
                          ))}
                        </div>
                        {project.url && (
                          <div className="project-actions">
                            <a
                              className="button small primary"
                              target="_blank"
                              rel="noopener noreferrer"
                              href={project.url}
                              tabIndex={isDuplicate ? -1 : undefined}
                            >
                              Live Website <Icon name="external" size={16} />
                            </a>
                          </div>
                        )}
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section more-projects">
          <div className="container">
            <SectionTitle
              eyebrow="More Digital Experiences"
              title="Business websites, built to perform."
            />
            <div className="small-project-grid">
              {smallerProjects.map((project, index) => (
                <a
                  className="small-project-card reveal"
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="small-project-inner">
                    <div className="small-project-front">
                      <img src={project.logo} alt={`${project.title} logo`} />
                      <span>
                        <i className="fa-solid fa-rotate" />
                        Hover to view details
                      </span>
                    </div>
                    <div className="small-project-back">
                      <div className="project-index">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <p>{project.tag}</p>
                      <h3>{project.title}</h3>
                      <span>{project.description}</span>
                      <div className="flip-link">
                        Visit website <Icon name="external" size={17} />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section education-section">
          <div className="container education-grid">
            <div>
              <SectionTitle
                eyebrow="Academic Background"
                title="Learning with purpose."
              />
              <div className="education-timeline reveal">
                <article>
                  <span className="edu-dot" />
                  <div className="date">2025 — 2027</div>
                  <h3>MSc Computer Applications</h3>
                  <p>Dr. D. Y. Patil Arts, Commerce and Science College</p>
                  <span className="study-status">Currently pursuing</span>
                </article>
                <article>
                  <span className="edu-dot" />
                  <div className="date">2022 — 2025</div>
                  <h3>BBA-CA — Bachelor of Computer Applications</h3>
                  <p>MES Senior College, Pune</p>
                  <span className="degree-result">Completed · CGPA 7.2</span>
                </article>
              </div>
            </div>
            <div className="certifications">
              <SectionTitle
                eyebrow="Certifications & Learning"
                title="Always extending the toolkit."
              />
              <div className="cert-list reveal">
                {[
                  ["AI", "Claude 101", "Anthropic", "March 2026"],
                  ["JV", "Java Masterclass", "Udemy", "January 2025"],
                  [
                    "DA",
                    "Data Analyst Certification",
                    "TuteDude",
                    "Date not provided",
                  ],
                ].map(([mark, title, issuer, date]) => (
                  <article key={title}>
                    <div className="cert-icon">{mark}</div>
                    <div>
                      <h3>{title}</h3>
                      <p>{issuer}</p>
                    </div>
                    <span>{date}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-heading reveal">
              <div className="eyebrow">
                <span />
                Let's Build Something Together
              </div>
              <h2>
                Have an interesting project
                <br />
                or <em>opportunity?</em>
              </h2>
              <p>Let's connect and create something meaningful.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-info reveal">
                <p>
                  I'm open to thoughtful conversations about full-stack
                  development, AI integrations, and meaningful product
                  opportunities.
                </p>
                <div className="contact-items">
                  <a href="mailto:neha.chavan2701@gmail.com">
                    <span>
                      <Icon name="mail" />
                    </span>
                    <div>
                      <small>Email</small>
                      <b>neha.chavan2701@gmail.com</b>
                    </div>
                  </a>
                  <a href="tel:+917058167104">
                    <span>
                      <Icon name="phone" />
                    </span>
                    <div>
                      <small>Phone</small>
                      <b>+91 70581 67104</b>
                    </div>
                  </a>
                  <div>
                    <span>
                      <Icon name="map" />
                    </span>
                    <div>
                      <small>Location</small>
                      <b>Pune, Maharashtra, India</b>
                    </div>
                  </div>
                </div>
                <div className="social-row">
                  <a
                    href="https://www.linkedin.com/in/nehachavan27/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="linkedin" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/NEHA270104"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="github" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-main">
          <div className="footer-brand">
            <div>
              <b>Neha Suresh Chavan</b>
              <span>AI & Full Stack Developer</span>
            </div>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="back-top" href="#home">
            Back to top <span>↑</span>
          </a>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Neha Suresh Chavan. All Rights Reserved.</span>
          <span>Designed with intention. Built with code.</span>
        </div>
      </footer>
    </div>
  )
}
