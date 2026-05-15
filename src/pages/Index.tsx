import { useEffect, useMemo, useState } from "react";
import { Github, Linkedin, Mail, Pause, Play, Volume2, VolumeX } from "lucide-react";
import heroImage from "@/assets/mee.jpg";
import guzoAiLogo from "@/assets/guzoailogo.png";
import websiteLogo from "@/assets/right-down.png";

type ViewMode = "projects" | "about";

const Index = () => {
  const [activeView, setActiveView] = useState<ViewMode>("projects");
  const [selectedProject, setSelectedProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const projects = useMemo(
    () => [
      {
        title: "Guzo AI",
        category: "TRAVEL • AI",
        summary: "Personalized trip assistant built for Ethiopian explorers.",
        link: "https://guzo-ai.web.app",
      },
      {
        title: "Conca",
        category: "AUTONOMOUS CONTENT",
        summary: "An autonomous content engine for modern growth teams.",
        link: "https://github.com/Haileamlak/conca",
      },
      {
        title: "MK Tube",
        category: "STREAMING PLATFORM",
        summary: "A video streaming app with content and channel workflows.",
        link: "https://github.com/Haileamlak/mk-tube-video-streaming",
      },
      {
        title: "Finote",
        category: "TRANSPORT TECH",
        summary: "Cross-country bus ticketing platform focused on Ethiopia.",
        link: "https://github.com/Haileamlak/finote",
      },
    ],
    []
  );

  useEffect(() => {
    if (!isPlaying || activeView !== "projects") return;

    const timer = window.setInterval(() => {
      setSelectedProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activeView, isPlaying, projects.length]);

  const activeProject = projects[selectedProject];
  const nextProject = projects[(selectedProject + 1) % projects.length];
  const experiences = [
    {
      company: "EagleLion System Technology",
      role: "Software Engineer",
      period: "Jul 2025 — Present",
    },
    {
      company: "A2SV (Africa to Silicon Valley)",
      role: "Head of Education",
      period: "Jan 2025 — Jun 2025",
    },
  ];

  const education = [
    {
      school: "Addis Ababa University",
      degree: "B.Sc. in Computer Science",
      period: "Jun 2021 — Jul 2024",
    },
  ];

  const skills = [
    "Python",
    "Go",
    "TypeScript",
    "JavaScript",
    "C++",
    "Java",
    "MongoDB",
    "MySQL",
    "Redis",
    "GCP",
    "Postman",
    "Figma",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsla(0,0%,100%,0.14),transparent_34%),radial-gradient(circle_at_82%_15%,hsla(0,0%,65%,0.14),transparent_30%),radial-gradient(circle_at_50%_100%,hsla(0,0%,0%,0.55),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-[hsl(0_0%_95%)]/20" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-4 pb-8 pt-6 sm:px-8">
        <header className="mb-6 flex items-start justify-between">
          <nav className="inline-flex rounded-full border border-[hsl(0_0%_30%/.75)] bg-[hsl(0_0%_10%/.72)] p-1 backdrop-blur-xl">
            <span className="inline-flex min-w-14 items-center justify-center rounded-full px-4 py-2 text-sm font-semibold tracking-[0.2em] text-[hsl(0_0%_8%)]">
              <img src={websiteLogo} alt="HB" className="h-8 w-8 rounded-lg object-cover opacity-90"></img>
            </span>
            {(["projects", "about"] as ViewMode[]).map((view) => (
              <button
                key={view}
                type="button"
                onClick={() => setActiveView(view)}
                className={`rounded-full px-5 py-2 text-sm capitalize tracking-wide transition ${
                  activeView === view
                    ? "bg-[hsl(0_0%_95%)] text-[hsl(0_0%_8%)] shadow-sm"
                    : "text-[hsl(0_0%_70%)] hover:text-[hsl(0_0%_95%)]"
                }`}
              >
                {view}
              </button>
            ))}
          </nav>
        </header>

        <main className="relative grid flex-1 items-center gap-8 pb-10 lg:grid-cols-[1.08fr_0.92fr]">
          <section className="relative h-[55vh] min-h-[360px] overflow-hidden rounded-[2rem] border border-[hsl(0_0%_24%/.8)] bg-[linear-gradient(160deg,hsla(0,0%,12%,0.84),hsla(0,0%,8%,0.8))] shadow-[0_20px_90px_hsla(0,0%,0%,0.45)]">
            <div className="room-slat-wall absolute inset-0 opacity-70" />
            <div className="absolute left-[13%] top-[58%] h-40 w-40 -translate-y-1/2 rounded-full border border-[hsl(0_0%_28%/.85)] bg-[linear-gradient(160deg,hsla(0,0%,24%,0.95),hsla(0,0%,17%,0.9))] shadow-[inset_0_10px_26px_hsla(0,0%,35%,0.2)]" />
            <div className="absolute left-[17%] top-[51%] h-5 w-[9rem] rounded-full bg-[hsl(0_0%_2%/.75)] blur-sm" />

            <div className="absolute right-[8%] top-[53%] h-[18rem] w-[18rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_52%,hsla(0,0%,90%,0.9),hsla(0,0%,35%,0.45)_56%,hsla(0,0%,20%,0.35)_72%,hsla(0,0%,6%,0.65)_86%,transparent)] p-4 shadow-[0_0_70px_hsla(0,0%,90%,0.2)]">
              <div className="relative h-full w-full overflow-hidden rounded-full border border-[hsl(0_0%_35%/.7)] bg-[hsl(0_0%_9%)]">
                {activeView === "about" ? (
                  <img src={heroImage} alt="Haileamlak Belachew" className="h-full w-full object-cover saturate-75 contrast-110" />
                ) : (
                  <div className="room-slat-wall absolute inset-0 opacity-75" />
                )}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_36%,hsla(0,0%,100%,0.22),transparent_60%)]" />
              </div>
            </div>

            {[0, 1, 2, 3, 4].map((item) => (
              <span
                key={item}
                className="floating-orb absolute rounded-full bg-[hsl(0_0%_98%/.85)]"
                style={{
                  width: `${10 + item * 5}px`,
                  height: `${10 + item * 5}px`,
                  left: `${12 + item * 18}%`,
                  top: `${18 + (item % 3) * 21}%`,
                  animationDelay: `${item * 0.8}s`,
                }}
              />
            ))}
          </section>

          <section
            className={`glass-card relative w-full max-w-[540px] rounded-[1.35rem] border border-[hsl(0_0%_28%/.75)] p-6 shadow-[0_18px_60px_hsla(0,0%,0%,0.45)] sm:p-8 ${
              activeView === "projects" ? "lg:justify-self-end" : "lg:justify-self-start"
            }`}
          >
            {activeView === "projects" ? (
              <>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.26em] text-[hsl(0_0%_64%)]">Selected Projects</p>
                <h1 className="display-serif text-5xl leading-[0.95] text-[hsl(0_0%_97%)] sm:text-6xl">{activeProject.title}</h1>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(0_0%_72%)]">{activeProject.category}</p>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-[hsl(0_0%_82%)]">{activeProject.summary}</p>
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-full bg-[hsl(0_0%_95%)] px-5 py-2 text-sm font-medium text-[hsl(0_0%_10%)] hover:bg-[hsl(0_0%_84%)]"
                >
                  Open Project
                </a>

                <div className="mt-8 border-t border-[hsl(0_0%_26%/.85)] pt-5">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[hsl(0_0%_62%)]">Up Next</p>
                  <p className="display-serif mt-2 text-2xl text-[hsl(0_0%_90%)]">{nextProject.title}</p>
                </div>

                <div className="mt-6 flex items-center gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedProject(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        index === selectedProject ? "bg-[hsl(0_0%_95%)]" : "bg-[hsl(0_0%_42%)] hover:bg-[hsl(0_0%_66%)]"
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-[hsl(0_0%_64%)]">About</p>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://linkedin.com/in/haileamlak"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[hsl(0_0%_32%)] p-2 text-[hsl(0_0%_94%)] hover:bg-[hsl(0_0%_18%)]"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="mailto:haileamlakbeat@gmail.com"
                      className="rounded-full border border-[hsl(0_0%_32%)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(0_0%_94%)] hover:bg-[hsl(0_0%_18%)]"
                    >
                      Resume
                    </a>
                  </div>
                </div>
                <h2 className="display-serif text-4xl text-[hsl(0_0%_97%)] sm:text-5xl">Hello!</h2>
                <p className="mt-4 text-sm leading-relaxed text-[hsl(0_0%_82%)]">
                  I’m Haileamlak Belachew, a software engineer from Ethiopia focused on building immersive, useful
                  digital products. I am currently building Guzo AI, a travel assistant designed for Ethiopia.
                </p>
                <div className="mt-5 space-y-2 text-sm text-[hsl(0_0%_76%)]">
                  <p>
                    <span className="font-semibold text-[hsl(0_0%_94%)]">Now:</span> Software Engineer at EagleLion
                    System Technology
                  </p>
                  <p>
                    <span className="font-semibold text-[hsl(0_0%_94%)]">Before:</span> Head of Education at A2SV
                  </p>
                </div>
                <p className="mt-6 text-sm text-[hsl(0_0%_78%)]">
                  <span className="font-semibold text-[hsl(0_0%_94%)]">Reach me at:</span>{" "}
                  <a href="mailto:haileamlakbeat@gmail.com" className="text-[hsl(0_0%_100%)] underline underline-offset-2">
                    haileamlakbeat@gmail.com
                  </a>
                </p>
                <div className="mt-6 flex items-center gap-3 text-[hsl(0_0%_95%)]">
                  <a
                    href="https://github.com/Haileamlak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[hsl(0_0%_32%)] p-2 hover:bg-[hsl(0_0%_18%)]"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:haileamlakbeat@gmail.com"
                    className="rounded-full border border-[hsl(0_0%_32%)] p-2 hover:bg-[hsl(0_0%_18%)]"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </>
            )}
          </section>
        </main>

        <section className="mb-8 grid gap-4 lg:grid-cols-3">
          <article className="glass-card rounded-2xl border border-[hsl(0_0%_28%/.75)] p-5 shadow-[0_12px_40px_hsla(0,0%,0%,0.25)]">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[hsl(0_0%_64%)]">Experience</h3>
            <div className="space-y-4">
              {experiences.map((experience) => (
                <div key={experience.company} className="border-l border-[hsl(0_0%_28%)] pl-3">
                  <p className="text-sm font-semibold text-[hsl(0_0%_94%)]">{experience.company}</p>
                  <p className="text-sm text-[hsl(0_0%_80%)]">{experience.role}</p>
                  <p className="text-xs text-[hsl(0_0%_60%)]">{experience.period}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-card rounded-2xl border border-[hsl(0_0%_28%/.75)] p-5 shadow-[0_12px_40px_hsla(0,0%,0%,0.25)]">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[hsl(0_0%_64%)]">Education</h3>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.school} className="border-l border-[hsl(0_0%_28%)] pl-3">
                  <p className="text-sm font-semibold text-[hsl(0_0%_94%)]">{item.school}</p>
                  <p className="text-sm text-[hsl(0_0%_80%)]">{item.degree}</p>
                  <p className="text-xs text-[hsl(0_0%_60%)]">{item.period}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-card rounded-2xl border border-[hsl(0_0%_28%/.75)] p-5 shadow-[0_12px_40px_hsla(0,0%,0%,0.25)]">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[hsl(0_0%_64%)]">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[hsl(0_0%_32%)] bg-[hsl(0_0%_13%/.85)] px-3 py-1 text-xs text-[hsl(0_0%_85%)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </section>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              className="rounded-full border border-[hsl(0_0%_35%)] bg-[hsl(0_0%_12%/.78)] p-2 text-[hsl(0_0%_95%)] backdrop-blur"
              aria-label={isPlaying ? "Pause animation" : "Play animation"}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
            {activeView === "about" && (
              <button
                type="button"
                onClick={() => setIsMuted((prev) => !prev)}
                className="rounded-full border border-[hsl(0_0%_35%)] bg-[hsl(0_0%_12%/.78)] p-2 text-[hsl(0_0%_95%)] backdrop-blur"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            )}
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-[hsl(0_0%_62%)]">Haileamlak Belachew</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
