import { useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Moon,
  Pause,
  Play,
  Sun,
} from "lucide-react";
import heroImage from "@/assets/mee.jpg";
import websiteLogo from "@/assets/right-down.png";

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [selectedProject, setSelectedProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const projects = useMemo(
    () => [
      {
        title: "Guzo AI",
        category: "TRAVEL • AI",
        summary: "Personalized travel assistant built for people exploring Ethiopia.",
        link: "https://drive.google.com/file/d/1FRjvPq7451wT8h8C-jS1m6xK29xbCn_i/view",
      },
      {
        title: "Conca",
        category: "AUTONOMOUS CONTENT • AI AGENT",
        summary: "An autonomous content engine for modern growth teams.",
        link: "https://github.com/Haileamlak/conca",
      },
      {
        title: "MK Tube",
        category: "STREAMING PLATFORM",
        summary: "A live and on-demand video streaming app.",
        link: "https://github.com/Haileamlak/mk-tube",
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

  const experiences = [
    {
      company: "EagleLion",
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
    "Flutter",
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

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      setSelectedProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isPlaying, projects.length]);

  const activeProject = projects[selectedProject];
  const nextProject = () => setSelectedProject((prev) => (prev + 1) % projects.length);
  const previousProject = () => setSelectedProject((prev) => (prev - 1 + projects.length) % projects.length);

  const palette = isDark
    ? {
        page: "bg-zinc-950 text-zinc-100",
        glow: "bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_34%),radial-gradient(circle_at_80%_12%,rgba(200,200,200,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(0,0,0,0.58),transparent_40%)]",
        card: "border-zinc-800/80 bg-zinc-900/70",
        textMain: "text-zinc-100",
        textBody: "text-zinc-300",
        textMuted: "text-zinc-400",
        button: "border-zinc-700 bg-zinc-900 text-zinc-100 hover:bg-zinc-800",
        primaryButton: "bg-zinc-100 text-zinc-900 hover:bg-zinc-300",
        tag: "border-zinc-700 bg-zinc-900/80 text-zinc-200",
      }
    : {
        page: "bg-zinc-100 text-zinc-900",
        glow: "bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.95),transparent_34%),radial-gradient(circle_at_80%_12%,rgba(210,210,210,0.45),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(180,180,180,0.18),transparent_40%)]",
        card: "border-zinc-300 bg-white/85",
        textMain: "text-zinc-900",
        textBody: "text-zinc-800",
        textMuted: "text-zinc-600",
        button: "border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100",
        primaryButton: "bg-zinc-900 text-zinc-100 hover:bg-zinc-700",
        tag: "border-zinc-300 bg-zinc-50 text-zinc-700",
      };

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${palette.page}`}>
      <div className={`pointer-events-none absolute inset-0 ${palette.glow}`} />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-4 pb-8 pt-6 sm:px-8">
        <header className="mb-8 flex items-center justify-between">
          <span className={`inline-flex items-center rounded-2xl border p-2 ${palette.card}`}>
            <img src={websiteLogo} alt="HB" className="h-8 w-8 rounded-md object-cover" />
          </span>
          <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${palette.button}`}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </header>

        <main className="grid gap-6 pb-8 lg:grid-cols-[1fr_1fr] lg:items-stretch">
          <section className={`rounded-[1.5rem] border p-6 shadow-[0_20px_80px_rgba(0,0,0,0.18)] lg:min-h-[430px] ${palette.card}`}>
            <p className={`mb-3 text-xs font-medium uppercase tracking-[0.24em] ${palette.textMuted}`}>About</p>
            <div className="mb-5 flex items-center gap-4">
              <img src={heroImage} alt="Haileamlak Belachew" className="h-16 w-16 rounded-2xl object-cover grayscale" />
              <div>
                <h1 className={`display-serif text-4xl leading-tight ${palette.textMain}`}>Haileamlak Belachew</h1>
                <p className={`text-sm ${palette.textMuted}`}>Software Engineer · Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <p className={`text-sm leading-relaxed ${palette.textBody}`}>
              I build immersive, useful digital products with a focus on AI and real user value. I’m currently building
              Guzo AI, a travel assistant designed specifically for Ethiopia.
            </p>
            <div className={`mt-5 space-y-2 text-sm ${palette.textBody}`}>
              <p>
                <span className={`font-semibold ${palette.textMain}`}>Now:</span> Software Engineer at EagleLion
              </p>
              <p>
                <span className={`font-semibold ${palette.textMain}`}>Before:</span> Head of Education at A2SV
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://linkedin.com/in/haileamlak"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full border p-2 transition ${palette.button}`}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/Haileamlak"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full border p-2 transition ${palette.button}`}
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a href="mailto:haileamlakbeat@gmail.com" className={`rounded-full border p-2 transition ${palette.button}`} aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </section>

          <section className={`relative rounded-[1.5rem] border p-6 shadow-[0_20px_80px_rgba(0,0,0,0.18)] lg:min-h-[430px] ${palette.card}`}>
            <p className={`mb-3 text-xs font-medium uppercase tracking-[0.24em] ${palette.textMuted}`}>Projects</p>
            <h2 className={`display-serif text-5xl leading-[0.95] ${palette.textMain}`}>{activeProject.title}</h2>
            <p className={`mt-4 text-xs font-semibold uppercase tracking-[0.2em] ${palette.textMuted}`}>{activeProject.category}</p>
            <p className={`mt-5 max-w-md text-sm leading-relaxed ${palette.textBody}`}>{activeProject.summary}</p>
            <a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 inline-flex rounded-full px-5 py-2 text-sm font-medium transition ${palette.primaryButton}`}
            >
              Open Project
            </a>


            <div className="mt-8 left-8 flex items-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setSelectedProject(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === selectedProject
                      ? isDark
                        ? "bg-zinc-200"
                        : "bg-zinc-800"
                      : isDark
                        ? "bg-zinc-600 hover:bg-zinc-400"
                        : "bg-zinc-300 hover:bg-zinc-500"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute top-6 right-6 flex items-center gap-2">
              <button type="button" onClick={previousProject} className={`rounded-full border p-2 transition ${palette.button}`} aria-label="Previous project">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsPlaying((prev) => !prev)}
                className={`rounded-full border p-2 transition ${palette.button}`}
                aria-label={isPlaying ? "Pause project autoplay" : "Play project autoplay"}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
              <button type="button" onClick={nextProject} className={`rounded-full border p-2 transition ${palette.button}`} aria-label="Next project">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </section>
        </main>

        <section className="mb-8 grid gap-4 lg:grid-cols-3">
          <article className={`rounded-2xl border p-5 shadow-[0_12px_40px_rgba(0,0,0,0.2)] ${palette.card}`}>
            <h3 className={`mb-4 text-xs font-medium uppercase tracking-[0.22em] ${palette.textMuted}`}>Experience</h3>
            <div className="space-y-4">
              {experiences.map((experience) => (
                <div key={experience.company} className="">
                  <p className={`text-sm font-semibold ${palette.textMain}`}>{experience.company}</p>
                  <p className={`text-sm ${palette.textBody}`}>{experience.role}</p>
                  <p className={`text-xs ${palette.textMuted}`}>{experience.period}</p>
                </div>
              ))}
            </div>
          </article>

          <article className={`rounded-2xl border p-5 shadow-[0_12px_40px_rgba(0,0,0,0.2)] ${palette.card}`}>
            <h3 className={`mb-4 text-xs font-medium uppercase tracking-[0.22em] ${palette.textMuted}`}>Education</h3>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.school} className="">
                  <p className={`text-sm font-semibold ${palette.textMain}`}>{item.school}</p>
                  <p className={`text-sm ${palette.textBody}`}>{item.degree}</p>
                  <p className={`text-xs ${palette.textMuted}`}>{item.period}</p>
                </div>
              ))}
            </div>
          </article>

          <article className={`rounded-2xl border p-5 shadow-[0_12px_40px_rgba(0,0,0,0.2)] ${palette.card}`}>
            <h3 className={`mb-4 text-xs font-medium uppercase tracking-[0.22em] ${palette.textMuted}`}>Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className={`rounded-full border px-3 py-1 text-xs ${palette.tag}`}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Index;
