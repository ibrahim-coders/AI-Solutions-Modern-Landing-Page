import { TEAM_MEMBERS } from '../constants';

const Team = () => {
  return (
    <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8" id="team">
      <h2 className="my-8 text-center text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        Team
      </h2>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {TEAM_MEMBERS.map((member, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-center px-4 text-center sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <img
              src={member.image}
              alt={`Profile photo of ${member.name}`}
              className="mb-4 h-48 w-48 rounded-full object-cover shadow-lg sm:h-56 sm:w-56"
              loading="lazy"
            />
            <h3 className="mb-2 text-lg font-semibold text-emerald-950 sm:text-xl">
              {member.name}
            </h3>
            <p className="text-base text-emerald-700 sm:text-lg">
              {member.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
