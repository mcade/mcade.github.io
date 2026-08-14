import type { CSSProperties, ReactElement } from "react";
import {
  AsciiHero,
  Button,
  CommunityBadge,
  EyebrowPill,
  FloatingSparkles,
  GradientText,
  NodeGraphBackground,
  Rotator,
  Sparkle,
  StatusDot,
} from "performative-ui";
import {
  ArrowDown,
  AudioWaveform,
  Bot,
  BriefcaseBusiness,
  Clock3,
  Code2,
  ExternalLink,
  Headphones,
  Languages,
  Layers3,
  Mail,
  Map,
  MessageSquareText,
  PhoneCall,
  RadioTower,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import { SlippyWords, type SlippyWord } from "./components/SlippyWords";
import ggTranslatorImage from "../website-pics/ggtranslator-landing-page.webp";
import patientGlueImage from "../website-pics/patient-glue-landing-page.webp";
import peoplesVoicemailImage from "../website-pics/peoples-voicemail-landing-page.webp";
import spitNotesImage from "../website-pics/spit-notes-landing-page.webp";
import squatclockImage from "../website-pics/squatclock-landing-page.webp";

type Project = {
  id: string;
  name: string;
  href: string;
  status: string;
  tagline: string;
  role: string;
  accent: string;
  tags: string[];
  icon: ReactElement;
  bullets: string[];
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
};

const links = {
  email: "mailto:mcadenhe@gmail.com",
  linkedin: "https://linkedin.com/in/mcadenhe",
  github: "https://github.com/mcade",
};

const slippyRows: SlippyWord[][] = [
  [
    "customer discovery",
    { label: "AI-native prototyping", gradient: true },
    "roadmap ownership",
    "workflow research",
    "support loops",
    "operator empathy",
  ],
  [
    "regulated workflows",
    "EHR integrations",
    { label: "ship fast, learn faster", gradient: true },
    "SMS automation",
    "care-team operations",
    "business model design",
  ],
  [
    "Elixir/Phoenix",
    "React",
    { label: "agent-orchestrated development", gradient: true },
    "OpenAI API",
    "voice interfaces",
    "product taste",
  ],
];

const projects: Project[] = [
  {
    id: "spit-notes",
    name: "Spit Notes",
    href: "https://getspitnotes.com",
    status: "Live product",
    tagline: "The fastest notes app for songwriters to capture lyrics, recordings, and half-finished ideas before they disappear.",
    role: "Founder · Product, design, and iOS development",
    accent: "#a7ff3d",
    tags: ["Songwriting", "iOS", "AI-assisted writing", "Audio tools"],
    icon: <AudioWaveform aria-hidden="true" />,
    bullets: [
      "Unifies the two places song ideas usually get lost: Notes and Voice Memos.",
      "Helps writers move through creative blocks, align recordings to lyrics, and isolate vocal or instrumental stems.",
      "Built from my own songwriting workflow and shipped as a real App Store product.",
    ],
    image: spitNotesImage,
    imageAlt: "Spit Notes landing page showing the songwriting app and its Finish More Songs message",
    imagePosition: "center top",
  },
  {
    id: "squatclock",
    name: "SquatClock",
    href: "https://squatclock.com",
    status: "Live product",
    tagline: "A cross-platform movement reminder that makes an hourly squat break impossible to ignore and easy to finish.",
    role: "Solo builder · Product, design, and development",
    accent: "#ff7a2f",
    tags: ["Behavior design", "Wellness", "Cross-platform", "Consumer"],
    icon: <Clock3 aria-hidden="true" />,
    bullets: [
      "Turns the vague goal of sitting less into one clear action: ten squats every hour.",
      "Meets users where they work with mobile apps and an animated desktop reminder.",
      "Keeps the experience deliberately lightweight so the habit—not the app—stays in focus.",
    ],
    image: squatclockImage,
    imageAlt: "SquatClock landing page showing its mobile and desktop movement reminders",
    imagePosition: "center top",
  },
  {
    id: "gg-translator",
    name: "GG Translator",
    href: "https://ggtranslator.com",
    status: "Live product",
    tagline: "A desktop voice tool that turns heated multiplayer comms into something teammates can actually use.",
    role: "Solo builder · Product, design, and desktop development",
    accent: "#ff4d8d",
    tags: ["Voice communication", "Desktop", "Gaming", "AI tone translation"],
    icon: <Languages aria-hidden="true" />,
    bullets: [
      "Preserves the useful intent in a callout while removing the hostility that makes teams tune out.",
      "Supports spoken input and paste-to-chat so it fits different games and communication styles.",
      "Turns a playful premise into a downloadable product for both PC and Mac.",
    ],
    image: ggTranslatorImage,
    imageAlt: "GG Translator landing page showing its rage-to-constructive voice translation concept",
    imagePosition: "38% center",
  },
  {
    id: "patient-glue",
    name: "Patient Glue",
    href: "https://patient-glue-static.pages.dev/",
    status: "Past venture",
    tagline: "Healthcare messaging and scheduling automation designed around the real work of care teams.",
    role: "Founder · Product, design, engineering, and support",
    accent: "#19d7ff",
    tags: ["Healthcare operations", "Patient messaging", "Scheduling", "EHR workflows"],
    icon: <Stethoscope aria-hidden="true" />,
    bullets: [
      "Created an affordable two-way messaging alternative for practices limited by their EHR.",
      "Automated scheduling, reminders, waitlists, follow-ups, and rescheduling conversations.",
      "Owned the full customer loop, from discovery and roadmap decisions through onboarding and support.",
    ],
    image: patientGlueImage,
    imageAlt: "Patient Glue landing page presenting patient messaging and appointment tools for care teams",
    imagePosition: "center center",
  },
  {
    id: "peoples-voicemail",
    name: "People's Voicemail",
    href: "https://pvm-static.pages.dev/",
    status: "Past product",
    tagline: "A voice-first community discussion platform for public voicemail boards.",
    role: "Founder · Product, design, and development",
    accent: "#f5d547",
    tags: ["Voice communities", "Civic tech", "Transcription", "Subscriptions"],
    icon: <MessageSquareText aria-hidden="true" />,
    bullets: [
      "Created a public voicemail box that worked like a voice-based community forum.",
      "Integrated transcription and language analysis to surface key phrases, sentiment, and constituent themes.",
      "Designed threaded reply mechanics, voter verification, reactions, and subscription pricing.",
    ],
    image: peoplesVoicemailImage,
    imageAlt: "People's Voicemail landing page inviting people to give voice to their community",
    imagePosition: "center center",
  },
  {
    id: "family-blessings-phone",
    name: "Family Blessings Phone",
    href: "https://family-blessings-phone-static.pages.dev/",
    status: "Product archive",
    tagline: "A phone-based gratitude journal for families to share what they are thankful for.",
    role: "Solo builder · Product, design, and development",
    accent: "#66e2b3",
    tags: ["Voice", "Telecom", "Privacy", "Family"],
    icon: <PhoneCall aria-hidden="true" />,
    bullets: [
      "Converted a family blessings journal exercise into a simple phone-number product.",
      "Designed around low-friction participation: call, record, and listen without requiring app literacy.",
      "Added phone-number allowlists to keep private family audio private.",
    ],
  },
  {
    id: "call-a-dev",
    name: "Call a Dev",
    href: "https://call-a-dev-static.pages.dev/",
    status: "Product archive",
    tagline: "A live programming-help marketplace for getting unstuck on code.",
    role: "Solo builder · Product, design, and development",
    accent: "#eaa8ff",
    tags: ["Marketplace", "Developer tools", "Voice", "Support"],
    icon: <Headphones aria-hidden="true" />,
    bullets: [
      "Framed a developer pain point as a direct service: stop pushing the ship date back and get live help.",
      "Designed two-sided marketplace language for people needing help and developers providing it.",
      "Built the positioning and interaction model around fast problem resolution.",
    ],
  },
];

const experience = [
  {
    role: "Founding Engineer",
    company: "Patient Glue",
    time: "Jan 2023 - Dec 2025",
    points: [
      "Founded and built a healthcare SaaS platform for SMS patient engagement and EHR-backed workflows.",
      "Owned roadmap, customer support, troubleshooting, product iteration, and post-launch enablement.",
      "Built scheduling, waitlist, reminder, follow-up, and rescheduling automations for care teams.",
    ],
  },
  {
    role: "Software Engineer and Tech Lead",
    company: "Mindful Care",
    time: "May 2021 - Jun 2022",
    points: [
      "Hired and led a 10-person technology team through a digital transformation in regulated healthcare.",
      "Replaced a WordPress site with a HIPAA-conscious web application integrated with the EHR.",
      "Delivered automations for intake, scheduling, insurance verification, payments, and BI reporting.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Independent",
    time: "Dec 2012 - Mar 2021",
    points: [
      "Built responsive web applications and business websites for small-business clients.",
      "Translated business needs into shipped systems, support routines, and practical technical decisions.",
    ],
  },
  {
    role: "B.S. Management, Finance Concentration",
    company: "Purdue University",
    time: "Dec 2011",
    points: [
      "Krannert School of Management graduate and Dr. Cornell A. Bell Business Opportunity Program Scholar.",
    ],
  },
];

function App() {
  return (
    <div className="site-shell pui-theme">
      <header className="topbar">
        <a className="brand-lockup" href="#top" aria-label="Maurice Cadenhead home">
          <span className="brand-mark">MC</span>
          <span>Maurice Cadenhead</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#method">Method</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <AsciiHero
            variant="bare"
            colorful
            baseOpacity={0.18}
            spotlightOpacity={0.9}
            spotlightRadius={10}
            className="hero-ascii"
          />

          <div className="hero-content">
            <div className="hero-copy">
              <EyebrowPill icon={<Sparkle />}>AI-first product builder</EyebrowPill>
              <h1>
                <span>I build AI-powered products for</span>
                <span className="hero-rotator" aria-live="polite">
                  <GradientText>
                    <Rotator
                      words={["patients", "songwriters", "operators", "founders"]}
                    />
                  </GradientText>
                </span>
              </h1>
              <p>
                I am Maurice Cadenhead, a founder-engineer and product-minded builder who turns
                messy workflows into shipped software: from HIPAA-conscious healthcare automation
                to AI-assisted creative tools.
              </p>
              <div className="hero-actions" aria-label="Hero actions">
                <Button as="a" href="#work" variant="glow" size="lg">
                  View work <ArrowDown size={17} aria-hidden="true" />
                </Button>
                <Button as="a" href="#resume" variant="ghost" size="lg">
                  Resume <BriefcaseBusiness size={17} aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section slippy-section" aria-labelledby="builder-heading">
          <div className="section-heading">
            <EyebrowPill icon={<Sparkles size={14} aria-hidden="true" />}>Product signal</EyebrowPill>
            <h2 id="builder-heading">Founder ownership, product taste, engineering depth.</h2>
            <p>
              My titles have been founder, tech lead, and engineer. The work has been product:
              talk to users, learn the workflow, prototype the leverage, ship, support, and iterate.
            </p>
          </div>
          <SlippyWords rows={slippyRows} intensity={220} gap={12} />
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-heading">
          <div className="section-heading work-heading">
            <div>
              <EyebrowPill icon={<Layers3 size={14} aria-hidden="true" />}>Selected work</EyebrowPill>
              <h2 id="work-heading">Products shaped around real behavior.</h2>
            </div>
          </div>

          <div className="product-grid">
            {projects.map((project, index) => (
              <article
                className={`product-card ${
                  index < 3 ? "product-card--featured" : "product-card--supporting"
                } ${project.image ? "" : "product-card--no-image"}`}
                key={project.id}
                style={{ "--project-accent": project.accent } as CSSProperties}
              >
                <a
                  className={`project-preview ${project.image ? "" : "project-preview--fallback"}`}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.name}`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt ?? `${project.name} product landing page`}
                      loading={index === 0 ? "eager" : "lazy"}
                      style={{ objectPosition: project.imagePosition }}
                    />
                  ) : (
                    <span className="preview-fallback-content">
                      <span className="preview-fallback-icon">{project.icon}</span>
                      <span>Product concept</span>
                      <strong>{project.name}</strong>
                    </span>
                  )}
                  <span className="preview-link-label">
                    {project.status === "Live product" ? "Open live product" : "View product archive"}
                    <ExternalLink size={14} aria-hidden="true" />
                  </span>
                </a>

                <div className="product-story">
                  <div className="product-kicker">
                    <span className="project-status">
                      <StatusDot color={project.accent} /> {project.status}
                    </span>
                  </div>

                  <div className="product-title-row">
                    <span className="project-icon">{project.icon}</span>
                    <h3>{project.name}</h3>
                  </div>

                  <p className="product-tagline">{project.tagline}</p>
                  <p className="product-role">{project.role}</p>

                  <ul className="case-bullets">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>
                        <span className="bullet-mark" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="tag-row" aria-label={`${project.name} focus areas`}>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                    {project.status === "Live product" ? `Explore ${project.name}` : "See the original product"}
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section method-section" id="method" aria-labelledby="method-heading">
          <NodeGraphBackground
            density={58}
            speed={0.32}
            linkDistance={150}
            colors={["#a7ff3d", "#19d7ff", "#ff4d8d", "#f5d547"]}
            linkColor="#22c55e"
            baseOpacity={0.18}
            hoverDistance={240}
            hoverBrighten={1}
            hoverGravity={0.012}
          />
          <div className="method-content">
            <div className="section-heading">
              <EyebrowPill icon={<Map size={14} aria-hidden="true" />}>How I work</EyebrowPill>
              <h2 id="method-heading">I turn operating knowledge into software.</h2>
              <p>
                The throughline from healthcare to songwriter tools is the same: understand the
                workflow deeply enough to design the smallest useful system.
              </p>
            </div>

            <div className="method-grid">
              <MethodStep
                icon={<Users aria-hidden="true" />}
                title="Find the workflow"
                body="Talk to users, watch where work stalls, and separate loud requests from costly bottlenecks."
              />
              <MethodStep
                icon={<Bot aria-hidden="true" />}
                title="Prototype the leverage"
                body="Use AI, automation, and simple interfaces to test whether the product changes the user's day."
              />
              <MethodStep
                icon={<Layers3 aria-hidden="true" />}
                title="Ship the system"
                body="Own the unglamorous loop: data flow, support, docs, rollout, feedback, and iteration."
              />
            </div>
          </div>
        </section>

        <section className="section resume-section" id="resume" aria-labelledby="resume-heading">
          <div className="section-heading section-heading-row">
            <div>
              <EyebrowPill icon={<RadioTower size={14} aria-hidden="true" />}>Resume</EyebrowPill>
              <h2 id="resume-heading">Experience with founder-level scope.</h2>
            </div>
            <p>
              Purdue business and finance background, self-taught technical path, and more than a
              decade building software for real customers.
            </p>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.time}`}>
                <div className="timeline-date">{item.time}</div>
                <div className="timeline-body">
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="contact-section" id="contact">
        <FloatingSparkles
          count={42}
          glyphs={["*", "+", "."]}
          durationS={[10, 22]}
          sizeRange={[10, 22]}
        />
        <div className="contact-inner">
          <EyebrowPill icon={<Mail size={14} aria-hidden="true" />}>Contact</EyebrowPill>
          <h2>Let's build something useful.</h2>
          <p>
            Open to product roles where AI fluency, product taste, and hands-on shipping matter.
          </p>

          <div className="badge-grid" aria-label="Contact links">
            <CommunityBadge
              href={links.email}
              iconNode={<Mail className="community-svg" aria-hidden="true" />}
              title="Email"
              subtitle="mcadenhe@gmail.com"
            />
            <CommunityBadge
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              iconNode={<span className="community-initial" aria-hidden="true">in</span>}
              title="LinkedIn"
              subtitle="Product and work history"
            />
            <CommunityBadge
              href={links.github}
              target="_blank"
              rel="noreferrer"
              iconNode={<Code2 className="community-svg" aria-hidden="true" />}
              title="GitHub"
              subtitle="Code and shipped products"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

function MethodStep({ icon, title, body }: { icon: ReactElement; title: string; body: string }) {
  return (
    <article className="method-step">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

export default App;
