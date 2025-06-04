import { EXPERIENCES } from '../constants';

function Experience() {
  return (
    <div className="pb-24">
      <h3 className="mb-20 text-center text-4xl">Experience</h3>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index}>
            <p>{experience.year}</p>
            <h3>{experience.role}</h3>
            <span>{experience.company}</span>
            <p>{experience.description}</p>
            {experience.technologies.map((tech, techIndex) => (
              <span key={techIndex}>{tech}</span>
            ))}
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
