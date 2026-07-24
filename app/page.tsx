const projects = [
  {
    number: "01",
    title: "Creator Workflow Automation System",
    description:
      "An internal operations system built to organize creator collaborations, prepare content, schedule posts, manage captions, and reduce repetitive manual work.",
    contribution:
      "I contributed to building, maintaining, and improving the system. My work included workflow logic, browser automation, scheduling, database integration, testing, troubleshooting, and deployment support.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Playwright",
      "Supabase",
      "Vercel",
      "Telegram",
    ],
  },
  {
    number: "02",
    title: "Creator Mass Message Scheduling System",
    description:
      "A browser automation system built to schedule creator mass messages, set publishing dates and times, select recipient and exclusion lists, rotate messages without repetition, and maintain activity logs.",
    contribution:
      "I built and maintained core parts of the scheduling and message-selection workflow. My work included browser automation, AdsPower profile connections, CSV-based message rotation, recipient filtering, testing, troubleshooting, and reliability improvements.",
    technologies: [
      "Python",
      "Playwright",
      "AdsPower",
      "CSV",
      "Browser Automation",
    ],
  },
  {
    number: "03",
    title: "Trading Signal Monitoring System",
    description:
      "A monitoring workflow designed to track defined market signals and make important updates easier to review.",
    contribution:
      "I worked on the system structure, monitoring logic, automation flow, testing, documentation, troubleshooting, and maintenance.",
    technologies: [
      "Python",
      "Automation",
      "APIs",
      "GitHub",
      "Data Monitoring",
    ],
  },
];

const experience = [
  {
    title: "Creator Operations",
    description:
      "Experience supporting creator accounts through audience messaging, sales and retention, content workflows, campaign planning, reporting, and day-to-day account coordination.",
  },
  {
    title: "Content & Social Media Support",
    description:
      "Supported Instagram and X/Twitter workflows through content preparation, scheduling, caption review, profile checks, posting coordination, and keeping multiple accounts organized.",
  },
  {
    title: "Automation & Process Improvement",
    description:
      "Contributed to building, testing, maintaining, and improving automation workflows that reduced repetitive work and made internal processes more reliable.",
  },
  {
    title: "Technical Support",
    description:
      "Investigated workflow issues, tested fixes, documented problems, and supported teams using technical systems, browser automation, and internal tools.",
  },
  {
    title: "Account Management",
    description:
      "Coordinated schedules, priorities, deliverables, and communication across multiple accounts while helping work move forward without constant supervision.",
  },
  {
    title: "Team Coordination & Leadership",
    description:
      "Supported team members, reviewed progress, helped resolve operational problems, and kept projects moving from planning through completion.",
  },
];

const tools = [
  "Claude",
  "Cursor",
  "ChatGPT",
  "Playwright",
  "Next.js",
  "TypeScript",
  "GitHub",
  "Vercel",
  "Supabase",
  "Workflow Automation",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="border-b border-slate-200">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-bold tracking-tight">
            LIFE
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="hover:text-slate-950">
              About
            </a>
            <a href="#projects" className="hover:text-slate-950">
              Projects
            </a>
            <a href="#experience" className="hover:text-slate-950">
              Experience
            </a>
            <a href="#contact" className="hover:text-slate-950">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.4fr_0.6fr] md:py-32">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Technical Operations · Automation · Creator Operations
            </p>

            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Helping creator businesses scale through better systems and
              automation.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              I combine operations experience with technical problem-solving to
              improve workflows, automate repetitive tasks, and help teams work
              more efficiently.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
              >
                Contact Me
              </a>

              <a
                href="https://github.com/tayken05"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                View GitHub
              </a>

              <a
                href="/resume.pdf"
                className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex items-end">
            <div className="w-full rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">
                Areas of focus
              </p>

              <div className="mt-5 space-y-4 text-base font-medium">
                <p>Workflow automation</p>
                <p>Creator operations</p>
                <p>Technical troubleshooting</p>
                <p>Process improvement</p>
                <p>Team coordination</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-[0.4fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              About Me
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Operations experience supported by practical technical skills.
            </h2>

            <div className="mt-7 max-w-3xl space-y-5 text-lg leading-8 text-slate-600">
              <p>
                I work at the intersection of operations, automation, and
                technical support. My experience includes managing creator
                workflows, coordinating teams, solving operational problems,
                and improving the systems people rely on every day.
              </p>

              <p>
                I enjoy taking repetitive or confusing processes and turning
                them into clear, reliable workflows. I also use modern AI and
                development tools to research problems, build solutions, test
                ideas, and document how systems work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Selected Projects
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Systems built to solve real operational problems.
            </h2>
          </div>

          <div className="mt-14 space-y-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="grid overflow-hidden rounded-xl border border-slate-200 bg-white md:grid-cols-[0.8fr_1.2fr]"
              >
                <div className="overflow-hidden border-b border-slate-200 bg-slate-100 md:border-b-0 md:border-r">
                  {project.number === "01" ? (
                    <img
                      src="/s4s-dashboard.png"
                      alt="Creator workflow automation dashboard"
                      className="h-full min-h-72 w-full object-cover"
                    />
                  ) : project.number === "02" ? (
                    <img
                      src="/mass-message-automation.png"
                      alt="Mass message scheduling automation workflow"
                      className="h-full min-h-72 w-full object-cover"
                    />
                  ) : project.number === "03" ? (
                    <img
                      src="/trading-signal-bot.png"
                      alt="Trading signal monitoring and notification system"
                      className="h-full min-h-72 w-full object-cover"
                    />
                  ) : (
                    <div className="flex min-h-72 items-center justify-center p-8">
                      <div className="text-center">
                        <p className="text-5xl font-bold text-slate-300">
                          {project.number}
                        </p>
                        <p className="mt-4 text-sm font-medium text-slate-500">
                          Project screenshot will be added here
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-8 md:p-10">
                  <p className="text-sm font-semibold text-blue-700">
                    PROJECT {project.number}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight">
                    {project.title}
                  </h3>

                  <div className="mt-6">
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                      What it does
                    </p>
                    <p className="mt-2 leading-7 text-slate-600">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                      My contribution
                    </p>
                    <p className="mt-2 leading-7 text-slate-600">
                      {project.contribution}
                    </p>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              AI & Automation
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Tools I use to move work forward.
            </h2>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-y border-slate-200 bg-slate-950 text-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Experience
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Supporting people, processes, and technical systems.
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800 md:grid-cols-2">
            {experience.map((item) => (
              <div key={item.title} className="bg-slate-950 p-8">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Contact
          </p>

          <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
                Looking for someone who understands both operations and
                automation?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                I am open to opportunities involving creator operations,
                technical support, workflow automation, and process
                improvement.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href="mailto:just4life005@gmail.com"
                className="inline-flex rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
              >
                Send an Email
              </a>

              <a
                href="https://t.me/tayk05"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                Telegram @tayk05
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Life. All rights reserved.</p>

          <div className="flex gap-5">
            <a
              href="https://github.com/tayken05"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-950"
            >
              GitHub
            </a>
            <a href="#contact" className="hover:text-slate-950">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}