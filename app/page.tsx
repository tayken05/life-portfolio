import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "Trading Signal Monitoring System",
    description:
      "A Python command-line system that fetches market data through APIs, evaluates trading conditions, and generates structured candidate signals in a repeatable, single-pass workflow.",
    contribution:
      "I worked on the Python modules, API integration, signal-processing logic, configuration management, error handling, testing, and debugging.",
    challenges: [
      "Combining data from two timeframes into structured candidate signals.",
      "Handling missing data and API failures with offline regression tests.",
      "Managing environment variables safely, keeping credentials out of diagnostic output, and validating syntax and dependencies in CI.",
    ],
    technologies: [
      "Python",
      "REST APIs",
      "python-binance",
      "python-dotenv",
      "unittest",
      "GitHub Actions",
    ],
    validation: "13 automated tests • CI validated",
    github: "https://github.com/tayken05/trading-signal-monitoring-system",
    image: null,
  },
  {
    number: "02",
    title: "Workflow Automation Platform",
    description:
      "A full-stack workflow automation system designed to coordinate scheduled browser tasks, account workflows, job execution, and operational processes through a web dashboard and automated workers.",
    contribution:
      "I contributed to workflow logic, database-backed jobs, scheduling, browser automation, state management, API integrations, testing, debugging, deployment, and failure investigation.",
    challenges: [
      "Coordinating scheduled jobs, account assignments, and browser workers.",
      "Tracking job state in the database and investigating execution failures.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Playwright",
      "Supabase / PostgreSQL",
      "GitHub",
      "Vercel",
      "APIs",
    ],
    validation: null,
    github: null,
    image: {
      src: "/s4s-dashboard.png",
      alt: "Workflow platform dashboard showing account assignments and workflow state",
    },
  },
  {
    number: "03",
    title: "Browser Automation & Scheduling System",
    description:
      "A browser automation system built to execute recurring web-based tasks according to schedules, account assignments, rotation rules, and workflow conditions.",
    contribution:
      "I built and maintained core scheduling and rotation workflows, including browser-profile connections, duplicate prevention, activity logging, error handling, debugging, and QA testing.",
    challenges: [
      "Applying account assignments, schedule rules, and browser-profile connections consistently.",
      "Rotating tasks without repetition and logging execution for failure investigation.",
    ],
    technologies: [
      "Python",
      "Playwright",
      "AdsPower",
      "CSV",
    ],
    validation: null,
    github: null,
    image: {
      src: "/mass-message-automation.png",
      alt: "Browser scheduling interface with Python automation activity logs",
    },
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

      <section
        aria-labelledby="hero-title"
        className="border-b border-slate-200 bg-slate-50"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-12 lg:py-24">
          <div className="min-w-0">
            <h1
              id="hero-title"
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Taylor Awoesla Kennedy
            </h1>

            <p className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-blue-700 sm:text-3xl">
              Software Developer &amp; Automation Builder
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I build practical software, automation systems, and AI-assisted
              workflows using JavaScript, TypeScript, Python, Next.js, Playwright,
              APIs, and modern developer tools. My work focuses on solving real
              operational problems through reliable software, browser automation,
              workflow design, testing, and debugging.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
              >
                View My Work
              </a>

              <a
                href="https://github.com/tayken05"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
              >
                GitHub
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <h2 className="text-sm font-semibold text-slate-500">
              Areas of focus
            </h2>

            <ul className="mt-5 space-y-4 text-base font-medium text-slate-800">
              <li>Software Development</li>
              <li>Workflow Automation</li>
              <li>Browser Automation</li>
              <li>Backend &amp; API Integration</li>
              <li>Debugging &amp; Testing</li>
              <li>Technical Problem Solving</li>
            </ul>
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

      <section
        id="projects"
        aria-labelledby="projects-title"
        className="border-y border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Selected Projects
            </p>

            <h2
              id="projects-title"
              className="mt-4 text-3xl font-bold tracking-tight md:text-4xl"
            >
              Software and automation built to solve practical problems.
            </h2>
          </div>

          <div className="mt-14 space-y-8">
            {projects.map((project) => (
              <article
                key={project.title}
                aria-labelledby={`project-${project.number}`}
                className="grid overflow-hidden rounded-xl border border-slate-200 bg-white md:grid-cols-[0.8fr_1.2fr]"
              >
                <div className="relative min-h-72 overflow-hidden border-b border-slate-200 bg-slate-100 md:border-b-0 md:border-r">
                  {project.image ? (
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1152px) 40vw, 442px"
                      className="object-contain"
                    />
                  ) : (
                    <div className="flex h-full items-center p-6 sm:p-8">
                      <div className="w-full">
                        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                          Monitoring workflow
                        </p>
                        <ol className="mt-5 list-inside list-decimal space-y-4 text-sm font-semibold text-slate-800">
                          <li className="rounded-lg border border-slate-200 bg-white p-4">
                            Market data
                            <p className="mt-2 font-normal leading-6 text-slate-600">
                              Binance Futures REST API
                            </p>
                          </li>
                          <li className="rounded-lg border border-slate-200 bg-white p-4">
                            Signal evaluation
                            <p className="mt-2 font-normal leading-6 text-slate-600">
                              Levels, patterns, and timeframe checks
                            </p>
                          </li>
                          <li className="rounded-lg border border-slate-200 bg-white p-4">
                            Structured output
                            <p className="mt-2 font-normal leading-6 text-slate-600">
                              Candidate signals in the console
                            </p>
                          </li>
                        </ol>
                      </div>
                    </div>
                  )}
                </div>

                <div className="min-w-0 p-6 sm:p-8 md:p-10">
                  <p className="text-sm font-semibold text-blue-700">
                    PROJECT {project.number}
                  </p>

                  <h3
                    id={`project-${project.number}`}
                    className="mt-3 text-2xl font-bold tracking-tight"
                  >
                    {project.title}
                  </h3>

                  {project.validation && (
                    <p className="mt-4 inline-block rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
                      {project.validation}
                    </p>
                  )}

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

                  <div className="mt-6">
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                      Technical challenges
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 leading-7 text-slate-600 marker:text-slate-400">
                      {project.challenges.map((challenge) => (
                        <li key={challenge}>{challenge}</li>
                      ))}
                    </ul>
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

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 sm:w-auto"
                    >
                      View on GitHub
                    </a>
                  )}
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
