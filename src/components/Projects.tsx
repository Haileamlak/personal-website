// import { ExternalLink } from "lucide-react";
// import shareIcon from '@/assets/share.png'

const Projects = () => {
  const projects = [
    {
      title: "Guzo AI",
      description: "Personalized travel assistant for people exploring Ethiopia. ",
      url: "https://drive.google.com/file/d/1FRjvPq7451wT8h8C-jS1m6xK29xbCn_i/view"
    },
    {
      title: "Conca",
      description: "Autonomous content engine for modern brands ",
      url: "https://github.com/Haileamlak/conca"
    },
    {
      title: "MK Tube",
      description: "Video streaming platform",
      url: "https://github.com/Haileamlak/mk-tube-video-streaming"
    },
    {
    title: "Finote",
      description: "Cross-country bus ticketing platform for Ethiopia",
      url: "https://github.com/Haileamlak/finote"
    }
  ];

  return (
    <section id="projects" className="py-8 px-6">
      <div className="w-full max-w-[var(--content-max-width)] mx-auto">
        <h2 className="text-base text-muted-foreground mb-6">Projects</h2>
        <div className="space-y-3">
          {projects.map((project, index) => (
            <div key={index} className="flex items-start gap-3">
              {/* <span className="text-foreground/50 text-sm mt-0.5">▪</span> */}
              <div className="flex items-baseline gap-2 flex-wrap">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  
                  {/* <span className="text-foreground/50 text-sm mt-0.5"><img src={shareIcon} alt="" className='w-4 h-4' /></span> */}
                  {project.title}
                </a>
                <span className="text-muted-foreground">{project.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
