import { EXPERIENCES } from '../constants';
import { motion } from 'motion/react';

function Experience() {
  return (
    <div className="pb-24">
      <h3 className="mb-20 text-center text-4xl">Experience</h3>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold">
                {experience.role}- <span>{experience.company}</span>{' '}
              </h3>

              <p className="mb-4 text-stone-400">{experience.description}</p>
              {experience.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="mr-1 rounded bg-stone-900 p-2">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
