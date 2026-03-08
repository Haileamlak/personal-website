const Achievements = () => {
  const achievements = [
    {
      title: "Won first place in a hackathon",
      description: "for building a live streaming platform"
    },
    {
      title: "Placed second place in a comptetitive programming contest",
      description: "organized by EtCPC"
    },
    {
      title: "Completed digital product development masterclass by UnternehmerTUM",
      description: "focused on design thinking, lean startup methods, and agile practices"
    },
    {
      title: "Earned the Google Cybersecurity Certificate,",
      description: "covering core security fundamentals"
    }
  ];

  return (
    <section id="achievements" className="py-8 px-6">
      <div className="w-full max-w-[var(--content-max-width)] mx-auto">
        <h2 className="text-base text-muted-foreground mb-6">Achievements & Certifications</h2>
        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-3">
              {/* <span className="text-foreground/50 text-sm mt-0.5">▪</span> */}
              <div>
                <span className="text-foreground font-medium">{achievement.title}</span>
                <span className="text-muted-foreground ml-2">{achievement.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
