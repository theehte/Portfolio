import ehteshamPhoto from './assets/my_pic.jpeg';
import { useEffect, useState } from 'react'
import {
  AlignRight,
  ArrowDown,
  ArrowUpRight,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'

function Github({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .7C5.6.7.4 5.9.4 12.3c0 5.1 3.3 9.5 7.8 11 .6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.4-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .4.2.8.8.6 4.5-1.5 7.8-5.8 7.8-11C23.6 5.9 18.4.7 12 .7Z" />
    </svg>
  )
}

function Linkedin({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5h-17a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-15a1 1 0 0 0-1-1ZM8.1 18H5.3V9h2.8v9ZM6.7 7.8a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM18.7 18h-2.8v-4.4c0-1.1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3V18H9.9V9h2.7v1.2c.4-.7 1.3-1.5 2.7-1.5 2.8 0 3.4 1.9 3.4 4.3v5Z" />
    </svg>
  )
}

const projectCategories = [
  {
    id: 'ai',
    number: '01',
    title: 'GenAI & Agentic AI',
    label: 'Intelligent and autonomous systems',
    description:
      'LLM products and multi-agent workflows that reason, use tools, and complete meaningful work.',
    projects: [
      {
        title: 'Autonomous JUnit Test Generator',
        description: 'An enterprise AI agent that reduced unit test creation time by 80%.',
        tags: ['Java', 'JUnit', 'AI Agents'],
      },
      {
        title: 'SOP Executor Agent',
        description: 'A multi-agent workflow with custom hooks that removed more than 50% of manual operational steps.',
        tags: ['LangGraph', 'MCP', 'Automation'],
      },
      {
        title: 'Engineering Knowledge RAG',
        description: 'A retrieval agent that indexes internal frameworks to make engineering documentation immediately accessible.',
        tags: ['RAG', 'AWS EC2', 'Enterprise AI'],
      },
      {
        title: 'RoleReady',
        description: 'A FastAPI application that creates tailored, ATS-friendly resumes from a master resume and job description.',
        tags: ['FastAPI', 'OpenAI', 'SQLite'],
        url: 'https://github.com/theehte/RoleReady',
      },
      {
        title: 'Fine-tuning LLM',
        description: 'A notebook-based exploration of adapting a large language model for specialized behavior.',
        tags: ['LLM', 'Fine-tuning', 'Jupyter'],
        url: 'https://github.com/theehte/Fine-tuning-LLM',
      },
      {
        title: 'Translator from Scratch',
        description: 'A transformer model and training pipeline implemented from scratch in Python.',
        tags: ['Transformer', 'Python', 'NLP'],
        url: 'https://github.com/theehte/Translator-from-Scratch',
      },
    ],
  },
  {
    id: 'ml',
    number: '02',
    title: 'Machine Learning',
    label: 'Predictive systems',
    description:
      'Deep learning and computer vision experiments across medical imaging, language, and recommendations.',
    projects: [
      {
        title: 'Brain Tumor Segmentation',
        description: '3D MRI segmentation comparing U-Net, V-Net, and SegNet, with U-Net reaching an 88.5% Dice score.',
        tags: ['CNN', 'U-Net', 'Medical AI'],
        url: 'https://github.com/theehte/Brain-Tumor-Segmentation',
      },
      {
        title: 'X-Ray Image Classification',
        description: 'A Python computer vision project focused on classifying X-ray imagery.',
        tags: ['Python', 'Computer Vision', 'Classification'],
        url: 'https://github.com/theehte/X-Ray-image-classification',
      },
      {
        title: 'Movie Review Sentiment',
        description: 'An LSTM classifier trained on 50,000 IMDB reviews and evaluated with K-fold validation.',
        tags: ['LSTM', 'NLP', 'Python'],
        url: 'https://github.com/theehte/Sentiment-Analysis-on-movie-reviews-using-LSTMs',
      },
      {
        title: 'Fashion Recommender',
        description: 'A ResNet50-based visual recommender that finds products similar to an uploaded image.',
        tags: ['ResNet50', 'Deep Learning', 'Recommendation'],
        url: 'https://github.com/theehte/I-want-to-buy-this-thing-',
      },
    ],
  },
  {
    id: 'analytics',
    number: '03',
    title: 'Analytics',
    label: 'Decision intelligence',
    description:
      'Interactive analysis that turns complex datasets into clear and usable decisions.',
    projects: [
      {
        title: 'British Airways Reviews',
        description: 'An interactive Tableau dashboard for comparing airline review metrics across aircraft and time periods.',
        tags: ['Tableau', 'Analytics', 'Dashboard'],
        url: 'https://github.com/theehte/British_Airways_Reviews-Analysis-on-Tableau',
      },
    ],
  },
  {
    id: 'development',
    number: '04',
    title: 'Development',
    label: 'Software products',
    description:
      'Applications and systems designed to make communities and developer workflows work better.',
    projects: [
      {
        title: 'IITJ Forum',
        description: 'A team-built online forum for the IIT Jodhpur community to interact and exchange ideas.',
        tags: ['Full Stack', 'Community', 'Team Project'],
        url: 'https://github.com/theehte/IITJ-Forum',
      },
      
    ],
  },
]

const experience = [
  {
    id: 'hcl',
    company: 'HCLTech',
    role: 'Software Engineer / GenAI Tech Lead',
    period: '2025 - Present',
    location: 'Hyderabad, India',
    logo: 'https://www.hcltech.com/themes/custom/hcltech/images/hcltech-logo.svg',
    statement: 'Making enterprise work feel less enterprise.',
    summary: 'Autonomous agents, internal platforms, and production AI systems built for real engineering teams.',
    highlights: ['JUnit agent', 'SOP executor', 'RAG platform', 'RTO compliance site'],
    metrics: [
      { value: '80%', label: 'faster tests' },
      { value: '50%+', label: 'manual steps removed' },
      { value: '200+', label: 'developers reached' },
    ],
    featuredBuild: 'RTO Compliance Site',
  },
  {
    id: 'holiday',
    company: 'Holiday Tribe',
    role: 'Product Management',
    period: 'May - Aug 2025',
    location: 'Gurugram, India',
    logo: 'https://www.google.com/s2/favicons?domain=holidaytribe.com&sz=256',
    statement: 'Teaching travel bots to convert conversations.',
    summary: 'Shaped AI voice and Instagram bot experiences through experiments, metrics, and fast product loops.',
    highlights: ['Voice AI', 'Instagram bot', 'A/B testing', 'Python evals'],
    metrics: [
      { value: '+27%', label: 'qualified leads' },
      { value: '+50%', label: 'completed calls' },
    ],
  },
  {
    id: 'zummit',
    company: 'Zummit Infolabs',
    role: 'Junior Data Scientist',
    period: 'Jul - Nov 2024',
    location: 'Remote',
    logo: 'https://www.zummitlabs.com/Zummit_Logo.jpg',
    statement: 'Where raw data became working intuition.',
    summary: 'Built early experience across applied data science, machine learning, and product-focused experimentation.',
    highlights: ['Data science', 'Machine learning', 'Python', 'Pandas'],
    metrics: [],
  },
]

function CategoryArt({ type }) {
  if (type === 'ai') {
    return (
      <div className="category-art agentic-art" aria-hidden="true">
        <span className="agent-node node-main">AI</span>
        <span className="agent-node node-a">01</span>
        <span className="agent-node node-b">02</span>
        <span className="agent-node node-c">03</span>
        <i className="agent-line line-a" />
        <i className="agent-line line-b" />
        <i className="agent-line line-c" />
      </div>
    )
  }

  if (type === 'ml') {
    return (
      <div className="category-art ml-art" aria-hidden="true">
        {Array.from({ length: 16 }, (_, index) => <span key={index} />)}
        <strong>ML</strong>
      </div>
    )
  }

  if (type === 'analytics') {
    return (
      <div className="category-art analytics-art" aria-hidden="true">
        <span style={{ '--height': '35%' }} />
        <span style={{ '--height': '58%' }} />
        <span style={{ '--height': '82%' }} />
        <span style={{ '--height': '66%' }} />
        <i>+27%</i>
      </div>
    )
  }

  return (
    <div className="category-art development-art" aria-hidden="true">
      <span>&lt;/&gt;</span><i>build</i>
    </div>
  )
}

function SectionTitle({ number, eyebrow, children }) {
  return (
    <div className="section-heading reveal">
      <p className="section-kicker"><span>{number}</span>{eyebrow}</p>
      <h2>{children}</h2>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategoryId, setActiveCategoryId] = useState(null)
  const activeCategory = projectCategories.find((category) => category.id === activeCategoryId)

  useEffect(() => {
    const root = document.documentElement
    const updatePointer = (event) => {
      root.style.setProperty('--pointer-x', `${event.clientX}px`)
      root.style.setProperty('--pointer-y', `${event.clientY}px`)
    }
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      root.style.setProperty('--scroll-progress', progress)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.12 },
    )

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    window.addEventListener('pointermove', updatePointer, { passive: true })
    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()

    return () => {
      observer.disconnect()
      window.removeEventListener('pointermove', updatePointer)
      window.removeEventListener('scroll', updateProgress)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setActiveCategoryId(null)
      }
    }

    document.body.style.overflow = menuOpen || activeCategoryId ? 'hidden' : ''
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen, activeCategoryId])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-wrapper">
      <div className="scroll-progress" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Md Ehtesham, home">
          ME<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="nav-contact">Let's talk <ArrowUpRight size={14} /></a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          <a href="#about" onClick={closeMenu}>About <span>01</span></a>
          <a href="#work" onClick={closeMenu}>Work <span>02</span></a>
          <a href="#experience" onClick={closeMenu}>Experience <span>03</span></a>
          <a href="#contact" onClick={closeMenu}>Contact <span>04</span></a>
        </nav>
      </div>

      {activeCategory && (
        <div
          className="drawer-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveCategoryId(null)
          }}
        >
          <aside
            className={`project-drawer category-${activeCategory.id}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
          >
            <div className="drawer-header">
              <div>
                <span>{activeCategory.number} / Project category</span>
                <h2 id="drawer-title">{activeCategory.title}</h2>
              </div>
              <button
                className="drawer-close"
                type="button"
                onClick={() => setActiveCategoryId(null)}
                aria-label="Close project category"
                autoFocus
              >
                <X />
              </button>
            </div>
            <p className="drawer-intro">{activeCategory.description}</p>
            <div className="drawer-projects">
              {activeCategory.projects.map((project, index) => (
                <article className="drawer-project" key={project.title}>
                  <span className="drawer-project-number">{String(index + 1).padStart(2, '0')}</span>
                  <div className="drawer-project-copy">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="drawer-project-bottom">
                      <div className="project-tags">
                        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                      {project.url ? (
                        <a href={project.url} target="_blank" rel="noreferrer">
                          GitHub <ArrowUpRight size={17} />
                        </a>
                      ) : (
                        <span className="private-label">Private enterprise work</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <a className="drawer-github" href="https://github.com/theehte?tab=repositories" target="_blank" rel="noreferrer">
              <Github size={18} /> Browse all public repositories <ArrowUpRight size={16} />
            </a>
          </aside>
        </div>
      )}

      <main>
        <section className="hero" id="top">
          <div className="pointer-glow" aria-hidden="true" />
          <div className="hero-ambient" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-copy">
            <p className="availability"><span /> GenAI Tech Lead / Software Engineer</p>
            <div className="hero-word-loop" aria-label="Focus areas">
              <div>
                <span>Autonomous agents</span>
                <span>RAG products</span>
                <span>Workflow automation</span>
                <span>Product Management</span>
              </div>
            </div>
            <h1 aria-label="Building thoughtful systems designed to move work forward">
              <span className="hero-line"><span>Building thoughtful systems,</span></span>
              <span className="hero-line"><span>designed to move</span></span>
              <span className="hero-line accent-line"><span>work forward.</span></span>
            </h1>
            <div className="hero-intro">
              <p>
                I turn complex operational workflows into clear, dependable AI
                products, autonomous agents, and automation that teams can trust.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore work <ArrowDown size={17} /></a>
                <a className="text-link" href="https://www.linkedin.com/in/md-ehtesham001" target="_blank" rel="noreferrer">
                  LinkedIn <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Temporary portrait placeholder">
            <div className="portrait-frame">
              <img
                src={ehteshamPhoto}
                 alt="Ehtesham's photo" />
              
            </div>
          </div>
        </section>

        <section className="alma-mater" aria-labelledby="alma-title">
          <div className="alma-label">
            <span>Alma Mater</span>
            <i aria-hidden="true" />
          </div>
          <div className="alma-identity">
            <strong aria-hidden="true">IITJ</strong>
            <div>
              <h2 id="alma-title">Indian Institute of Technology Jodhpur</h2>
              <p>Bachelor of Technology</p>
            </div>
          </div>
          <div className="alma-year">
            <span>Graduating batch</span>
            <strong>2025</strong>
          </div>
          <div className="alma-motion" aria-hidden="true"><span /></div>
        </section>

        <section className="about light-section" id="about">
          <SectionTitle number="01" eyebrow="About">
            Human problems.<br /><em>Machine-scale</em> solutions.
          </SectionTitle>
          <div className="about-grid">
            <p className="about-lead reveal">
              I work where software engineering, AI, and product thinking meet.
            </p>
            <div className="about-body reveal">
              <p>
                I am an IIT Jodhpur graduate with majors in Computer Science and
                Biotechnology, focused on building applied AI that makes difficult
                work feel simple.
              </p>
              <p>
                Across HCLTech, Holiday Tribe, and Zummit Infolabs, I have built
                AI-powered automation, multi-agent workflows, RAG systems, and
                evaluation pipelines designed around real user and business outcomes.
              </p>
            </div>
          </div>

          <div className="capability-grid">
            <article className="capability-card reveal">
              <span className="card-index">A</span>
              <h3>Agentic systems</h3>
              <p>Autonomous agents, orchestration, tools, memory, and human-in-the-loop workflows.</p>
            </article>
            <article className="capability-card reveal">
              <span className="card-index">B</span>
              <h3>Applied intelligence</h3>
              <p>RAG, LLM applications, NLP, model evaluation, and data-driven automation.</p>
            </article>
            <article className="capability-card reveal">
              <span className="card-index">C</span>
              <h3>Product engineering</h3>
              <p>Scalable APIs, cloud deployment, experimentation, metrics, and reliable delivery.</p>
            </article>
          </div>

        </section>

        <section className="work dark-section" id="work">
          <SectionTitle number="02" eyebrow="Project index">
            Pick a field.<br /><em>Open the work.</em>
          </SectionTitle>
          <div className="category-intro reveal">
            
            <span>Select a category to explore</span>
          </div>
          <div className="category-grid">
            {projectCategories.map((category) => (
              <button
                className={`category-widget category-${category.id} reveal`}
                type="button"
                key={category.id}
                onClick={() => setActiveCategoryId(category.id)}
                aria-haspopup="dialog"
              >
                <div className="category-meta">
                  <span>{category.number}</span>
                  {/* <span>{category.projects.length} {category.projects.length === 1 ? 'project' : 'projects'}</span> */}
                </div>
                <CategoryArt type={category.id} />
                <div className="category-copy">
                  <p>{category.label}</p>
                  <div>
                    <h3>{category.title}</h3>
                    <span className="category-open">Open <ArrowUpRight size={18} /></span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="experience-showcase light-section" id="experience">
          <div className="experience-showcase-heading">
            <SectionTitle number="03" eyebrow="Experience">
              Places I made<br /><em>things move.</em>
            </SectionTitle>
            <p className="reveal">Not a timeline. A collection of teams, systems, and outcomes that shaped how I build.</p>
          </div>
          <div className="company-grid">
            {experience.map((item) => (
              <article className={`company-card company-${item.id} reveal`} key={item.company}>
                <div className="company-brand-stage">
                  <div className="company-logo-wrap">
                    <img src={item.logo} alt={`${item.company} logo`} />
                  </div>
                  {item.highlights.map((highlight, index) => (
                    <span className={`work-chip work-chip-${index + 1}`} key={highlight}>{highlight}</span>
                  ))}
                </div>
                <div className="company-story">
                  <div className="company-meta">
                    <span>{item.role}</span>
                    <span>{item.period} / {item.location}</span>
                  </div>
                  <h3>{item.statement}</h3>
                  <p>{item.summary}</p>
                  {item.featuredBuild && (
                    <div className="featured-build">
                      <span>Also shipped</span>
                      <strong>{item.featuredBuild}</strong>
                      <p>Built an internal site to make return-to-office compliance visible and easier to manage.</p>
                    </div>
                  )}
                  {item.metrics.length > 0 && (
                    <div className="company-metrics">
                      {item.metrics.map((metric) => (
                        <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

        </section>

        <section className="contact" id="contact">
          <div className="contact-topline reveal">
            <p><span /> Open to building what matters</p>
          </div>
          <div className="contact-main">
            <p className="contact-kicker reveal">Have a hard problem?</p>
            <h2 className="reveal">Let's make it<br /><em>work.</em></h2>
            <div className="contact-links reveal">
              <a href="https://www.linkedin.com/in/md-ehtesham001" target="_blank" rel="noreferrer">
                <Linkedin size={20} /> Connect on LinkedIn <ArrowUpRight size={18} />
              </a>
              <a href="https://github.com/theehte" target="_blank" rel="noreferrer">
                <Github size={20} /> Explore GitHub <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <footer className='footer-right'>
            <div className="wordmark footer-mark" >ME<span>.</span></div>
            
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App
