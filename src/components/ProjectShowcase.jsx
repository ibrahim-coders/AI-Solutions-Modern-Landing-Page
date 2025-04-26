import { PROJECTS } from '../constants';

const ProjectShowcase = () => {
  return (
    <section
      className="container mx-auto px-4 py-12 sm:px-6 lg:px-8"
      id="projects"
    >
      <h1 className="my-8 text-center text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        Projects
      </h1>
      <div className="space-y-12 sm:space-y-16">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:items-start ${
              index % 2 === 0 ? '' : 'md:flex-row-reverse'
            }`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={project.imageUrl}
                alt={project.alt || `Screenshot of ${project.title}`}
                className="h-64 w-full rounded-3xl object-cover shadow-lg sm:h-80 md:h-96"
                loading="lazy"
              />
            </div>
            <div className="w-full px-4 md:w-1/2 md:px-6">
              <div className="mb-2 text-sm font-medium text-emerald-700 sm:text-base">
                {project.year}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-emerald-950 sm:text-2xl md:text-3xl">
                {project.title}
              </h3>
              <p className="mb-4 text-base text-emerald-800 sm:text-lg md:text-xl">
                {project.description}
              </p>
              <p className="mb-4 text-sm text-emerald-700 sm:text-base">
                {project.details}
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
                <div className="rounded-lg bg-emerald-50 p-3 text-center">
                  <span className="text-sm font-medium text-emerald-950">
                    Investment
                  </span>
                  <p className="text-base text-orange-500 sm:text-lg">
                    {project.figures.investment}
                  </p>
                </div>
                <div className="rounded-lg bg-emerald-50 p-3 text-center">
                  <span className="text-sm font-medium text-emerald-950">
                    Duration
                  </span>
                  <p className="text-base text-orange-500 sm:text-lg">
                    {project.figures.duration}
                  </p>
                </div>
                <div className="rounded-lg bg-emerald-50 p-3 text-center">
                  <span className="text-sm font-medium text-emerald-950">
                    Outcome
                  </span>
                  <p className="text-base text-orange-500 sm:text-lg">
                    {project.figures.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
