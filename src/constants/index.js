import project1 from '../assets/projects/project-1.webp';
import project2 from '../assets/projects/project-2.webp';
import project3 from '../assets/projects/project-3.webp';
import project4 from '../assets/projects/project-4.webp';

export const HERO_CONTENT = `I’m a frontend-focused software engineer with full-stack capabilities, specializing in React, Next.js, and Tailwind CSS. With hands-on experience from both startups and structured training programs, I enjoy building products that are visually clean, technically scalable, and globally accessible. As the founder of UVA's Korean International Student Organization, I also bring leadership and community-building experience into every team I join.`;

export const ABOUT_TEXT = `Hi! I’m Hyojeong Lee (Lily) — a frontend developer who’s passionate about crafting user-friendly and inclusive interfaces. I’ve built projects ranging from a real estate proxy contract app for international students to a full-stack e-commerce platform. I recently completed an AWS DevOps bootcamp in Korea and have experience with modern tools like Vite, Next.js, Tailwind, and S3. I’m always looking to grow through collaboration, solve real-world problems through code, and build tech that empowers diverse communities. Outside of coding, I enjoy dance, content creation, and organizing student-led events.`;

export const EXPERIENCES = [
  {
    year: '2024',
    role: 'Frontend Developer (Bootcamp Trainee)',
    company: 'Bitcamp AWS DevOps Bootcamp (Seoul)',
    description: `Completed an intensive DevOps bootcamp covering AWS Lightsail/EC2, Docker, Jenkins, Kubernetes, CI/CD pipelines, and frontend tools. Built and deployed full-stack apps with Next.js, S3, and Vercel.`,
    technologies: ['AWS', 'Docker', 'Jenkins', 'Vercel', 'Next.js', 'S3'],
  },
  {
    year: '2023',
    role: 'Software Engineer & Team Lead',
    company: 'A-Round Entertainment',
    description: `Led a team of 20 engineers to build a dating app with user authentication, profile customization, and chat features. Managed development timelines and contributed frontend code using React Native.`,
    technologies: ['React Native', 'Firebase', 'Figma', 'Expo'],
  },
  {
    year: '2022',
    role: 'Frontend Developer',
    company: 'Mannazu (Personal Project)',
    description: `Developed an e-commerce site using Next.js, Tailwind CSS, and AWS S3 for image storage. Implemented login, admin panel, and responsive UI. Designed UI/UX using Balsamiq and Excalidraw.`,
    technologies: ['Next.js', 'Tailwind', 'S3', 'Balsamiq'],
  },
  {
    year: '2021–2024',
    role: 'Audio Visual Assistant',
    company: 'University of Virginia',
    description: `Supported classroom tech, set up AV systems, and worked directly with faculty to resolve issues. Built communication and hardware troubleshooting skills.`,
    technologies: ['Customer Support', 'Tech Setup', 'AV Systems'],
  },
];

export const PROJECTS = [
  {
    title: 'Mannazu E-Commerce Site',
    image: project1,
    description:
      'An online store featuring user login, image upload via AWS S3, admin panel, and responsive design using Tailwind and Next.js.',
    technologies: ['Next.js', 'Tailwind', 'AWS S3', 'NextAuth'],
  },
  {
    title: 'KISOConnect Feedback Board',
    image: project2,
    description:
      'An anonymous feedback board for international students, with future plans for admin panel and user auth.',
    technologies: ['Node.js', 'PostgreSQL', 'Express', 'React'],
  },
  {
    title: 'Real Estate Proxy App (Hometract)',
    image: project3,
    description:
      'A mobile app for foreigners in Korea to sign proxy contracts. Features ID verification, virtual accounts, e-signatures, and multilingual support.',
    technologies: ['SwiftUI', 'Firebase', 'KakaoPay', 'iOS'],
  },
  {
    title: 'Portfolio Website',
    image: project4,
    description:
      "This personal portfolio website you're looking at! Built with React, Vite, and Tailwind. Deployed via Vercel.",
    technologies: ['React', 'Vite', 'Tailwind', 'Vercel'],
  },
];

export const CONTACT = {
  address: 'Charlottesville, VA / Seoul, Korea',
  phoneNo: '+1 (123) 456-7890',
  email: 'lilyhyojeonglee@gmail.com',
};
