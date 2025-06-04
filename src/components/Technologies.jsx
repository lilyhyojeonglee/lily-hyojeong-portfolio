import { RiReactjsLine } from 'react-icons/ri';
import { BiLogoPhp } from 'react-icons/bi';
import { SiPostgresql } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa6';
import { TbBrandNextjs } from 'react-icons/tb';

export default function Technologies() {
  return (
    <div className=" pb-24">
      <h3 className=" my-20 text-center text-4xl ">Technologies</h3>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <div className="p-4">
          <RiReactjsLine className="text-6xl text-cyan-300" />
        </div>
        <div className="p-4">
          <BiLogoPhp className="text-6xl text-cyan-600 " />
        </div>
        <div className="p-4">
          <FaNodeJs className="text-6xl text-green-500" />
        </div>
        <div className="p-4">
          <TbBrandNextjs className="text-6xl" />
        </div>
        <div className="p-4">
          <SiPostgresql className="text-6xl text-sky-700" />
        </div>
        <div className="p-4">
          <SiMongodb className="text-6xl text-green-700" />
        </div>
      </div>
    </div>
  );
}
