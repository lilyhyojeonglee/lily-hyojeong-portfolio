import profilepic from '../assets/IMG_70072.jpg';
import { HERO_CONTENT } from '../constants';
function Hero() {
  return (
    <div className="pb-4 lg:mb-36 ">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* Image on top in sm & md. Image on the left on lg enabled by flex-row-reverse*/}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8 ">
            {/* Ensures image in middle with padding in lg screen */}
            <img
              src={profilepic}
              alt="Profile"
              className="border border-stone-900 rounded-3xl"
            />
          </div>
        </div>
        {/* Text on top in sm & md. Text on the right on lg enabled by flex-row-reverse*/}
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-start mt-10 ">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl ">
              Lily Hyojeong Lee
            </h2>
            <span className="bg-gradient-to-r from-stone-300 bg-clip-text text-transparent text-3xl tracking-tight ">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter ">
              {HERO_CONTENT}
            </p>
            <a
              href="/Resume_Lily_Hyojeong_Lee_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-stone-300 text-stone-900 px-6 py-4 rounded-full text-sm mb-10 hover:bg-stone-400 "
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
