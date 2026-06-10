import type { CSSProperties, ReactElement } from "react";
import type { IdeToken } from "performative-ui";
import {
  AsciiHero,
  Button,
  CommunityBadge,
  EyebrowPill,
  FloatingSparkles,
  MockIDE,
  NodeGraphBackground,
  Sparkle,
  StatusDot,
  WordRoll,
} from "performative-ui";
import {
  ArrowDown,
  AudioWaveform,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
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
  filename: string;
  tokens: IdeToken[];
};

const t = (c: string, cls: IdeToken["cls"] = ""): IdeToken => ({ c, cls });

const ideLineCount = (tokens: IdeToken[]) =>
  Math.max(7, tokens.map((token) => token.c).join("").split("\n").length);

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
    tagline: "A songwriting app that keeps lyrics and audio in one workspace.",
    role: "Founder, product builder, iOS app owner",
    accent: "#a7ff3d",
    tags: ["OpenAI", "ElevenLabs", "BS-RoFormer", "iOS", "Agents"],
    icon: <AudioWaveform aria-hidden="true" />,
    bullets: [
      "Designed around a personal creator workflow: lyrics, melodies, voice memos, and fragments should live together.",
      "Integrated AI to break writer's block, improve transcription alignment, and separate audio into stems.",
      "Used orchestration of AI agents to write the codebase and compress the path from idea to shipped app.",
    ],
    filename: "~/products/spit-notes/song-idea-workspace.ts",
    tokens: [
      t("// Spit Notes: AI-assisted songwriting workspace\n", "com"),
      t("const ", "key"),
      t("user ", ""),
      t("= ", ""),
      t('"songwriter with ideas split across Notes and Voice Memos"', "str"),
      t(";\n\n"),
      t("ship", "fn"),
      t("({\n"),
      t("  insight", "key"),
      t(": "),
      t('"song ideas arrive as fragments, not documents"', "str"),
      t(",\n"),
      t("  ai", "key"),
      t(": ["),
      t('"lyric unblocker"', "str"),
      t(", "),
      t('"forced alignment"', "str"),
      t(", "),
      t('"stem splitting"', "str"),
      t("],\n"),
      t("  product_call", "key"),
      t(": "),
      t('"keep words and recordings side by side"', "str"),
      t(",\n"),
      t("  build_mode", "key"),
      t(": "),
      t('"agent-orchestrated iOS development"', "str"),
      t("\n});\n"),
    ],
  },
  {
    id: "patient-glue",
    name: "Patient Glue",
    href: "https://patient-glue-static.pages.dev/",
    status: "Static case site",
    tagline: "Healthcare SMS automation for scheduling, reminders, waitlists, and follow-ups.",
    role: "Founder, roadmap owner, support lead",
    accent: "#19d7ff",
    tags: ["Healthcare", "SMS", "BERT", "EHR", "HIPAA"],
    icon: <Stethoscope aria-hidden="true" />,
    bullets: [
      "Founded a healthcare SaaS after seeing expensive, underpowered messaging inside day-to-day clinical operations.",
      "Owned the product loop from customer feedback to roadmap decisions, implementation, troubleshooting, and enablement.",
      "Used a BERT classifier to detect reschedule intent and route patients into an SMS rescheduling workflow.",
    ],
    filename: "~/products/patient-glue/reschedule-intent.ts",
    tokens: [
      t("// Patient Glue: productized healthcare communication\n", "com"),
      t("async function ", "key"),
      t("triageIncomingText", "fn"),
      t("(message: PatientSMS) {\n"),
      t("  const ", "key"),
      t("intent = "),
      t("await ", "key"),
      t("bert", "fn"),
      t(".classify(message.body);\n\n"),
      t("  if ", "key"),
      t("(intent === "),
      t('"reschedule"', "str"),
      t(") {\n"),
      t("    return ", "key"),
      t("startWorkflow", "fn"),
      t("("),
      t('"manual_sms_reschedule"', "str"),
      t(", message.patientId);\n"),
      t("  }\n\n"),
      t("  return ", "key"),
      t("routeToCareTeam", "fn"),
      t("(message);\n"),
      t("}\n"),
    ],
  },
  {
    id: "squatclock",
    name: "SquatClock",
    href: "https://squatclock.com",
    status: "Live product",
    tagline: "A movement-reminder product for desk workers who need simple squat breaks.",
    role: "Solo product builder",
    accent: "#ff7a2f",
    tags: ["Consumer", "Habits", "Health", "Web"],
    icon: <Clock3 aria-hidden="true" />,
    bullets: [
      "Turns a familiar health problem into a small, opinionated product loop.",
      "Uses a sharp single-purpose landing page and a direct behavior-change promise.",
      "Keeps the product surface intentionally lightweight so the habit is easy to adopt.",
    ],
    filename: "~/products/squatclock/habit-loop.ts",
    tokens: [
      t("// SquatClock: tiny product, obvious behavior\n", "com"),
      t("const ", "key"),
      t("cadenceMinutes = "),
      t("45", "num"),
      t(";\n"),
      t("const ", "key"),
      t("promise = "),
      t('"break free from your chair"', "str"),
      t(";\n\n"),
      t("schedule", "fn"),
      t("({\n"),
      t("  trigger", "key"),
      t(": "),
      t('"desk session"', "str"),
      t(",\n"),
      t("  action", "key"),
      t(": "),
      t('"squat break"', "str"),
      t(",\n"),
      t("  design_rule", "key"),
      t(": "),
      t('"no dashboard required"', "str"),
      t("\n});\n"),
    ],
  },
  {
    id: "gg-translator",
    name: "GG Translator",
    href: "https://gg-translator-static.pages.dev/",
    status: "Static archive",
    tagline: "A shipped desktop app that turns blunt multiplayer voice chat into constructive team comms.",
    role: "Product designer and builder",
    accent: "#ff4d8d",
    tags: ["OpenAI", "Desktop", "Voice", "Gaming"],
    icon: <Languages aria-hidden="true" />,
    bullets: [
      "Built around a memorable user problem: multiplayer teams lose games when communication gets hostile.",
      "Implemented voice capture, transformation, and playback as a real-time behavior layer.",
      "Packaged the concept with pricing, FAQ, installation constraints, and a clear product promise.",
    ],
    filename: "~/products/gg-translator/voice-filter.ts",
    tokens: [
      t("// GG Translator: communication UX for competitive games\n", "com"),
      t("const ", "key"),
      t("input = "),
      t('"RAGE into the machine"', "str"),
      t(";\n\n"),
      t("const ", "key"),
      t("output = "),
      t("await ", "key"),
      t("openai", "fn"),
      t(".rewrite({\n"),
      t("  tone", "key"),
      t(": "),
      t('"constructive teammate"', "str"),
      t(",\n"),
      t("  mode", "key"),
      t(": "),
      t('"voice or paste to chat"', "str"),
      t(",\n"),
      t("  privacy", "key"),
      t(": "),
      t('"local-first except API request"', "str"),
      t("\n});\n"),
    ],
  },
  {
    id: "peoples-voicemail",
    name: "People's Voicemail",
    href: "https://pvm-static.pages.dev/",
    status: "Static archive",
    tagline: "A voice-first community discussion platform for public voicemail boards.",
    role: "Founder and full-stack builder",
    accent: "#f5d547",
    tags: ["Voice", "Civic tech", "NLP", "Subscriptions"],
    icon: <MessageSquareText aria-hidden="true" />,
    bullets: [
      "Created a public voicemail box that worked like a voice-based community forum.",
      "Integrated transcription and language analysis to surface key phrases, sentiment, and constituent themes.",
      "Designed threaded reply mechanics, voter verification, reactions, and subscription pricing.",
    ],
    filename: "~/products/peoples-voicemail/civic-audio.ts",
    tokens: [
      t("// People's Voicemail: civic feedback as audio data\n", "com"),
      t("pipe", "fn"),
      t("(\n"),
      t("  inboundCall", "fn"),
      t("(),\n"),
      t("  transcribe", "fn"),
      t("(),\n"),
      t("  extractKeyPhrases", "fn"),
      t("(),\n"),
      t("  scoreSentiment", "fn"),
      t("(),\n"),
      t("  publishThread", "fn"),
      t("({ verifiedVoter: "),
      t("true", "key"),
      t(" })\n"),
      t(");\n"),
    ],
  },
  {
    id: "family-blessings-phone",
    name: "Family Blessings Phone",
    href: "https://family-blessings-phone-static.pages.dev/",
    status: "Static archive",
    tagline: "A phone-based gratitude journal for families to share what they are thankful for.",
    role: "Solo product builder",
    accent: "#66e2b3",
    tags: ["Voice", "Telecom", "Privacy", "Family"],
    icon: <PhoneCall aria-hidden="true" />,
    bullets: [
      "Converted a family blessings journal exercise into a simple phone-number product.",
      "Designed around low-friction participation: call, record, and listen without requiring app literacy.",
      "Added phone-number allowlists to keep private family audio private.",
    ],
    filename: "~/products/family-blessings/voice-journal.ts",
    tokens: [
      t("// Family Blessings Phone: no app install required\n", "com"),
      t("if ", "key"),
      t("("),
      t("allowedCaller", "fn"),
      t("(phoneNumber)) {\n"),
      t("  record", "fn"),
      t("("),
      t('"what are you grateful for?"', "str"),
      t(");\n"),
      t("  notifyFamily", "fn"),
      t("({ channel: "),
      t('"phone"', "str"),
      t(" });\n"),
      t("} else {\n"),
      t("  reject", "fn"),
      t("("),
      t('"private family journal"', "str"),
      t(");\n"),
      t("}\n"),
    ],
  },
  {
    id: "call-a-dev",
    name: "Call a Dev",
    href: "https://call-a-dev-static.pages.dev/",
    status: "Static archive",
    tagline: "A live programming-help marketplace for getting unstuck on code.",
    role: "Product designer and builder",
    accent: "#eaa8ff",
    tags: ["Marketplace", "Developer tools", "Voice", "Support"],
    icon: <Headphones aria-hidden="true" />,
    bullets: [
      "Framed a developer pain point as a direct service: stop pushing the ship date back and get live help.",
      "Designed two-sided marketplace language for people needing help and developers providing it.",
      "Built the positioning and interaction model around fast problem resolution.",
    ],
    filename: "~/products/call-a-dev/live-help.ts",
    tokens: [
      t("// Call a Dev: real-time code support marketplace\n", "com"),
      t("match", "fn"),
      t("({\n"),
      t("  maker", "key"),
      t(": "),
      t('"stuck on production code"', "str"),
      t(",\n"),
      t("  helper", "key"),
      t(": "),
      t('"available problem solver"', "str"),
      t(",\n"),
      t("  format", "key"),
      t(": "),
      t('"one live call"', "str"),
      t(",\n"),
      t("  outcome", "key"),
      t(": "),
      t('"ship date protected"', "str"),
      t("\n});\n"),
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
                  <WordRoll
                    words={["patients", "songwriters", "operators", "founders"]}
                    intervalMs={1800}
                    transitionMs={520}
                    gradient
                  />
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
              <EyebrowPill icon={<Code2 size={14} aria-hidden="true" />}>Selected work</EyebrowPill>
              <h2 id="work-heading">Shipped products, founder-built.</h2>
            </div>
          </div>

          <div className="product-grid">
            {projects.map((project, index) => (
              <details
                className="product-card"
                key={project.id}
                open={index === 0}
                style={{ "--project-accent": project.accent } as CSSProperties}
              >
                <summary>
                  <span className="project-icon">{project.icon}</span>
                  <span className="product-summary-copy">
                    <span className="project-status">
                      <StatusDot color={project.accent} /> {project.status}
                    </span>
                    <strong>{project.name}</strong>
                    <span>{project.tagline}</span>
                  </span>
                  <span className="summary-affordance">
                    Case file <ChevronDown size={16} aria-hidden="true" />
                  </span>
                </summary>

                <div className="product-detail">
                  <div className="product-meta">
                    <p>{project.role}</p>
                    <div className="tag-row" aria-label={`${project.name} tags`}>
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                      Visit product <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </div>

                  <MockIDE
                    filename={project.filename}
                    tokens={project.tokens}
                    charMs={[1, 4]}
                    thinkingLabel="case file"
                    style={{ "--ide-lines": ideLineCount(project.tokens) } as CSSProperties}
                  />

                  <ul className="case-bullets">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>
                        <CheckCircle2 size={16} aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
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
