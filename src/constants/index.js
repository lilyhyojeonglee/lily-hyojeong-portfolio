import project1 from '../assets/projects/project-1.webp';
import project2 from '../assets/projects/project-2.webp';
import project3 from '../assets/projects/project-3.webp';
import project4 from '../assets/projects/project-4.webp';
export const HERO_CONTENT = `I’m a frontend-leaning full-stack developer with practical experience in mobile, web, and DevOps. I’ve led teams, built real-world applications, and deployed full-stack systems using modern tools like React, TypeScript, Next.js, SwiftUI, Firebase, and AWS. With a strong foundation in both frontend engineering and backend architecture, I build user-first solutions that are secure, scalable, and efficient.`;

export const ABOUT_TEXT = `Hi, I’m Hyojeong Lee (Lily) — a computer science major and frontend-focused software engineer passionate about building accessible, user-centered apps. I've led development for a real estate contract app, deployed a personal website on my own server using Proxmox and Cloudflare, and contributed to full-stack systems in both startup and bootcamp environments. As founder of KISO, I also bring leadership and community-building skills. Whether it's React, SwiftUI, or AWS, I love using tech to bridge gaps and empower users.`;

export const EXPERIENCES = [
  {
    year: 'Dec 2023 – Apr 2024',
    role: 'Software Engineer & Manager',
    company: 'A-Round Entertainment (Remote)',
    description: `Led a 20-person engineering team building a dating app with real-time chat, premium subscriptions, and advanced matching. Developed 100+ UI screens and integrated Firebase-based chat and media upload. Improved delivery speed by 20% while working part-time.`,
    technologies: ['React Native', 'Firebase', 'Expo', 'Figma', 'Image-Picker'],
  },
  {
    year: 'Dec 2023 – Feb 2024',
    role: 'Software Development Intern',
    company: 'Atom Tech Solutions (Remote)',
    description: `Built RESTful APIs for business listings and reviews. Improved query efficiency by 30% with MongoDB indexing. Created custom DOM-based search & filter features, increasing usability by 40%.`,
    technologies: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
  },
  {
    year: 'June 2024 – July 2024',
    role: 'Frontend Developer',
    company: 'AWS DevOps Bootcamp (Bitcamp, Seoul)',
    description: `Built login, shopping, and admin pages in a full-stack TypeScript app. Used AWS S3 for uploads, secured auth with NextAuth, and deployed via Vercel.`,
    technologies: ['Next.js', 'TypeScript', 'AWS S3', 'NextAuth', 'Tailwind'],
  },
  {
    year: 'Dec 2021 – Feb 2025',
    role: 'Audio Visual Assistant',
    company: 'University of Virginia',
    description: `Managed AV systems for events, resolved tech issues in real-time, and trained new student staff on AV troubleshooting.`,
    technologies: ['AV Hardware', 'Customer Support', 'Team Training'],
  },
];

export const PROJECTS = [
  {
    title: 'Hometract Real Estate App',
    image: project1,
    description:
      'A SwiftUI mobile app for foreigners in Korea to manage property contracts. Includes social login, ID verification, virtual accounts, and e-signature.',
    technologies: ['SwiftUI', 'Firebase', 'KakaoPay', 'iOS'],
    notion: 'https://www.notion.so/hometract-details',
  },
  {
    title: 'Mannazu E-Commerce Site',
    image: project2,
    description:
      'An e-commerce app with image uploads via AWS S3, responsive UI, and admin panel. Designed with Balsamiq and Excalidraw.',
    technologies: ['Next.js', 'Tailwind', 'S3', 'NextAuth'],
    notion: 'https://www.notion.so/mannazu-details',
  },
  {
    title: 'Sublease.com',
    image: project3,
    description:
      'A subleasing platform with Google Maps API, PHP backend, secure auth, and Bootstrap UI. Features client-side validation and AJAX.',
    technologies: ['PHP', 'Bootstrap', 'JavaScript', 'Google Maps API'],
    notion: 'https://www.notion.so/sublease-details',
  },
  {
    title: 'Personal Website (leelily.com)',
    image: project4,
    description:
      "Built with React, Vite, and Tailwind CSS, and animated using Framer's Motion One. Deployed on a mini-PC using Proxmox and Ubuntu. Configured with Nginx Proxy Manager and Cloudflare for SSL and DNS.",
    technologies: ['Nginx', 'Ubuntu', 'Cloudflare', 'Proxmox'],
    notion: 'https://www.notion.so/portfolio-details',
  },
];

export const CONTACT = {
  address: 'Charlottesville, VA / Seoul, Korea',
  phoneNo: '+1 (434) 466-1848',
  email: 'hyojeonglee215@gmail.com',
};
