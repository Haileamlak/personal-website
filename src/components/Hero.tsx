import heroImage from '@/assets/mee.jpg';

const Hero = () => {
  return (
    <section className="py-12 px-6">
      <div className="w-full max-w-[var(--content-max-width)] mx-auto">
        <div className="flex items-start gap-6 mb-8 ">
          <img
            src={heroImage}
            alt="Haileamlak Belachew"
            className="w-16 rounded-lg flex-shrink-0 object-cover"
          />
          <div>
            <h1 className="text-2xl font-normal mb-2">
              Haileamlak Belachew.
            </h1>
            <h2>Software Engineer.</h2>
          </div>
        </div>

        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>
            I'm currently building <a href="https://guzo-ai.web.app" target="_blank" rel="noopener noreferrer">Guzo AI</a>, a travel assistant  designed specifically for Ethiopia.
          </p>
          {/* <p>
            Outside of tech, I enjoy playing football and reading books. I believe in continuous learning and am always looking for ways to improve myself.
          </p> */}
            <div className="mt-4">
            <iframe
              src="https://guzo-ai.web.app"
              title="Guzo AI Preview"
              className="w-full h-96 rounded-lg border"
              loading="lazy"
            />
            <p className="text-sm mt-2">
              Preview of <a href="https://guzo-ai.web.app" target="_blank" rel="noopener noreferrer">Guzo AI</a>
            </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
