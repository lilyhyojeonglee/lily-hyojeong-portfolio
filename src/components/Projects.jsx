import { PROJECTS } from '../constants';

function Projects() {
  // title: "E-Commerce Website",
  //     image: project1,
  //     description:
  //       "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
  //     technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  //   },
  return (
    <div className="pb-24">
      <h3 className="my-20 text-center text-4xl">Projects</h3>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-16 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className=" rounded mb-6"
              />
            </div>
            <div className="w-full lg:w-3/4">
              <h3 className="mb-2 font-bold text-2xl">{project.title}</h3>
              {project.description && (
                <p className="mb-4 text-stone-400">{project.description}</p>
              )}

              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="mr-1 rounded bg-stone-900 p-2">
                  {tech}
                </span>
              ))}

              {project.github && <p>{project.github}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
