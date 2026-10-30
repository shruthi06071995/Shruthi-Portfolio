import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Code2, Github,
  Linkedin, Mail, Menu, Moon, Sparkles, Sun, X, ExternalLink, CheckCircle2
} from "lucide-react";
import { skills, projects, socialLinks } from "./data";
import image from "../src/images/shruthi-photo.png";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

function SectionLabel({ children, number }) {
  return (
    <div className="section-label">
      <span className="label-line" />
      <span>{number} / {children}</span>
    </div>
  );
}

function App() {
  const [light, setLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [copied, setCopied] = useState(false);

  const email = socialLinks.email || "your.email@example.com";
  const closeMenu = () => setMenuOpen(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <main className={light ? "site light-mode" : "site"}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Shruthi home">
          <span className="brand-dot" /> shruthi<span className="brand-period">.</span>
        </a>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={() => setLight(!light)} aria-label="Toggle color theme">
            {light ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero section-wrap" id="home">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={reveal}>
          <div className="availability"><span className="availability-dot" /> OPEN TO OPPORTUNITIES</div>
          <p className="eyebrow">HELLO, I'M SHRUTHI</p>
          <h1>I build thoughtful<br /><span className="gradient-text">digital experiences.</span></h1>
          <p className="hero-description">
            I'm Shruthi, a React.js developer with hands-on experience
            building responsive web applications. I enjoy creating
            user-friendly interfaces and learning how frontend,
            backend, and databases work together.
          </p>
          <div className="hero-buttons">
            <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
            <a className="button button-quiet" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
          </div>
          <div className="hero-socials">
            <a href={socialLinks.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            {socialLinks.linkedin && <a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>}
            <span className="social-divider" />
            <span>Coimbatore, India</span>
          </div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
          <div className="visual-grid" />
          <div className="photo-frame">
            <div className="photo-placeholder">
              <img src={image} alt="Shruthi - React Developer" className="profile-photo" />
              <div className="photo-orbit orbit-one" />
              <div className="photo-orbit orbit-two" />
              <div className="portrait-mark"><span></span></div>
              <div className="photo-note">Motivated<br /><small>Self Learner</small></div>
            </div>
            <div className="photo-caption"><span className="caption-dot" /> Building, learning, improving.</div>
          </div>
          <div className="floating-card code-card"><Code2 size={18} /><div><strong>Full-stack mindset</strong><span>Frontend · API · Database</span></div></div>
          <div className="floating-card spark-card"><Sparkles size={18} /><span>Curious by nature</span></div>
          <div className="hero-index">01 — 04</div>
        </motion.div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      </section>

      <section className="section-wrap about-section" id="about">
        <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
        <div className="about-grid">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <h2>Curious mind.<br /><span className="muted-heading">Practical builder.</span></h2>
          </motion.div>
          <motion.div className="about-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <p>I'm a developer focused on building responsive, accessible,
              and user-friendly web applications using React.js and
              modern frontend technologies.</p>
            <p>Through hands-on projects, I've developed practical skills
              in JavaScript, React, Node.js, Express.js, and MongoDB.
              I enjoy solving problems, improving user experiences,
              and continuously strengthening my development skills.</p>
            <a className="text-link" href="#contact">Let’s work together <ArrowUpRight size={16} /></a>
          </motion.div>
        </div>
        <div className="principles">
          <div><span>01</span><strong>Build with purpose</strong><p>Useful experiences over unnecessary complexity.</p></div>
          <div><span>02</span><strong>Keep learning</strong><p>Grow through projects, feedback, and practice.</p></div>
          <div><span>03</span><strong>Think end-to-end</strong><p>Care about UI, APIs, data, and reliability.</p></div>
        </div>
      </section>

      <section className="section-wrap skills-section" id="skills">
        <SectionLabel number="02">MY TOOLKIT</SectionLabel>
        <div className="section-heading-row">
          <div><h2>Skills that bring<br /><span className="muted-heading">ideas to life.</span></h2></div>
          <p className="section-intro">A growing toolkit for creating responsive interfaces and full-stack applications.</p>
        </div>
        <div className="skills-grid">
          {skills.map((group, i) => (
            <motion.article className={`skill-card ${group.color}`} key={group.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal} transition={{ delay: i * 0.07 }}>
              <div className="skill-card-top"><span className="skill-icon"><Code2 size={19} /></span><span className="card-index">0{i + 1}</span></div>
              <h3>{group.title}</h3>
              <ul>{group.items.map(item => <li key={item}><span className="skill-bullet" />{item}</li>)}</ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-wrap work-section" id="work">
        <SectionLabel number="03">SELECTED WORK</SectionLabel>
        <div className="section-heading-row">
          <div><h2>Made with care.<br /><span className="muted-heading">Built to work.</span></h2></div>
          <p className="section-intro">A selection of projects that reflect my learning, problem-solving, and development skills.</p>
        </div>
        <div className="project-layout">
          <div className="project-tabs">
            {projects.map((project, i) => (
              <button key={project.number} className={activeProject === i ? "project-tab active" : "project-tab"} onClick={() => setActiveProject(i)}>
                <span>{project.number}</span><span>{project.title}</span><ArrowUpRight size={16} />
              </button>
            ))}
            <div className="project-note"><Sparkles size={16} /><p>More projects and improvements are on the way.</p></div>
          </div>
          {projects.map((project, i) => activeProject === i && (
            <motion.article className="project-detail" key={project.number} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
              <div className={`project-preview ${project.visual}`}>
                <div className="preview-top"><span /><span /><span /><small>{project.visual === "famms" ? "FAMMS — ONLINE STORE" : "SHRUTHI — PORTFOLIO"}</small></div>
                {project.visual === "famms" ? (
                  <div className="store-preview"><div className="store-brand">FAMMS <span>app</span></div><div className="store-headline">Find your<br /><em>everyday style.</em></div><div className="store-pill">EXPLORE COLLECTION <ArrowRight size={12} /></div><div className="store-shape shape-one" /><div className="store-shape shape-two" /></div>
                ) : (
                  <div className="mini-portfolio"><span>PORTFOLIO / 2026</span><strong>Ideas into<br /><i>experiences.</i></strong><div className="mini-lines"><span /><span /><span /></div></div>
                )}
              </div>
              <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-tags">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div>
                <div className="project-links">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Source code <ArrowUpRight size={14} /></a>}
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live demo <ArrowUpRight size={14} /></a>}
                  {!project.github && !project.live && <span className="coming-soon">Add your repository and live URL</span>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-wrap contact-section" id="contact">
        <SectionLabel number="04">YOUR TURN</SectionLabel>
        <div className="contact-panel">
          <div className="contact-orb" />
          <div className="contact-copy">
            <p className="eyebrow">HAVE A ROLE OR PROJECT IN MIND?</p>
            <h2>Let’s make<br /><span className="gradient-text">something meaningful.</span></h2>
            <p>I’m looking for opportunities to contribute, learn from a team, and build products that make a difference.</p>
            <div className="contact-actions">
              <button className="button button-primary" onClick={copyEmail}><Mail size={17} /> {copied ? "Email copied!" : "Copy email"} {copied ? <CheckCircle2 size={16} /> : <ArrowUpRight size={16} />}</button>
              <a className="button button-quiet" href={socialLinks.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              {socialLinks.linkedin && <a className="button button-quiet" href={socialLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>}
            </div>
          </div>
          <div className="contact-side"><span>LET’S CONNECT</span><ArrowDownRight size={34} /><p>Good things happen when thoughtful people build together.</p></div>
        </div>
      </section>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-dot" /> shruthi<span className="brand-period"></span></a>
        <p>Designed & developed by Shruthi.</p>
        <a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14} /></a>
        <small>© {new Date().getFullYear()} Shruthi. All rights reserved.</small>
      </footer>
    </main>
  );
}

export default App;
