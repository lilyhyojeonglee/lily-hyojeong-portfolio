import { EXPERIENCES } from '../constants';

function Experience() {
  return (
    <div className="pb-24">
      <h3 className="mb-20 text-center text-4xl">Experience</h3>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
            </div>
            <div className="w-full lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {experience.role}- <span>{experience.company}</span>{' '}
              </h3>

              <p className="mb-4 text-stone-400">{experience.description}</p>
              {experience.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="mr-1 rounded bg-stone-900 p-2">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies:
export default Experience;
