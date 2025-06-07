import { RiReactjsLine } from 'react-icons/ri';
import { BiLogoPhp } from 'react-icons/bi';
import { SiPostgresql } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa6';
import { TbBrandNextjs } from 'react-icons/tb';
import { motion } from 'motion/react';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

export default function Technologies() {
  return (
    <div className=" pb-24">
      <motion.h3
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 1.5 }}
        className=" my-20 text-center text-4xl "
      >
        Technologies
      </motion.h3>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-8"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <RiReactjsLine className="text-6xl text-cyan-300" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <BiLogoPhp className="text-6xl text-cyan-600 " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <FaNodeJs className="text-6xl text-green-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-4"
        >
          <TbBrandNextjs className="text-6xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.8)}
          className="p-4"
        >
          <SiPostgresql className="text-6xl text-sky-700" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <SiMongodb className="text-6xl text-green-700" />
        </motion.div>
      </motion.div>
    </div>
  );
}
