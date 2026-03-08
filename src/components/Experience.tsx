import eaglelionLogo from '@/assets/eaglelion-logo.png';
import a2svLogo from '@/assets/a2sv-logo.png'
import guzoAiLogo from '@/assets/guzoailogo.png'
const Experience = () => {
  const experiences = [
    {
      title: "Founder & CEO",
      company: "Guzo AI",
      companyUrl: "https://guzo-ai.web.app",
      location: "Addis Ababa, Ethiopia",
      period: "Jan. 2026 - Present",
      current: true,
      logo: guzoAiLogo,
    },
    {
      title: "Software Engineer",
      company: "EagleLion System Technology",
      companyUrl: "https://eaglelionsystems.com",
      location: "Addis Ababa, Ethiopia",
      period: "Jul. 2025 - Jan. 2026",
      current: false,
      logo: eaglelionLogo,
    },
    {
      title: "Head of Education",
      company: "A2SV (Africa to Silicon Valley)",
      companyUrl: "https://a2sv.org",
      location: "Addis Ababa, Ethiopia",
      period: "Jan. 2025 - Jun. 2025",
      current: false,
      logo: a2svLogo
    }
  ];

  return (
    <section id="experience" className="py-8 px-6">
      <div className="w-full max-w-[var(--content-max-width)] mx-auto">
        <h2 className="text-base text-muted-foreground mb-6">Work</h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start justify-between gap-8">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <span className="text-foreground/50 text-sm mt-0.5 flex-shrink-0"><img src={exp.logo} alt="" className='w-5 h-5 rounded'/></span>
                <div className="min-w-0">
                  <a 
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-medium hover:text-accent transition-colors"
                  >
                    {exp.company}
                  </a>
                  <span className="text-muted-foreground ml-2">{exp.title}</span>
                </div>
              </div>
              <div className="text-muted-foreground text-sm flex-shrink-0">
                {exp.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
